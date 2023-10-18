import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardResource} from '../../../common/CardResource';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {IPlayer} from '../../IPlayer';
import {SelectOption} from '../../inputs/SelectOption';
import {OrOptions} from '../../inputs/OrOptions';
import {Resource} from '../../../common/Resource';

export class Aquaponics extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.AQUAPONICS,
      tags: [Tag.ANIMAL, Tag.BUILDING],
      cost: 9,

      requirements: [{tag: Tag.PLANT}, {tag: Tag.ANIMAL}, {tag: Tag.MICROBE}],
      resourceType: CardResource.ANIMAL,
      victoryPoints: 1,

      metadata: {
        cardNumber: 'x062',
        renderData: CardRenderer.builder((b) => {
          b.action('Add 1 animal to this card.', (eb) => {
            eb.empty().startAction.animals(1);
          }).br;
          b.or().br;
          b.action('Gain 1MC for each animal here.', (eb) => {
            eb.empty().startAction.animals(1).slash().megacredits(1);
          }).br;
        }),
        description: 'Requires that you have a plant tag, an animal tag, and a microbe tag'
      },
    });
  }
  public canAct(): boolean {
    return true;
  }

  public action(player: IPlayer) {
    const opts: Array<SelectOption> = [];

    if (this.resourceCount > 0) {
      opts.push(new SelectOption('Gain 1MC for each animal here', 'Gain MC').andThen( () => {
        player.stock.add(Resource.MEGACREDITS, this.resourceCount, {log: true});
        return undefined;
      }));
      opts.push(new SelectOption('Add 1 animal to this card', 'Add animal').andThen( () => {
        player.addResourceTo(this, {log: true});
        return undefined;
      }));
    } else {
      player.addResourceTo(this, {log: true});
      return undefined;
    }

    return new OrOptions(...opts);
  }
}
