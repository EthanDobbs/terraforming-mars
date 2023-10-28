import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {PreludeCard} from '../prelude/PreludeCard';
import {IPlayer} from '../../IPlayer';
import {IProjectCard} from '../IProjectCard';
import {Resource} from '../../../common/Resource';
import {Board} from '../../boards/Board';
import {all} from '../Options';
import {Space} from '../../boards/Space';
import {GainProduction} from '../../deferredActions/GainProduction';
import {Priority} from '../../deferredActions/DeferredAction';
import {Tag} from '../../../common/cards/Tag';

export class NoctisSettlement extends PreludeCard implements IProjectCard{
  constructor() {
    super({
      name: CardName.NOCTIS_SETTLEMENT,
      tags: [Tag.BUILDING],

      behavior: {
        stock: {plants: 2},
        production: {megacredits: 2},
      },

      metadata: {
        cardNumber: 'xP08',
        renderData: CardRenderer.builder((b) => {
          b.effect('When a city tile is placed, including this, increase your M€ production 1 step.', (eb) => {
            eb.city({all}).startEffect.production((pb) => pb.megacredits(1));
          }).br;
          b.production((pb) => pb.megacredits(2)).plants(2);
        }),
        description: 'Increase your M€ production 2 steps and gain 2 plants.'
      },
    });
  }
  public onTilePlaced(cardOwner: IPlayer, activePlayer: IPlayer, space: Space) {
    if (Board.isCitySpace(space)) {
      cardOwner.game.defer(
        new GainProduction(cardOwner, Resource.MEGACREDITS),
        cardOwner.id !== activePlayer.id ? Priority.OPPONENT_TRIGGER : undefined,
      );
    }
  }
}
