import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {PreludeCard} from '../../prelude/PreludeCard';
import {IProjectCard} from '../../IProjectCard';
import {Tag} from '../../../../common/cards/Tag';
import {IPlayer} from '../../../IPlayer';
import {CardResource} from '../../../../common/CardResource';

export class EcologicalReserve extends PreludeCard implements IProjectCard {
  constructor() {
    super({
      name: CardName.ECOLOGICAL_RESERVE,
      tags: [Tag.ANIMAL],
      victoryPoints: {resourcesHere: {}, per: 2},
      resourceType: CardResource.ANIMAL,

      behavior: {
        production: {plants: 1},
        stock: {plants: 2},
      },

      metadata: {
        cardNumber: 'xP22',
        renderData: CardRenderer.builder((b) => {
          b.effect('When you play an animal or plant tag, including this, add an animal to this card.', (eb) => {
            eb.tag(Tag.ANIMAL).slash().tag(Tag.PLANT).startEffect.resource(CardResource.ANIMAL);
          }).br;
          b.vpText('1 VP per 2 animals on this card.').br;
          b.production((pb) => pb.plants(1)).plants(2);
        }),
        description: 'Increase your plant production 1 step and gain 2 plants.',
      },
    });
  }
  public onCardPlayed(player: IPlayer, card: IProjectCard): void {
    const qty = player.tags.cardTagCount(card, [Tag.ANIMAL, Tag.PLANT]);
    player.addResourceTo(this, {qty, log: true});
  }
}
