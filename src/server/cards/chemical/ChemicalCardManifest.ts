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
import {PanspermicAsteroid} from './PanspermicAsteroid';
import {InstantiatedSolarFlare} from './InstantiatedSolarFlare';
import {HighSpeedComet} from './HighSpeedComet';
import {TitaniumComet} from './TitaniumComet';
import {GiantCarbonateAsteroid} from './GiantCarbonateAsteroid';
import {CarbonateAsteroid} from './CarbonateAsteroid';
import {AcceleratedImpactor} from './AcceleratedImpactor';
import {IronRichAsteroid} from './IronRichAsteroid';
import {MinorImpactor} from './MinorImpactor';
import {ConvoyFromTitan} from './ConvoyFromTitan';
import { HydrogenFromSaturn } from './HydrogenFromSaturn';
import { ExpeditionToDione } from './ExpeditionToDione';
import { LargeThermalDetonator } from './LargeThermalDetonator';
import { SubcrustVaporTrapping } from './SubcrustVaporTrapping';
import { CyanobacteriaBloom } from './CyanobacteriaBloom';
import { HabitatConservation } from './HabitatConservation';
import { ArchivalStudies } from './ArchivalStudies';
import { Overclock } from './Overclock';
import { AsteroidStudy } from './AsteroidStudy';
import { NitrogenAsteroids } from './NitrogenAsteroids';
import { OxygenatedComets } from './OxygenatedComets';
import { KuiperBeltIceAsteroids } from './KuiperBeltIceAsteroids';
import { CeresMiningOperations } from './CeresMiningOperations';
import { AmmoniaHeavyAsteroids } from './AmmoniaHeavyAsteroids';
import { MTypeAsteroidMining } from './MTypeAsteroidMining';

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
    [CardName.PANSPERMIC_ASTEROID]: {Factory: PanspermicAsteroid},
    [CardName.INSTANTIATED_SOLAR_FLARE]: {Factory: InstantiatedSolarFlare},
    [CardName.HIGH_SPEED_COMET]: {Factory: HighSpeedComet},
    [CardName.TITANIUM_COMET]: {Factory: TitaniumComet},
    [CardName.GIANT_CARBONATE_ASTEROID]: {Factory: GiantCarbonateAsteroid},
    [CardName.CARBONATE_ASTEROID]: {Factory: CarbonateAsteroid},
    [CardName.ACCELERATED_IMPACTOR]: {Factory: AcceleratedImpactor},
    [CardName.IRON_RICH_ASTEROID]: {Factory: IronRichAsteroid},
    [CardName.MINOR_IMPACTOR]: {Factory: MinorImpactor},
    [CardName.CONVOY_FROM_TITAN]: {Factory: ConvoyFromTitan},
    [CardName.HYDROGEN_FROM_SATURN]: {Factory: HydrogenFromSaturn},
    [CardName.EXPEDITION_TO_DIONE]: {Factory: ExpeditionToDione},
    [CardName.LARGE_THERMAL_DETONATOR]: {Factory: LargeThermalDetonator},
    [CardName.SUBCRUST_VAPOR_TRAPPING]: {Factory: SubcrustVaporTrapping},
    [CardName.CYANOBACTERIA_BLOOM]: {Factory: CyanobacteriaBloom},
    [CardName.HABITAT_CONSERVATION]: {Factory: HabitatConservation},
    [CardName.ARCHIVAL_STUDIES]: {Factory: ArchivalStudies},
    [CardName.OVERCLOCK]: {Factory: Overclock},
    [CardName.ASTEROID_STUDY]: {Factory: AsteroidStudy},
    [CardName.NITROGEN_ASTEROIDS]: {Factory: NitrogenAsteroids},
    [CardName.OXYGENATED_COMETS]: {Factory: OxygenatedComets},
    [CardName.KUIPER_BELT_ICE_ASTEROIDS]: {Factory: KuiperBeltIceAsteroids},
    [CardName.CERES_MINING_OPERATIONS]: {Factory: CeresMiningOperations},
    [CardName.AMMONIA_HEAVY_ASTEROIDS]: {Factory: AmmoniaHeavyAsteroids},
    [CardName.M_TYPE_ASTEROID_MINING]: {Factory:MTypeAsteroidMining},
  },
});
