import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {IPlayer} from '../../../IPlayer';
import {CardName} from '../../../../common/cards/CardName';
import {CardResource} from '../../../../common/CardResource';
import {SimpleDeferredAction} from '../../../deferredActions/DeferredAction';
import {CardRenderer} from '../../render/CardRenderer';
import {SelectCard} from '../../../inputs/SelectCard';

export class MimicryArchaea extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.MIMICRY_ARCHAEA,
      tags: [Tag.SCIENCE, Tag.MICROBE],
      cost: 13,
      resourceType: CardResource.MICROBE,
      victoryPoints: {resourcesHere: {}, per: 3},

      behavior: {
        stock: {plants: 2},
      },

      metadata: {
        cardNumber: 'xB41',
        renderData: CardRenderer.builder((b) => {
          b.effect('When you play a plant, microbe, or an animal tag, including this, add a microbe to ANY card.', (eb) => {
            eb.tag(Tag.PLANT).slash().tag(Tag.ANIMAL).slash().tag(Tag.MICROBE).startEffect.resource(CardResource.MICROBE).asterix();
          }).br;
          b.vpText('1 VP per 3 Microbes on this card.').br;
          b.plants(2);
        }),
        description: 'Gain 2 plants.',
      },
    });
  }
  public onCardPlayed(player: IPlayer, card: IProjectCard) {
    const resourceCount = player.tags.cardTagCount(card, [Tag.ANIMAL, Tag.PLANT, Tag.MICROBE]);
    const microbeCards = player.getResourceCards(CardResource.MICROBE);

    if (resourceCount === 0) {
      return undefined;
    }
    if (microbeCards.length === 1) {
      player.addResourceTo(this, resourceCount);
      return undefined;
    }
    for (let i = 0; i < resourceCount; i++) {
      player.game.defer(new SimpleDeferredAction(player, () => new SelectCard(
        'Select card to add 1 microbe from Mimicry Archea (' + String(i + 1) + '/' + String(resourceCount) + ')',
        'Add microbe',
        microbeCards).andThen(
        ([card]) => {
          player.addResourceTo(card, {log: true});
          return undefined;
        },
      )));
    }
    return undefined;
  }
}
