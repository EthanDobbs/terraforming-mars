import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {played} from '../Options';
import {IPlayer} from '../../IPlayer';
import {Resource} from '../../../common/Resource';

export class BiodiversityGrants extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.BIODIVERSITY_GRANTS,
      tags: [Tag.EARTH],
      cost: 9,

      behavior: {
        production: {megacredits: 2},
      },

      metadata: {
        cardNumber: 'x200',
        renderData: CardRenderer.builder((b) => {
          b.effect('When you play an animal tag, raise your MC production 1 step.', (eb) => {
            eb.animals(1, {played}).startEffect.production((pb) => pb.megacredits(1));
          }).br;
          b.production((pb) => pb.megacredits(2))
        }),
        description: 'Raise your MC production 2 steps.',
      },
    });
  }
  public onCardPlayed(player: IPlayer, card: IProjectCard): void {
    const qty = player.tags.cardTagCount(card, Tag.ANIMAL);
    player.production.add(Resource.MEGACREDITS, qty);
  }
}
