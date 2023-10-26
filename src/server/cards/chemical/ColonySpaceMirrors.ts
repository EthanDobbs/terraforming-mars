import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {all} from '../Options';
import {Size} from '../../../common/cards/render/Size';

export class ColonySpaceMirrors extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.COLONY_SPACE_MIRRORS,
      tags: [Tag.POWER, Tag.SPACE],
      cost: 18,

      behavior: {
        production: {energy: {colonies: {colonies: {}}, all: true}},
      },

      metadata: {
        cardNumber: 'x371',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.energy(1).slash().colonies(1, {all, size: Size.SMALL}));
        }),
        description: 'Increase your energy production 1 step for each colony in play.',
      },
    });
  }
}
