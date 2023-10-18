import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {digit} from '../Options';
import {IPlayer} from '../../IPlayer';
import {OrOptions} from '../../inputs/OrOptions';
import {ALL_RESOURCES, Resource} from '../../../common/Resource';
import {PlayerInput} from '../../PlayerInput';
import {SelectOption} from '../../inputs/SelectOption';

export class AssetLiquidation extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.ASSET_LIQUIDATION,
      cost: 0,

      metadata: {
        cardNumber: 'x174',
        description: 'Lower any production 1 step to gain 5 of the SAME TYPE of resource.',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.minus().wild(1)).nbsp.plus().wild(5, {digit}).asterix();
        }),
      },
    });
  }
  public override bespokePlay(player: IPlayer): PlayerInput | undefined {
    const orOptions = new OrOptions();

    ALL_RESOURCES.forEach((resource) => {
      if (player.production.get(resource) > (resource === Resource.MEGACREDITS ? -5 : 0)) {
        orOptions.options.push(new SelectOption('Lower ' + resource + ' production 1 step and gain 5 ' + resource, 'Select').andThen( () => {
          player.production.add(resource, -1, {log: true});
          player.stock.add(resource, 5, {log: true});
          return undefined;
        }))
      }
    });

    return orOptions;
  }
}
