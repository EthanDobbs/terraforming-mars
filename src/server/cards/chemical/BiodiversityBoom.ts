import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {IPlayer} from '../../IPlayer';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {digit, played} from '../Options';
import {AddResourcesToCard} from '../../deferredActions/AddResourcesToCard';
import {CardResource} from '../../../common/CardResource';

export class BiodiversityBoom extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.BIODIVERSITY_BOOM,
      cost: 14,
      victoryPoints: 1,

      metadata: {
        cardNumber: 'x383',
        renderData: CardRenderer.builder((b) => {
          b.animals(1).asterix().nbsp.or().nbsp;
          b.animals(3, {played, digit}).colon().nbsp.animals(3, {digit}).asterix();
        }),
        description: 'Add an animal to ANOTHER card or add 3 animals to another card of you have 3 animal tags.',
      },
    });
  }

  public override bespokePlay(player: IPlayer) {
    player.game.defer(new AddResourcesToCard(player, CardResource.ANIMAL, {count: player.tags.count(Tag.ANIMAL) >= 3 ? 3 : 1}));
    return undefined;
  }
}
