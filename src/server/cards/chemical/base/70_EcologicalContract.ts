import {Tag} from '../../../../common/cards/Tag';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';

export class EcologicalContract extends Card {
  constructor() {
    super({
      name: CardName.ECOLOGICAL_CONTRACT,
      type: CardType.ACTIVE,
      tags: [Tag.EARTH, Tag.PLANT],
      cost: 10,

      behavior: {
        production: {plants: 1},
      },

      metadata: {
        cardNumber: 'xB70',
        renderData: CardRenderer.builder((b) => {
          b.effect('When playing a plant tag, plants may be used as 3 M€ each.',
            (eb) => eb.tag(Tag.PLANT).startEffect.plants(1).equals().megacredits(3)).br;
          b.production((pb) => pb.plants(1)).br;
        }),
        description: 'Increase your plant production 1 step.',
      },
    });
  }
}
