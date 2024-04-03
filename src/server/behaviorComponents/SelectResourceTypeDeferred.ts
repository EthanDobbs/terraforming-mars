import {Resource} from '../../common/Resource';
import {OrOptions} from '../inputs/basicInputs/OrOptions';
import {SelectOption} from '../inputs/selectables/GenericSelection';
import {IPlayer} from '../IPlayer';
import {DeferredAction, Priority} from './BehaviorComponent';

export class SelectResourceTypeDeferred extends DeferredAction<Resource> {
  constructor(
    player: IPlayer,
    public resources: ReadonlyArray<Resource>,
    public title: string,
  ) {
    super(player, Priority.DEFAULT);
  }

  public execute() {
    const orOptions = new OrOptions();
    orOptions.title = this.title;
    orOptions.options = this.resources.map((resource) => {
      return new SelectOption(resource, 'OK').andThen(() => {
        this.cb(resource);
        return undefined;
      });
    });
    if (orOptions.options.length === 0) {
      return undefined;
    }
    if (orOptions.options.length === 1) {
      orOptions.options[0].cb();
      return undefined;
    }
    return orOptions;
  }
}
