import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {PreludeCard} from '../prelude/PreludeCard';
import {IPlayer} from '../../IPlayer';
import {IProjectCard} from '../IProjectCard';
import {Resource} from '../../../common/Resource';
import {Tag} from '../../../common/cards/Tag';
import {played} from '../Options';
import {PlayerInput} from '../../PlayerInput';
import {CardType} from '../../../common/cards/CardType';

export class EntertainmentIndustry extends PreludeCard implements IProjectCard{
  constructor() {
    super({
      name: CardName.ENTERTAINMENT_INDUSTRY,
      tags: [Tag.EARTH],

      behavior: {
        stock: {megacredits: 3},
        production: {megacredits: 2},
      },

      metadata: {
        cardNumber: 'xP06',
        renderData: CardRenderer.builder((b) => {
          b.effect('When you play an event card, gain 2 M€.', (b) => {
            b.event({played}).startEffect.megacredits(2);
          }).br;
          b.production((pb) => pb.megacredits(2)).nbsp.megacredits(3);
        }),
        description: 'Increase your M€ production 2 steps and gain 3 M€.'
      },
    });
  }
  onCardPlayed(player: IPlayer, card: IProjectCard): void | PlayerInput | undefined {
    if (card.type === CardType.EVENT) {
      player.stock.add(Resource.MEGACREDITS, 2, {log: true});
    }
  }
}
