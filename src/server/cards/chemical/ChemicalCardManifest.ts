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
import { FloatingWeatherProbes } from './FloatingWeatherProbes';
import { ProductionDrones } from './ProductionDrones';
import { JovianBacteria } from './JovianBacteria';
import { Termites } from './Termites';
import { MimicryArchea } from './MimicryArchea';
import { MyceliumFungi } from './MyceliumFungi';
import { Macroplankton } from './Macroplankton';
import { WaterSplittingMicrobes } from './WaterSplittingMicrobes';
import { AntiOxidationBacteria } from './AntiOxidationBacteria';
import { ThallophyteProtists } from './ThallophyteProtists';
import { EnzymeConstructors } from './EnzymeConstructors';
import { LatticeConstructionMicrobes } from './LatticeConstructionMicrobes';
import { ElectroplaqueMicrobes } from './ElectroplaqueMicrobes';
//import { LargeAquaticMammals } from './LargeAquaticMammals';
import { TundraWildlife } from './TundraWildlife';
import { Poultry } from './Poultry';
import { FishFarmingLake } from './FishFarmingLake';
import { NonHypoxicSmallAnimals } from './NonHypoxicSmallAnimals';
import { SubterranianCreatures } from './SubterranianCreatures';
import { AridRegionReptiles } from './AridRegionReptiles';
import { AntarcticKrill } from './AntarcticKrill';
import { AncientArthopods } from './AncientArthropods';
import { HabitatDomes } from './HabitatDomes';
import { Aquaponics } from './Aquaponics';
//import { Cephalopods } from './Cephalopods';
//import { EndangeredSpeciesRefuge } from './EndangeredSpeciesRefuge';

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
    [CardName.M_TYPE_ASTEROID_MINING]: {Factory: MTypeAsteroidMining},
    [CardName.FLOATING_WEATHER_PROBES]: {Factory: FloatingWeatherProbes},
    [CardName.PRODUCTION_DRONES]: {Factory: ProductionDrones},
    [CardName.JOVIAN_BACTERIA]: {Factory: JovianBacteria},
    [CardName.TERMITES]: {Factory: Termites},
    [CardName.MIMICRY_ARCHEA]: {Factory: MimicryArchea},
    [CardName.MYCELIUM_FUNGI]: {Factory: MyceliumFungi},
    [CardName.MACROPLANKTON]: {Factory: Macroplankton},
    [CardName.WATER_SPLITTING_MICROBES]: {Factory: WaterSplittingMicrobes},
    [CardName.ANTI_OXIDATION_BACTERIA]: {Factory: AntiOxidationBacteria},
    [CardName.THALLOPHYTE_PROTISTS]: {Factory: ThallophyteProtists},
    [CardName.ENZYME_CONSTRUCTORS]: {Factory: EnzymeConstructors},
    [CardName.LATTICE_CONSTRUCTION_MICROBES]: {Factory: LatticeConstructionMicrobes},
    [CardName.ELECTROPLAQUE_MICROBES]: {Factory: ElectroplaqueMicrobes},
    //[CardName.LARGE_AQUATIC_MAMMALS]: {Factory: LargeAquaticMammals},
    [CardName.TUNDRA_WILDLIFE]: {Factory: TundraWildlife},
    [CardName.POULTRY]: {Factory: Poultry},
    [CardName.FISH_FARMING_LAKE]: {Factory: FishFarmingLake},
    //[CardName.CEPHALOPODS]: {Factory: Cephalopods},
    //[CardName.ENDANGERED_SPECIES_REFUGE]: {Factory: EndangeredSpeciesRefuge},
    [CardName.NON_HYPOXIC_SMALL_ANIMALS]: {Factory: NonHypoxicSmallAnimals},
    [CardName.SUBTERRANEAN_CREATURES]: {Factory: SubterranianCreatures},
    [CardName.ARID_REGION_REPTILES]: {Factory: AridRegionReptiles},
    [CardName.ANTARCTIC_KRILL]: {Factory: AntarcticKrill},
    [CardName.ANCIENT_ARTHROPODS]: {Factory: AncientArthopods},
    [CardName.HABITAT_DOMES]: {Factory: HabitatDomes},
    [CardName.AQUAPONICS]: {Factory: Aquaponics},
  },
});
