import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {IPlayer} from '../../IPlayer';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {AltSecondaryTag} from '../../../common/cards/render/AltSecondaryTag';

export class CuttingEdgeTechnologyChemical extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.CUTTING_EDGE_TECHNOLOGY_CHEMICAL,
      tags: [Tag.SCIENCE],
      cost: 17,
      victoryPoints: 1,

      metadata: {
        cardNumber: 'xR24',
        renderData: CardRenderer.builder((b) => {
          b.effect('When playing a card with a requirement, you pay 2 M€ less for it.', (eb) => {
            eb.cards(1, {secondaryTag: AltSecondaryTag.REQ}).startEffect.megacredits(-2);
          });
        }),
      },
    });
  }

  public override getCardDiscount(_player: IPlayer, card: IProjectCard) {
    return card.requirements.length > 0 ? 2 : 0;
  }
}
