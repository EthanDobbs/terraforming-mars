import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {ActionCard} from '../ActionCard';
import {CardType} from '../../../common/cards/CardType';
import {CardResource} from '../../../common/CardResource';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class CeresMiningOperations extends ActionCard implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.CERES_MINING_OPERATIONS,
      tags: [Tag.JOVIAN, Tag.SPACE],
      cost: 30,
      resourceType: CardResource.ASTEROID,
      victoryPoints: {tag: Tag.JOVIAN},

      action: {
        or: {
          autoSelect: true,
          behaviors: [{
            title: 'Remove 1 asteroids to increase your steel production 1 step.',
            spend: {resourcesHere: 1},
            production: {steel: 1},
          },
          {
            title: 'Add 1 asteroid to this card',
            addResources: 1,
          }],
        },
      },

      metadata: {
        cardNumber: 'x033',
        renderData: CardRenderer.builder((b) => {
          b.action('Add 1 asteroid to this card.', (eb) => {
            eb.empty().startAction.asteroids(1);
          }).br;
          b.or().br;
          b.action('Remove 1 asteroid from this card to increase your steel production 1 step.', (eb) => {
            eb.asteroids(1).startAction.production((pb) => pb.steel(1));
          }).br;
          b.vpText('1 VP per Jovian tag you have.');
        }),
      },
    });
  }
}
