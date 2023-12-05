import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Tag} from '../../../../common/cards/Tag';
import {all} from '../../Options';
import {Size} from '../../../../common/cards/render/Size';

export class CommercialImports extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.COMMERCIAL_IMPORTS,
      cost: 16,
      tags: [Tag.EARTH, Tag.SPACE],
      victoryPoints: 1,

      behavior: {
        production: {megacredits: {cities: {where: 'everywhere'}, all: true}},
      },

      metadata: {
        cardNumber: 'x100',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.megacredits(1).slash().city({size: Size.SMALL, all});
          });
        }),
        description: 'Increase your M€ production 1 step for every city tile.',
      },
    });
  }
}
