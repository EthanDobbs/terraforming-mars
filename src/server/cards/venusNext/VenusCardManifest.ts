import {CardName} from '../../../common/cards/CardName';
import {CardManifest} from '../CardManifest';
import {AerialMappers} from './AerialMappers';
import {AerosportTournament} from './AerosportTournament';
import {AirScrappingStandardProject} from './AirScrappingStandardProject';
import {AirScrappingExpedition} from './AirScrappingExpedition';
import {Aphrodite} from './Aphrodite';
import {AtalantaPlanitiaLab} from './AtalantaPlanitiaLab';
import {Atmoscoop} from './Atmoscoop';
import {Celestic} from './Celestic';
import {CometForVenus} from './CometForVenus';
import {CorroderSuits} from './CorroderSuits';
import {DawnCity} from './DawnCity';
import {DeuteriumExport} from './DeuteriumExport';
import {Dirigibles} from './Dirigibles';
import {ExtractorBalloons} from './ExtractorBalloons';
import {Extremophiles} from './Extremophiles';
import {FloatingHabs} from './FloatingHabs';
import {ForcedPrecipitation} from './ForcedPrecipitation';
import {FreyjaBiodomes} from './FreyjaBiodomes';
import {GHGImportFromVenus} from './GHGImportFromVenus';
import {GiantSolarShade} from './GiantSolarShade';
import {Gyropolis} from './Gyropolis';
import {HydrogenToVenus} from './HydrogenToVenus';
import {IoSulphurResearch} from './IoSulphurResearch';
import {IshtarMining} from './IshtarMining';
import {JetStreamMicroscrappers} from './JetStreamMicroscrappers';
import {LocalShading} from './LocalShading';
import {LunaMetropolis} from './LunaMetropolis';
import {LuxuryFoods} from './LuxuryFoods';
import {Manutech} from './Manutech';
import {MaxwellBase} from './MaxwellBase';
import {MiningQuota} from './MiningQuota';
import {MorningStarInc} from './MorningStarInc';
import {NeutralizerFactory} from './NeutralizerFactory';
import {Omnicourt} from './Omnicourt';
import {OrbitalReflectors} from './OrbitalReflectors';
import {RotatorImpacts} from './RotatorImpacts';
import {SisterPlanetSupport} from './SisterPlanetSupport';
import {Solarnet} from './Solarnet';
import {SpinInducingAsteroid} from './SpinInducingAsteroid';
import {SponsoredAcademies} from './SponsoredAcademies';
import {Stratopolis} from './Stratopolis';
import {StratosphericBirds} from './StratosphericBirds';
import {SulphurEatingBacteria} from './SulphurEatingBacteria';
import {SulphurExports} from './SulphurExports';
import {TerraformingContract} from './TerraformingContract';
import {Thermophiles} from './Thermophiles';
import {VenusGovernor} from './VenusGovernor';
import {VenusianAnimals} from './VenusianAnimals';
import {VenusianInsects} from './VenusianInsects';
import {VenusianPlants} from './VenusianPlants';
import {VenusMagnetizer} from './VenusMagnetizer';
import {VenusSoils} from './VenusSoils';
import {VenusWaystation} from './VenusWaystation';
import {Viron} from './Viron';
import {WaterToVenus} from './WaterToVenus';
import {AirScrappingStandardProjectVariant} from './AirScrappingStandardProjectVariant';

