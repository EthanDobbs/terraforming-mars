import {IProjectCard} from '../../IProjectCard';
import {Space} from '../../../boards/Space';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {IPlayer} from '../../../IPlayer';
import {CardName} from '../../../../common/cards/CardName';
import {Resource} from '../../../../common/Resource';
import {Priority} from '../../../deferredActions/Priority';
import {GainResources} from '../../../deferredActions/GainResources';
import {Board} from '../../../boards/Board';
import {CardRenderer} from '../../render/CardRenderer';
import {Size} from '../../../../common/cards/render/Size';
import {all} from '../../Options';

export class FreightShuttles extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.FREIGHT_SHUTTLES,
      tags: [Tag.SPACE],
      cost: 12,
      victoryPoints: 1,
      requirements: {oxygen: 5},

      behavior: {
        production: {megacredits: 5, energy: -2},
      },

      metadata: {
        cardNumber: 'xB66',
        renderData: CardRenderer.builder((b) => {
          b.effect('When any city tile is placed, gain 2 M€.', (eb) => {
            eb.city({size: Size.SMALL, all}).startEffect.megacredits(2);
          }).br;
          b.production((pb) => {
            pb.minus().energy(2).br;
            pb.plus().megacredits(5);
          });
        }),
        description: 'Requires 5% oxygen. Decrease your energy production 2 steps and increase your M€ production 5 steps.',
      },
    });
  }

  public onTilePlaced(cardOwner: IPlayer, activePlayer: IPlayer, space: Space) {
    if (Board.isCitySpace(space)) {
      cardOwner.game.defer(
        new GainResources(cardOwner, Resource.MEGACREDITS, {count: 2, log: true}),
        cardOwner.id !== activePlayer.id ? Priority.OPPONENT_TRIGGER : undefined,
      );
    }
    return undefined;
  }
}
