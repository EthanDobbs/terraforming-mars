import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {ActionCard} from '../../ActionCard';
import {CardType} from '../../../../common/cards/CardType';
import {CardResource} from '../../../../common/CardResource';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {IPlayer} from '../../../IPlayer';

export class MeasurementDrones extends ActionCard implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.MEASUREMENT_DRONES,
      tags: [Tag.SCIENCE, Tag.JOVIAN],
      cost: 16,
      victoryPoints: 1,
      resourceType: CardResource.FLOATER,

      action: {
        or: {
          autoSelect: true,
          behaviors: [{
            title: 'Spend 2 floaters to draw a card',
            spend: {resourcesHere: 2},
            drawCard: 1,
          },
          {
            title: 'Add a floater to this card',
            addResources: 1,
          }],
        },
      },

      metadata: {
        cardNumber: 'x185',
        renderData: CardRenderer.builder((b) => {
          b.effect('When you play a science tag, add a floater to this card', (eb) => {
            eb.tag(Tag.SCIENCE).startEffect.resource(CardResource.FLOATER);
          }).br;
          b.action('Add a floater to this card.', (eb) => {
            eb.empty().startAction.resource(CardResource.FLOATER);
          }).br;
          b.or().br;
          b.action('Spend 2 floaters here to draw a card.', (eb) => {
            eb.resource(CardResource.FLOATER, 2).startAction.cards(1);
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
