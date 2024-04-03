import {IPlayer} from '../IPlayer';
import { ResourceSelection } from './selectables/ResourceSelection';
import { ALL_RESOURCES, Resource } from '@/common/Resource';
import { SelectMultipleAmounts } from './basicInputs/SelectMultipleAmounts';
import { message } from '../logs/MessageBuilder';

export class SelectProductionToLose extends SelectMultipleAmounts<Resource> {
  constructor(
    player: IPlayer,
    total: number,
    units: Array<Resource> = ALL_RESOURCES,
  ) {
    const title = message('Select how to lose a total of ${0} production', (b) => b.number(total));
    super(
      new ResourceSelection(title, undefined, units),
      total,
      (amount, resource) => {
        player.production.add(resource, -amount, {log: true})
        return undefined;
      }
    );
  }
}
