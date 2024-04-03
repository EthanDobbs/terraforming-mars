import {InputResponse, SelectAmountResponse, SelectMultipleAmountsResponse} from '../../../common/inputs/InputResponse';
import { SelectAmount } from './SelectAmount';
import { IPlayer } from '@/server/IPlayer';
import { SelectionHandler } from '../selectables/SelectionHandler';
import { SelectAmountModel, SelectMultipleAmountsModel } from '@/common/models/PlayerInputModel';
import { PlayerInputType } from '@/common/input/PlayerInputType';
import { BasePlayerInput, PlayerInput } from '@/server/PlayerInput';

export class SelectMultipleAmounts<T> extends BasePlayerInput<Map<T, number>> {
  public options: Map<T, SelectAmount>;
  constructor(
    public readonly selectionHandler: SelectionHandler<T>,
    public readonly sum: number,
    eachOption: (amount: number, option: T) => PlayerInput | undefined,
  ) {
    super(
      PlayerInputType.MULTIPLE_AMOUNTS, 
      selectionHandler.title, 
    );
    this.options = new Map(selectionHandler.options.map((option) => [option, 
      new SelectAmount(selectionHandler.GetOptionName(option), undefined, 0, sum).andThen((amount) => eachOption(amount, option))
    ]));
    this.buttonLabel = selectionHandler.buttonLabel;
  }
  
  public override toModel(_player: IPlayer): SelectMultipleAmountsModel {
    let map = new Map<string, SelectAmountModel>();
    this.options.forEach((input, option) => {
      map.set(this.selectionHandler.GetOptionName(option), input.toModel());
    })
    return {
      title: this.title,
      buttonLabel: this.buttonLabel,
      type: PlayerInputType.MULTIPLE_AMOUNTS,
      options: map,
      sum: this.sum,
    }
  }

  public override process(response: InputResponse, player: IPlayer) {
    let typedResponse = this.ResponseAsType<SelectMultipleAmountsResponse>(response);
    if (typedResponse.responses.size !== this.options.size) {
      throw new Error('Incorrect options provided');
    }
    let total = 0;
    typedResponse.responses.forEach((amount) => {
      total += amount;
    })
    if (total !== this.sum) {
      throw new Error('Incorrect amounts provided');
    }
    let map = new Map<T, number>()
    typedResponse.responses.forEach((amount, key) => {
      const option = this.selectionHandler.GetOptionfromName(key);
      map.set(option, amount)
      const input = this.options.get(option);
      if (input) {
        player.runInput({type: PlayerInputType.AMOUNT, amount: amount} as SelectAmountResponse, input);
      } else {
        // this should never happen?
        throw new Error('Invalid Response');
      }
    })
    return this.cb(map);
  }
}
