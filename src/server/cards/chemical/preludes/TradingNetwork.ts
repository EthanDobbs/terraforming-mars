import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {PreludeCard} from '../../prelude/PreludeCard';
import {IProjectCard} from '../../IProjectCard';
import {IPlayer} from '../../../IPlayer';
import {PlayerInput} from '../../../PlayerInput';
import {ColoniesHandler} from '../../../colonies/ColoniesHandler';
import {Size} from '../../../../common/cards/render/Size';

export class TradingNetwork extends PreludeCard implements IProjectCard {
  constructor() {
    super({
      name: CardName.TRADING_NETWORK,

      behavior: {
        production: {megacredits: 2},
        colonies: {tradeOffset: 1},
      },

      metadata: {
        cardNumber: 'xP48',
        renderData: CardRenderer.builder((b) => {
          b.effect('When you trade, you may first increase that Colony Tile track 1 step.', (eb) => {
            eb.trade().startEffect.text('+1', Size.LARGE);
          }).br;
          b.production((pb) => pb.megacredits(2)).nbsp.colonyTile();
        }),
        description: 'Increase your M€ production 2 steps and put an additional colony tile of your choice in play.',
      },
    });
  }
  public override bespokePlay(player: IPlayer): PlayerInput | undefined {
    ColoniesHandler.addColonyTile(player, {title: 'Select colony tile to add'});
    return undefined;
  }
}
