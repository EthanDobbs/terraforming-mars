import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {PreludeCard} from '../prelude/PreludeCard';
import {IProjectCard} from '../IProjectCard';
import {IPlayer} from '../../IPlayer';
import {PlayerInput} from '../../PlayerInput';
import {AltSecondaryTag} from '../../../common/cards/render/AltSecondaryTag';

export class AdvancedHeatingTech extends PreludeCard implements IProjectCard{
  constructor() {
    super({
      name: CardName.ADVANCED_HEATING_TECH,

      behavior: {
        production: {heat: 3},
      },

      metadata: {
        cardNumber: 'xP28',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.heat(3)).nbsp.cards(2, {secondaryTag: AltSecondaryTag.HEAT});
        }),
        description: 'Increase your heat production 3 steps and draw 2 cards with heat icons.'
      },
    });
  }
  public override bespokePlay(player: IPlayer): PlayerInput | undefined {
    const found: Array<CardName> = [];
    player.game.projectDeck.drawPile.forEach((card) => {
      const string = JSON.stringify(card.metadata.renderData);
      if (string.includes('heat')) {
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
