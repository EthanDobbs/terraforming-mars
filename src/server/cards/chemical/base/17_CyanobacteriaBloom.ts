import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';

export class CyanobacteriaBloom extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.CYANOBACTERIA_BLOOM,
      tags: [Tag.MICROBE],
      cost: 12,

      behavior: {
        global: {oxygen: 1},
        stock: {plants: {tag: Tag.MICROBE}},
      },

      metadata: {
        cardNumber: 'xB17',
        renderData: CardRenderer.builder((b) => {
          b.oxygen(1).nbsp;
          b.plants(1).slash().tag(Tag.MICROBE);
        }),
        description: 'Raise the oxygen 1 step and gain 1 plant for each microbe tag you have, including this.',
      },
    });
  }
}
