import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {IPlayer} from '../../../IPlayer';
import {CardName} from '../../../../common/cards/CardName';
import {SimpleDeferredAction} from '../../../deferredActions/DeferredAction';
import {CardRenderer} from '../../render/CardRenderer';
import {Resource} from '../../../../common/Resource';
import {OrOptions} from '../../../inputs/OrOptions';
import {SelectOption} from '../../../inputs/SelectOption';
import {played} from '../../Options';

export class LaserLightsails extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.LASER_LIGHTSAILS,
      tags: [Tag.SPACE],
      cost: 8,

      behavior: {
        production: {megacredits: 1},
      },

      metadata: {
        cardNumber: 'x189',
        renderData: CardRenderer.builder((b) => {
          b.effect('When you play a space tag, including this, you may choose to lose 1 energy to gain 3 M€.', (eb) => {
            eb.space({played}).startEffect.minus().energy(1).nbsp.plus().megacredits(3);
          }).br;
          b.production((pb) => pb.megacredits(1));
        }),
        description: 'Increase your M€ production 1 step.'
      },
    });
  }
  public onCardPlayed(player: IPlayer, card: IProjectCard) {
    if (card.tags.includes(Tag.SPACE) && player.stock.energy > 0) {
      const useEffect = new SelectOption('Lose 1 energy resource to gain 3 M€ from Laser Lightsails', 'Lose energy').andThen( () => {
        player.stock.add(Resource.MEGACREDITS, 3);
        player.stock.deduct(Resource.ENERGY, 1);
        return undefined;
      });
      const abstain = new SelectOption('Do nothing', 'Do nothing').andThen( () => {return undefined} );
      player.game.defer(new SimpleDeferredAction(player,() => new OrOptions(useEffect, abstain)));
    }
    return undefined;
  }
}
