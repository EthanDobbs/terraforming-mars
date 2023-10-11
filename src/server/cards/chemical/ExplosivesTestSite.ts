import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import { Tag } from '../../../common/cards/Tag';

export class ExplosivesTestSite extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.EXPLOSIVES_TEST_SITE,
      cost: 17,
      tags: [Tag.SCIENCE, Tag.BUILDING],
      victoryPoints: -1,

      behavior: {
        production: {energy: -1, megacredits: 2},
        global: {temperature: 2},
      },

      metadata: {
        cardNumber: 'x098',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.minus().energy(1).br;
            pb.plus().megacredits(2);
          });
          b.temperature(2)
        }),
        description: 'Lower your energy production 1 step and raise your MC production 2 steps. Raise the temperature 2 steps.',
      },
    });
  }
}
