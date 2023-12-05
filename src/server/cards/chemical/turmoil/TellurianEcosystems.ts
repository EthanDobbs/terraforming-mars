import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardResource} from '../../../../common/CardResource';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {played} from '../../Options';
import {IPlayer} from '../../../IPlayer';
import {PartyName} from '../../../../common/turmoil/PartyName';

export class TellurianEcosystems extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.TELLURIAN_ECOSYSTEMS,
      tags: [Tag.EARTH, Tag.ANIMAL],
      cost: 10,

      resourceType: CardResource.ANIMAL,
      victoryPoints: {resourcesHere: {}, per: 2},
      requirements: {party: PartyName.GREENS},

      metadata: {
        cardNumber: 'x392',
        renderData: CardRenderer.builder((b) => {
          b.effect('When you play an Earth tag, including this, add an animal to this card', (eb) => {
            eb.earth(1, {played}).startEffect.animals(1);
          }).br;
          b.vpText('1 VP for every 2 animals on this card.');
        }),
        description: 'Requires that Greens are in power or that you have 2 delegates there.'
      },
    });
  }
  public onCardPlayed(player: IPlayer, card: IProjectCard): void {
    const qty = player.tags.cardTagCount(card, Tag.EARTH);
    player.addResourceTo(this, {qty, log: true});
  }
}
