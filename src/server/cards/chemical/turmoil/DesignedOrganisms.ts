import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {CardType} from '../../../../common/cards/CardType';
import {CardResource} from '../../../../common/CardResource';
import {Resource} from '../../../../common/Resource';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {all} from '../../Options';
import {IPlayer} from '../../../IPlayer';
import {GlobalParameter} from '../../../../common/GlobalParameter';
import {Card} from '../../Card';
import {MAX_OXYGEN_LEVEL} from '../../../../common/constants';

export class DesignedOrganisms extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.DESIGNED_ORGANISMS_CHEMICAL,
      tags: [Tag.SCIENCE, Tag.ANIMAL],
      cost: 11,

      behavior: {
        decreaseAnyProduction: {type: Resource.PLANTS, count: 1},
      },

      resourceType: CardResource.ANIMAL,
      victoryPoints: {resourcesHere: 1},
      requirements: {tag: Tag.SCIENCE, count: 4},

      metadata: {
        cardNumber: 'x268',
        renderData: CardRenderer.builder((b) => {
          b.action('Draw a card and add an animal to this card ONLY IF you\'ve raised the oxygen this generation (or if the parameter is maxed).', (eb) => {
            eb.plus().oxygen(1).asterix().nbsp.colon().nbsp.startAction.cards(1).animals(1);
          }).br;
          b.production((pb) => pb.minus().plants(1, {all})).br;
          b.vpText('1 VP for every animal on this card.');
        }),
        description: {
          text: 'Requires 4 science tags. Decease any plant production 1 step.',
          align: 'left',
        },
      },
    });
  }
  public canAct(player: IPlayer): boolean {
    return player.generationData.hasRaisedGlobalParameter[GlobalParameter.OXYGEN] || player.game.getOxygenLevel() === MAX_OXYGEN_LEVEL;
  }
  public action(player: IPlayer) {
    player.addResourceTo(this, 1);
    player.drawCard(1);
  }
}
