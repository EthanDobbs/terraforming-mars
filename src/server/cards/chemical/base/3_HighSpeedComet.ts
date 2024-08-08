import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {all, digit} from '../../Options';
import {Tag} from '../../../../common/cards/Tag';

export class HighSpeedComet extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.HIGH_SPEED_COMET,
      tags: [Tag.SPACE],
      cost: 27,
      behavior: {
        global: {temperature: 2},
        ocean: {},
        removeAnyPlants: 5,
      },

      metadata: {
        cardNumber: 'xB3',
        renderData: CardRenderer.builder((b) => {
          b.temperature(2);
          b.oceans(1).nbsp;
          b.minus().plants(5, {all, digit});
        }),
        description: 'Raise the temperature 2 steps and place an ocean tile. Remove up to 5 plants from any player.',
      },
    });
  }
}
