import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {PlayerInput} from '../../PlayerInput';
import {SelectOption} from '../../inputs/SelectOption';
import {ALL_RESOURCES} from '../../../common/Resource';
import {OrOptions} from '../../inputs/OrOptions';

export class MultifunctionalDome extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.MULTIFUNCTIONAL_DOME,
      tags: [Tag.CITY, Tag.BUILDING],
      cost: 20,

      behavior: {
        city: {},
        production: {energy: -1, megacredits: 1},
      },

      metadata: {
        cardNumber: 'x086',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.minus().energy(1).br;
            pb.plus().megacredits(1).wild(1);
          })
          b.city();
        }),
        description: 'Lower your energy production 1 step, raise your MC produciton 1 step, and raise ANY production 1 step. Place a city tile.',
      },
    });
  }
  public override bespokePlay(player: IPlayer): PlayerInput | undefined {
    const orOptions = new OrOptions();

    ALL_RESOURCES.forEach((resource) => {
      orOptions.options.push(new SelectOption('Increase ' + resource + ' production 1 step', 'Select').andThen( () => {
        player.production.add(resource, 1, {log: true});
        return undefined;
      })
    )});

    return orOptions;
  }
}
