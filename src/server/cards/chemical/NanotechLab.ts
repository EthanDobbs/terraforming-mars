import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';
import {ActivePreludeCard} from '../prelude2/ActivePreludeCard';
import {IProjectCard} from '../IProjectCard';
import { CardResource } from '../../../common/CardResource';

export class NanotechLab extends ActivePreludeCard implements IProjectCard{
  constructor() {
    super({
      name: CardName.NANOTECH_LAB,
      tags: [Tag.MICROBE, Tag.BUILDING],

      action: {
        or: {
          behaviors: [{
            stock: {plants: 1},
            title: 'Gain 1 plant',
          },
          {
            addResourcesToAnyCard: {type: CardResource.MICROBE, count: 2},
            title: 'Add 2 microbes to ANY card.',
          }],
          autoSelect: true,
        },
      },

      metadata: {
        cardNumber: 'xP29',
        renderData: CardRenderer.builder((b) => {
          b.action('Add 2 microbes to ANY card or gain 1 plant.', (eb) => {
            eb.empty().startAction.microbes(2).asterix().slash().plants(1);
          }).br;
        }),
      },
    });
  }
}
