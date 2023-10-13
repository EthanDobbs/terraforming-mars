import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import { played } from '../Options';

export class CommunicationsHub extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.COMMUNICATIONS_HUB,
      tags: [Tag.CITY, Tag.BUILDING],
      cost: 18,

      behavior: {
        city: {},
        production: {energy: -1, megacredits: {tag: Tag.EARTH}},
      },

      metadata: {
        cardNumber: 'x221',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.minus().energy(1).br;
            pb.plus().megacredits(1).slash().earth(1, {played});
          }).nbsp;
          b.city();
        }),
        description: 'Lower your energy production 1 step and raise your MC produciton 1 step for each Earth tag you have. Place a city tile.',
      },
    });
  }
}
