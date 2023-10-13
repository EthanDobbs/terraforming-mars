import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {ActionCard} from '../ActionCard';
import {CardType} from '../../../common/cards/CardType';
import {CardResource} from '../../../common/CardResource';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import { played } from '../Options';
import { IPlayer } from '../../IPlayer';

export class MeasurementDrones extends ActionCard implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.MEASUREMENT_DRONES,
      tags: [Tag.JOVIAN],
      cost: 15,
      victoryPoints: 1,
      resourceType: CardResource.FLOATER,

      action: {
        or: {
          autoSelect: true,
          behaviors: [{
            title: 'Add a floater to this card',
            addResources: 1,
          },
          {
            title: 'Spend 2 floaters to draw a card',
            spend: {resourcesHere: 2},
            drawCard: 1,
          }],
        },
      },

      metadata: {
        cardNumber: 'x185',
        renderData: CardRenderer.builder((b) => {
          b.effect('When you play a science tag, add a floater to this card', (eb) => {
            eb.science(1, {played}).startEffect.floaters(1);
          }).br;
          b.action('Add a floater to this card.', (eb) => {
            eb.empty().startAction.floaters(1);
          }).br;
          b.or().br;
          b.action('Spend 2 floaters here to draw a card.', (eb) => {
            eb.floaters(2).startAction.cards(1);
          }).br;
        }),
      },
    });
  }
  public onCardPlayed(player: IPlayer, card: IProjectCard): void {
    const qty = player.tags.cardTagCount(card, Tag.SCIENCE);
    player.addResourceTo(this, {qty, log: true});
  }
}
