import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {IPlayer} from '../../IPlayer';
import {CardName} from '../../../common/cards/CardName';
import {CardResource} from '../../../common/CardResource';
import {CardRenderer} from '../render/CardRenderer';
import {played, all} from '../Options';

export class ViralAmeboid extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.VIRAL_AMEBOID,
      tags: [Tag.SCIENCE, Tag.MICROBE],
      cost: 6,
      requirements: {temperature: -20},
      resourceType: CardResource.MICROBE,
      victoryPoints: {resourcesHere: {}, per: 3},

      metadata: {
        cardNumber: 'x187',
        renderData: CardRenderer.builder((b) => {
          b.effect('When any player plays a microbe tag, including this, add a microbe to this card.', (eb) => {
            eb.microbes(1, {played, all}).startEffect.microbes(1);
          }).br;
          b.vpText('1 VP per 3 Microbes on this card.').br;
        }),
        description: 'Requires -20°C or warmer.'
      },
    });
  }
  public onCardPlayedFromAnyPlayer(thisCardOwner: IPlayer, _playedCardOwner: IPlayer, card: IProjectCard) {
    if (card.tags.includes(Tag.MICROBE)) {
      thisCardOwner.addResourceTo(this, {qty: 1, log: true});
    }
    return undefined;
  }
}
