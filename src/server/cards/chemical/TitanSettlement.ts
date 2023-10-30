import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {PreludeCard} from '../prelude/PreludeCard';
import {IProjectCard} from '../IProjectCard';
import {IPlayer} from '../../IPlayer';
import {PlayerInput} from '../../PlayerInput';
import {Tag} from '../../../common/cards/Tag';
import {AltSecondaryTag} from '../../../common/cards/render/AltSecondaryTag';

export class TitanSettlement extends PreludeCard implements IProjectCard{
  constructor() {
    super({
      name: CardName.TITAN_SETTLEMENT,
      tags: [Tag.JOVIAN],

      behavior: {
        production: {titanium: 1},
      },

      metadata: {
        cardNumber: 'xP49',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.titanium(1)).cards(2, {secondaryTag: AltSecondaryTag.FLOATER});
        }),
        description: 'Increase your M€ production 2 steps. Put an additional colony tile of your choice in play.'
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
