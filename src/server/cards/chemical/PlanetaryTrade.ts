import {IProjectCard} from '../IProjectCard';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {Card} from '../Card';
import {CardRenderer} from '../render/CardRenderer';
import { Tag } from '../../../common/cards/Tag';
import { IPlayer } from '../../IPlayer';
import { Resource } from '../../../common/Resource';

export class PlanetaryTrade extends Card implements IProjectCard {
  constructor() {
    super({
      cost: 10,
      name: CardName.PLANETARY_TRADE,
      type: CardType.EVENT,
      tags: [Tag.EARTH],

      metadata: {
        cardNumber: 'x319',
        renderData: CardRenderer.builder((b) => {
          b.megacredits(2).slash().diverseTag();
        }),
        description: 'Gain 2MC for each unique tag you have (not including the tags on this card).',
      },
    });
  }
  public override bespokePlay(player: IPlayer) {
    const distinctTagCount = player.tags.distinctCount('default');
    player.stock.add(Resource.MEGACREDITS, distinctTagCount, {log: true});
    return undefined;
  }
}
