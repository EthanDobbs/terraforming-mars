import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {played} from '../Options';
import {Tag} from '../../../common/cards/Tag';
import {IPlayer} from '../../../server/IPlayer';
import {CardResource} from '../../../common/CardResource';

export class HabitatConservation extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.EVENT,
      name: CardName.HABITAT_CONSERVATION,
      tags: [Tag.ANIMAL],
      cost: 6,

      metadata: {
        cardNumber: 'x025',
        renderData: CardRenderer.builder((b) => {
          b.animals(1).slash().animals(1, {played}).asterix();
        }),
        description: 'Add an animal to every card you have that can contain animals.',
      },
    });
  }

  public override bespokePlay(player: IPlayer): undefined {
    for (const card of player.getResourceCards(CardResource.ANIMAL)){
      player.addResourceTo(card, {qty: 1, log: false});
    }
    return undefined;
  }
}
