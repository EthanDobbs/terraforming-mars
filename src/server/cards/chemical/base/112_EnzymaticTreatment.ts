import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {IPlayer} from '../../../IPlayer';
import {Resource} from '../../../../common/Resource';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {digit} from '../../Options';

export class EnzymaticTreatment extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.ENZYMATIC_TREATMENT,
      cost: 7,

      metadata: {
        cardNumber: 'xB112',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.plants(1).nbsp.or().br;
            pb.tag(Tag.PLANT, {amount: 2, digit}).colon().nbsp.plants(2, {digit});
          });
        }),
        description: 'Increase your plant production 1 step, or 2 steps if you have 2 plant tags.',
      },
    });
  }

  public override bespokePlay(player: IPlayer) {
    if (player.tags.count(Tag.PLANT) < 2) {
      player.production.add(Resource.PLANTS, 1, {log: true});
    } else {
      player.production.add(Resource.PLANTS, 2, {log: true});
    }
    return undefined;
  }
}
