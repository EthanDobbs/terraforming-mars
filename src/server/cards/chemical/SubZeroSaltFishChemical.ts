import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {Resource} from '../../../common/Resource';
import {CardResource} from '../../../common/CardResource';
import {CardRenderer} from '../render/CardRenderer';
import {ActionCard} from '../ActionCard';
import {all} from '../Options';

export class SubZeroSaltFishChemical extends ActionCard implements IProjectCard {
  constructor() {
    super({
      cost: 5,
      tags: [Tag.ANIMAL],
      name: CardName.SUBZERO_SALT_FISH_CHEMICAL,
      type: CardType.ACTIVE,

      resourceType: CardResource.ANIMAL,
      victoryPoints: {resourcesHere: {}, per: 2},
      requirements: {temperature: -10},

      behavior: {
        decreaseAnyProduction: {type: Resource.PLANTS, count: 1},
      },

      action: {
        addResources: 1,
      },

      metadata: {
        cardNumber: 'xR17',
        renderData: CardRenderer.builder((b) => {
          b.action('Add 1 animal to this card.', (eb) => {
            eb.empty().startAction.animals(1);
          }).br;
          b.production((pb) => pb.minus().plants(1, {all})).br;
          b.vpText('1 VP per 2 animals on this card.');
        }),
        description: {
          text: 'Requires -6 C. Decrease any plant production 1 step.',
          align: 'left',
        },
      },
    });
  }
}
