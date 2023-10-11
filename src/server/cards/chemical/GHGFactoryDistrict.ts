import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import { Tag } from '../../../common/cards/Tag';
import { TileType } from '../../../common/TileType';
import { AdjacencyBonus } from '../../ares/AdjacencyBonus';
import { ICardMetadata } from '../../../common/cards/ICardMetadata';
import { digit } from '../Options';

export class GHGFactoryDistrict extends Card implements IProjectCard {
  constructor(
    name = CardName.GHG_FACTORY_DISTRICT,
    cost = 24,
    adjacencyBonus: AdjacencyBonus | undefined = undefined,
    metadata: ICardMetadata = {
      cardNumber: 'x158',
      renderData: CardRenderer.builder((b) => {
        b.production((pb) => {
          pb.minus().energy(2).br;
          pb.plus().heat(7, {digit});
        });
        b.nbsp.tile(TileType.GHG_FACTORY_DISTRICT, false);
      }),
      description: 'Lower your energy production 2 steps, raise your heat production 7 steps, and place this tile.'
    },
  ) {
    super({
      type: CardType.AUTOMATED,
      name,
      cost,
      tags: [Tag.BUILDING],
      adjacencyBonus,
      behavior: {
        production: {energy: -2, heat: 7},
        tile: {
          type: TileType.GHG_FACTORY_DISTRICT,
          on: 'land',
          title: 'Select space for special tile',
          adjacencyBonus: adjacencyBonus,
        },
      },
      metadata,
    });
  }
}
