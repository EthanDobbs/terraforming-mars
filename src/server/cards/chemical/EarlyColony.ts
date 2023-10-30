import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {PreludeCard} from '../prelude/PreludeCard';
import {IProjectCard} from '../IProjectCard';
import {IPlayer} from '../../IPlayer';
import {Resource} from '../../../common/Resource';
import {Tag} from '../../../common/cards/Tag';
import { IColony } from '@/server/colonies/IColony';

export class EarlyColony extends PreludeCard implements IProjectCard{
  constructor() {
    super({
      name: CardName.EARLY_COLONY,
      tags: [Tag.SPACE],

      behavior: {
        colonies: {buildColony: {}},
      },

      metadata: {
        cardNumber: 'xP43',
        renderData: CardRenderer.builder((b) => {
          b.effect('When you place a colony, including this, gain 3 M€.', (be) => {
            be.colonies(1).startEffect.megacredits(3);
          }).br;
          b.colonies(1);
        }),
        description: 'Place a colony.'
      },
    });
  }
  onColonyBuilt(cardOwner: IPlayer, activePlayer: IPlayer, _colony: IColony): void {
    if (cardOwner.id === activePlayer.id) {
      cardOwner.stock.add(Resource.MEGACREDITS, 3, {log: true});
    }
  }
}
