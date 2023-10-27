import {IProjectCard} from '../IProjectCard';
import {ActionCard} from '../ActionCard';
import {CardName} from '../../../common/cards/CardName';
import {CardType} from '../../../common/cards/CardType';
import {Tag} from '../../../common/cards/Tag';
import {CardRenderer} from '../render/CardRenderer';
import {played} from '../Options';

export class OrbitalCleanupChemical extends ActionCard implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.ORBITAL_CLEANUP_CHEMICAL,
      tags: [Tag.EARTH, Tag.SPACE],
      cost: 14,
      victoryPoints: 2,

      behavior: {
        production: {megacredits: -2},
      },

      action: {
        stock: {megacredits: {tag: Tag.SCIENCE, per: 2}},
      },

      metadata: {
        cardNumber: 'xR23',

        renderData: CardRenderer.builder((b) => {
          b.action('Gain 1 M€ for every 2 science tags you have.', (eb) => {
            eb.empty().startAction.megacredits(1).slash().science(2, {played});
          }).br;
          b.production((pb) => {
            pb.megacredits(-2);
          });
        }),
        description: 'Decrease your M€ production 2 steps.',
      },
    });
  }
}
