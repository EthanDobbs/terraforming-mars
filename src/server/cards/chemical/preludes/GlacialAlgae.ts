import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {PreludeCard} from '../../prelude/PreludeCard';
import {IProjectCard} from '../../IProjectCard';
import {all} from '../../Options';
import {IPlayer} from '../../../IPlayer';
import {Space} from '../../../boards/Space';
import {Board} from '../../../boards/Board';
import {Resource} from '../../../../common/Resource';
import {Priority} from '../../../deferredActions/DeferredAction';
import {GainResources} from '../../../deferredActions/GainResources';
import {Tag} from '../../../../common/cards/Tag';
import {SelectPaymentDeferred} from '../../../deferredActions/SelectPaymentDeferred';

export class GlacialAlgae extends PreludeCard implements IProjectCard{
  constructor() {
    super({
      name: CardName.GLACIAL_ALGAE,
      tags: [Tag.PLANT],

      behavior: {
        ocean: {},
      },
      startingMegacredits: -5,

      metadata: {
        cardNumber: 'xP20',
        renderData: CardRenderer.builder((b) => {
          b.effect('When anyone places an ocean tile, including this, gain 2 plants.', (be) => {
            be.oceans(1, {all}).startEffect.plants(2);
          }).br;
          b.oceans(1).nbsp.megacredits(-5)
        }),
        description: 'Place an ocean tile and lose 5 M€.'
      },
    });
  }
  public onTilePlaced(cardOwner: IPlayer, activePlayer: IPlayer, space: Space) {
    if (Board.isUncoveredOceanSpace(space)) {
      cardOwner.game.defer(
        new GainResources(cardOwner, Resource.PLANTS, {
          count: 2,
          cb: () => activePlayer.game.log(
            '${0} gained 2 ${1} from ${2}',
            (b) => b.player(cardOwner).string(Resource.PLANTS).cardName(this.name)),
        }),
        cardOwner.id !== activePlayer.id ? Priority.OPPONENT_TRIGGER : undefined,
      );
    }
  }
  public override bespokeCanPlay(player: IPlayer) {
    return player.canAfford(3);
  }
  public override bespokePlay(player: IPlayer) {
    player.game.defer(new SelectPaymentDeferred(player, 3));
    return undefined;
  }
}
