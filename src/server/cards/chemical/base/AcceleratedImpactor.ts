import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {all, digit} from '../../Options';
import {Tag} from '../../../../common/cards/Tag';

export class AcceleratedImpactor extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.ACCELERATED_IMPACTOR,
      tags: [Tag.SPACE],
      cost: 19,
      behavior: {
        global: {temperature: 2},
        removeAnyPlants: 6,
      },

      metadata: {
        cardNumber: 'x016',
        renderData: CardRenderer.builder((b) => {
          b.temperature(2).nbsp;
          b.minus().plants(6, {all, digit});
        }),
        description: 'Raise the temperature 2 steps. Remove up to 6 plants from any player.',
      },
    });
  }
}
