import {IPlayer} from '../../IPlayer';
import {CardRequirement} from './CardRequirement';
import {RequirementType} from '../../../common/cards/RequirementType';

export class RaisedTRRequirement extends CardRequirement {
  public readonly type = RequirementType.RAISED_TR;
  public satisfies(player: IPlayer) : boolean {
    return player.generationData.hasRaisedTR;
  }
}
