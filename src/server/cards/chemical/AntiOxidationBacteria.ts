import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {IPlayer} from '../../IPlayer';
import {CardName} from '../../../common/cards/CardName';
import {CardResource} from '../../../common/CardResource';
import {SimpleDeferredAction} from '../../deferredActions/DeferredAction';
import {CardRenderer} from '../render/CardRenderer';
import {Resource} from '../../../common/Resource';
import {OrOptions} from '../../inputs/OrOptions';
import {SelectOption} from '../../inputs/SelectOption';
import {Size} from '../../../common/cards/render/Size';
import {played} from '../Options';

export class AntiOxidationBacteria extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.ANTI_OXIDATION_BACTERIA,
      tags: [Tag.MICROBE],
      cost: 8,
      requirements: {oxygen: 2},
      resourceType: CardResource.MICROBE,
      victoryPoints: 1,

      metadata: {
        cardNumber: 'x045',
        renderData: CardRenderer.builder((b) => {
          b.building(1, {played}).colon().microbes(1).or(Size.SMALL).minus().microbes(1).plus().production((pb) => pb.megacredits(1)).br;
          b.description('When you play a building tag, either add a microbe to this card or remove a microbe from this card to increase your M€ production 1 step.').br;
        }),
        description: 'Requires 2% oxygen.'
      },
    });
  }
  public onCardPlayed(player: IPlayer, card: IProjectCard) {
    if (card.tags.includes(Tag.BUILDING) === false) {
      return undefined;
    }
    if (this.resourceCount === 0) {
      player.addResourceTo(this);
      return undefined;
    }
  
    const addResource = new SelectOption('Add a microbe resource to Anti-Oxidation Bacteria', 'Add microbe').andThen( () => {
      player.addResourceTo(this);
      return undefined;
    });

    const spendResource = new SelectOption('Remove 1 microbe from Anti-Oxidation Bacteria and increase M€ production 1 step', 'Remove microbe').andThen( () => {
      player.removeResourceFrom(this, 1);
      player.production.add(Resource.MEGACREDITS, 1);
      return undefined;
    });

    player.game.defer(new SimpleDeferredAction(player,() => new OrOptions(spendResource, addResource)));
    return undefined;
  }
}
