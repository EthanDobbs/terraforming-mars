import {CardName} from '../../../common/cards/CardName';
import {ModuleManifest} from '../ModuleManifest';
import {Overgrowth} from './Overgrowth';
import {Wildfires} from './Wildfires';
import {AsteroidMiningExpedition} from './AsteroidMiningExpedition';
import {ArtificialAsteroid} from './ArtificialAsteroid';
import {TemporarySmeltingPlant} from './TemporarySmeltingPlant';
import {EcologicalShipment} from './EcologicalShipment';
import {OxygenShipment} from './OxygenShipment';
import {CondensedGasConvoy} from './CondensedGasConvoy';
import {ImportedFuel} from './ImportedFuel';

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
    [CardName.ECOLOGICAL_SHIPMENT]: {Factory: EcologicalShipment},
    [CardName.OXYGEN_SHIPMENT]: {Factory: OxygenShipment},
    [CardName.CONDENSED_GAS_CONVOY]: {Factory: CondensedGasConvoy},
    [CardName.IMPORTED_FUEL]: {Factory: ImportedFuel},
  },
});
