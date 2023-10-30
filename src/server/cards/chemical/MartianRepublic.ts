import {PreludeCard} from '../prelude/PreludeCard';
import {IProjectCard} from '../IProjectCard';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {PartyName} from '../../../common/turmoil/PartyName';
import {Tag} from '../../../common/cards/Tag';

export class MartianRepublic extends PreludeCard implements IProjectCard {
  constructor() {
    super({
      name: CardName.MARTIAN_REPUBLIC,
      tags: [Tag.CITY, Tag.BUILDING],

      behavior: {
        turmoil: {sendDelegates: {count: 2, party: PartyName.MARS}},
        stock: {megacredits: 3},
        city: {},
      },
      startingMegacredits: 3,

      metadata: {
        cardNumber: 'xP58',
        renderData: CardRenderer.builder((b) => {
          b.delegates(2).marsFirst().city().megacredits(3);
        }),
        description: 'Place 2 delegates into Mars First, place a city tile, and gain 3 M€.',
      },
    });
  }
}
