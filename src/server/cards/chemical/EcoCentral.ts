import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {digit} from '../Options';
import {IPlayer} from '../../IPlayer';
import {ICard} from '../ICard';
import {Resource} from '../../../common/Resource';

export class EcoCentral extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.ECO_CENTRAL,
      tags: [Tag.PLANT, Tag.CITY, Tag.BUILDING],
      cost: 25,

      requirements: {temperature: -12},
      behavior:{
        city: {},
        production: {energy: -1, megacredits: 3},
        stock: {plants: 4}
      },

      metadata: {
        cardNumber: 'x082',
        renderData: CardRenderer.builder((b) => {
          b.effect('When you use the greenery standard project, gain 3MC.', (eb) => {
            eb.greenery().asterix().startEffect.megacredits(3)
          }).br;
          b.production((pb) => {
            pb.minus().energy(1).br;
            pb.plus().megacredits(3);
          });
          b.city().plants(4, {digit})
        }),
        description: 'Requires -12°C or higher. Lower your energy production 1 step, raise your MC production 3 steps, place a city tile, and gain 4 plants.'
      },
    });
  }
  public onStandardProject(player: IPlayer, projectType: ICard) {
    if (projectType.name === CardName.GREENERY_STANDARD_PROJECT) {
      player.stock.add(Resource.MEGACREDITS, 3, {log: true});
    }
  }
}
