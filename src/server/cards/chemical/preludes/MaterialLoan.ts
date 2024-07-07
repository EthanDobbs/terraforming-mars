import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {PreludeCard} from '../../prelude/PreludeCard';
import {digit} from '../../Options';
import {IPlayer} from '../../../IPlayer';
import {PlayerInput} from '../../../PlayerInput';
import {ALL_RESOURCES} from '../../../../common/Resource';
import {OrOptions} from '../../../inputs/OrOptions';
import {SelectOption} from '../../../inputs/SelectOption';
import {Resource} from '../../../../common/Resource';

export class MaterialLoan extends PreludeCard {
  constructor() {
    super({
      name: CardName.MATERIAL_LOAN,

      behavior: {
        stock: {megacredits: 19},
      },
      startingMegacredits: 19,

      metadata: {
        cardNumber: 'xP02',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.minus().wild(1)).nbsp.plus().wild(5, {digit}).asterix().nbsp.megacredits(19);
        }),
        description: 'Decrease any production 1 step to gain 5 of the SAME TYPE of resource. Gain 19 M€.',
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
        }));
      }
    });

    return orOptions;
  }
}
