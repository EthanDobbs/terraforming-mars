import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';
import {ActivePreludeCard} from '../../prelude2/ActivePreludeCard';
import {IProjectCard} from '../../IProjectCard';
import {CardResource} from '../../../../common/CardResource';

export class ExperimentalOrganisms extends ActivePreludeCard implements IProjectCard {
  constructor() {
    super({
      name: CardName.EXPERIMENTAL_ORGANISMS,
      tags: [Tag.MICROBE, Tag.VENUS],
      victoryPoints: {resourcesHere: {}, per: 3},
      resourceType: CardResource.MICROBE,

      action: {
        addResourcesToAnyCard: {type: CardResource.MICROBE, count: 1},
      },

      behavior: {
        production: {plants: 1},
        global: {venus: 1},
      },

      metadata: {
        cardNumber: 'xP35',
        renderData: CardRenderer.builder((b) => {
          b.action('Add a microbe to ANY card.', (eb) => {
            eb.empty().startAction.resource(CardResource.MICROBE).asterix();
          }).br;
          b.vpText('1 VP per 3 Microbes on this card.').br;
          b.venus(1).production((pb) => pb.plants(1));
        }),
        description: 'Raise Venus 1 step and increase your plant production 1 step.',
      },
    });
  }
}
