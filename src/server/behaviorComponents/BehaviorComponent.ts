import { OneOrArray } from '@/common/utils/types';
import {IPlayer} from '../IPlayer';
import {PlayerInput} from '../PlayerInput';
import { TRSource } from '@/common/cards/TRSource';
import { Units } from '@/common/Units';

export enum Priority {
  /** Used for Pathfinders. First thing a player must do before further effects. */
  DECLARE_CLONE_TAG,
  /** Cost of a blue card action, or paying Reds costs. Must happen before the effects. */
  COST,
  /** Any effect from one of your opponent's card that triggers during your turn. */
  OPPONENT_TRIGGER,

  /** When you must discard before you can draw. Making a determination that Sponsored Academies should come before Mars U. */
  SPONSORED_ACADEMIES,
  /** When you must discard before you can draw. Mars U, Ender (CEO). */
  DISCARD_AND_DRAW,
  DRAW_CARDS,
  BUILD_COLONY,
  INCREASE_COLONY_TRACK,
  PLACE_OCEAN_TILE,
  IDENTIFY_UNDERGROUND_RESOURCE,
  EXCAVATE_UNDERGROUND_RESOURCE,

  /** Anything that doesn't fit into another category. */
  DEFAULT,

  /** Effects that make your opponents lose resources or production. */
  ATTACK_OPPONENT,
  /** Effects that make you lose resource or production "as much as possible". Pharmacy Union, Mons. */
  LOSE_AS_MUCH_AS_POSSIBLE,
  GAIN_RESOURCE_OR_PRODUCTION,
  LOSE_RESOURCE_OR_PRODUCTION,
  DECREASE_COLONY_TRACK_AFTER_TRADE,
  DISCARD_CARDS,
  BACK_OF_THE_LINE,
}

/** The interface is how BehaviorComponent objects are referenced by everything except the Queue */
export interface IBehaviorComponent {
  CanExecute(player: IPlayer): boolean;
  GetTRSources?(player: IPlayer): OneOrArray<TRSource>;
  GetReserveUnits?(player: IPlayer): Units;
}

/** The parent class is referenced by the Queue */
export abstract class BehaviorComponent implements IBehaviorComponent {
  
  constructor(
    /** Priority determines the order in which behavior components are executed */
    public priority: Priority = Priority.DEFAULT,
  ) {}

  /** Executes the internal behavior of the component */
  protected abstract ExecuteBehavior(player: IPlayer): PlayerInput | undefined;

  /** If a player input is required, set the player WaitingFor. Can be overrided if multiple players must give inputs at the same time */
  public Run(player: IPlayer, cb: () => void) {
    const input = this.ExecuteBehavior(player);
    if (input) player.setWaitingFor(input, cb);
  }

  /** If the player can execute this particular component of behavior */
  public CanExecute(_player: IPlayer): boolean {
    return true;
  }
}