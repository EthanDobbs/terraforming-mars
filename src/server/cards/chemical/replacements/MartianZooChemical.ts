import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {CardType} from '../../../../common/cards/CardType';
import {IPlayer} from '../../../IPlayer';
import {CardName} from '../../../../common/cards/CardName';
import {CardResource} from '../../../../common/CardResource';
import {Card} from '../../Card';
import {CardRenderer} from '../../render/CardRenderer';
import {Resource} from '../../../../common/Resource';
import {all, played} from '../../Options';
import {Size} from '../../../../common/cards/render/Size';

export class MartianZooChemical extends Card implements IProjectCard {
  constructor() {
    super({
      cost: 8,
      tags: [Tag.ANIMAL, Tag.BUILDING],
      name: CardName.MARTIAN_ZOO_CHEMICAL,
      type: CardType.ACTIVE,
      resourceType: CardResource.ANIMAL,
      requirements: {cities: 2, all},

      metadata: {
        cardNumber: 'xR18',
        renderData: CardRenderer.builder((b) => {
          b.effect('When you play an Earth tag, place an animal here.', (eb) => {
            eb.earth(1, {played}).startEffect.animals(1);
          }).br;
          b.action('Gain 1M€ per animal here (max 5).', (eb) => {
            eb.empty().startAction.megacredits(1).slash().animals(1).text('[max 5]', Size.SMALL);
          });
        }),
        description: {
          text: 'Requires 2 city tiles in play.',
          align: 'left',
        },
      },
    });
  }

  public onCardPlayed(player: IPlayer, card: IProjectCard) {
    const count = player.tags.cardTagCount(card, Tag.EARTH);
    if (count > 0) {
      player.addResourceTo(this, count);
    }
  }

  public canAct(): boolean {
    return this.resourceCount > 0;
  }

  public action(player: IPlayer) {
    player.stock.add(Resource.MEGACREDITS, Math.min(this.resourceCount, 5), {log: true});
    return undefined;
  }
}
