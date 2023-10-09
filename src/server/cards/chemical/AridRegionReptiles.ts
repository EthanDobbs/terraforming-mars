import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardResource} from '../../../common/CardResource';
import {Resource} from '../../../common/Resource';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {all} from '../Options';
import { IPlayer } from '../../IPlayer';
import { GlobalParameter } from '../../../common/GlobalParameter';

export class AridRegionReptiles extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.ARID_REGION_REPTILES,
      tags: [Tag.ANIMAL],
      cost: 6,

      behavior: {
        decreaseAnyProduction: {type: Resource.PLANTS, count: 1},
      },

      resourceType: CardResource.ANIMAL,
      victoryPoints: {resourcesHere: 2},
      requirements: {oxygen: 5},

      metadata: {
        cardNumber: 'x058',
        renderData: CardRenderer.builder((b) => {
          b.effect('For every step you raise the temperature, add an animal to this card', (eb) => {
            eb.temperature(1).startEffect.animals(1);
          }).br;
          b.production((pb) => pb.minus().plants(1, {all})).br;
          b.vpText('1 VP for every 2 animals on this card.');
        }),
        description: {
          text: 'Requires 5% oxygen or higher. Decrease any plant production 1 step.',
          align: 'left',
        },
      },
    });
  }
  onGlobalParameterIncrease?(player: IPlayer, parameter: GlobalParameter, steps: number) {
    if (parameter === GlobalParameter.TEMPERATURE) {
      const qty = steps
      player.addResourceTo(this, {qty, log: true});
    }
  }
}
