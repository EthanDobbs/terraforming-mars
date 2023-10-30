import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {PreludeCard} from '../prelude/PreludeCard';
import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';

export class JovianProjectBase extends PreludeCard implements IProjectCard{
  constructor() {
    super({
      name: CardName.JOVIAN_PROJECT_BASE,
      tags: [Tag.SPACE],

      behavior: {
        colonies: {buildColony: {}},
        drawCard: {count: 1, tag: Tag.JOVIAN}
      },

      metadata: {
        cardNumber: 'xP45',
        renderData: CardRenderer.builder((b) => {
          b.colonies(1).nbsp.cards(1, {secondaryTag: Tag.JOVIAN});
        }),
        description: 'Place a colony and draw a card with a Jovian tag.'
      },
    });
  }
}
