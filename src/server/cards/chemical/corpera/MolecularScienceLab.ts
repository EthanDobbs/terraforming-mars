import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';

export class MolecularScienceLab extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.MOLECULAR_SCIENCE_LAB,
      tags: [Tag.SCIENCE, Tag.BUILDING],
      cost: 14,
      victoryPoints: 1,

      behavior: {
        production: {megacredits: {tag: Tag.MICROBE}},
      },

      metadata: {
        cardNumber: 'x219',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.megacredits(1).slash().tag(Tag.MICROBE));
        }),
        description: 'Increase your M€ production 1 step for each microbe tag you have.',
      },
    });
  }
}
