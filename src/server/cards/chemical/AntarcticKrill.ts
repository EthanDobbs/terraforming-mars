import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {ActionCard} from '../ActionCard';
import {CardType} from '../../../common/cards/CardType';
import {CardResource} from '../../../common/CardResource';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {all} from '../Options';
import {IPlayer, CanAffordOptions} from '../../IPlayer';
import {RemoveResourcesFromCard} from '../../deferredActions/RemoveResourcesFromCard';

export class AntarcticKrill extends ActionCard implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.ANTARCTIC_KRILL,
      tags: [Tag.ANIMAL],
      cost: 7,

      action: {
        addResources: 1,
      },

      resourceType: CardResource.ANIMAL,
      victoryPoints: {resourcesHere: {}, per: 2},
      requirements: {temperature: -12},

      metadata: {
        cardNumber: 'x059',
        renderData: CardRenderer.builder((b) => {
          b.action('Add 1 animal to this card.', (eb) => {
            eb.empty().startAction.animals(1);
          }).br;
          b.minus().microbes(2, {all}).br;
          b.vpText('1 VP for every 2 animals on this card.');
        }),
        description: 'Requires -12°C or warmer. Remove 2 microbes from any player.',
      },
    });
  }
 
  public override bespokeCanPlay(player: IPlayer, _canAffordOptions?: CanAffordOptions | undefined): boolean {
    if (player.game.isSoloMode()) {
      return true;
    }
    return RemoveResourcesFromCard.getAvailableTargetCards(player, CardResource.MICROBE, false).filter( (card) => card.resourceCount >= 2).length >= 1;
  }
  public override bespokePlay(player: IPlayer) {
    if (player.game.isSoloMode()) {
      return undefined;
    }
    player.game.defer(new RemoveResourcesFromCard(player, CardResource.MICROBE, 2, {mandatory: true}));
    return undefined;
  }
}
