import {GlobalParameter} from '../../common/GlobalParameter';
import {Resource} from '../../common/Resource';

export class GenerationData {
  public hasRaisedTR = false;
  public hasRaisedGlobalParameter = {
    [GlobalParameter.TEMPERATURE]: false,
    [GlobalParameter.OXYGEN]: false,
    [GlobalParameter.VENUS]: false,
  };
    // Project Advancement
  public hasRaisedProduction = {
    [Resource.MEGACREDITS]: false,
    [Resource.STEEL]: false,
    [Resource.TITANIUM]: false,
    [Resource.PLANTS]: false,
    [Resource.ENERGY]: false,
    [Resource.HEAT]: false,
  };
}
