import {IActionCard} from '../../ICard';
import {Tag} from '../../../../common/cards/Tag';
import {CardType} from '../../../../common/cards/CardType';
import {CardResource} from '../../../../common/CardResource';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {ActionCard} from '../../ActionCard';

export class JovianConstructionYard extends ActionCard implements IActionCard {
  constructor() {
    super({
      name: CardName.JOVIAN_CONSTRUCTION_YARD,
      type: CardType.ACTIVE,
      tags: [Tag.JOVIAN, Tag.SPACE],
      cost: 23,
      victoryPoints: 1,

      resourceType: CardResource.FLOATER,

      behavior: {
        production: {titanium: 1},
      },

      action: {
        addResourcesToAnyCard: {type: CardResource.FLOATER, tag: Tag.JOVIAN, count: 1, autoSelect: true},
      },

      metadata: {
        cardNumber: 'x331',
        renderData: CardRenderer.builder((b) => {
          b.action('Add 1 floater to any Jovian card', (eb) => {
            eb.empty().startAction.resource(CardResource.FLOATER, {secondaryTag: Tag.JOVIAN});
          }).br;
          b.effect('Floaters on this card mey be used as 3 M€ when paying for cards with Jovian tags.', (eb) => {
            eb.tag(Tag.JOVIAN).startEffect.resource(CardResource.FLOATER).equals().megacredits(3);
          }).br;
          b.production((pb) => pb.titanium(1));
        }),
        description: 'Increase your titanium production 1 step.',
      },
    });
  }
}
