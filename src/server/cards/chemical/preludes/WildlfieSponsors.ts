import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {PreludeCard} from '../../prelude/PreludeCard';
import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {IPlayer} from '../../../IPlayer';
import {PlayerInput} from '../../../PlayerInput';
import {AltSecondaryTag} from '../../../../common/cards/render/AltSecondaryTag';

export class WildlifeSponsors extends PreludeCard implements IProjectCard{
  constructor() {
    super({
      name: CardName.WILDLIFE_SPONSORS,
      tags: [Tag.ANIMAL],

      behavior: {
        production: {megacredits: 3},
      },

      metadata: {
        cardNumber: 'xP10',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.megacredits(3)).nbsp.cards(2, {secondaryTag: AltSecondaryTag.ANIMAL}).asterix();
        }),
        description: 'Increase your M€ production 3 steps and draw 2 cards with animal icons or tags.'
      },
    });
  }
  public override bespokePlay(player: IPlayer): PlayerInput | undefined {
    const found: Array<CardName> = [];
    player.game.projectDeck.drawPile.forEach((card) => {
      const string = card.metadata.renderData !== undefined ? JSON.stringify(card.metadata.renderData) : '';
      if (string.includes('animals') || card.tags.includes(Tag.ANIMAL)) {
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
