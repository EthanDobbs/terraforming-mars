import {ICard} from '../ICard';
import {IProjectCard} from '../IProjectCard';
import {CardType} from '../../../common/cards/CardType';
import {PlayerInput} from '../../PlayerInput';
import {IPlayer} from '../../IPlayer';

export interface IPreludeCard extends IProjectCard {
  startingMegaCredits: number;
  type: CardType.PRELUDE;

  initialAction?(player: IPlayer): PlayerInput | undefined;
}

export function isPreludeCard(card: ICard): card is IPreludeCard {
  return card.type === CardType.PRELUDE;
}
