import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import { IPlayer } from '../../IPlayer';
import { GlobalParameter } from '../../../common/GlobalParameter';
import { Tag } from '../../../common/cards/Tag';

export class AdvancedGeneticAdaption extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.ADVANCED_GENETIC_ADAPTION,
      cost: 13,
      tags: [Tag.SCIENCE],

      behavior: {
        production: {plants: 1}
      },

      metadata: {
        cardNumber: 'x068',
        renderData: CardRenderer.builder((b) => {
          b.effect('Your oxygen requirements are +/- 3 steps, your choice in each case.', (eb) => {
            eb.plate('Oxygen requirements').startEffect.text('+/- 3');
          }).br;
          b.production((pb) => pb.plants(1))
        }),
        description: 'Raise your plant production 1 step.'
      },
    });
  }
  public getRequirementBonus(_player: IPlayer, parameter: GlobalParameter): number {
    return parameter === GlobalParameter.OXYGEN ? 3 : 0;
  }
}
