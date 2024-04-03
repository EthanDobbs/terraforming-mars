import { SelectMultipleAmounts } from './basicInputs/SelectMultipleAmounts';
import { ALL_RESOURCES, Resource } from '@/common/Resource';
import { ResourceSelection } from './selectables/ResourceSelection';
import { message } from '../logs/MessageBuilder';
import { IPlayer } from '../IPlayer';

export class SelectResources extends SelectMultipleAmounts<Resource> {
  constructor(
    player: IPlayer,
    total: number,
    units: Array<Resource> = ALL_RESOURCES,
  ) {
    const title = message('Select a total of ${0} resources to gain', (b) => b.number(total));
    super(new ResourceSelection(title, undefined, units), total, (amount, resource) => {
      player.stock.add(resource, amount, {log: true});
      return undefined;
    });
  }
}
