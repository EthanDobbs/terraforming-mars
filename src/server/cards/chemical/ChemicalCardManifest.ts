import {CardName} from '../../../common/cards/CardName';
import {ModuleManifest} from '../ModuleManifest';
import {Overgrowth} from './Overgrowth';
import {Wildfires} from './Wildfires';
import {AsteroidMiningExpedition} from './AsteroidMiningExpedition';
import {ArtificialAsteroid} from './ArtificialAsteroid';
import {TemporarySmeltingPlant} from './TemporarySmeltingPlant';

export const CHEMICAL_CARD_MANIFEST = new ModuleManifest({
  module: 'chemical',
  corporationCards: {

  },
  preludeCards: {
    
  },
  projectCards: {
    [CardName.OVERGROWTH]: {Factory: Overgrowth},
    [CardName.WILDFIRES]: {Factory: Wildfires},
    [CardName.ASTEROID_MINING_EXPEDITION]: {Factory: AsteroidMiningExpedition},
    [CardName.ARTIFICIAL_ASTEROID]: {Factory: ArtificialAsteroid},
    [CardName.TEMPORARY_SMELTING_PLANT]: {Factory: TemporarySmeltingPlant},
  },
});
