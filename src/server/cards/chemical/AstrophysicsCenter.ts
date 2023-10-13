import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardResource} from '../../../common/CardResource';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {played} from '../Options';
import { IPlayer } from '../../IPlayer';

export class AstrophysicsCenter extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.ASTROPHYSICS_CENTER,
      tags: [Tag.SCIENCE, Tag.SPACE, Tag.BUILDING],
      cost: 18,

      resourceType: CardResource.ASTEROID,
      victoryPoints: {resourcesHere: {}},
      requirements: {tag: Tag.SPACE, count: 7},

      metadata: {
        cardNumber: 'x181',
        renderData: CardRenderer.builder((b) => {
          b.effect('When you play a science tag, including this, add an asteroid to this card', (eb) => {
            eb.science(1, {played}).startEffect.asteroids(1);
          }).br;
          b.vpText('1 VP for every asteroid on this card.');
        }),
        description: 'Requires that you have 7 space tags',
      },
    });
  }
  public onCardPlayed(player: IPlayer, card: IProjectCard): void {
    const qty = player.tags.cardTagCount(card, Tag.SCIENCE);
    player.addResourceTo(this, {qty, log: true});
  }
}
