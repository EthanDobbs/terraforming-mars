import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {IPlayer} from '../../../IPlayer';
import {Tag} from '../../../../common/cards/Tag';
import {digit} from '../../Options';
import {Resource} from '../../../../common/Resource';

export class SpeculativeMarkets extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.SPECULATIVE_MARKETS,
      cost: 6,

      metadata: {
        cardNumber: 'xCE2',
        description: 'Increase your M€ production 2 steps or 3 steps if you have 3 Earth tags.',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.megacredits(2).nbsp.or().nbsp.tag(Tag.EARTH, {amount: 3, digit}).colon().megacredits(3));
        }),
      },
    });
  }

  public override bespokePlay(player: IPlayer) {
    if (player.tags.count(Tag.EARTH) < 3) {
      player.production.add(Resource.MEGACREDITS, 2, {log: true});
    } else {
      player.production.add(Resource.MEGACREDITS, 3, {log: true});
    }
    return undefined;
  }
}
