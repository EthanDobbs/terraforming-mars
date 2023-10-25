import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {IPlayer} from '../../IPlayer';
import {CardResource} from '../../../common/CardResource';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {played} from '../Options';

export class InterplanetaryDiplomacy extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.INTERPLANETARY_DIPLOMACY,
      tags: [Tag.EARTH],
      cost: 6,

      resourceType: CardResource.DIPLOMACY,
      victoryPoints: {resourcesHere: {}, per: 3},
      requirements: {tr: 25},

      metadata: {
        cardNumber: 'x394',
        description: 'Requires 25 TR.',
        renderData: CardRenderer.builder((b) => {
          b.effect('When you play a Venus, Earth, or Jovian tag, including this, add a diplomacy resource to this card.', (be) => {
            be.venus(1, {played}).slash();
            be.earth(1, {played}).slash();
            be.jovian({played});
            be.startEffect.diplomacy(1);
          }).br;
          b.vpText('1 VP per 3 diplomacy resources on this card.');
        }),
      },
    });
  }
  public onCardPlayed(player: IPlayer, card: IProjectCard): void {
    const qty = player.tags.cardTagCount(card, [Tag.VENUS, Tag.EARTH, Tag.JOVIAN]);
    player.addResourceTo(this, {qty, log: true});
  }
}
