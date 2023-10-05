import {CardName} from '../../../common/cards/CardName';
import {ModuleManifest} from '../ModuleManifest';
import {Overgrowth} from './Overgrowth';

export const CHEMICAL_CARD_MANIFEST = new ModuleManifest({
  module: 'chemical',
  corporationCards: {

  },
  preludeCards: {
    
  },
  projectCards: {
    [CardName.OVERGROWTH]: {Factory: Overgrowth},
  },
});
