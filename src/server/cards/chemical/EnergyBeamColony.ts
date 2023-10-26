import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import { Tag } from '../../../common/cards/Tag';

export class EnergyBeamColony extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.ENERGY_BEAM_COLONY,
      tags: [Tag.POWER, Tag.SPACE],
      cost: 27,

      behavior: {
        production: {energy: 2, heat: 2, megacredits: -2},
        colonies: {buildColony: {}},
      },

      metadata: {
        cardNumber: 'x354',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.minus().megacredits(2).br;
            pb.plus().energy(2).br;
            pb.plus().heat(2).br;
          }).colonies(1);
        }),
        description: 'Decrease your M€ production 1 step. Increase your energy production 2 steps and your heat production 2 steps. Place a colony.',
      },
    });
  }
}
