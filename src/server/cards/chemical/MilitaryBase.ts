import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';
import {TileType} from '../../../common/TileType';
import {AdjacencyBonus} from '../../ares/AdjacencyBonus';
import {ICardMetadata} from '../../../common/cards/ICardMetadata';

export class MilitaryBase extends Card implements IProjectCard {
  constructor(
    name = CardName.MILITARY_BASE,
    cost = 10,
    adjacencyBonus: AdjacencyBonus | undefined = undefined,
    metadata: ICardMetadata = {
      cardNumber: 'x211',
      renderData: CardRenderer.builder((b) => {
        b.production((pb) => pb.megacredits(2)).nbsp.cards(1).nbsp.tile(TileType.MILITARY_BASE, false);
      }),
      description: 'Increase your M€ production 2 steps, draw a card, and place this tile.'
    },
  ) {
    super({
      type: CardType.AUTOMATED,
      name,
      cost,
      tags: [Tag.BUILDING],
      victoryPoints: -1,
      adjacencyBonus,
      behavior: {
        production: {megacredits: 2},
        drawCard: 1,
        tile: {
          type: TileType.MILITARY_BASE,
          on: 'land',
          title: 'Select space for special tile',
          adjacencyBonus: adjacencyBonus,
        },
      },
      metadata,
    });
  }
}
