import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';
import {PartyName} from '../../../../common/turmoil/PartyName';

export class PreservationistSettlement extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.PRESERVATIONIST_SETTLEMENT,
      cost: 17,
      tags: [Tag.CITY, Tag.BUILDING],
      requirements: {party: PartyName.REDS},
      victoryPoints: 1,

      behavior: {
        production: {megacredits: 3, energy: -1},
        city: {on: 'isolated'},
      },

      metadata: {
        cardNumber: 'x410',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.minus().energy(1).br;
            pb.plus().megacredits(3);
          });
          b.city().asterix();
        }),
        description: 'Requires that Reds are in power or that you have 2 delegates there. Decrease your energy production 1 step, increase your M€ production 3 steps, and place a city tile NEXT TO NO OTHER TILE.',
      },
    });
  }
}