export const VENUS_CARD_MANIFEST = new CardManifest({
  module: 'venus',
  projectCards: [
    {cardName: CardName.AERIAL_MAPPERS, Factory: AerialMappers},
    {cardName: CardName.AEROSPORT_TOURNAMENT, Factory: AerosportTournament},
    {cardName: CardName.AIR_SCRAPPING_EXPEDITION, Factory: AirScrappingExpedition},
    {cardName: CardName.ATALANTA_PLANITIA_LAB, Factory: AtalantaPlanitiaLab},
    {cardName: CardName.ATMOSCOOP, Factory: Atmoscoop},
    {cardName: CardName.COMET_FOR_VENUS, Factory: CometForVenus},
    {cardName: CardName.CORRODER_SUITS, Factory: CorroderSuits},
    {cardName: CardName.DAWN_CITY, Factory: DawnCity},
    {cardName: CardName.DEUTERIUM_EXPORT, Factory: DeuteriumExport},
    {cardName: CardName.DIRIGIBLES, Factory: Dirigibles},
    {cardName: CardName.EXTRACTOR_BALLOONS, Factory: ExtractorBalloons},
    {cardName: CardName.EXTREMOPHILES, Factory: Extremophiles},
    {cardName: CardName.FLOATING_HABS, Factory: FloatingHabs},
    {cardName: CardName.FORCED_PRECIPITATION, Factory: ForcedPrecipitation},
    {cardName: CardName.FREYJA_BIODOMES, Factory: FreyjaBiodomes},
    {cardName: CardName.GIANT_SOLAR_SHADE, Factory: GiantSolarShade},
    {cardName: CardName.GHG_IMPORT_FROM_VENUS, Factory: GHGImportFromVenus},
    {cardName: CardName.GYROPOLIS, Factory: Gyropolis},
    {cardName: CardName.HYDROGEN_TO_VENUS, Factory: HydrogenToVenus},
    {cardName: CardName.IO_SULPHUR_RESEARCH, Factory: IoSulphurResearch},
    {cardName: CardName.ISHTAR_MINING, Factory: IshtarMining},
    {cardName: CardName.JET_STREAM_MICROSCRAPPERS, Factory: JetStreamMicroscrappers},
    {cardName: CardName.LUNA_METROPOLIS, Factory: LunaMetropolis},
    {cardName: CardName.LOCAL_SHADING, Factory: LocalShading},
    {cardName: CardName.MAXWELL_BASE, Factory: MaxwellBase},
    {cardName: CardName.ROTATOR_IMPACTS, Factory: RotatorImpacts},
    {cardName: CardName.SISTER_PLANET_SUPPORT, Factory: SisterPlanetSupport},
    {cardName: CardName.SOLARNET, Factory: Solarnet},
    {cardName: CardName.SPIN_INDUCING_ASTEROID, Factory: SpinInducingAsteroid},
    {cardName: CardName.SPONSORED_ACADEMIES, Factory: SponsoredAcademies},
    {cardName: CardName.STRATOPOLIS, Factory: Stratopolis},
    {cardName: CardName.STRATOSPHERIC_BIRDS, Factory: StratosphericBirds},
    {cardName: CardName.SULPHUR_EATING_BACTERIA, Factory: SulphurEatingBacteria},
    {cardName: CardName.SULPHUR_EXPORTS, Factory: SulphurExports},
    {cardName: CardName.TERRAFORMING_CONTRACT, Factory: TerraformingContract},
    {cardName: CardName.THERMOPHILES, Factory: Thermophiles},
    {cardName: CardName.VENUS_GOVERNOR, Factory: VenusGovernor},
    {cardName: CardName.VENUSIAN_ANIMALS, Factory: VenusianAnimals},
    {cardName: CardName.VENUSIAN_INSECTS, Factory: VenusianInsects},
    {cardName: CardName.VENUSIAN_PLANTS, Factory: VenusianPlants},
    {cardName: CardName.VENUS_MAGNETIZER, Factory: VenusMagnetizer},
    {cardName: CardName.VENUS_SOILS, Factory: VenusSoils},
    {cardName: CardName.VENUS_WAYSTATION, Factory: VenusWaystation},
    {cardName: CardName.WATER_TO_VENUS, Factory: WaterToVenus},
    {cardName: CardName.LUXURY_FOODS, Factory: LuxuryFoods},
    {cardName: CardName.NEUTRALIZER_FACTORY, Factory: NeutralizerFactory},
    {cardName: CardName.ORBITAL_REFLECTORS, Factory: OrbitalReflectors},
    {cardName: CardName.OMNICOURT, Factory: Omnicourt},
    {cardName: CardName.MINING_QUOTA, Factory: MiningQuota},
  ],
  standardProjects: [
    {cardName: CardName.AIR_SCRAPPING_STANDARD_PROJECT, Factory: AirScrappingStandardProject},
    {cardName: CardName.AIR_SCRAPPING_STANDARD_PROJECT_VARIANT, Factory: AirScrappingStandardProjectVariant},
  ],

  corporationCards: [
    {cardName: CardName.APHRODITE, Factory: Aphrodite, compatibility: 'venus'},
    {cardName: CardName.CELESTIC, Factory: Celestic, compatibility: 'venus'},
    {cardName: CardName.MANUTECH, Factory: Manutech},
    {cardName: CardName.MORNING_STAR_INC, Factory: MorningStarInc, compatibility: 'venus'},
    {cardName: CardName.VIRON, Factory: Viron},
  ]});