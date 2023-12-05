import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {IPlayer} from '../../../IPlayer';
import {Card} from '../../Card';

export class SponsoredResearchFirm extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.SPONSORED_RESEARCH_FIRM,
      tags: [Tag.SCIENCE, Tag.BUILDING],
      cost: 14,

      behavior: {
        production: {megacredits: 1},
      },

      requirements: {tag: Tag.EARTH, count: 2},

      metadata: {
        cardNumber: 'x197',
        renderData: CardRenderer.builder((b) => {
          b.action('Draw a card ONLY IF you\'ve raised your TR this generation.', (eb) => {
            eb.plus().tr(1).asterix().nbsp.colon().nbsp.startAction.cards(1);
          }).br;
          b.production((pb) => pb.megacredits(1)).br;
        }),
        description: 'Requires 2 Earth tags. Increase your M€ production 1 step.',
      },
    });
  }
  public data = {
    lastGenerationIncreasedTR: -1,
  }
  onIncreaseTerraformRating(player: IPlayer, cardOwner: IPlayer): void {
    if (player.id === cardOwner.id) {
      this.data.lastGenerationIncreasedTR = player.game.generation;
    }
  }
  public canAct(player: IPlayer): boolean {
    return this.data.lastGenerationIncreasedTR === player.game.generation;
  }
  public action(player: IPlayer) {
    player.drawCard(1);
  }
}
