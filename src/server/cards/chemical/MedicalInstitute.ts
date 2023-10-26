import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';
import {PartyName} from '../../../common/turmoil/PartyName';

export class MedicalInstitute extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.MEDICAL_INSTITUTE,
      cost: 12,
      tags: [Tag.SCIENCE, Tag.BUILDING],
      requirements: {party: PartyName.SCIENTISTS},
      victoryPoints: 1,

      behavior: {
        production: {megacredits: 3},
      },

      metadata: {
        cardNumber: 'x405',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.megacredits(3));
        }),
        description: 'Requires that Scientists are in power or that you have 2 delegates there. Increase your M€ production 3 steps.',
      },
    });
  }
}
