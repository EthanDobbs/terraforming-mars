import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {PreludeCard} from '../../prelude/PreludeCard';
import {IProjectCard} from '../../IProjectCard';
import {IPlayer} from '../../../IPlayer';
import {Resource} from '../../../../common/Resource';
import {Tag} from '../../../../common/cards/Tag';
import {SimpleDeferredAction} from '../../../deferredActions/DeferredAction';
import {played} from '../../Options';

export class IsolatedEcologyResearch extends PreludeCard implements IProjectCard{
  constructor() {
    super({
      name: CardName.ISOLATED_ECOLOGY_RESEARCH,
      tags: [Tag.PLANT, Tag.SPACE],

      behavior: {
        colonies: {buildColony: {}},
      },

      metadata: {
        cardNumber: 'xP44',
        renderData: CardRenderer.builder((b) => {
          b.effect('Each time you play a plant, animal or microbe tag, including this, gain 2 M€.', (be) => {
            be.animals(1, {played}).slash().plants(1, {played}).slash().microbes(1, {played});
            be.startEffect.megacredits(2);
          }).br;
          b.colonies(1);
        }),
        description: 'Place a colony.'
      },
    });
  }
  public onCardPlayed(player: IPlayer, card: IProjectCard): void {
    const amount = player.tags.cardTagCount(card, [Tag.ANIMAL, Tag.PLANT, Tag.MICROBE]);
    if (amount > 0) {
      player.game.defer(
        new SimpleDeferredAction(player, () => {
          player.stock.add(Resource.MEGACREDITS, amount * 2, {log: true});
          return undefined;
        }),
      );
    }
  }
}
