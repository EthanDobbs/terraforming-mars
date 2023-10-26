import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardName} from '../../../common/cards/CardName';
import {CardType} from '../../../common/cards/CardType';
import {IPlayer} from '../../IPlayer';
import {CardRenderer} from '../render/CardRenderer';
import {ICard} from '../ICard';
import {CardResource} from '../../../common/CardResource';
import {Resource} from '../../../common/Resource';

export class FloatingTechInvestments extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.FLOATING_TECH_INVESTMENTS,
      cost: 3,

      behavior: {
        production: {megacredits: -1},
      },

      metadata: {
        cardNumber: 'x338',
        renderData: CardRenderer.builder((b) => {
          b.effect('When you gain a floater to ANY CARD, also gain 1 M€.', (eb) => {
            eb.floaters(1).asterix().startEffect.megacredits(1);
          }).br;
          b.production((pb) => pb.minus().megacredits(1))
        }),
        description: 'Decrease your M€ production 1 step.'
      },
    });
  }

  public onResourceAdded(player: IPlayer, card: ICard, count: number) {
    if (card.resourceType === CardResource.FLOATER) {
      player.stock.add(Resource.MEGACREDITS, count, {log: true});
    }
  }
}
