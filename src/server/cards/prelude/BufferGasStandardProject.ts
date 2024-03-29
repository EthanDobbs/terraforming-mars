import {IPlayer} from '../../IPlayer';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {StandardProjectCard} from '../StandardProjectCard';
import {TRSource} from '../../../common/cards/TRSource';

export class BufferGasStandardProject extends StandardProjectCard {
  constructor() {
    super({
      name: CardName.BUFFER_GAS_STANDARD_PROJECT,
      cost: 16,
      metadata: {
        cardNumber: 'SP3',
        renderData: CardRenderer.builder((b) =>
          b.standardProject('Spend 16 M€ to increase your TR 1 step. Solo games only.', (eb) => {
            eb.megacredits(16).startAction.tr(1);
          }),
        ),
      },
    });
  }

  public override getTRSources(_player: IPlayer): TRSource {
    return {tr: 1}
  }

  actionEssence(player: IPlayer): void {
    player.increaseTerraformRating();
  }
}
