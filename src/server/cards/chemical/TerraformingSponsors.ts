import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {PreludeCard} from '../prelude/PreludeCard';
import {IPlayer} from '../../IPlayer';
import {IProjectCard} from '../IProjectCard';
import {Resource} from '../../../common/Resource';
import {Tag} from '../../../common/cards/Tag';

export class TerraformingSponors extends PreludeCard implements IProjectCard{
  constructor() {
    super({
      name: CardName.TERRAFORMING_SPONSORS,
      tags: [Tag.EARTH],

      metadata: {
        cardNumber: 'xP05',
        renderData: CardRenderer.builder((b) => {
          b.effect('When you raise your TR, gain 2 M€.', (b) => {
            b.tr(1).startEffect.megacredits(2);
          }).br;
        }),
      },
    });
  }
  onIncreaseTerraformRating(player: IPlayer, cardOwner: IPlayer, steps: number): void {
    if(player.id === cardOwner.id) {
      cardOwner.stock.add(Resource.MEGACREDITS, steps * 2, {log: true});
    }
  }
}
