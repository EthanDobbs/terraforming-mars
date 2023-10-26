import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';

export class OrbitalBiodomes extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.ORBITAL_BIODOMES,
      cost: 15,
      tags: [Tag.PLANT, Tag.SPACE],

      behavior: {
        production: {plants: 2},
      },

      metadata: {
        cardNumber: 'x368',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.plants(2));
        }),
        description: 'Increase your plant production 2 steps.',
      },
    });
  }
}
