import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardResource} from '../../../../common/CardResource';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {IPlayer} from '../../../IPlayer';
import {SimpleDeferredAction} from '../../../deferredActions/DeferredAction';
import {SelectCard} from '../../../inputs/SelectCard';

export class FloaterDocks extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.FLOATER_DOCKS,
      tags: [Tag.VENUS, Tag.JOVIAN],
      cost: 17,
      victoryPoints: {resourcesHere: {}, per: 3},
      resourceType: CardResource.FLOATER,

      behavior: {
        production: {megacredits: 2},
      },

      metadata: {
        cardNumber: 'x257',
        renderData: CardRenderer.builder((b) => {
          b.effect('For every Venus or Jovian tag you play, add a floater to ANY card.', (eb) => {
            eb.tag(Tag.VENUS).slash().tag(Tag.JOVIAN).startEffect.resource(CardResource.FLOATER).asterix();
          }).br;
          b.vpText('1 VP per 3 floaters on this card.').br;
          b.production((pb) => pb.megacredits(2));
        }),
        description: 'Increase your M€ production 2 steps.',
      },
    });
  }
  public onCardPlayed(player: IPlayer, card: IProjectCard) {
    const resourceCount = player.tags.cardTagCount(card, [Tag.VENUS, Tag.JOVIAN]);
    const floaterCards = player.getResourceCards(CardResource.FLOATER);

    if (resourceCount === 0) {
      return undefined;
    }
    if (floaterCards.length === 1) {
      player.addResourceTo(this, resourceCount);
      return undefined;
    }
    for (let i = 0; i < resourceCount; i++) {
      player.game.defer(new SimpleDeferredAction(player, () => new SelectCard(
        'Select card to add 1 floater from Floater Docks (' + String(i + 1) + '/' + String(resourceCount) + ')',
        'Add floater',
        floaterCards).andThen(
        ([card]) => {
          player.addResourceTo(card, {log: true});
          return undefined;
        },
      )));
    }
    return undefined;
  }
}
