import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {CardType} from '../../../../common/cards/CardType';
import {CardResource} from '../../../../common/CardResource';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Card} from '../../Card';
import {IPlayer} from '../../../IPlayer';
import {ICard} from '../../ICard';
import {SelectCard} from '../../../inputs/SelectCard';

export class VenusSurfaceDwellers extends Card implements IProjectCard {
  constructor() {
    super({
      name: CardName.VENUS_SURFACE_DWELLERS,
      type: CardType.ACTIVE,
      tags: [Tag.ANIMAL, Tag.VENUS],
      cost: 25,
      resourceType: CardResource.ANIMAL,
      requirements: {venus: 24},
      victoryPoints: {resourcesHere: {}, each: 2},

      metadata: {
        cardNumber: 'x269',
        renderData: CardRenderer.builder((b) => {
          b.action('Spend any resource from another one of your Venus cards to add an animal to this card.', (eb) => {
            eb.wild(1, {secondaryTag: Tag.VENUS}).startAction.resource(CardResource.ANIMAL);
          }).br;
          b.vpText('2 VP per animal on this card.').br;
        }),
        description: 'Requires 24% Venus or higher.',
      },
    });
  }
  public getOtherVenusResourceCards(player: IPlayer): Array<ICard> {
    return player.getResourceCards().filter((card) => card.tags.includes(Tag.VENUS) && card !== this && card.resourceCount > 0);
  }
  public canAct(player: IPlayer): boolean {
    return this.getOtherVenusResourceCards(player).length > 0;
  }
  public action(player: IPlayer): SelectCard<ICard> | undefined {
    return new SelectCard(
      'Select card to remove a resource from',
      'Remove resource',
      this.getOtherVenusResourceCards(player))
      .andThen(([card]) => {
        player.removeResourceFrom(card, 1, {log: true});
        player.addResourceTo(this, {qty: 1, log: true});
        return undefined;
      });
  }
}
