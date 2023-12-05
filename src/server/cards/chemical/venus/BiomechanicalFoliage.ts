import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {IPlayer} from '../../../IPlayer';
import {played, digit} from '../../Options';

export class BiomechanicalFoliage extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.BIOMECHANICAL_FOLIAGE,
      tags: [Tag.SCIENCE],
      cost: 12,
      victoryPoints: 1,

      metadata: {
        cardNumber: 'x311',
        renderData: CardRenderer.builder((b) => {
          b.cards(1).nbsp.or().nbsp.plants(3, {played, digit}).colon().cards(3, {digit});
        }),
        description: 'Draw a card or draw 3 cards if you have 3 plant tags',
      },
    });
  }
  public override bespokePlay(player: IPlayer) {
    if (player.tags.count(Tag.PLANT) < 3) {
      player.drawCard(1);
    } else {
      player.drawCard(3);
    }
    return undefined;
  }
}
