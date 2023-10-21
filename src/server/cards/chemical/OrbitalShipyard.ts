import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';

export class OrbitalShipyard extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.ORBITAL_SHIPYARD,
      tags: [Tag.EARTH, Tag.SPACE],
      cost: 14,
      victoryPoints: 1,

      behavior: {
        production: {titanium: 1},
      },

      metadata: {
        cardNumber: 'x364',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.titanium(1));
        }),
        description: 'Raise your titanium production 1 step.',
      },
    });
  }
}
