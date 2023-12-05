import {IProjectCard} from '../../IProjectCard';
import {Card} from '../../Card';
import {CardName} from '../../../../common/cards/CardName';
import {CardType} from '../../../../common/cards/CardType';
import {Tag} from '../../../../common/cards/Tag';
import {CardRenderer} from '../../render/CardRenderer';
import {IPlayer} from '../../../IPlayer';
import {Resource} from '../../../../common/Resource';

export class AlchemicReactions extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.ALCHEMIC_REACTIONS,
      tags: [Tag.SCIENCE],
      cost: 11,
      requirements: {tag: Tag.SCIENCE, count: 5},

      metadata: {
        cardNumber: 'x193',
        renderData: CardRenderer.builder((b) => {
          b.action('Convert ALL your energy resources into titanium.', (eb) => {
            eb.text('X').energy(1).asterix().startAction.text('X').titanium(1);
          }).br;
        }),
        description: 'Requires 5 science tags.',
      },
    });
  }
  public canAct(player: IPlayer): boolean {
    return player.energy > 0;
  }
  public action(player: IPlayer) {
    player.stock.add(Resource.TITANIUM, player.stock.energy);
    player.stock.energy = 0;
    return undefined;
  }
}
