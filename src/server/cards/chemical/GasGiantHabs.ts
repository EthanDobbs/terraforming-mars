import {IActionCard} from '../ICard';
import {Tag} from '../../../common/cards/Tag';
import {CardType} from '../../../common/cards/CardType';
import {CardResource} from '../../../common/CardResource';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {ActionCard} from '../ActionCard';

export class GasGiantHabs extends ActionCard implements IActionCard {
  constructor() {
    super({
      name: CardName.GAS_GIANT_HABS,
      type: CardType.ACTIVE,
      tags: [Tag.JOVIAN],
      cost: 10,

      resourceType: CardResource.FLOATER,
      victoryPoints: {resourcesHere: {}, per: 2},

      action: {
        spend: {megacredits: 2},
        addResourcesToAnyCard: {type: CardResource.FLOATER, tag: Tag.JOVIAN, count: 1, autoSelect: true},
      },

      requirements: {tag: Tag.JOVIAN, count: 2},
      metadata: {
        cardNumber: 'x329',
        renderData: CardRenderer.builder((b) => {
          b.action('Spend 2 M€ to add 1 floater to any Jovian card', (eb) => {
            eb.megacredits(2).startAction.floaters(1, {secondaryTag: Tag.JOVIAN});
          }).br;
          b.vpText('1 VP for every 2nd Floater on this card.').br;
          b.floaters(2);
        }),
        description: 'Requires 2 Jovian tags. Add 2 floaters to this card.',
      },
    });
  }
}
