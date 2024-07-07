import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {IPlayer} from '../../../IPlayer';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {digit} from '../../Options';
import {OrOptions} from '../../../inputs/OrOptions';
import {SelectOption} from '../../../inputs/SelectOption';
import {Size} from '../../../../common/cards/render/Size';

export class TemporarySmeltingPlant extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.TEMPORARY_SMELTING_PLANT,
      tags: [Tag.BUILDING],
      cost: 6,

      behavior: {
        stock: {steel: 2},
        global: {oxygen: 1},
      },

      metadata: {
        cardNumber: 'x005',
        renderData: CardRenderer.builder((b) => {
          b.minus().energy(3, {digit}).nbsp.or(Size.SMALL).nbsp.minus().heat(5, {digit}).br;
          b.oxygen(1).steel(2);
        }),
        description: 'Lose 3 energy or 5 heat. Raise the oxygen 1 step and gain 2 steel.',
      },
    });
  }

  public override bespokeCanPlay(player: IPlayer): boolean {
    return player.energy >= 3 || player.heat >= 5;
  }
  public override bespokePlay(player: IPlayer) {
    if (player.energy < 3) {
      player.heat -= 5;
      return undefined;
    }
    if (player.heat < 5) {
      player.energy -= 3;
      return undefined;
    }
    const orOptions = new OrOptions();
    orOptions.options.push(new SelectOption('Lose 3 energy', 'Confirm').andThen( () => {
      player.energy -= 3;
      return undefined;
    }));
    orOptions.options.push(new SelectOption('Lose 5 heat', 'Confirm').andThen( () => {
      player.heat -= 5;
      return undefined;
    }));
    return orOptions;
  }
}
