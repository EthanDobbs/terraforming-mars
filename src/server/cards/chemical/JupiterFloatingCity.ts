import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardResource} from '../../../common/CardResource';
import {CardRenderer} from '../render/CardRenderer';
import {ActionCard} from '../ActionCard';

export class JupiterFloatingCity extends ActionCard implements IProjectCard {
  constructor() {
    super({
      cost: 24,
      tags: [Tag.CITY, Tag.JOVIAN],
      name: CardName.JUPITER_FLOATING_CITY,
      type: CardType.ACTIVE,
      requirements: {tag: Tag.SCIENCE, count: 4},
      victoryPoints: {tag: Tag.JOVIAN},

      behavior:{
        production: {energy: -1},
        // off world city
      },
      
      action:{
        addResourcesToAnyCard: {type: CardResource.FLOATER, count: 2, tag: Tag.JOVIAN},
      },

      metadata: {
        cardNumber: 'x336',
        renderData: CardRenderer.builder((b) => {
          b.action('Add 2 floaters to any Jovian card.', (eb) => {
            eb.empty().startAction.floaters(2, {secondaryTag: Tag.JOVIAN});
          }).br;
          b.vpText('1 VP per Jovian tag you have').br;
          b.production((pb) => pb.minus().energy(1)).nbsp.city().asterix();
        }),
        description: 'Requires 4 science tags. Lower your energy production 1 step. Place a city tile ON THE RESERVED AREA.'
      },
    });
  }
}
