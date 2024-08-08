import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';
import {ActivePreludeCard} from '../../prelude2/ActivePreludeCard';
import {IProjectCard} from '../../IProjectCard';
import {CardResource} from '../../../../common/CardResource';

export class ProtistLifeforms extends ActivePreludeCard implements IProjectCard {
  constructor() {
    super({
      name: CardName.PROTIST_LIFEFORMS,
      tags: [Tag.MICROBE],
      victoryPoints: {resourcesHere: {}, per: 3},
      resourceType: CardResource.MICROBE,

      action: {
        addResourcesToAnyCard: {type: CardResource.MICROBE, count: 1},
      },

      behavior: {
        production: {plants: 1},
        drawCard: {count: 1, tag: Tag.MICROBE},
      },

      metadata: {
        cardNumber: 'xP23',
        renderData: CardRenderer.builder((b) => {
          b.action('Add a microbe to ANY card.', (eb) => {
            eb.empty().startAction.resource(CardResource.MICROBE).asterix();
          }).br;
          b.vpText('1 VP per 3 Microbes on this card.').br;
          b.production((pb) => pb.plants(1)).nbsp.cards(1, {secondaryTag: Tag.MICROBE});
        }),
        description: 'Increase your plant production 1 step and draw a card with a microbe tag.',
      },
    });
  }
}
