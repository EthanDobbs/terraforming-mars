import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {PreludeCard} from '../prelude/PreludeCard';
import {IActionCard} from '../ICard';
import {IPlayer} from '../../IPlayer';
import {CardResource} from '../../../common/CardResource';
import {Tag} from '../../../common/cards/Tag';
import {SelectCard} from '../../inputs/SelectCard';
import {IProjectCard} from '../IProjectCard';

export class AdvancedBiosphere extends PreludeCard implements IActionCard{
  constructor() {
    super({
      name: CardName.ADVANCED_BIOSPHERE,
      tags: [Tag.MICROBE],
      victoryPoints: {resourcesHere: {}, per: 4},
      resourceType: CardResource.MICROBE,

      metadata: {
        cardNumber: 'xP15',
        renderData: CardRenderer.builder((b) => {
          b.action('Choose 3 cards. For each card, either add a microbe to that card or add a microbe here', (eb) => {
            eb.empty().startAction.text('x3').microbes(1).asterix();
          }).br;
          b.vpText('1 VP per 4 Microbes on this card.').br;
        }),
      },
    });
  }
  public canAct(_player: IPlayer): boolean {
    return true;
  }
  public action(player: IPlayer) {
    const microbeCards = player.getResourceCards(CardResource.MICROBE).filter((card) => card.name !== this.name) as IProjectCard[];
    if (microbeCards.length === 0) {
      this.resourceCount += 3;
      return undefined;
    }
    return new SelectCard('Select up to 3 cards to add mircobes to. If you select fewer than 3 cards, a microbe will be added to Advanced Biosphere for each card you don\'t select', 'Add microbes', microbeCards, {max: 3, min: 0}).andThen((cards) => {
      cards.forEach((card) => {
        card.resourceCount += 1;
      })
      this.resourceCount += 3 - cards.length;
      return undefined;
    })
  }
}
