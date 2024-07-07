import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {IPlayer} from '../../../IPlayer';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {AddResourcesToCard} from '../../../deferredActions/AddResourcesToCard';
import {CardResource} from '../../../../common/CardResource';
import {digit} from '../../Options';

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
          b.resource(CardResource.ANIMAL).asterix().nbsp.or().nbsp;
          b.tag(Tag.ANIMAL, {amount: 3, digit}).colon().nbsp.resource(CardResource.ANIMAL, {amount: 3, digit}).asterix();
        }),
        description: 'Add an animal to ANOTHER card or add 3 animals to ANOTHER card if you have 3 animal tags.',
      },
    });
  }

  public override bespokePlay(player: IPlayer) {
    player.game.defer(new AddResourcesToCard(player, CardResource.ANIMAL, {count: player.tags.count(Tag.ANIMAL) >= 3 ? 3 : 1}));
    return undefined;
  }
}
