import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {IPlayer} from '../../../IPlayer';

export class IshtarComplex extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.ISHTAR_COMPLEX,
      tags: [Tag.VENUS],
      cost: 5,
      requirements: {venus: 8},

      behavior: {
        production: {megacredits: 2, energy: -1},
      },

      metadata: {
        cardNumber: 'x298',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.minus().energy(1).br;
            pb.plus().megacredits(2);
          });
          b.wild(1, {secondaryTag: Tag.VENUS}).slash().tag(Tag.VENUS).asterix();
        }),
        description: 'Requires Venus 8%. Decrease your energy production 1 step and raise your M€ production 2 steps. Add a resource to every Venus card that can contain resources.',
      },
    });
  }
  public override bespokePlay(player: IPlayer): undefined {
    for (const card of player.getResourceCards().filter((card) => card.tags.includes(Tag.VENUS))) {
      player.addResourceTo(card, {qty: 1, log: false});
    }
    return undefined;
  }
}
