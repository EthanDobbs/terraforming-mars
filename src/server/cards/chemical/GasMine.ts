import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {Tag} from '../../../common/cards/Tag';
import {ActivePreludeCard} from '../prelude2/ActivePreludeCard';
import {IProjectCard} from '../IProjectCard';
import {CardResource} from '../../../common/CardResource';

export class GasMine extends ActivePreludeCard implements IProjectCard{
  constructor() {
    super({
      name: CardName.GAS_MINE,
      tags: [Tag.JOVIAN],

      action: {
        or: {
          behaviors: [{
            stock: {heat: 2},
            title: 'Gain 2 heat',
          },
          {
            addResourcesToAnyCard: {type: CardResource.FLOATER, count: 1},
            title: 'Add a floater to ANY card.',
          }],
          autoSelect: true,
        },
      },

      behavior: {
        production: {megacredits: 2},
        stock: {megacredits: 6}
      },

      metadata: {
        cardNumber: 'xP47',
        renderData: CardRenderer.builder((b) => {
          b.action('Add a floater to ANY card or gain 2 heat.', (eb) => {
            eb.empty().startAction.floaters(1).asterix().slash().heat(2);
          }).br;
          b.production((pb) => pb.megacredits(2)).nbsp.megacredits(6);
        }),
        description: 'Increase your M€ production 2 steps and gain 6 M€.'
      },
    });
  }
}
