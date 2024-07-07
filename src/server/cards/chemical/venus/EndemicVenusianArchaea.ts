import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {CardType} from '../../../../common/cards/CardType';
import {IPlayer} from '../../../IPlayer';
import {CardResource} from '../../../../common/CardResource';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Card} from '../../Card';
import {GlobalParameter} from '../../../../common/GlobalParameter';

export class EndemicVenusianArchaea extends Card implements IProjectCard {
  constructor() {
    super({
      name: CardName.ENDEMIC_VENUSIAN_ARCHAEA,
      type: CardType.ACTIVE,
      tags: [Tag.MICROBE, Tag.VENUS],
      cost: 11,
      resourceType: CardResource.MICROBE,
      requirements: {tag: Tag.SCIENCE, count: 2},
      victoryPoints: {resourcesHere: {}, per: 2},

      metadata: {
        cardNumber: 'x264',
        renderData: CardRenderer.builder((b) => {
          b.effect('For every step you raise Venus, add a microbe to this card.', (eb) => {
            eb.venus(1).startEffect.resource(CardResource.MICROBE);
          }).br;
          b.vpText('1 VP per 2 microbes on this card.').br;
        }),
        description: 'Requires 2 science tags.',
      },
    });
  }
  onGlobalParameterIncrease?(player: IPlayer, parameter: GlobalParameter, steps: number) {
    if (parameter === GlobalParameter.VENUS) {
      const qty = steps;
      player.addResourceTo(this, {qty, log: true});
    }
  }
}
