import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardResource} from '../../../common/CardResource';
import {Space} from '../../boards/Space';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import { Board } from '../../boards/Board';
import {IPlayer} from '../../IPlayer';
import {GlobalParameter} from '../../../common/GlobalParameter';

export class AdaptiveBiotics extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.ACTIVE,
      name: CardName.ADAPTIVE_BIOTICS,
      tags: [Tag.SCIENCE, Tag.ANIMAL],
      cost: 15,

      resourceType: CardResource.ANIMAL,
      victoryPoints: {resourcesHere: {}, per: 2},
      requirements: {tag: Tag.SCIENCE, count: 2},

      metadata: {
        cardNumber: 'x058',
        renderData: CardRenderer.builder((b) => {
          b.effect('For every step you raise the temperature or oxygen, and for every ocean tile you place, add an animal to this card', (eb) => {
            eb.temperature(1).slash().oxygen(1).slash().oceans(1).startEffect.animals(1);
          }).br;
          b.vpText('1 VP for every 2 animals on this card.');
        }),
        description: 'Requires 2 science tags.'
      },
    });
  }

  onGlobalParameterIncrease?(player: IPlayer, parameter: GlobalParameter, steps: number) {
    if (parameter === GlobalParameter.TEMPERATURE || parameter === GlobalParameter.OXYGEN) {
      const qty = steps;
      player.addResourceTo(this, {qty, log: true});
    }
  }

  public onTilePlaced(cardOwner: IPlayer, _activePlayer: IPlayer, space: Space) {
    if (Board.isUncoveredOceanSpace(space)) {
      cardOwner.addResourceTo(this, {log: true});
    }
  }
}
