import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardResource} from '../../../common/CardResource';
import {Resource} from '../../../common/Resource';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {all, played} from '../Options';
import { IPlayer } from '../../IPlayer';

export class AncientArthopods extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.ANCIENT_ARTHROPODS,
      tags: [Tag.SCIENCE, Tag.ANIMAL],
      cost: 14,

      behavior: {
        decreaseAnyProduction: {type: Resource.PLANTS, count: 1},
      },

      resourceType: CardResource.ANIMAL,
      victoryPoints: {resourcesHere: {}, per: 2},
      requirements: {oceans: 4},

      metadata: {
        cardNumber: 'x060',
        renderData: CardRenderer.builder((b) => {
          b.effect('When you play a science tag, including this, add an animal to this card', (eb) => {
            eb.science(1, {played}).startEffect.animals(1);
          }).br;
          b.production((pb) => pb.minus().plants(1, {all})).br;
          b.vpText('1 VP for every 2 animals on this card.');
        }),
        description: {
          text: 'Requires 4 oceans or more. Decrease any plant production 1 step.',
          align: 'left',
        },
      },
    });
  }
  public onCardPlayed(player: IPlayer, card: IProjectCard): void {
    const qty = player.tags.cardTagCount(card, Tag.SCIENCE);
    player.addResourceTo(this, {qty, log: true});
  }
}
