import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {ActionCard} from '../ActionCard';
import {CardType} from '../../../common/cards/CardType';
import {CardResource} from '../../../common/CardResource';
import {Resource} from '../../../common/Resource';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {all} from '../Options';
import {Size} from '../../../common/cards/render/Size';
import {IPlayer} from '../../IPlayer';
import {ICard} from '../ICard';

export class LargeAquaticMammals extends ActionCard implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.LARGE_AQUATIC_MAMMALS,
      tags: [Tag.ANIMAL],
      cost: 28,

      behavior: {
        decreaseAnyProduction: {type: Resource.PLANTS, count: 2},
      },

      action: {
        addResources: 1,
      },

      resourceType: CardResource.ANIMAL,
      victoryPoints: {resourcesHere: {}, each: 2},
      requirements: {temperature: 6},

      metadata: {
        cardNumber: 'x050',
        renderData: CardRenderer.builder((b) => {
          b.action('Add 1 animal to this card. THIS CARD MAY NOT CONTAIN MORE THAN 4 ANIMALS.', (eb) => {
            eb.empty().startAction.animals(1).asterix().nbsp.text('(max 4)', Size.SMALL, true);
          }).br;
          b.production((pb) => pb.minus().plants(2, {all})).br;
          b.vpText('2 VP for each animal on this card.');
        }),
        description: {
          text: 'Requires +6°C or higher. Decrease any plant production 2 steps.',
          align: 'left',
        },
      },
    });
  }
  public onResourceAdded(_player: IPlayer, card: ICard, _count: number) {
    if (card === this) {
      this.resourceCount = Math.min(this.resourceCount, 4);
    }
  }
}
