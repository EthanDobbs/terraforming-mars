import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {ActionCard} from '../../ActionCard';
import {CardType} from '../../../../common/cards/CardType';
import {CardResource} from '../../../../common/CardResource';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';

export class PanSolarMining extends ActionCard implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.PAN_SOLAR_MINING,
      tags: [Tag.JOVIAN, Tag.SPACE],
      cost: 36,
      requirements: [{tag: Tag.VENUS}, {tag: Tag.EARTH}, {tag: Tag.JOVIAN}],
      resourceType: CardResource.ASTEROID,
      victoryPoints: 3,

      behavior: {
        addResources: 1,
      },

      action: {
        or: {
          autoSelect: true,
          behaviors: [{
            title: 'Spend 1 asteroid to raise your titanium production 1 step.',
            spend: {resourcesHere: 1},
            production: {titanium: 1},
          },
          {
            title: 'Add 1 asteroid to ANY card',
            addResourcesToAnyCard: {type: CardResource.ASTEROID, count: 1}
          }],
        },
      },

      metadata: {
        cardNumber: 'x254',
        renderData: CardRenderer.builder((b) => {
          b.action('Add 1 asteroid to ANY card.', (eb) => {
            eb.empty().startAction.asteroids(1).asterix();
          }).br;
          b.or().br;
          b.action('Remove 1 asteroid from this card to raise your titanium production 1 step.', (eb) => {
            eb.asteroids(1).startAction.production((pb) => pb.titanium(1));
          }).br;
          b.asteroids(1);
        }),
        description: 'Requires an Earth tag, a Venus tag, and a Jovian tag. Add an asteroid to this card.'
      },
    });
  }
}
