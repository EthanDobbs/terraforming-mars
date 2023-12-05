import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {Card} from '../../Card';
import {CardType} from '../../../../common/cards/CardType';
import {IPlayer} from '../../../IPlayer';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';

export class TechnologyExhibition extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.TECHNOLOGY_EXHIBITION,
      tags: [Tag.SCIENCE],
      cost: 3,

      behavior: {
        drawCard: 2,
      },

      metadata: {
        cardNumber: 'x177',
        renderData: CardRenderer.builder((b) => {
          b.minus().energy(2).nbsp.cards(2);
        }),
        description: 'Lose 2 energy and draw 2 cards.',
      },
    });
  }

  public override bespokeCanPlay(player: IPlayer): boolean {
    return player.energy >= 2;
  }
  public override bespokePlay(player: IPlayer) {
    player.energy -= 2;
    return undefined;
  }
}
