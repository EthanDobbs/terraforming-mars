import {Message} from '../common/logs/Message';
import {PlayerInputType} from '../common/input/PlayerInputType';
import {InputResponse} from '../common/inputs/InputResponse';
import {IPlayer} from './IPlayer';
import {PlayerInputModel} from '../common/models/PlayerInputModel';

export interface PlayerInput {
    type: PlayerInputType;
    buttonLabel: string;
    title: string | Message;
    /**
     * When false, this input should not be the default selected PlayerInput.
     * When unset or true, this input may be the default selected PlayerInput.
     *
     * Used only when this option is a child option of an OrOptions.
     */
    eligibleForDefault?: boolean;

    cb(...item: any): PlayerInput | undefined;

    /**
     * Converts this PlayerInput to the model received by the UI.
     */
    toModel(player: IPlayer): PlayerInputModel;

    /**
     * Processes and validates `response` for this PlayerInput which is meant for the given `player`.
     *
     * This is another mechainsm for calling cb() with a client-side response.
     */
    process(response: InputResponse, player: IPlayer): PlayerInput | undefined;
}

export abstract class BasePlayerInput<T> implements PlayerInput {
  public readonly type: PlayerInputType;
  public buttonLabel: string = 'Save';
  public title: string | Message;
  public cb: (param: T) => PlayerInput | undefined = () => undefined;
  public eligibleForDefault: boolean | undefined = undefined;

  public abstract toModel(player: IPlayer): PlayerInputModel;
  public abstract process(response: InputResponse, player: IPlayer): PlayerInput | undefined;

  constructor(type: PlayerInputType, title: string | Message = '') {
    this.type = type;
    this.title = title;
  }

  public andThen(cb: (param: T) => PlayerInput | undefined): this {
    this.cb = cb;
    return this;
  }

  public ResponseAsType<T extends InputResponse>(response: InputResponse): T {
    try {
      return response as T;
    } catch {
      throw new Error('Invalid Response');
    }
  }
}
