import {Tag} from '../../../../common/cards/Tag';
import {CardType} from '../../../../common/cards/CardType';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Card} from '../../Card';
import {IProjectCard} from '../../IProjectCard';

export class NovaFoundry extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.NOVA_FOUNDRY,
      tags: [Tag.SPACE],
      cost: 24,
      requirements: {tag: Tag.SCIENCE, count: 5},
      victoryPoints: 2,

      behavior: {
        titanumValue: 1,
        production: {titanium: 2, heat: 2},
      },

      metadata: {
        cardNumber: 'x363',
        renderData: CardRenderer.builder((b) => {
          b.effect('Your titanium resources are worth 1 M€ extra.', (eb) => {
            eb.empty().startEffect.plus().titanium(1);
          }).br;
          b.production((pb) => pb.titanium(2).br.heat(2));
        }),
        description: 'Requires 5 science tags. Increase your titanium production 2 steps and your heat production 2 steps.',
      },
    });
  }
}
