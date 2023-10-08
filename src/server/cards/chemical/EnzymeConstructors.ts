import {IProjectCard} from '../IProjectCard';
import {IActionCard} from '../ICard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {IPlayer} from '../../IPlayer';
import {CardResource} from '../../../common/CardResource';
import {CardName} from '../../../common/cards/CardName';
import {Resource} from '../../../common/Resource';
import {CardRenderer} from '../render/CardRenderer';
import {played} from '../Options';

export class EnzymeConstructors extends Card implements IActionCard, IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.ENZYME_CONSTRUCTORS,
      cost: 12,
      tags: [Tag.SCIENCE, Tag.MICROBE],
      resourceType: CardResource.MICROBE,

      behavior: {
        addResources: {tag: Tag.MICROBE},
      },

      metadata: {
        cardNumber: 'x047',
        renderData: CardRenderer.builder((b) => {
          b.action('Spend 1 microbe from here to gain 1 M€ from each microbe here, INCLUDING THE PAID MICROBE. Max 5.', (eb) => {
            eb.microbes(1).startAction.megacredits(1).slash().microbes(1);
            eb.asterix().text('max 5');
          }).br;
          b.microbes(1).slash().microbes(1, {played});
        }),
        description: 'Add 1 mircrobe here for every microbe tag you have, including this.',
      },
    });
  }

  public canAct(): boolean {
    return this.resourceCount > 0;
  }

  public action(player: IPlayer) {
    player.stock.add(Resource.MEGACREDITS, Math.min(5, this.resourceCount--));
    return undefined;
  }
}
