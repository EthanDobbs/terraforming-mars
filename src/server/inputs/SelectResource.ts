import { Resource } from '@/common/Resource';
import {Message} from '../../common/logs/Message';
import { SelectOne } from './basicInputs/SelectOne';
import { ResourceSelection } from './selectables/ResourceSelection';

export class SelectResource extends SelectOne<Resource> {
  constructor(
    title: string | Message,
    buttonLabel: string = 'Save',
    public readonly resources: Array<Resource>,
  ) {
    super(new ResourceSelection(title, buttonLabel, resources));
  }
}