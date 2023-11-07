import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {CardType} from '../../../common/cards/CardType';
import {IPlayer} from '../../IPlayer';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Card} from '../Card';
import {all} from '../Options';

export class SpacePortColonyChemical extends Card implements IProjectCard {
  constructor() {
    super({
      cost: 27,
      tags: [Tag.SPACE],
      name: CardName.SPACE_PORT_COLONY_CHEMICAL,
      type: CardType.AUTOMATED,

      requirements: {colonies: 1},
      victoryPoints: {colonies: {colonies: {}}, all, per: 2},

      behavior: {
        colonies: {
          buildColony: {},
          addTradeFleet: 1,
        },
      },

      metadata: {
        cardNumber: 'xR40',
        renderData: CardRenderer.builder((b) => {
          b.colonies(1).asterix().nbsp.tradeFleet().br;
          b.vpText('1VP per 2 colonies in play.');
        }),
        description: 'Requires a colony. Place a colony. Gain 1 Trade Fleet.',
      },
    });
  }

  public override getVictoryPoints(player: IPlayer) {
    let coloniesCount = 0;
    player.game.colonies.forEach((colony) => {
      coloniesCount += colony.colonies.length;
    });
    return Math.floor(coloniesCount / 2);
  }
}