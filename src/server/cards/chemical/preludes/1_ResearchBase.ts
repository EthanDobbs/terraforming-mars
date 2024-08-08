import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {PreludeCard} from '../../prelude/PreludeCard';
import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {IPlayer} from '../../../IPlayer';
import {SelectPaymentDeferred} from '../../../deferredActions/SelectPaymentDeferred';

export class ResearchBase extends PreludeCard implements IProjectCard {
  constructor() {
    super({
      name: CardName.RESEARCH_BASE,
      tags: [Tag.SCIENCE, Tag.CITY],

      behavior: {
        city: {},
        drawCard: 2,
      },
      startingMegacredits: -3,

      metadata: {
        cardNumber: 'xP1',
        renderData: CardRenderer.builder((b) => {
          b.city().nbsp.megacredits(-3).nbsp.cards(2);
        }),
        description: 'Place a city tile, lose 3 M€, and draw 2 cards.',
      },
    });
  }
  public override bespokeCanPlay(player: IPlayer) {
    return player.canAfford(3);
  }
  public override bespokePlay(player: IPlayer) {
    player.game.defer(new SelectPaymentDeferred(player, 3));
    return undefined;
  }
}
