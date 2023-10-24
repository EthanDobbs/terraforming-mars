import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';
import {all} from '../Options';

export class LegalFirm extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.LEGAL_FIRM,
      cost: 5,
      tags: [Tag.EARTH],

      metadata: {
        cardNumber: 'x402',
        renderData: CardRenderer.builder((b) => {
          b.effect('When ANOTHER PLAYER removes your resources or lowers your production, steal 3MC from THAT PLAYER.',
            (eb) => eb.minus().wild(1).slash().production((pb) => pb.wild(1)).startEffect.text('Steal').megacredits(3, {all}).asterix())
        }),
      },
    });
  }
  //effect handled in Player.ts, Production.ts, and Stock.ts
}
