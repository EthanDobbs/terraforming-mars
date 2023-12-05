import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';
import {ActivePreludeCard} from '../../prelude2/ActivePreludeCard';
import {IProjectCard} from '../../IProjectCard';
import {CardResource} from '../../../../common/CardResource';
import {AltSecondaryTag} from '../../../../common/cards/render/AltSecondaryTag';
import {IPlayer} from '../../../IPlayer';
import {PlayerInput} from '../../../PlayerInput';

export class FloatingCity extends ActivePreludeCard implements IProjectCard{
  constructor() {
    super({
      name: CardName.FLOATING_CITY,
      tags: [Tag.VENUS],
      victoryPoints: {resourcesHere: {}, per: 3},
      resourceType: CardResource.FLOATER,

      action: {
        addResourcesToAnyCard: {type: CardResource.FLOATER, count: 2},
      },

      metadata: {
        cardNumber: 'xP42',
        renderData: CardRenderer.builder((b) => {
          b.action('Add 2 floaters to ANY card.', (eb) => {
            eb.empty().startAction.floaters(2).asterix();
          }).br;
          b.vpText('1 VP per 3 Floaters on this card.').br;
          b.cards(2, {secondaryTag: AltSecondaryTag.FLOATER})
        }),
        description: 'Draw 2 cards with floater icons.'
      },
    });
  }
  public override bespokePlay(player: IPlayer): PlayerInput | undefined {
    const found: Array<CardName> = [];
    player.game.projectDeck.drawPile.forEach((card) => {
      const string = card.metadata.renderData !== undefined ? JSON.stringify(card.metadata.renderData) : '';
      if (string.includes('floaters') || card.requirements?.some((req) => req.floaters !== undefined)) {
        found.push(card.name);
      }
      return undefined;
    })
    player.drawCard(2, {
      include: (card) => found.includes(card.name),
    });
    return undefined;
  }
}
