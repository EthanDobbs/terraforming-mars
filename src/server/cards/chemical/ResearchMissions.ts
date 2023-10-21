import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Card} from '../Card';
import {IPlayer} from '../../IPlayer';

export class ResearchMissions extends Card implements IProjectCard {
  constructor() {
    super({
      cost: 13,
      tags: [Tag.SCIENCE],
      name: CardName.RESEARCH_MISSIONS,
      type: CardType.ACTIVE,

      metadata: {
        cardNumber: 'x347',
        renderData: CardRenderer.builder((b) => {
          b.action('Move one of your trade fleets from the Trade Fleets Tile to this card to draw a card. Fleets on this card may no longer trade, and return to the Trade Fleets Tile during the Solar Phase.', (eb) => {
            eb.tradeFleet().asterix().startAction.cards(1);
          }).br;
        }),
      },
    });
  }
  public canAct(player: IPlayer): boolean {
    return player.colonies.getFleetSize() > player.colonies.tradesThisGeneration;
  }
  public action(player: IPlayer) {
    player.colonies.tradesThisGeneration++;
    player.drawCard(1);
    return undefined;
  }
}
