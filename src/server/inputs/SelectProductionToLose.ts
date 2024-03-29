import {IPlayer} from '../IPlayer';
import {Units} from '../../common/Units';
import {InputResponse} from '../../common/inputs/InputResponse';
import {sum} from '../../common/utils/utils';
import { SelectWithInput } from './basicInputs/SelectWithInput';
import { ResourceSelection } from './selectables/ResourceSelection';
import { Message } from '../../common/logs/Message';
import { ALL_RESOURCES } from '@/common/Resource';
import { SelectAmount } from './basicInputs/SelectAmount';
import { PlayerSelection } from './selectables/PlayerSelection';

export class SelectProductionToLose extends SelectWithInput<Units> {
  constructor(
    title: string | Message, 
    player: IPlayer
  ) {
    super(
      new PlayerSelection(), 
      () => new SelectAmount('Select Amount', '' player.getCardCost(card), player.GetPaymentOptions(card))
    );
    this.cb = (card: IProjectCard) => {
      player.playCard(card);
      return undefined;
    }
  }

  public override toModel(): SelectProductionToLoseModel {
    return {
      title: this.title,
      buttonLabel: this.buttonLabel,
      type: 'productionToLose',
      payProduction: {
        cost: this.unitsToLose,
        units: this.player.production.asUnits(),
      },
    };
  }
  // TODO(kberg): Could merge this with SelectResources, though it
  // would take some work.
  public process(input: InputResponse, player: IPlayer) {
    if (!isSelectProductionToLoseResponse(input)) {
      throw new Error('Not a valid SelectProductionToLoseResponse');
    }
    if (!Units.isUnits(input.units)) {
      throw new Error('not a units object');
    }
    const array = Object.values(input.units);
    if (array.some((count) => count < 0)) {
      throw new Error('All units must be positive');
    }
    if (!player.production.canAdjust(Units.negative(input.units))) {
      throw new Error('You do not have those units');
    }
    if (sum(array) !== this.unitsToLose) {
      throw new Error(`Select ${this.unitsToLose} steps of production.`);
    }
    this.cb(input.units);
    return undefined;
  }
}
