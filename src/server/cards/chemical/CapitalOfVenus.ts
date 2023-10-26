import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';
import {SpaceName} from '../../SpaceName';

export class CapitalOfVenus extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.CAPITAL_OF_VENUS,
      tags: [Tag.CITY, Tag.VENUS],
      cost: 23,
      requirements: {venus: 22},
      victoryPoints: {tag: Tag.VENUS, per: 2},

      behavior: {
        production: {megacredits: 5, energy: -2},
        addResourcesToAnyCard: {
          tag: Tag.VENUS,
          count: 2,
          autoSelect: true,
          mustHaveCard: false,
        },
        city: {space: SpaceName.CAPITAL_OF_VENUS},
      },

      metadata: {
        cardNumber: 'x281',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.minus().energy(2).br;
            pb.plus().megacredits(5);
          });
          b.city().asterix().br.wild(2, {secondaryTag: Tag.VENUS}).br;
          b.vpText('1 VP for every 2 Venus tags you have.').br;
        }),
        description: 'Requires Venus 22%. Decrease your energy production 2 steps and increase your MC production 5 steps. Place a city tile ON THE RESERVED AREA. Add any 2 resources to any Venus card.',
      },
    });
  }
}
