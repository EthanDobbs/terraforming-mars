import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {CardType} from '../../../../common/cards/CardType';
import {CardResource} from '../../../../common/CardResource';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {IPlayer} from '../../../IPlayer';
import {GlobalParameter} from '../../../../common/GlobalParameter';
import {Card} from '../../Card';

export class DesignedFlyers extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.DESIGNED_FLYERS,
      tags: [Tag.SCIENCE, Tag.ANIMAL, Tag.VENUS],
      cost: 9,

      resourceType: CardResource.ANIMAL,
      victoryPoints: {resourcesHere: 1},
      requirements: {tag: Tag.SCIENCE, count: 5},

      metadata: {
        cardNumber: 'x268',
        renderData: CardRenderer.builder((b) => {
          b.action('Add an animal to this card ONLY IF you\'ve raised Venus this generation (or if the parameter is maxed).', (eb) => {
            eb.plus().venus(1).asterix().nbsp.colon().nbsp.startAction.animals(1);
          }).br;
          b.vpText('1 VP for every animal on this card.');
        }),
        description: {
          text: 'Requires 5 science tags.',
          align: 'left',
        },
      },
    });
  }
  public canAct(player: IPlayer): boolean {
    return player.generationData.hasRaisedGlobalParameter[GlobalParameter.VENUS] || player.game.getVenusScaleLevel() === 30;
  }
  public action(player: IPlayer) {
    player.addResourceTo(this, 1);
  }
}
