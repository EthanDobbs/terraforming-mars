import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {CardType} from '../../../common/cards/CardType';
import {CardResource} from '../../../common/CardResource';
import {Resource} from '../../../common/Resource';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {all} from '../Options';
import {IPlayer} from '../../IPlayer';
import {GlobalParameter} from '../../../common/GlobalParameter';
import {Card} from '../Card';

export class Cephalopods extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.CEPHALOPODS,
      tags: [Tag.ANIMAL],
      cost: 11,

      behavior: {
        decreaseAnyProduction: {type: Resource.PLANTS, count: 1},
      },

      resourceType: CardResource.ANIMAL,
      victoryPoints: {resourcesHere: 1},
      requirements: {oceans: 5},

      metadata: {
        cardNumber: 'x054',
        renderData: CardRenderer.builder((b) => {
          b.action('Add an animal to this card ONLY IF you\'ve raised the temperature this generation (or if the parameter is maxed).', (eb) => {
            eb.plus().temperature(1).asterix().nbsp.colon().nbsp.startAction.animals(1);
          }).br;
          b.production((pb) => pb.minus().plants(1, {all})).br;
          b.vpText('1 VP for every animal on this card.');
        }),
        description: {
          text: 'Requires 5 ocean tiles. Decrease any plant production 1 step.',
          align: 'left',
        },
      },
    });
  }
  public data = {
    lastGenerationIncreasedTemperature: -1,
  }
  onGlobalParameterIncrease(player: IPlayer, parameter: GlobalParameter, _steps: number): void {
    if (parameter === GlobalParameter.TEMPERATURE) {
      this.data.lastGenerationIncreasedTemperature = player.game.generation;
    }
  }
  public canAct(player: IPlayer): boolean {
    return this.data.lastGenerationIncreasedTemperature === player.game.generation || player.game.getTemperature() === 8;
  }
  public action(player: IPlayer) {
    player.addResourceTo(this, 1);
  }
}
