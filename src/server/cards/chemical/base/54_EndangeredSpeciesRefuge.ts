import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {ActionCard} from '../../ActionCard';
import {CardType} from '../../../../common/cards/CardType';
import {CardResource} from '../../../../common/CardResource';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Size} from '../../../../common/cards/render/Size';

export class EndangeredSpeciesRefuge extends ActionCard implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.ENDANGERED_SPECIES_REFUGE,
      tags: [Tag.EARTH, Tag.ANIMAL, Tag.BUILDING],
      cost: 19,

      behavior: {
        tr: 1,
        addResources: 2,
      },

      action: {
        spend: {megacredits: 4},
        addResources: 1,
      },

      resourceType: CardResource.ANIMAL,
      victoryPoints: {resourcesHere: {}},
      requirements: {tag: Tag.ANIMAL, count: 2},

      metadata: {
        cardNumber: 'xB54',
        renderData: CardRenderer.builder((b) => {
          b.action('Spend 4 M€ to add 1 animal to this card.', (eb) => {
            eb.megacredits(4).startAction.resource(CardResource.ANIMAL);
          }).br;
          b.text('Animals may not be removed from this card', Size.SMALL, true).br;
          b.vpText('1 VP for each animal on this card.').br;
          b.tr(1).resource(CardResource.ANIMAL, 2);
        }),
        description: {
          text: 'Requires 2 animal tags. Raise your TR 1 step and add 2 animals to this card.',
          align: 'left',
        },
      },
    });
  }
}
