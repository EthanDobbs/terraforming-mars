import {CardName} from '../../../common/cards/CardName';
import {GlobalEventName} from '../../../common/turmoil/globalEvents/GlobalEventName';
import {ModuleManifest} from '../ModuleManifest';
import {SubcrustVaporTrapping} from './base/1_SubcrustVaporTrapping';
import {ConvoyFromTitan} from './base/2_ConvoyFromTitan';
import {HighSpeedComet} from './base/3_HighSpeedComet';
import {TitaniumComet} from './base/4_TitaniumComet';
import {ExpeditionToDione} from './base/5_ExpeditionToDione';
import {LargeThermalDetonator} from './base/6_LargeThermalDetonator';
import {HydrogenFromSaturn} from './base/7_HydrogenFromSaturn';
import {GiantCarbonateAsteroid} from './base/8_GiantCarbonateAsteroid';
import {CarbonateAsteroid} from './base/9_CarbonateAsteroid';
import {ArtificialAsteroid} from './base/10_ArtificialAsteroid';
import {InstantiatedSolarFlare} from './base/11_InstantiatedSolarFlare';
import {AcceleratedImpactor} from './base/12_AcceleratedImpactor';
import {IronRichAsteroid} from './base/13_IronRichAsteroid';
import {Overgrowth} from './base/14_Overgrowth';
import {CondensedGasConvoy} from './base/15_CondensedGasConvoy';
import {TemporarySmeltingPlant} from './base/16_TemporarySmeltingPlant';
import {CyanobacteriaBloom} from './base/17_CyanobacteriaBloom';
import {OxygenShipment} from './base/18_OxygenShipment';
import {SpecialAerosols} from './base/19_SpecialAerosols';
import {ImportedFuel} from './base/20_ImportedFuel';
import {AsteroidMiningExpedition} from './base/21_AsteroidMiningExpedition';
import {LowlandExpedition} from './base/22_LowlandExpedition';
import {PowerSurge} from './base/23_PowerSurge';
import {MinorImpactor} from './base/24_MinorImpactor';
import {ControlledBurn} from './base/25_ControlledBurn';
import {EcologicalShipment} from './base/26_EcologicalShipment';
import {PanspermiaSurvey} from './base/27_PanspermiaSurvey';
import {HabitatConservation} from './base/28_HabitatConservation';
import {AsteroidStudy} from './base/29_AsteroidStudy';
import {NitrogenAsteroids} from './base/30_NitrogenAsteroids';
import {OxygenatedComets} from './base/31_OxygenatedComets';
import {KuiperBeltIceAsteroids} from './base/32_KuiperBeltIceAsteroids';
import {CeresMiningOperations} from './base/33_CeresMiningOperations';
import {AmmoniaHeavyAsteroids} from './base/34_AmmoniaHeavyAsteroids';
import {MTypeAsteroidMining} from './base/35_MTypeAsteroidMining';
import {FloatingWeatherProbes} from './base/36_FloatingWeatherProbes';
import {ProductionDrones} from './base/37_ProductionDrones';
import {EuropanBacteria} from './base/38_EuropanBacteria';
import {Termites} from './base/39_Termites';
import {MartianThermophiles} from './base/40_MartianThermophiles';
import {MimicryArchaea} from './base/41_MimicryArchaea';
import {Macroplankton} from './base/42_Macroplankton';
import {WaterSplittingMicrobes} from './base/43_WaterSplittingMicrobes';
import {HalogenReconstructors} from './base/44_HalogenReconstructors';
import {AntiOxidationBacteria} from './base/45_AntiOxidationBacteria';
import {ThallophyteProtists} from './base/46_ThallophyteProtists';
import {CarbonLatticeMicrobes} from './base/47_CarbonLatticeMicrobes';
import {ElectroplaqueMicrobes} from './base/48_ElectroplaqueMicrobes';
import {LargeAquaticMammals} from './base/49_LargeAquaticMammals';
import {TundraWildlife} from './base/50_TundraWildlife';
import {Raptors} from './base/51_Raptors';
import {FishFarmingLake} from './base/52_FishFarmingLake';
import {Cephalopods} from './base/53_Cephalopods';
import {EndangeredSpeciesRefuge} from './base/54_EndangeredSpeciesRefuge';
import {NonHypoxicSmallAnimals} from './base/55_NonHypoxicSmallAnimals';
import {SubterranianCreatures} from './base/56_SubterranianCreatures';
import {AntarcticKrill} from './base/57_AntarcticKrill';
import {AncientArthopods} from './base/58_AncientArthropods';
import {AdaptiveBiotics} from './base/59_AdaptiveBiotics';
import {HabitatDomes} from './base/60_HabitatDomes';
import {Aquaponics} from './base/61_Aquaponics';
import {SprawlingCity} from './base/62_SprawlingCity';
import {ImperativeSettlement} from './base/63_ImperativeSettlement';
import {EcoCentral} from './base/64_EcoCentral';
import {Canals} from './base/65_Canals';
import {FreightShuttles} from './base/66_FreightShuttles';
import {SiliconFactory} from './base/67_SiliconFactory';
import {AluminumFoundry} from './base/68_AluminumFoundry';
import {ThawMining} from './base/69_ThawMining';
import {EcologicalContract} from './base/70_EcologicalContract';
import {AdvancedGeneticAdaption} from './base/71_AdvancedGeneticAdaption';
//import {EssentialSymbiotics} from './base/72_EssentialSymbiotics';
import {MicrobeCultivationFacility} from './base/73_MicrobeCultivationFacility';
import {Biodomes} from './base/74_Biodomes';
import {BiomassReactor} from './base/75_BiomassReactor';
import {LocalTemperatureControl} from './base/76_LocalTemperatureControl';
import {CO2Vents} from './base/77_CO2Vents';
import {RegolithTreatment} from './base/78_RegolithTreatment';
import {EuropaWaterSplitting} from './base/79_EuropaWaterSplitting';
import {BiodiversityContract} from './base/80_BiodiversityContract';
import {TemperateRainforest} from './base/81_TemperateRainforest';
import {GeneticEngineeringLab} from './base/82_GeneticEngineeringLab';
import {OceanographyResearch} from './base/83_OceanographyResearch';
import {HeavyAerospaceTech} from './base/84_HeavyAerospaceTech';
import {InsulatedCity} from './base/85_InsulatedCity';
import {BuriedSettlement} from './base/86_BuriedSettlement';
import {HugeCity} from './base/87_HugeCity';
import {MiningCommunity} from './base/88_MiningCommunity';
import {DeepBurrowSettlement} from './base/89_DeepBurrowSettlement';
import {InstituteSettlement} from './base/90_InstituteSettlement';
import {MultifunctionalDome} from './base/91_MultifunctionalDome';
import {IndependentSettlement} from './base/92_IndependentSettlement';
import {GeothermalReserviorHeating} from './base/93_GeothermalReserviorHeating';
import {MunicipalReservior} from './base/94_MunicipalReservior';
import {FreshwaterLake} from './base/95_FreshwaterLake';
import {HugeGlacier} from './base/96_HugeGlacier';
import {DeepWellPump} from './base/97_DeepWellPump';
import {CommercialImports} from './base/98_CommercialImports';
import {UrbanDevelopment} from './base/99_UrbanDevelopment';
import {ExplosivesTestSite} from './base/100_ExplosivesTestSite';
import {GrandStadium} from './base/101_GrandStadium';
import {PolarOutpost} from './base/102_PolarOutpost';
import {RuralHousing} from './base/103_RuralHousing';
import {TunnelBoring} from './base/104_TunnelBoring';
import {LithiumMine} from './base/105_LithiumMine';
import {ChasmaExcavation} from './base/106_ChasmaExcavation';
import {DeepPolarExtraction} from './base/107_DeepPolarExtraction';
import {CallistoOperations} from './base/108_CallistoOperations';
import {SaturnGasMine} from './base/109_SaturnGasMine';
import {LaserDrillMining} from './base/110_LaserDrillMining';
import {HydrualicMining} from './base/111_HydrualicMining';
import {EnzymaticTreatment} from './base/112_EnzymaticTreatment';
import {RegolithAeration} from './base/113_RegolithAeration';
import {Mixotrophs} from './base/114_Mixotrophs';
import {BotanicalLab} from './base/115_BotanicalLab';
import {IndustrialComposting} from './base/116_IndustrialComposting';
import {ExtremeNitrophiles} from './base/117_ExtremeNitrophiles';
import {VascularTundraPlants} from './base/118_VascularTundraPlants';
import {Bamboo} from './base/119_Bamboo';
import {ErosionReducingGreenery} from './base/120_ErosionReducingGreenery';
import {ParasiticPlants} from './base/121_ParasiticPlants';
import {Wildberries} from './base/122_Wildberries';
import {AnaerobicEnergyCropping} from './base/123_AnaerobicEnergyCropping';
import {AdaptedHardwood} from './base/124_AdaptedHardwood';
import {AquaticBiodomes} from './base/125_AquaticBiodomes';
import {Conifers} from './base/126_Conifers';
import {WildBarley} from './base/127_WildBarley';
import {WetlandsChemical} from './base/128_WetlandsChemical';
import {Cacti} from './base/129_Cacti';
import {AdaptedFruitFarming} from './base/130_AdaptedFruitFarming';
import {RiceFields} from './base/131_RiceFields';
import {CoralReef} from './base/132_CoralReef';
import {CyanobacteriaChemical} from './base/133_CyanobacteriaChemical';
import {HydroponicsFacility} from './base/134_HydroponicsFacility';
import {RedAlgae} from './base/135_RedAlgae';
import {Irrigation} from './base/136_Irrigation';
import {Monsoons} from './base/137_Monsoons';
import {HeavyRespirators} from './base/138_HeavyRespirators';
import {BeeFarming} from './base/139_BeeFarming';
import {SyntheticGrowthHormones} from './base/140_SyntheticGrowthHormones';
import {SpaceBasedSolarPower} from './base/141_SpaceBasedSolarPower';
import {EfficientBatteries} from './base/142_EfficientBatteries';
import {LargePowerPlant} from './base/143_LargePowerPlant';
import {HydrocarbonSynthesis} from './base/144_HydrocarbonSynthesis';
import {AtmosphericProcessing} from './base/145_AtmosphericProcessing';
import {UraniumDeposit} from './base/146_UraniumDeposit';
import {AlgaeBioreactorsChemical} from './base/147_AlgaeBioreactors';
import {MassiveSolarFarm} from './base/148_MassiveSolarFarm';
import {AdvancedHydropower} from './base/149_AdvancedHydropower';
import {EnrichmentPlant} from './base/150_EnrichmentPlant';
import {FuelCellProduction} from './base/151_FuelCellProduction';
import {EnergyMohole} from './base/152_EnergyMohole';
import {HighPowerBetavoltaics} from './base/153_HighPowerBetavoltaics';
import {CentralPowerPlant} from './base/154_CentralPowerPlant';
import {IsotopeEnrichingBacteria} from './base/155_IsotopeEnrichingBacteria';
import {AnaerobicBacteria} from './base/156_AnaerobicBacteria';
import {SolidStateWildEnergy} from './base/157_SolidStateWildEnergy';
import {AtmosphericPressureEngine} from './base/158_AtmosphericPressureEngine';
import {LaserCannon} from './base/159_LaserCannon';
import {PerfluorocarbonProduction} from './base/160_PerfluorocarbonProduction';
import {GHGFactoryDistrict} from './base/161_GHGFactoryDistrict';
import {NaturalGasExtraction} from './base/162_NaturalGasExtraction';
import {HydrothermalVents} from './base/163_HydrothermalVents';
import {OzoneFactories} from './base/164_OzoneFactories';
import {ProbioticTreatment} from './base/165_ProbioticTreatment';
import {MirandaLabs} from './base/166_MirandaLabs';
import {MarsLifeScienceInstitute} from './base/167_MarsLifeScienceInstitute';
import {SpeciesCryopreservation} from './base/168_SpeciesCryopreservation';
import {AquiferRelocation} from './corpera/1_AquiferRelocation';
import {SpeculativeMarkets} from './corpera/2_SpeculativeMarkets';
import {ResearchGrantChemical} from './corpera/3_ResearchGrant';
import {SmallSupplyDrop} from './corpera/4_SmallSupplyDrop';
import {HermesMission} from './corpera/5_HermesMission';
import {AssetLiquidation} from './corpera/6_AssetLiquidation';
import {Parasite} from './corpera/7_Parasite';
import {RoboticsExhibition} from './corpera/8_RoboticsExhibition';
import {PatentTrading} from './corpera/9_PatentTrading';
import {PublicRecords} from './corpera/10_PublicRecords';
import {AcidRain} from './corpera/11_AcidRain';
import {PowerFailure} from './corpera/12_PowerFailure';
import {AstrophysicsCenter} from './corpera/13_AstrophysicsCenter';
import {CentaurLandings} from './corpera/14_CentaurLandings';
import {VestaObservatory} from './corpera/15_VestaObservatory';
import {MeasurementDrones} from './corpera/16_MeasurementDrones';
import {AdvancedBiomachinery} from './corpera/17_AdvancedBiomachinery';
import {LongTermEvolutionStudy} from './corpera/18_LongTermEvolutionStudy';
import {ScientificLogs} from './corpera/19_ScientificLogs';
import {ConstructionCenter} from './corpera/20_ConstructionCenter';
import {HomeworldHeadquarters} from './corpera/21_HomeworldHeadquarters';
import {MartianInvestments} from './corpera/22_MartianInvestments';
import {LaserLightsails} from './corpera/23_LaserLightsails';
import {SponsoredResearchFirm} from './corpera/24_SponsoredResearchFirm';
import {JovianSuppliers} from './corpera/25_JovianSuppliers';
import {OlympusArchives} from './corpera/26_OlympusArchives';
import {NeuralEnhancement} from './corpera/27_NeuralEnchancement';
import {Superpolymers} from './corpera/28_Superpolymers';
import {AlloyFactory} from './corpera/29_AlloyFactory';
import {NovaFoundry} from './corpera/30_NovaFoundry';
import {KugelblitzEngine} from './corpera/31_KugelblitzEngine';
import {ExoticMatterReactor} from './corpera/32_ExoticMatterReactor';
import {SolarStation} from './corpera/33_SolarStation';
import {UndergroundTestSite} from './corpera/34_UndergroundTestSite';
import {StandardAlloys} from './corpera/35_StandardAlloys';
import {OverseerCommittee} from './corpera/36_OverseerCommittee';

import {ViralAmeboid} from './corpera/ViralAmeboid';
import {ScientificMegaopolis} from './corpera/ScientificMegaopolis';
import {SteelExports} from './corpera/SteelExports';
import {ProjectAdvancement} from './corpera/ProjectAdvancement';
import {SuccessfulCommerce} from './corpera/SuccessfulCommerce';
import {ScientificSupport} from './corpera/ScientificSupport';
import {GalileanGovernor} from './corpera/GalileanGovernor';
import {MediaConglomerate} from './corpera/MediaConglomerate';
import {MilitaryBase} from './corpera/MilitaryBase';
import {MilitarySpacePort} from './corpera/MilitarySpacePort';
import {MartianBanking} from './corpera/MartianBanking';
import {ChemicalPlant} from './corpera/ChemicalPlant';
import {SaltMine} from './corpera/SaltMine';
import {LuxuryResort} from './corpera/LuxuryResort';
import {ManufacturingPlant} from './corpera/ManufacturingPlant';
import {ContractedConstruction} from './corpera/ContractedConstruction';
import {MolecularScienceLab} from './corpera/MolecularScienceLab';
import {Crowdfunding} from './corpera/Crowdfunding';
import {CommunicationsHub} from './corpera/CommunicationsHub';
import {TitanTradeHub} from './corpera/TitanTradeHub';
import {ConcreteFactory} from './corpera/ConcreteFactory';
import {MountaintopRemoval} from './corpera/MountaintopRemoval';
import {ExplosiveMining} from './corpera/ExplosiveMining';
import {PrintManufacturing} from './corpera/PrintManufacturing';
import {VolcanicFoundry} from './corpera/VolcanicFoundry';
import {Shipyard} from './corpera/Shipyard';
import {UpperMantleBoring} from './corpera/UpperMantleBoring';
import {SeedSuppliers} from './corpera/SeedSuppliers';
import {CashCrops} from './corpera/CashCrops';
import {ExtremePowerEfficiency} from './corpera/ExtremePowerEfficiency';
import {ColdFusionPower} from './corpera/ColdFusionPower';
import {NuclearForcePower} from './corpera/NuclearForcePower';
import {ArtificialMicrobialLife} from './corpera/ArtificialMicrobialLife';
import {AcquiredResearchFirm} from './corpera/AcquiredResearchFirm';
import {InterstellarProbe} from './corpera/InterstallarProbe';
import {TheoryOfEverything} from './corpera/TheoryOfEverything';
import {GreatHarbor} from './corpera/GreatHarbor';
import {FloaterAcquisition} from './venus/FloaterAcquisition';
import {IonicGasSequestration} from './venus/IonicGasSequestration'; // import {ImportedNeutralGasses} from './ImportedNeutralGasses';
import {NearMissRotaryAsteroid} from './venus/NearMissRotaryAsteroid';
import {DwarfPlanetCollision} from './venus/DwarfPlanetCollision';
import {ConvoyToVenus} from './venus/ConvoyToVenus';
import {HugeWaterShipments} from './venus/HugeWaterShipments';
import {NitrogenFromVenus} from './venus/NitrogenFromVenus';
import {AtmosphereLiftingDetonations} from './venus/AtmosphereLiftingDetonations';
import {VenusMiningExpedition} from './venus/VenusMiningExpedition';
import {UltralightFloaters} from './venus/UltralightFloaters';
import {DanuMontesRover} from './venus/DanuMontesRover';
import {CollaborationProject} from './venus/CollaborationProject';
import {ConsistentBombardment} from './venus/ConsistentBombardment';
import {PanSolarMining} from './venus/PanSolarMining';
import {FloatingResearchBase} from './venus/FloatingResearchBase';
import {FloaterDocks} from './venus/FloaterDocks';
import {MesosphereShades} from './venus/MesosphereShades';
import {LowLevelScrappers} from './venus/LowLevelScrappers';
import {CarbonSolidification} from './venus/CarbonSolidifcation';
import {LocalMagneticShielding} from './venus/LocalMagneticShielding';
import {AerialMassDrivers} from './venus/AerialMassDrivers';
import {SkyCommunications} from './venus/SkyCommunications';
import {FloatingBiodomes} from './venus/FloatingBiodomes';
import {EndemicVenusianArchaea} from './venus/EndemicVenusianArchaea';
import {AirborneMicrobes} from './venus/AirborneMicrobes';
import {PHNeutralizers} from './venus/PHNeutralizers';
import {CarbonFixingMicrobes} from './venus/CarbonFixingMicrobes';
import {DesignedFlyers} from './venus/DesignedFlyers';
import {VenusSurfaceDwellers} from './venus/VenusSurfaceDwellers';
import {BioengineeringStudies} from './venus/BioengineeringStudies';
import {VenusBiolab} from './venus/VenusBiolab';
import {LocalDecompression} from './venus/LocalDecompression';
import {UndergroundVenusBase} from './venus/UndergroundVenusBase';
import {TowersOfFreyja} from './venus/TowersOfFreyja';
import {VeneraOutpost} from './venus/VeneraOutpost'; // import {VenusianInvertebrates} from './venus/VenusianInvertebrates';
import {VenusSolarWaystation} from './venus/VenusSolarWaystation';
import {DryIceRings} from './venus/DryIceRings';
import {TheBehemoth} from './venus/TheBehemoth';
import {VenusMiningIndustries} from './venus/VenusMiningIndustries';
import {OvdaCity} from './venus/OvdaCity';
import {CapitalOfVenus} from './venus/CapitalOfVenus';
import {HydrogenInjection} from './venus/HydrogenInjection';
import {AtmosphericSolarCollectors} from './venus/AtmoshpericSolarCollectors'; // import {SpinInducingMassDrivers} from './SpinInducingMassDrivers';
import {SwarmShaders} from './venus/SwarmShaders';
import {VortexEngine} from './venus/VortexEngine';
import {PhotonicMetamaterials} from './venus/PhontoicMetamaterials';
import {NeutralizerDrones} from './venus/NeutralizerDrones';
import {CondenstationCatalysts} from './venus/CondenstationCatalysts';
import {BasaltMining} from './venus/BasaltMining';
import {VenusianFungi} from './venus/VenusianFungi';
import {LakeOfAphrodite} from './venus/LakeOfAphrodite';
import {SuperCarbonCollectors} from './venus/SuperCarbonCollectors';
import {SulphurProcessing} from './venus/SulphurProcessing';
import {StellarCruisers} from './venus/StellarCruisers';
import {DistributionCenter} from './venus/DistirbutionCenter';
import {WorldGovernmentOffices} from './venus/WorldGovernmentOffices';
import {VenusTourism} from './venus/VenusTourism';
import {SurfaceHabs} from './venus/SurfaceHabs';
import {ThemisBiodomes} from './venus/ThemisBiodomes';
import {AtenGroupMining} from './venus/AtenGroupMining';
import {RhizobiomeResearch} from './venus/RhizobiomeResearch';
import {FloatingPowerStation} from './venus/FloatingPowerStation';
import {DeuteriumFusion} from './venus/DeuteriumFusion';
import {VenusPowerPlant} from './venus/VenusPowerPlant';
import {TerrestrialAlliance} from './venus/TerrestrialAlliance';
import {EclipseStation} from './venus/EclipseStation';
import {VenusPlantation} from './venus/VenusPlantation';
import {WorkerDrones} from './venus/WorkerDrones';
import {FloatingArchitechture} from './venus/FloatingArchitechture';
import {BiomechanicalFoliage} from './venus/BiomechanicalFoliage';
import {VenusGeologicalSurvey} from './venus/VenusGeologicalSurvey';
import {IshtarComplex} from './venus/IshtarComplex';
import {CoordinatedRaidChemical} from './colonies/CoordinatedRaidChemcial';
import {SponsoredFlight} from './colonies/SponsoredFlight';
import {LargeTradingFleet} from './colonies/LargeTradingFleet';
import {OuterSolarMission} from './colonies/OuterSolarMission';
import {CommissionedFleet} from './colonies/CommissionedFleet';
import {MarketSiphon} from './colonies/MarketSiphon';
import {PlanetaryTrade} from './colonies/PlanetaryTrade';
import {FloatingTechResearch} from './colonies/FloatingTechResearch';
import {DeepJupiterProbe} from './colonies/DeepJupiterProbe';
import {JovianMoonMapping} from './colonies/JovianMoonMapping';
import {IceMoonCollision} from './colonies/IceMoonCollision';
import {ProductivityQuota} from './colonies/ProductivityQuota';
import {CeresLaunchpad} from './colonies/CeresLaunchpad';
import {AsteroidBeltColony} from './colonies/AsteroidBeltColony';
import {SpaceTethers} from './colonies/SpaceTethers';
import {FloatingColony} from './colonies/FloatingColony';
import {GasGiantHabs} from './colonies/GasGiantHabs';
import {TitanReseachOutpost} from './colonies/TitanResearchOutpost';
import {JovianConstructionYard} from './colonies/JovianConstructionYard';
import {WaterFromTitan} from './colonies/WaterFromTitan';
import {MethaneExports} from './colonies/MethaneExports';
import {GalileanMiningNetwork} from './colonies/GalileanMiningNetwork';
import {TitanFuelStation} from './colonies/TitanFuelStation';
import {JupiterFloatingCity} from './colonies/JupiterFloatingCity';
import {FloaterFacility} from './colonies/FloaterFacility';
import {FloatingTechInvestments} from './colonies/FloatingTechInvestments';
import {Primates} from './base/Primates';
import {ColonySuppliers} from './colonies/ColonySuppliers';
import {FuelSubsidies} from './colonies/FuelSubsidies';
import {RemoteTestZone} from './colonies/RemoteTestZone';
import {WaypointColony} from './colonies/WaypointColony';
import {PrivateColony} from './colonies/PrivateColony';
import {RemoteMiningBase} from './colonies/RemoteMiningBase';
import {ResearchMissions} from './colonies/ResearchMissions';
import {VenusTradeStation} from './VenusTradeStation';
import {RimPopulationCenter} from './colonies/RimPopulationCenter';
import {BusinessColony} from './colonies/BusinessColony';
import {SelfSufficientColony} from './colonies/SelfSufficientColony';
import {IndustrialColony} from './colonies/IndustrialColony';
import {DomeFarmingColony} from './colonies/DomeFarmingColony';
import {EnergyBeamColony} from './colonies/EnergyBeamColony';
import {KuiperBeltColony} from './colonies/KuiperBeltColony';
import {ThermalReservior} from './colonies/ThermalReservior';
import {SlumCity} from './colonies/SlumCity';
import {LunarPort} from './colonies/LunarPort';
import {MuseumOfLuna} from './colonies/MuseumOfLuna';
import {LunarResort} from './colonies/LunarResort';
import {LunaColonizationInvestments} from './colonies/LunaColonizationInvestments';
import {MicrogravityLab} from './colonies/MicrogravityLab';
import {MilitarySpaceStation} from './colonies/MilitarySpaceStation';
import {LunarH3Mining} from './colonies/LunarH3Mining';
import {ColonyMiningInfrastructure} from './colonies/ColonyMiningInfrastructure';
import {CassiniEnterprises} from './colonies/CassiniEnterprises';
import {HemeraBunker} from './colonies/HemeraBunker';
import {OrbitalBiodomes} from './colonies/OrbitalBiodomes';
import {AzaleaBushes} from './colonies/AzaleaBushes';
import {Wildflowers} from './colonies/Wildflowers';
import {ColonySpaceMirrors} from './colonies/ColonySpaceMirrors';
import {LunarPowerGrid} from './colonies/LunarPowerGrid';
import {ProtoDysonSwarm} from './colonies/ProtoDysonSwarm';
import {EarthEmbassyChemical} from './colonies/EarthEmbassyChemical';
import {MercurialSunshade} from './colonies/MercurialSunshade';
import {HighOrbitResearchStation} from './colonies/HighOrbitResearchStation';
import {TerrestrialResearchSummit} from './colonies/TerrestrialResearchSummit';
import {ArcticEndoliths} from './colonies/ArcticEndoliths';
import {HyperExtremophileFungi} from './colonies/HyperExtremophileFungi';
import {BiodiversityBoom} from './colonies/BiodiversityBoom';
import {ColonyReforms} from './colonies/ColonyReforms';
import {DirectedSabotageImpact} from './turmoil/DirectedSabotageImpact';
import {FusionBombing} from './turmoil/FusionBombing';
// import {DemocraticReform} from './DemocraticReform';
import {MediaManipulation} from './turmoil/MediaManipulation';
import {InaugurationCeremony} from './turmoil/InaugurationCeremony';
import {PoliticalDonations} from './turmoil/PoliticalDonations';
import {DesignedOrganisms} from './turmoil/DesignedOrganisms';
import {TellurianEcosystems} from './turmoil/TellurianEcosystems';
import {Preservationism} from './turmoil/Preservationism';
import {InterplanetaryDiplomacy} from './turmoil/InterplanetaryDiplomacy';
import {WorldGovernmentDiplomats} from './turmoil/WorldGovernmentDiplomats';
import {HybridVessels} from './turmoil/HybridVessels';
import {ShortTermBonuses} from './turmoil/ShortTermBonuses';
import {MartianResearchNetwork} from './turmoil/MartianResearchNetwork';
import {EnergyLab} from './turmoil/EnergyLab';
// import {StimulusPrograms} from './StimulusPrograms',
import {CommitteeCoalition} from './turmoil/CommitteeCoalition';
import {LegalFirm} from './turmoil/LegalFirm';
import {Kickbacks} from './turmoil/Kickbacks';
import {RemoteAreaSuppliers} from './turmoil/RemoteAreaSuppliers';
import {MedicalInstitute} from './turmoil/MedicalInstitute';
import {MicrobialSupport} from './turmoil/MicrobialSupport';
import {VenusSocietySupport} from './turmoil/VenusSocietySupport';
// import {PrimalNationalPark} from './PrimalNationalPark';
import {CorporateCitadel} from './turmoil/CorporateCitadel';
import {PreservationistSettlement} from './turmoil/PreservationistSettlement';
import {AuthoritarianState} from './turmoil/AuthoritarianState';
import {IndustryDevelopment} from './turmoil/IndustryDevelopment';
import {AcquiredBioengineeringFirm} from './turmoil/AcquiredBioengineeringFirm';
import {IonizingRadiationBeam} from './turmoil/IonizingRadiationBeam';
import {ReducedSnowCoverage} from './turmoil/ReducedSnowCoverage';
import {SocialWelfare} from './turmoil/SocialWelfare';
import {ExoplanetLanding} from './turmoil/ExoplanetLanding';
import {FirstMaritanMemorial} from './turmoil/FirstMartianMemorial';
import {TerraformingUnion} from './turmoil/TerraformingUnion';
import {AcquiredConsultingFirm} from './turmoil/AcquiredConsultingFirm';
import {ResearchBase} from './preludes/1_ResearchBase';
import {HeavyMetalComet} from './preludes/2_HeavyMetalComet';
import {LegalExperts} from './preludes/3_LegalExperts';
import {MaterialLoan} from './preludes/4_MaterialLoan';
import {ResearchLoan} from './preludes/5_ResearchLoan';
import {EntertainmentIndustry} from './preludes/6_EntertainmentIndustry';
import {CoerciveDealings} from './preludes/7_CoerciveDealings';
import {AquaponicsFacility} from './preludes/8_AquaponicsFacility';
import {NoctisSettlement} from './preludes/9_NoctisSettlement';
import {WildlifeSponsors} from './preludes/10_WildlifeSponsors';
import {BlueprintAI} from './preludes/11_BlueprintAI';
import {Bioplastics} from './preludes/12_Bioplastics';
import {InfrastructureSupport} from './preludes/13_InfrastructureSupport';
import {IndustryAllies} from './preludes/14_IndustryAllies';
import {NuclearFuelMining} from './preludes/15_NuclearFuelMining';
import {LunarMiningIndustries} from './preludes/16_LunarMiningIndustries';
import {LaserMining} from './preludes/17_LaserMining';
import {CyanobacteriaPods} from './preludes/18_CyanobacteriaPods';
import {GlacialAlgae} from './preludes/19_GlacialAlgae';
import {AmmoniaAsteroid} from './preludes/20_AmmoniaAsteroid';
import {AdaptedVascularGreenery} from './preludes/21_AdaptedVascularGreenery';
import {EcologicalReserve} from './preludes/22_EcologicalReserve';
import {ProtistLifeforms} from './preludes/23_ProtistLifeforms';
import {PowerCore} from './preludes/24_PowerCore';
import {EnergyBeam} from './preludes/25_EnergyBeam';
import {ThermalPlant} from './preludes/26_ThermalPlant';
import {AdvancedHeatingTech} from './preludes/27_AdvancedHeatingTech';
import {TerritoryOccupation} from './preludes/28_TerritoryOccupation';
import {RareMineralReserve} from './preludes/29_RareMineralReserve';
import {CorporateEspionage} from './preludes/30_CorporateEspionage';
import {VenusFirstChemical} from './preludes/31_VenusFirstChemical';
import {AirScrappingOperations} from './preludes/32_AirScrappingOperations';
import {TerrestrialPlanetMission} from './preludes/33_TerrestrialPlanetMission';
import {HydrogenBombardmentChemical} from './preludes/34_HydrogenBombardmentChemical';
import {ExperimentalOrganisms} from './preludes/35_ExperimentalOrganisms';
import {VenusianIndustries} from './preludes/36_VenusianIndustries';
import {VenusGHGExports} from './preludes/37_VenusGHGExports';
import {SisterPlanetResearch} from './preludes/38_SisterPlanetResearch';
import {FloatingCity} from './preludes/39_FloatingCity';
import {EarlyColony} from './preludes/40_EarlyColony';
import {IsolatedEcologyResearch} from './preludes/41_IsolatedEcologyResearch';
import {JovianProjectBase} from './preludes/42_JovianProjectBase';
import {InterplanetaryTradingPort} from './preludes/43_InterplanetaryTradingPort';
import {TradingNetwork} from './preludes/44_TradingNetwork';
import {GasMine} from './preludes/45_GasMine';
import {PhobosSpacePort} from './preludes/46_PhobosSpacePort';
import {TitanSettlement} from './preludes/47_TitanSettlement';
import {TradeInfrastructure} from './preludes/48_TradeInfrastructure';

import {CommitteeRepresentative} from './preludes/CommitteeRepresentative';
import {ByElectionChemical} from './preludes/ByElectionChemical';
import {ExecutiveOrderChemical} from './preludes/ExecutiveOrderChemical';
// import {ContractedIntelligenceAgency} from './ContractedIntelligenceAgency';
import {PartyInsiders} from './preludes/PartyInsiders';
import {PoliticalUprisingChemical} from './preludes/PoliticalUprisingChemical';
import {MartianRepublic} from './preludes/MartianRepublic';
import {IntellectualistMovement} from './globalevents/IntellectualistMovement';
import {CorporateAlliance} from './preludes/CorporateAlliance';
import {GreenMarsInitiative} from './preludes/GreenMarsInitiative';
import {PreservationistCampaign} from './preludes/PreservationistCampaign';
import {HeatFirstInitiative} from './globalevents/HeatFirstInitiative';
import {LandDelegation} from './globalevents/LandDelegation';
import {IntellectualistMovements} from './preludes/IntellectualistMovements';
import {MandatoryInsurance} from './globalevents/MandatoryInsurance';
import {TradeEmbargo} from './globalevents/TradeEmbargo';
import {Insurgency} from './globalevents/Insurgency';
import {LaborRevolt} from './globalevents/LaborRevolt';
import {InterplanetaryCommunities} from './globalevents/InterplanetaryCommunities';
import {ChemicalPollution} from './globalevents/ChemicalPollution';
import {PesticideApplication} from './globalevents/PesticideApplication';
import {Cyberattacks} from './globalevents/Cyberattacks';
import {MiningIndustries} from './globalevents/MiningIndustries';
import {Famine} from './globalevents/Famine';
import {NanotechInnovation} from './globalevents/NanotechInnovation';
import {PowerSurplus} from './globalevents/PowerSurplus';
import {LandRun} from './globalevents/LandRun';
import {EradicationOfGeneticIllness} from './globalevents/EradicationOfGeneticIllness';
import {MagneticFieldFailure} from './globalevents/MagneticFieldFailure';
import {FoodSupply} from './globalevents/FoodSupply';
import {ConstitutionalReformation} from './globalevents/ConstitutionalReformation';
import {EcologyProjects} from './globalevents/EcologyProjects';
import {EcosystemDisruption} from './globalevents/EcosystemDisruption';
import {RedUprising} from './globalevents/RedUprising';
import {WildfiresEvent} from './globalevents/WildfiresEvent';
import {EgalitarianMovements} from './globalevents/EgalitarianMovements';
import {MarsStockExchange} from './globalevents/MarsStockExchange';
import {ColonizationOfMercury} from './globalevents/ColonizationOfMercury';
import {RevisedPatentLaw} from './globalevents/RevisedPatentLaw';
import {EcologicalSupport} from './globalevents/EcologicalSupport';
import {AbstinanceBonus} from './globalevents/AbstinanceBonus';
import {RedTourism} from './globalevents/RedTourism';
import {PreferentialLoans} from './globalevents/PreferentialLoans';
import {SevereMarsquake} from './globalevents/SevereMarsquake';
import {ExtinctionEvent} from './globalevents/ExtinctionEvent';
import {SpaceTravelLimitations} from './globalevents/SpaceTravelLimitations';
import {RimShortages} from './globalevents/RimShortages';
import {MicrobialBoom} from './globalevents/MicrobialBoom';
import {TechnologicalRegression} from './globalevents/TechnologicalRegression';
import {PowerGenerationSubsidies} from './globalevents/PowerGenerationSubsidies';
import {TaxationOfVenus} from './globalevents/TaxationOfVenus';
import {VenusMining} from './globalevents/VenusMining';
import {DegredationOfVenus} from './globalevents/DegredationOfVenus';
import {FloaterTechnologyEvent} from './globalevents/FloaterTechnologyEvent';
import {VenusianEcosystems} from './globalevents/VenusianEcosystems';
import {SocietiesOfVenus} from './globalevents/SocietiesOfVenus';
import {AnticorrosiveMaterials} from './globalevents/AnticorrosiveMaterials';
import {LowlandFlooding} from './globalevents/LowlandFlooding';
import {CommunityServicesEvent} from './globalevents/CommunityServicesEvent';
import {PowerFailureEvent} from './globalevents/PowerFailureEvent';
import {InterstallarColonization} from './globalevents/InterstallarColonization';
import {ColonyProductivity} from './globalevents/ColonyProductivity';
import {CommandEconomy} from './globalevents/CommandEconomy';
import {JovianWar} from './globalevents/JovianWar';
import {RefugeeCrisis} from './globalevents/RefugeeCrisis';
import {EconomicDepression} from './globalevents/EconomicDepression';

export const CHEMICAL_CARD_MANIFEST = new ModuleManifest({
  module: 'chemical',
  corporationCards: {

  },
  preludeCards: {
    [CardName.RESEARCH_BASE]: {Factory: ResearchBase},
    [CardName.HEAVY_METAL_COMET]: {Factory: HeavyMetalComet},
    [CardName.LEGAL_EXPERTS]: {Factory: LegalExperts},
    [CardName.MATERIAL_LOAN]: {Factory: MaterialLoan},
    [CardName.RESEARCH_LOAN]: {Factory: ResearchLoan},
    [CardName.ENTERTAINMENT_INDUSTRY]: {Factory: EntertainmentIndustry},
    [CardName.COERCIVE_DEALINGS]: {Factory: CoerciveDealings},
    [CardName.AQUAPONICS_FACILITY]: {Factory: AquaponicsFacility},
    [CardName.NOCTIS_SETTLEMENT]: {Factory: NoctisSettlement},
    [CardName.WILDLIFE_SPONSORS]: {Factory: WildlifeSponsors},
    [CardName.BLUEPRINT_AI]: {Factory: BlueprintAI},
    [CardName.BIOPLASTICS]: {Factory: Bioplastics},
    [CardName.INFRASTRUCTURE_SUPPORT]: {Factory: InfrastructureSupport},
    [CardName.INDUSTRY_ALLIES]: {Factory: IndustryAllies},
    [CardName.NUCLEAR_FUEL_MINING]: {Factory: NuclearFuelMining},
    [CardName.LUNAR_MINING_INDUSTRIES]: {Factory: LunarMiningIndustries},
    [CardName.LASER_MINING]: {Factory: LaserMining},
    [CardName.CYANOBACTERIA_PODS]: {Factory: CyanobacteriaPods},
    [CardName.GLACIAL_ALGAE]: {Factory: GlacialAlgae},
    [CardName.AMMONIA_ASTEROID]: {Factory: AmmoniaAsteroid},
    [CardName.ADAPTED_VASCULAR_GREENERY]: {Factory: AdaptedVascularGreenery},
    [CardName.ECOLOGICAL_RESERVE]: {Factory: EcologicalReserve},
    [CardName.PROTIST_LIFEFORMS]: {Factory: ProtistLifeforms},
    [CardName.POWER_CORE]: {Factory: PowerCore},
    [CardName.ENERGY_BEAM]: {Factory: EnergyBeam},
    [CardName.THERMAL_PLANT]: {Factory: ThermalPlant},
    [CardName.ADVANCED_HEATING_TECH]: {Factory: AdvancedHeatingTech},
    [CardName.TERRITORY_OCCUPATION]: {Factory: TerritoryOccupation},
    [CardName.RARE_MINERAL_RESERVE]: {Factory: RareMineralReserve},
    [CardName.CORPORATE_ESPIONAGE]: {Factory: CorporateEspionage},
    [CardName.VENUS_FIRST_CHEMICAL]: {Factory: VenusFirstChemical, compatibility: 'venus'},
    [CardName.AIR_SCRAPPING_OPERATIONS]: {Factory: AirScrappingOperations, compatibility: 'venus'},   
    [CardName.TERRESTRIAL_PLANET_MISSION]: {Factory: TerrestrialPlanetMission, compatibility: 'venus'}, 
    [CardName.HYDROGEN_BOMBARDMENT_CHEMICAL]: {Factory: HydrogenBombardmentChemical, compatibility: 'venus'},
    [CardName.EXPERIMENTAL_ORGANISMS]: {Factory: ExperimentalOrganisms, compatibility: 'venus'},
    [CardName.VENUSIAN_INDUSTRIES]: {Factory: VenusianIndustries, compatibility: 'venus'},
    [CardName.VENUS_GHG_EXPORTS]: {Factory: VenusGHGExports, compatibility: 'venus'},
    [CardName.SISTER_PLANET_RESEARCH]: {Factory: SisterPlanetResearch, compatibility: 'venus'},
    [CardName.FLOATING_CITY]: {Factory: FloatingCity, compatibility: 'venus'},
    [CardName.EARLY_COLONY]: {Factory: EarlyColony, compatibility: 'colonies'},
    [CardName.ISOLATED_ECOLOGY_RESEARCH]: {Factory: IsolatedEcologyResearch, compatibility: 'colonies'},
    [CardName.JOVIAN_PROJECT_BASE]: {Factory: JovianProjectBase, compatibility: 'colonies'},
    [CardName.INTERPLANETARY_TRADING_PORT]: {Factory: InterplanetaryTradingPort, compatibility: 'colonies'},
    [CardName.TRADING_NETWORK]: {Factory: TradingNetwork, compatibility: 'colonies'},
    [CardName.GAS_MINE]: {Factory: GasMine, compatibility: 'colonies'},
    [CardName.PHOBOS_SPACE_PORT]: {Factory: PhobosSpacePort, compatibility: 'colonies'},
    [CardName.TITAN_SETTLEMENT]: {Factory: TitanSettlement, compatibility: 'colonies'},
    [CardName.TRADE_INFRASTRUCTURE]: {Factory: TradeInfrastructure, compatibility: 'colonies'},
   
    [CardName.COMMITTEE_REPRESENTATIVE]: {Factory: CommitteeRepresentative, compatibility: 'turmoil'},
    [CardName.BY_ELECTION_CHEMICAL]: {Factory: ByElectionChemical, compatibility: 'turmoil'},
    [CardName.EXECUTIVE_ORDER_CHEMICAL]: {Factory: ExecutiveOrderChemical, compatibility: 'turmoil'},
    // [CardName.CONTRACTED_INTELLIGENCE_AGENCY]: {Factory: ContractedIntelligenceAgency, compatibiliy: 'turmoil'},
    [CardName.PARTY_INSIDERS]: {Factory: PartyInsiders, compatibility: 'turmoil'},
    [CardName.POLITICAL_UPRISING_CHEMICAL]: {Factory: PoliticalUprisingChemical, compatibility: 'turmoil'},
    [CardName.MARTIAN_REPUBLIC]: {Factory: MartianRepublic, compatibility: 'turmoil'},
    [CardName.INTELLECTUALIST_MOVEMENT]: {Factory: IntellectualistMovement, compatibility: 'turmoil'},
    [CardName.CORPORATE_ALLIANCE]: {Factory: CorporateAlliance, compatibility: 'turmoil'},
    [CardName.GREEN_MARS_INITIATIVE]: {Factory: GreenMarsInitiative, compatibility: 'turmoil'},
    [CardName.PRESERVATIONIST_CAMPAIGN]: {Factory: PreservationistCampaign, compatibility: 'turmoil'},
    [CardName.HEAT_FIRST_INITIATIVE]: {Factory: HeatFirstInitiative, compatibility: 'turmoil'},
  },
  projectCards: {
    [CardName.SUBCRUST_VAPOR_TRAPPING]: {Factory: SubcrustVaporTrapping},
    [CardName.CONVOY_FROM_TITAN]: {Factory: ConvoyFromTitan},
    [CardName.HIGH_SPEED_COMET]: {Factory: HighSpeedComet},
    [CardName.TITANIUM_COMET]: {Factory: TitaniumComet},
    [CardName.EXPEDITION_TO_DIONE]: {Factory: ExpeditionToDione},
    [CardName.LARGE_THERMAL_DETONATOR]: {Factory: LargeThermalDetonator},
    [CardName.HYDROGEN_FROM_SATURN]: {Factory: HydrogenFromSaturn},
    [CardName.GIANT_CARBONATE_ASTEROID]: {Factory: GiantCarbonateAsteroid},
    [CardName.CARBONATE_ASTEROID]: {Factory: CarbonateAsteroid},
    [CardName.ARTIFICIAL_ASTEROID]: {Factory: ArtificialAsteroid},
    [CardName.INSTANTIATED_SOLAR_FLARE]: {Factory: InstantiatedSolarFlare},
    [CardName.ACCELERATED_IMPACTOR]: {Factory: AcceleratedImpactor},
    [CardName.IRON_RICH_ASTEROID]: {Factory: IronRichAsteroid},
    [CardName.OVERGROWTH]: {Factory: Overgrowth},
    [CardName.CONDENSED_GAS_CONVOY]: {Factory: CondensedGasConvoy},
    [CardName.TEMPORARY_SMELTING_PLANT]: {Factory: TemporarySmeltingPlant},
    [CardName.CYANOBACTERIA_BLOOM]: {Factory: CyanobacteriaBloom},
    [CardName.OXYGEN_SHIPMENT]: {Factory: OxygenShipment},
    [CardName.SPECIAL_AEROSOLS]: {Factory: SpecialAerosols},
    [CardName.IMPORTED_FUEL]: {Factory: ImportedFuel},
    [CardName.ASTEROID_MINING_EXPEDITION]: {Factory: AsteroidMiningExpedition},
    [CardName.LOWLAND_EXPEDITION]: {Factory: LowlandExpedition},
    [CardName.POWER_SURGE]: {Factory: PowerSurge},
    [CardName.MINOR_IMPACTOR]: {Factory: MinorImpactor},
    [CardName.CONTROLLED_BURN]: {Factory: ControlledBurn},
    [CardName.ECOLOGICAL_SHIPMENT]: {Factory: EcologicalShipment},
    [CardName.PANSPERMIA_SURVEY]: {Factory: PanspermiaSurvey},
    [CardName.HABITAT_CONSERVATION]: {Factory: HabitatConservation},
    [CardName.ASTEROID_STUDY]: {Factory: AsteroidStudy},
    [CardName.NITROGEN_ASTEROIDS]: {Factory: NitrogenAsteroids},
    [CardName.OXYGENATED_COMETS]: {Factory: OxygenatedComets}, 
    [CardName.KUIPER_BELT_ICE_ASTEROIDS]: {Factory: KuiperBeltIceAsteroids},
    [CardName.CERES_MINING_OPERATIONS]: {Factory: CeresMiningOperations},
    [CardName.AMMONIA_HEAVY_ASTEROIDS]: {Factory: AmmoniaHeavyAsteroids},
    [CardName.M_TYPE_ASTEROID_MINING]: {Factory: MTypeAsteroidMining},
    [CardName.FLOATING_WEATHER_PROBES]: {Factory: FloatingWeatherProbes},
    [CardName.PRODUCTION_DRONES]: {Factory: ProductionDrones},
    [CardName.EUROPAN_BACTERIA]: {Factory: EuropanBacteria},
    [CardName.TERMITES]: {Factory: Termites},
    [CardName.MARTIAN_THERMOPHILES]: {Factory: MartianThermophiles},
    [CardName.MIMICRY_ARCHAEA]: {Factory: MimicryArchaea},
    [CardName.MACROPLANKTON]: {Factory: Macroplankton},    
    [CardName.WATER_SPLITTING_MICROBES]: {Factory: WaterSplittingMicrobes},
    [CardName.HALOGEN_RECONSTRUCTORS]: {Factory: HalogenReconstructors},
    [CardName.ANTI_OXIDATION_BACTERIA]: {Factory: AntiOxidationBacteria},
    [CardName.THALLOPHYTE_PROTISTS]: {Factory: ThallophyteProtists},
    [CardName.CARBON_LATTICE_MICROBES]: {Factory: CarbonLatticeMicrobes},
    [CardName.ELECTROPLAQUE_MICROBES]: {Factory: ElectroplaqueMicrobes},
    [CardName.LARGE_AQUATIC_MAMMALS]: {Factory: LargeAquaticMammals},
    [CardName.TUNDRA_WILDLIFE]: {Factory: TundraWildlife},
    [CardName.RAPTORS]: {Factory: Raptors},
    [CardName.FISH_FARMING_LAKE]: {Factory: FishFarmingLake},
    [CardName.CEPHALOPODS]: {Factory: Cephalopods},
    [CardName.ENDANGERED_SPECIES_REFUGE]: {Factory: EndangeredSpeciesRefuge},
    [CardName.NON_HYPOXIC_SMALL_ANIMALS]: {Factory: NonHypoxicSmallAnimals},
    [CardName.SUBTERRANEAN_CREATURES]: {Factory: SubterranianCreatures},
    [CardName.ANTARCTIC_KRILL]: {Factory: AntarcticKrill},
    [CardName.ANCIENT_ARTHROPODS]: {Factory: AncientArthopods},
    [CardName.ADAPTIVE_BIOTICS]: {Factory: AdaptiveBiotics},
    [CardName.HABITAT_DOMES]: {Factory: HabitatDomes},
    [CardName.AQUAPONICS]: {Factory: Aquaponics},
    [CardName.SPRAWLING_CITY]: {Factory: SprawlingCity},
    [CardName.IMPERATIVE_SETTLEMENT]: {Factory: ImperativeSettlement},
    [CardName.ECO_CENTRAL]: {Factory: EcoCentral},
    [CardName.CANALS]: {Factory: Canals},
    [CardName.FREIGHT_SHUTTLES]: {Factory: FreightShuttles},
    [CardName.SILICON_FACTORY]: {Factory: SiliconFactory},
    [CardName.ALUMINUM_FOUNDRY]: {Factory: AluminumFoundry},
    [CardName.THAW_MINING]: {Factory: ThawMining},
    [CardName.ECOLOGICAL_CONTRACT]: {Factory: EcologicalContract},
    [CardName.ADVANCED_GENETIC_ADAPTION]: {Factory: AdvancedGeneticAdaption},
    //[CardName.ESSENTIAL_SYMBIOTICS]: {Factory: EssentialSymbiotics},
    [CardName.MICROBE_CULTIVATION_FACILITY]: {Factory: MicrobeCultivationFacility},
    [CardName.BIODOMES]: {Factory: Biodomes},
    [CardName.BIOMASS_REACTOR]: {Factory: BiomassReactor},
    [CardName.LOCAL_TEMPERATURE_CONTROL]: {Factory: LocalTemperatureControl},
    [CardName.CO2_VENTS]: {Factory: CO2Vents},
    [CardName.REGOLITH_TREATMENT]: {Factory: RegolithTreatment},
    [CardName.EUROPA_WATER_SPLITTING]: {Factory: EuropaWaterSplitting},  
    [CardName.BIODIVERSITY_CONTRACT]: {Factory: BiodiversityContract},
    [CardName.TEMPERATE_RAINFOREST]: {Factory: TemperateRainforest},
    [CardName.GENETIC_ENGINEERING_LAB]: {Factory: GeneticEngineeringLab},
    [CardName.OCEANOGRAPHY_RESEARCH]: {Factory: OceanographyResearch},
    [CardName.HEAVY_AEROSPACE_TECH]: {Factory: HeavyAerospaceTech},
    [CardName.INSULATED_CITY]: {Factory: InsulatedCity},
    [CardName.BURIED_SETTLEMENT]: {Factory: BuriedSettlement},
    [CardName.HUGE_CITY]: {Factory: HugeCity},
    [CardName.MINING_COMMUNITY]: {Factory: MiningCommunity},
    [CardName.DEEP_BURROW_SETTLEMENT]: {Factory: DeepBurrowSettlement},
    [CardName.INSTITUTE_SETTLEMENT]: {Factory: InstituteSettlement},
    [CardName.MULTIFUNCTIONAL_DOME]: {Factory: MultifunctionalDome},
    [CardName.INDEPENDENT_SETTLEMENT]: {Factory: IndependentSettlement},
    [CardName.GEOTHERMAL_RESERVIOR_HEATING]: {Factory: GeothermalReserviorHeating},
    [CardName.MUNICIPAL_RESERVIOR]: {Factory: MunicipalReservior},
    [CardName.FRESHWATER_LAKE]: {Factory: FreshwaterLake},
    [CardName.HUGE_GLACIER]: {Factory: HugeGlacier},
    [CardName.DEEP_WELL_PUMP]: {Factory: DeepWellPump},
    [CardName.COMMERCIAL_IMPORTS]: {Factory: CommercialImports},
    [CardName.URBAN_DEVELOPMENT]: {Factory: UrbanDevelopment},
    [CardName.EXPLOSIVES_TEST_SITE]: {Factory: ExplosivesTestSite},
    [CardName.POLAR_OUTPOST]: {Factory: PolarOutpost},
    [CardName.RURAL_HOUSING]: {Factory: RuralHousing},
    [CardName.TUNNEL_BORING]: {Factory: TunnelBoring},
    [CardName.LITHIUM_MINE]: {Factory: LithiumMine},
    [CardName.CHASMA_EXCAVATION]: {Factory: ChasmaExcavation},
    [CardName.DEEP_POLAR_EXTRACTION]: {Factory: DeepPolarExtraction},
    [CardName.CALLISTO_OPERATIONS]: {Factory: CallistoOperations},
    [CardName.SATURN_GAS_MINE]: {Factory: SaturnGasMine},
    [CardName.LASER_DRILL_MINING]: {Factory: LaserDrillMining},
    [CardName.HYDRUALIC_MINING]: {Factory: HydrualicMining},
    [CardName.ENZYMATIC_TREATMENT]: {Factory: EnzymaticTreatment},
    [CardName.REGOLITH_AERATION]: {Factory: RegolithAeration},
    [CardName.MIXOTROPHS]: {Factory: Mixotrophs},
    [CardName.BOTANICAL_LAB]: {Factory: BotanicalLab},
    [CardName.INDUSTRIAL_COMPOSTING]: {Factory: IndustrialComposting},
    [CardName.EXTREME_NITROPHILES]: {Factory: ExtremeNitrophiles},
    [CardName.VASCULAR_TUNDRA_PLANTS]: {Factory: VascularTundraPlants},
    [CardName.BAMBOO]: {Factory: Bamboo},
    [CardName.EROSION_REDUCING_GREENERY]: {Factory: ErosionReducingGreenery},
    [CardName.PARASITIC_PLANTS]: {Factory: ParasiticPlants},
    [CardName.WILDBERRIES]: {Factory: Wildberries},
    [CardName.ANAEROBIC_ENERGY_CROPPING]: {Factory: AnaerobicEnergyCropping},
    [CardName.ADAPTED_HARDWOOD]: {Factory: AdaptedHardwood},
    [CardName.AQUATIC_BIODOMES]: {Factory: AquaticBiodomes},
    [CardName.CONIFERS]: {Factory: Conifers},
    [CardName.WILD_BARLEY]: {Factory: WildBarley},
    [CardName.WETLANDS_CHEMICAL]: {Factory: WetlandsChemical},
    [CardName.CACTI]: {Factory: Cacti},
    [CardName.ADAPTED_FRUIT_FARMING]: {Factory: AdaptedFruitFarming},
    [CardName.RICE_FIELDS]: {Factory: RiceFields},
    [CardName.CORAL_REEF]: {Factory: CoralReef},
    [CardName.CYANOBACTERIA_CHEMICAL]: {Factory: CyanobacteriaChemical},
    [CardName.HYDROPONICS_FACILITY]: {Factory: HydroponicsFacility},
    [CardName.RED_ALGAE]: {Factory: RedAlgae},
    [CardName.IRRIGATION]: {Factory: Irrigation},
    [CardName.MONSOONS]: {Factory: Monsoons},
    [CardName.HEAVY_RESPIRATORS]: {Factory: HeavyRespirators},
    [CardName.BEE_FARMING]: {Factory: BeeFarming},
    [CardName.SYNTHETIC_GROWTH_HORMONES]: {Factory: SyntheticGrowthHormones},
    [CardName.SPACE_BASED_SOLAR_POWER]: {Factory: SpaceBasedSolarPower},
    [CardName.EFFICIENT_BATTERIES]: {Factory: EfficientBatteries},
    [CardName.LARGE_POWER_PLANT]: {Factory: LargePowerPlant},
    [CardName.HYDROCARBON_SYNTHESIS]: {Factory: HydrocarbonSynthesis},
    [CardName.ATMOSPHERIC_PROCESSING]: {Factory: AtmosphericProcessing},
    [CardName.URANIUM_DEPOSIT]: {Factory: UraniumDeposit},
    [CardName.ALGAE_BIOREACTORS_CHEMICAL]: {Factory: AlgaeBioreactorsChemical},
    [CardName.MASSIVE_SOLAR_FARM]: {Factory: MassiveSolarFarm},
    [CardName.ADVANCED_HYDROPOWER]: {Factory: AdvancedHydropower},
    [CardName.ENRICHMENT_PLANT]: {Factory: EnrichmentPlant},    
    [CardName.FUEL_CELL_PRODUCTION]: {Factory: FuelCellProduction},
    [CardName.ENERGY_MOHOLE]: {Factory: EnergyMohole},
    [CardName.HIGH_POWER_BETAVOLTAICS]: {Factory: HighPowerBetavoltaics},
    [CardName.CENTRAL_POWER_PLANT]: {Factory: CentralPowerPlant},
    [CardName.ISOTOPE_ENRICHING_BACTERIA]: {Factory: IsotopeEnrichingBacteria},
    [CardName.ANAEROBIC_BACTERIA]: {Factory: AnaerobicBacteria},
    [CardName.SOLID_STATE_WIND_ENERGY]: {Factory: SolidStateWildEnergy},
    [CardName.ATMOSPHERIC_PRESSURE_ENGINE]: {Factory: AtmosphericPressureEngine},
    [CardName.LASER_CANNON]: {Factory: LaserCannon},
    [CardName.PERFLUOROCARBON_PRODUCTION]: {Factory: PerfluorocarbonProduction},
    [CardName.GHG_FACTORY_DISTRICT]: {Factory: GHGFactoryDistrict},
    [CardName.NATURAL_GAS_EXTRACTION]: {Factory: NaturalGasExtraction},
    [CardName.HYDROTHERMAL_VENTS]: {Factory: HydrothermalVents},
    [CardName.OZONE_FACTORIES]: {Factory: OzoneFactories},
    [CardName.PROBIOTIC_TREATMENT]: {Factory: ProbioticTreatment},
    [CardName.MIRANDA_LABS]: {Factory: MirandaLabs},
    [CardName.MARS_LIFE_SCIENCE_INSTITUTE]: {Factory: MarsLifeScienceInstitute},
    [CardName.SPECIES_CRYOPRESERVATION]: {Factory: SpeciesCryopreservation},

    [CardName.AQUIFER_RELOCATION]: {Factory: AquiferRelocation, compatibility: 'corpera'},
    [CardName.SPECULATIVE_MARKETS]: {Factory: SpeculativeMarkets, compatibility: 'corpera'},
    [CardName.RESEARCH_GRANT_CHEMICAL]: {Factory: ResearchGrantChemical, compatibility: 'corpera'},
    [CardName.SMALL_SUPPLY_DROP]: {Factory: SmallSupplyDrop, compatibility: 'corpera'},
    [CardName.HERMES_MISSION]: {Factory: HermesMission, compatibility: 'corpera'},
    [CardName.ASSET_LIQUIDATION]: {Factory: AssetLiquidation, compatibility: 'corpera'},
    [CardName.PARASITE]: {Factory: Parasite, compatibility: 'corpera'},
    [CardName.ROBOTICS_EXHIBITION]: {Factory: RoboticsExhibition, compatibility: 'corpera'},
    [CardName.PATENT_TRADING]: {Factory: PatentTrading, compatibility: 'corpera'},
    [CardName.PUBLIC_RECORDS]: {Factory: PublicRecords, compatibility: 'corpera'},
    [CardName.ACID_RAIN]: {Factory: AcidRain, compatibility: 'corpera'},
    [CardName.POWER_FAILURE]: {Factory: PowerFailure, compatibility: 'corpera'},
    [CardName.ASTROPHYSICS_CENTER]: {Factory: AstrophysicsCenter, compatibility: 'corpera'},
    [CardName.CENTAUR_LANDINGS]: {Factory: CentaurLandings, compatibility: 'corpera'},
    [CardName.VESTA_OBSERVATORY]: {Factory: VestaObservatory, compatibility: 'corpera'},    
    [CardName.MEASUREMENT_DRONES]: {Factory: MeasurementDrones, compatibility: 'corpera'},
    [CardName.ADVANCED_BIOMACHINERY]: {Factory: AdvancedBiomachinery, compatibility: 'corpera'},
    [CardName.LONG_TERM_EVOLUTION_STUDY]: {Factory: LongTermEvolutionStudy, compatibility: 'corpera'},
    [CardName.SCIENTIFIC_LOGS]: {Factory: ScientificLogs, compatibility: 'corpera'},
    [CardName.CONSTRUCTION_CENTER]: {Factory: ConstructionCenter, compatibility: 'corpera'},
    [CardName.HOMEWORLD_HEADQUARTERS]: {Factory: HomeworldHeadquarters, compatibility: 'corpera'},
    [CardName.MARTIAN_INVESTMENTS]: {Factory: MartianInvestments, compatibility: 'corpera'},
    [CardName.LASER_LIGHTSAILS]: {Factory: LaserLightsails, compatibility: 'corpera'},
    [CardName.SPONSORED_RESEARCH_FIRM]: {Factory: SponsoredResearchFirm, compatibility: 'corpera'},
    [CardName.JOVIAN_SUPPLIERS]: {Factory: JovianSuppliers, compatibility: 'corpera'},
    [CardName.OLYMPUS_ARCHIVES]: {Factory: OlympusArchives, compatibility: 'corpera'},
    [CardName.NEURAL_ENCHANCEMENT]: {Factory: NeuralEnhancement, compatibility: 'corpera'},
    [CardName.SUPERPOLYMERS]: {Factory: Superpolymers, compatibility: 'corpera'},
    [CardName.ALLOY_FACTORY]: {Factory: AlloyFactory, compatibility: 'corpera'},
    [CardName.NOVA_FOUNDRY]: {Factory: NovaFoundry, compatibility: 'corpera'},
    [CardName.KUGELBLITZ_ENGINE]: {Factory: KugelblitzEngine, compatibility: 'corpera'},
    [CardName.EXOTIC_MATTER_REACTOR]: {Factory: ExoticMatterReactor, compatibility: 'corpera'},
    [CardName.SOLAR_STATION]: {Factory: SolarStation, compatibility: 'corpera'},
    [CardName.UNDERGROUND_TEST_SITE]: {Factory: UndergroundTestSite, compatibility: 'corpera'},
    [CardName.STANDARD_ALLOYS]: {Factory: StandardAlloys, compatibility: 'corpera'},
    [CardName.OVERSEER_COMMITTEE]: {Factory: OverseerCommittee, compatibility: 'corpera'},
    
    [CardName.VIRAL_AMEBOID]: {Factory: ViralAmeboid, compatibility: 'corpera'},
    [CardName.SCIENTIFIC_MEGAOPOLIS]: {Factory: ScientificMegaopolis, compatibility: 'corpera'},
    [CardName.STEEL_EXPORTS]: {Factory: SteelExports, compatibility: 'corpera'},
    [CardName.PROJECT_ADVANCEMENT]: {Factory: ProjectAdvancement, compatibility: 'corpera'},
    [CardName.SUCCESSFUL_COMMERCE]: {Factory: SuccessfulCommerce, compatibility: 'corpera'},
    [CardName.SCIENTIFIC_SUPPORT]: {Factory: ScientificSupport, compatibility: 'corpera'},
    [CardName.GALILEAN_GOVERNOR]: {Factory: GalileanGovernor, compatibility: 'corpera'},
    [CardName.MEDIA_CONGLOMARATE]: {Factory: MediaConglomerate, compatibility: 'corpera'},
    [CardName.MARTIAN_BANKING]: {Factory: MartianBanking, compatibility: 'corpera'},
    [CardName.MILITARY_BASE]: {Factory: MilitaryBase, compatibility: 'corpera'},
    [CardName.MILITARY_SPACE_PORT]: {Factory: MilitarySpacePort, compatibility: 'corpera'},
    [CardName.CHEMICAL_PLANT]: {Factory: ChemicalPlant, compatibility: 'corpera'},
    [CardName.SALT_MINE]: {Factory: SaltMine, compatibility: 'corpera'},
    [CardName.GRAND_STADIUM]: {Factory: GrandStadium, compatibility: 'corpera'},
    [CardName.LUXURY_RESORT]: {Factory: LuxuryResort, compatibility: 'corpera'},
    [CardName.MANUFACTURING_PLANT]: {Factory: ManufacturingPlant, compatibility: 'corpera'},
    [CardName.CONTRACTED_CONSTRUCTION]: {Factory: ContractedConstruction, compatibility: 'corpera'},
    [CardName.MOLECULAR_SCIENCE_LAB]: {Factory: MolecularScienceLab, compatibility: 'corpera'},
    [CardName.CROWDFUNDING]: {Factory: Crowdfunding, compatibility: 'corpera'},
    [CardName.COMMUNICATIONS_HUB]: {Factory: CommunicationsHub, compatibility: 'corpera'},
    [CardName.TITAN_TRADE_HUB]: {Factory: TitanTradeHub, compatibility: 'corpera'},
    [CardName.CONCRETE_FACTORY]: {Factory: ConcreteFactory, compatibility: 'corpera'},
    [CardName.MOUNTAINTOP_REMOVAL]: {Factory: MountaintopRemoval, compatibility: 'corpera'},
    [CardName.EXPLOSIVE_MINING]: {Factory: ExplosiveMining, compatibility: 'corpera'},
    [CardName.PRINT_MANUFACTURING]: {Factory: PrintManufacturing, compatibility: 'corpera'},
    [CardName.VOLCANIC_FOUNDRY]: {Factory: VolcanicFoundry, compatibility: 'corpera'},
    [CardName.SHIPYARD]: {Factory: Shipyard, compatibility: 'corpera'},
    [CardName.UPPER_MANTLE_BORING]: {Factory: UpperMantleBoring, compatibility: 'corpera'},
    [CardName.SEED_SUPPLIERS]: {Factory: SeedSuppliers, compatibility: 'corpera'},
    [CardName.CASH_CROPS]: {Factory: CashCrops, compatibility: 'corpera'},
    [CardName.EXTREME_POWER_EFFICIENCY]: {Factory: ExtremePowerEfficiency, compatibility: 'corpera'},
    [CardName.COLD_FUSION_POWER]: {Factory: ColdFusionPower, compatibility: 'corpera'},
    [CardName.NUCLEAR_FORCE_POWER]: {Factory: NuclearForcePower, compatibility: 'corpera'},
    [CardName.ARTIFICIAL_MICROBIAL_LIFE]: {Factory: ArtificialMicrobialLife, compatibility: 'corpera'},
    [CardName.ACQUIRED_RESEARCH_FIRM]: {Factory: AcquiredResearchFirm, compatibility: 'corpera'},
    [CardName.INTERSTELLAR_PROBE]: {Factory: InterstellarProbe, compatibility: 'corpera'},
    [CardName.THEORY_OF_EVERYTHING]: {Factory: TheoryOfEverything, compatibility: 'corpera'},
    [CardName.GREAT_HARBOR]: {Factory: GreatHarbor, compatibility: 'corpera'},

    [CardName.FLOATER_ACQUISITION]: {Factory: FloaterAcquisition, compatibility: 'venus'},
    [CardName.IONIC_GAS_SEQUESTRATION]: {Factory: IonicGasSequestration, compatibility: 'venus'},
    [CardName.NEAR_MISS_ROTARY_ASTEROID]: {Factory: NearMissRotaryAsteroid, compatibility: 'venus'},
    [CardName.DWARF_PLANET_COLLISION]: {Factory: DwarfPlanetCollision, compatibility: 'venus'},
    [CardName.CONVOY_TO_VENUS]: {Factory: ConvoyToVenus, compatibility: 'venus'},
    [CardName.HUGE_WATER_SHIPMENTS]: {Factory: HugeWaterShipments, compatibility: 'venus'},
    [CardName.NITROGEN_FROM_VENUS]: {Factory: NitrogenFromVenus, compatibility: 'venus'},
    [CardName.ATMOSPHERE_LIFTING_DETONATIONS]: {Factory: AtmosphereLiftingDetonations, compatibility: 'venus'},
    [CardName.VENUS_MINING_EXPEDITION]: {Factory: VenusMiningExpedition, compatibility: 'venus'},
    [CardName.ULTRALIGHT_FLOATERS]: {Factory: UltralightFloaters, compatibility: 'venus'},
    [CardName.DANU_MONTES_ROVER]: {Factory: DanuMontesRover, compatibility: 'venus'},
    [CardName.COLLABORATION_PROJECT]: {Factory: CollaborationProject, compatibility: 'venus'},
    [CardName.CONSISTENT_BOMBARDMENT]: {Factory: ConsistentBombardment, compatibility: 'venus'},
    [CardName.PAN_SOLAR_MINING]: {Factory: PanSolarMining, compatibility: 'venus'},
    [CardName.FLOATING_RESEARCH_BASE]: {Factory: FloatingResearchBase, compatibility: 'venus'},
    [CardName.FLOATER_DOCKS]: {Factory: FloaterDocks, compatibility: 'venus'},
    [CardName.MESOSPHERE_SHADES]: {Factory: MesosphereShades, compatibility: 'venus'},
    [CardName.LOW_LEVEL_SCRAPPERS]: {Factory: LowLevelScrappers, compatibility: 'venus'},
    [CardName.CARBON_SOLIDIFICATION]: {Factory: CarbonSolidification, compatibility: 'venus'},
    [CardName.LOCAL_MAGNETIC_SHIELDING]: {Factory: LocalMagneticShielding, compatibility: 'venus'},
    [CardName.AERIAL_MASS_DRIVERS]: {Factory: AerialMassDrivers, compatibility: 'venus'},
    [CardName.SKY_COMMUNICATIONS]: {Factory: SkyCommunications, compatibility: 'venus'},
    [CardName.FLOATING_BIODOMES]: {Factory: FloatingBiodomes, compatibility: 'venus'},
    [CardName.ENDEMIC_VENUSIAN_ARCHAEA]: {Factory: EndemicVenusianArchaea, compatibility: 'venus'},
    [CardName.AIRBORNE_MICROBES]: {Factory: AirborneMicrobes, compatibility: 'venus'},
    [CardName.PH_NEUTRALIZERS]: {Factory: PHNeutralizers, compatibility: 'venus'},
    [CardName.CARBON_FIXING_MICROBES]: {Factory: CarbonFixingMicrobes, compatibility: 'venus'},
    [CardName.DESIGNED_FLYERS]: {Factory: DesignedFlyers, compatibility: 'venus'},
    [CardName.VENUS_SURFACE_DWELLERS]: {Factory: VenusSurfaceDwellers, compatibility: 'venus'},
    [CardName.VENERA_OUTPOST]: {Factory: VeneraOutpost, compatibility: 'venus'},
    [CardName.BIOENGINEERING_STUDIES]: {Factory: BioengineeringStudies, compatibility: 'venus'},
    [CardName.VENUS_BIOLAB]: {Factory: VenusBiolab, compatibility: 'venus'},
    [CardName.LOCAL_DECOMPRESSION]: {Factory: LocalDecompression, compatibility: 'venus'},
    [CardName.UNDERGROUND_VENUS_BASE]: {Factory: UndergroundVenusBase, compatibility: 'venus'},
    [CardName.TOWERS_OF_FREYJA]: {Factory: TowersOfFreyja, compatibility: 'venus'},
    [CardName.VENUS_SOLAR_WAYSTATION]: {Factory: VenusSolarWaystation, compatibility: 'venus'},
    [CardName.DRY_ICE_RINGS]: {Factory: DryIceRings, compatibility: 'venus'},
    [CardName.THE_BEHEMOTH]: {Factory: TheBehemoth, compatibility: 'venus'},
    [CardName.VENUS_MINING_INDUSTIRES]: {Factory: VenusMiningIndustries, compatibility: 'venus'},
    [CardName.OVDA_CITY]: {Factory: OvdaCity, compatibility: 'venus'},
    [CardName.CAPITAL_OF_VENUS]: {Factory: CapitalOfVenus, compatibility: 'venus'},
    [CardName.HYDROGEN_INJECTION]: {Factory: HydrogenInjection, compatibility: 'venus'},
    [CardName.ATMOSPHERIC_SOLAR_COLLECTORS]: {Factory: AtmosphericSolarCollectors, compatibility: 'venus'},
    [CardName.SWARM_SHADERS]: {Factory: SwarmShaders, compatibility: 'venus'},
    [CardName.VORTEX_ENGINE]: {Factory: VortexEngine, compatibility: 'venus'},
    [CardName.PHOTONIC_METAMATERIALS]: {Factory: PhotonicMetamaterials, compatibility: 'venus'},
    [CardName.NEUTRALIZER_DRONES]: {Factory: NeutralizerDrones, compatibility: 'venus'},
    [CardName.CONDENSATION_CATALYSTS]: {Factory: CondenstationCatalysts, compatibility: 'venus'},
    [CardName.BASALT_MINING]: {Factory: BasaltMining, compatibility: 'venus'},
    [CardName.VENUSIAN_FUNGI]: {Factory: VenusianFungi, compatibility: 'venus'},
    [CardName.LAKE_OF_APHRODITE]: {Factory: LakeOfAphrodite, compatibility: 'venus'},
    [CardName.SUPER_CARBON_COLLECTORS]: {Factory: SuperCarbonCollectors, compatibility: 'venus'},
    [CardName.SULPHUR_PROCESSING]: {Factory: SulphurProcessing, compatibility: 'venus'},
    [CardName.STELLAR_CRUISERS]: {Factory: StellarCruisers, compatibility: 'venus'},
    [CardName.DISTRIBUTION_CENTER]: {Factory: DistributionCenter, compatibility: 'venus'},
    [CardName.WORLD_GOVERNMENT_OFFICES]: {Factory: WorldGovernmentOffices, compatibility: 'venus'},
    [CardName.VENUS_TOURISM]: {Factory: VenusTourism, compatibility: 'venus'},
    [CardName.ISHTAR_COMPLEX]: {Factory: IshtarComplex, compatibility: 'venus'},
    [CardName.SURFACE_HABS]: {Factory: SurfaceHabs, compatibility: 'venus'},
    [CardName.THEMIS_BIODOMES]: {Factory: ThemisBiodomes, compatibility: 'venus'},
    [CardName.ATEN_GROUP_MINING]: {Factory: AtenGroupMining, compatibility: 'venus'},
    [CardName.RHIZOBIOME_RESEARCH]: {Factory: RhizobiomeResearch, compatibility: 'venus'},
    [CardName.FLOATING_POWER_STATION]: {Factory: FloatingPowerStation, compatibility: 'venus'},
    [CardName.DEUTERIUM_FUSION]: {Factory: DeuteriumFusion, compatibility: 'venus'},
    [CardName.VENUS_POWER_PLANT]: {Factory: VenusPowerPlant, compatibility: 'venus'},
    [CardName.TERRESTRIAL_ALLIANCE]: {Factory: TerrestrialAlliance, compatibility: 'venus'},
    [CardName.ECLIPSE_STATION]: {Factory: EclipseStation, compatibility: 'venus'},
    [CardName.VENUS_PLANTATION]: {Factory: VenusPlantation, compatibility: 'venus'},
    [CardName.WORKER_DRONES]: {Factory: WorkerDrones, compatibility: 'venus'},
    [CardName.FLOATING_ARCHITECHTURE]: {Factory: FloatingArchitechture, compatibility: 'venus'},
    [CardName.BIOMECHANICAL_FOLIAGE]: {Factory: BiomechanicalFoliage, compatibility: 'venus'},
    [CardName.VENUS_GEOLOGICAL_SURVEY]: {Factory: VenusGeologicalSurvey, compatibility: 'venus'},

    [CardName.COORDINATED_RAID_CHEMICAL]: {Factory: CoordinatedRaidChemical, compatibility: 'colonies'},
    [CardName.SPONSORED_FLIGHT]: {Factory: SponsoredFlight, compatibility: 'colonies'},
    [CardName.LARGE_TRADING_FLEET]: {Factory: LargeTradingFleet, compatibility: 'colonies'},
    [CardName.OUTER_SOLAR_MISSION]: {Factory: OuterSolarMission, compatibility: 'colonies'},
    [CardName.COMMISSIONED_FLEET]: {Factory: CommissionedFleet, compatibility: 'colonies'},
    [CardName.MARKET_SIPHON]: {Factory: MarketSiphon, compatibility: 'colonies'},
    [CardName.PLANETARY_TRADE]: {Factory: PlanetaryTrade, compatibility: 'colonies'},
    [CardName.FLOATING_TECH_RESEARCH]: {Factory: FloatingTechResearch, compatibility: 'colonies'},
    [CardName.DEEP_JUPITER_PROBE]: {Factory: DeepJupiterProbe, compatibility: 'colonies'},
    [CardName.JOVIAN_MOON_MAPPING]: {Factory: JovianMoonMapping, compatibility: 'colonies'},
    [CardName.ICE_MOON_COLLISION]: {Factory: IceMoonCollision, compatibility: 'colonies'},
    [CardName.PRODUCTIVITY_QUOTA]: {Factory: ProductivityQuota, compatibility: 'colonies'},
    [CardName.CERES_LAUNCHPAD]: {Factory: CeresLaunchpad, compatibility: 'colonies'},
    [CardName.ASTEROID_BELT_COLONY]: {Factory: AsteroidBeltColony, compatibility: 'colonies'},
    [CardName.SPACE_TETHERS]: {Factory: SpaceTethers, compatibility: 'colonies'},
    [CardName.FLOATING_COLONY]: {Factory: FloatingColony, compatibility: 'colonies'},
    [CardName.GAS_GIANT_HABS]: {Factory: GasGiantHabs, compatibility: 'colonies'},
    [CardName.TITAN_RESEARCH_OUTPOST]: {Factory: TitanReseachOutpost, compatibility: 'colonies'},
    [CardName.JOVIAN_CONSTRUCTION_YARD]: {Factory: JovianConstructionYard, compatibility: 'colonies'},
    [CardName.WATER_FROM_TITAN]: {Factory: WaterFromTitan, compatibility: 'colonies'},
    [CardName.METHANE_EXPORTS]: {Factory: MethaneExports, compatibility: 'colonies'},
    [CardName.GALILEAN_MINING_NETWORK]: {Factory: GalileanMiningNetwork, compatibility: 'colonies'},
    [CardName.TITAN_FUEL_STATION]: {Factory: TitanFuelStation, compatibility: 'colonies'},
    [CardName.JUPITER_FLOATING_CITY]: {Factory: JupiterFloatingCity, compatibility: 'colonies'},
    [CardName.FLOATER_FACILITY]: {Factory: FloaterFacility, compatibility: 'colonies'},
    [CardName.FLOATING_TECH_INVESTMENTS]: {Factory: FloatingTechInvestments, compatibility: 'colonies'},
    [CardName.PRIMATES]: {Factory: Primates, compatibility: 'colonies'},
    [CardName.COLONY_SUPPLIERS]: {Factory: ColonySuppliers, compatibility: 'colonies'},
    [CardName.FUEL_SUBSIDIES]: {Factory: FuelSubsidies, compatibility: 'colonies'},
    [CardName.REMOTE_TEST_ZONE]: {Factory: RemoteTestZone, compatibility: 'colonies'},
    [CardName.WAYPOINT_COLONY]: {Factory: WaypointColony, compatibility: 'colonies'},
    [CardName.PRIVATE_COLONY]: {Factory: PrivateColony, compatibility: 'colonies'},
    [CardName.REMOTE_MINING_BASE]: {Factory: RemoteMiningBase, compatibility: 'colonies'},
    [CardName.RESEARCH_MISSIONS]: {Factory: ResearchMissions, compatibility: 'colonies'},
    [CardName.VENUS_TRADE_STATION]: {Factory: VenusTradeStation, compatibility: 'colonies'},
    [CardName.RIM_POPULATION_CENTER]: {Factory: RimPopulationCenter, compatibility: 'colonies'},
    [CardName.BUSINESS_COLONY]: {Factory: BusinessColony, compatibility: 'colonies'},
    [CardName.SELF_SUFFICIENT_COLONY]: {Factory: SelfSufficientColony, compatibility: 'colonies'},
    [CardName.INDUSTRIAL_COLONY]: {Factory: IndustrialColony, compatibility: 'colonies'},
    [CardName.DOME_FARMING_COLONY]: {Factory: DomeFarmingColony, compatibility: 'colonies'},
    [CardName.ENERGY_BEAM_COLONY]: {Factory: EnergyBeamColony, compatibility: 'colonies'},
    [CardName.KUIPER_BELT_COLONY]: {Factory: KuiperBeltColony, compatibility: 'colonies'},
    [CardName.THERMAL_RESERVIOR]: {Factory: ThermalReservior, compatibility: 'colonies'},
    [CardName.SLUM_CITY]: {Factory: SlumCity, compatibility: 'colonies'},
    [CardName.LUNAR_PORT]: {Factory: LunarPort, compatibility: 'colonies'},
    [CardName.MUSEUM_OF_LUNA]: {Factory: MuseumOfLuna, compatibility: 'colonies'},
    [CardName.LUNAR_RESORT]: {Factory: LunarResort, compatibility: 'colonies'},
    [CardName.LUNA_COLONIZATION_INVESTMENTS]: {Factory: LunaColonizationInvestments, compatibility: 'colonies'},
    [CardName.MICROGRAVITY_LAB]: {Factory: MicrogravityLab, compatibility: 'colonies'},
    [CardName.MILITARY_SPACE_STATION]: {Factory: MilitarySpaceStation, compatibility: 'colonies'},
    [CardName.LUNAR_H3_MINING]: {Factory: LunarH3Mining, compatibility: 'colonies'},
    [CardName.COLONY_MINING_INFRASTRUCTURE]: {Factory: ColonyMiningInfrastructure, compatibility: 'colonies'},
    [CardName.CASSINI_ENTERPRISES]: {Factory: CassiniEnterprises, compatibility: 'colonies'},
    [CardName.HEMERA_BUNKER]: {Factory: HemeraBunker, compatibility: 'colonies'},
    [CardName.ORBITAL_BIODOMES]: {Factory: OrbitalBiodomes, compatibility: 'colonies'},
    [CardName.AZALEA_BUSHES]: {Factory: AzaleaBushes, compatibility: 'colonies'},
    [CardName.WILDFLOWERS]: {Factory: Wildflowers, compatibility: 'colonies'},
    [CardName.COLONY_SPACE_MIRRORS]: {Factory: ColonySpaceMirrors, compatibility: 'colonies'},
    [CardName.LUNAR_POWER_GRID]: {Factory: LunarPowerGrid, compatibility: 'colonies'},
    [CardName.PROTO_DYSON_SWARM]: {Factory: ProtoDysonSwarm, compatibility: 'colonies'},

    [CardName.EARTH_EMBASSY_CHEMICAL]: {Factory: EarthEmbassyChemical, compatibility: 'colonies'},
    [CardName.MERCURIAL_SUNSHADE]: {Factory: MercurialSunshade, compatibility: 'colonies'},
    [CardName.HIGH_ORBIT_RESEARCH_STATION]: {Factory: HighOrbitResearchStation, compatibility: 'colonies'},
    [CardName.TERRESTRIAL_RESEARCH_SUMMIT]: {Factory: TerrestrialResearchSummit, compatibility: 'colonies'},
    [CardName.ARCTIC_ENDOLITHS]: {Factory: ArcticEndoliths, compatibility: 'colonies'},
    [CardName.HYPER_EXTREMOPHILE_FUNGI]: {Factory: HyperExtremophileFungi, compatibility: 'colonies'},
    [CardName.BIODIVERSITY_BOOM]: {Factory: BiodiversityBoom, compatibility: 'colonies'},
    [CardName.COLONY_REFORMS]: {Factory: ColonyReforms, compatibility: 'colonies'},

    [CardName.DIRECTED_SABOTAGE_IMPACT]: {Factory: DirectedSabotageImpact, compatibility: 'turmoil'},
    [CardName.FUSION_BOMBING]: {Factory: FusionBombing, compatibility: 'turmoil'},
    // [CardName.DEMOCRATIC_REFORM]: {Factory: DemocraticReform, compatibility: 'turmoil'},
    [CardName.MEDIA_MANIPULATION]: {Factory: MediaManipulation, compatibility: 'turmoil'},
    [CardName.INAUGURATION_CEREMONY]: {Factory: InaugurationCeremony, compatibility: 'turmoil'},
    [CardName.POLITICAL_DONATIONS]: {Factory: PoliticalDonations, compatibility: 'turmoil'},
    [CardName.DESIGNED_ORGANISMS_CHEMICAL]: {Factory: DesignedOrganisms, compatibility: 'turmoil'},
    [CardName.TELLURIAN_ECOSYSTEMS]: {Factory: TellurianEcosystems, compatibility: 'turmoil'},
    [CardName.PRESERVATIONISM]: {Factory: Preservationism, compatibility: 'turmoil'},
    [CardName.INTERPLANETARY_DIPLOMACY]: {Factory: InterplanetaryDiplomacy, compatibility: 'turmoil'},
    [CardName.WORLD_GOVERNMENT_DIPLOMATS]: {Factory: WorldGovernmentDiplomats, compatibility: 'turmoil'},
    [CardName.HYBRID_VESSELS]: {Factory: HybridVessels, compatibility: 'turmoil'},
    [CardName.SHORT_TERM_BONUSES]: {Factory: ShortTermBonuses, compatibility: 'turmoil'},
    [CardName.MARTIAN_RESEARCH_NETWORK]: {Factory: MartianResearchNetwork, compatibility: 'turmoil'},
    [CardName.ENERGY_LAB]: {Factory: EnergyLab, compatibility: 'turmoil'},
    // [CardName.STIMULUS_PROGRAMS]: {Factory: StimulusPrograms, compatibility: 'turmoil'},
    [CardName.COMMITTEE_COALITION]: {Factory: CommitteeCoalition, compatibility: 'turmoil'},
    [CardName.LEGAL_FIRM]: {Factory: LegalFirm, compatibility: 'turmoil'},
    [CardName.KICKBACKS]: {Factory: Kickbacks, compatibility: 'turmoil'},
    [CardName.REMOTE_AREA_SUPPLIERS]: {Factory: RemoteAreaSuppliers, compatibility: 'turmoil'},
    [CardName.MEDICAL_INSTITUTE]: {Factory: MedicalInstitute, compatibility: 'turmoil'},
    [CardName.MICROBIAL_SUPPORT]: {Factory: MicrobialSupport, compatibility: 'turmoil'},
    [CardName.VENUS_SOCIETY_SUPPORT]: {Factory: VenusSocietySupport, compatibility: 'turmoil'},
    // [CardName.PRIMAL_NATIONAL_PARK]: {Factory: PrimalNationalPark, compatability: 'turmoil'},
    [CardName.CORPORATE_CITADEL]: {Factory: CorporateCitadel, compatibility: 'turmoil'},
    [CardName.PRESERVATIONIST_SETTLEMENT]: {Factory: PreservationistSettlement, compatibility: 'turmoil'},
    [CardName.AUTHORITARIAN_STATE]: {Factory: AuthoritarianState, compatibility: 'turmoil'},
    [CardName.INDUSTRY_DEVELOPMENT]: {Factory: IndustryDevelopment, compatibility: 'turmoil'},
    [CardName.ACQUIRED_BIOENGINEERING_FIRM]: {Factory: AcquiredBioengineeringFirm, compatibility: 'turmoil'},
    [CardName.IONIZING_RADIATION_BEAM]: {Factory: IonizingRadiationBeam, compatibility: 'turmoil'},
    [CardName.REDUCED_SNOW_COVERAGE]: {Factory: ReducedSnowCoverage, compatibility: 'turmoil'},
    [CardName.SOCIAL_WELFARE]: {Factory: SocialWelfare, compatibility: 'turmoil'},
    [CardName.EXOPLANET_LANDING]: {Factory: ExoplanetLanding, compatibility: 'turmoil'},
    [CardName.FIRST_MARTIAN_MEMORIAL]: {Factory: FirstMaritanMemorial, compatibility: 'turmoil'},
    [CardName.TERRAFORMING_UNION]: {Factory: TerraformingUnion, compatibility: 'turmoil'},
    [CardName.ACQUIRED_CONSULTING_FIRM]: {Factory: AcquiredConsultingFirm, compatibility: 'turmoil'},
  },
  globalEvents: {
    [GlobalEventName.LAND_DELEGATION]: {Factory: LandDelegation},
    [GlobalEventName.INTELLECTUALIST_MOVEMENTS]: {Factory: IntellectualistMovements},
    [GlobalEventName.MANDATORY_INSURANCE]: {Factory: MandatoryInsurance},
    [GlobalEventName.TRADE_EMBARGO]: {Factory: TradeEmbargo},
    [GlobalEventName.INSURGENCY]: {Factory: Insurgency},
    [GlobalEventName.LABOR_REVOLT]: {Factory: LaborRevolt},
    [GlobalEventName.INTERPLANETARY_COMMUNITIES]: {Factory: InterplanetaryCommunities},
    [GlobalEventName.CHEMICAL_POLLUTION]: {Factory: ChemicalPollution},
    [GlobalEventName.PESTICIDE_APPLICATION]: {Factory: PesticideApplication},
    [GlobalEventName.CYBERATTACKS]: {Factory: Cyberattacks},
    [GlobalEventName.MINING_INDUSTRIES]: {Factory: MiningIndustries},
    [GlobalEventName.FAMINE]: {Factory: Famine},
    [GlobalEventName.NANOTECH_INNOVATION]: {Factory: NanotechInnovation},
    [GlobalEventName.POWER_SURPLUS]: {Factory: PowerSurplus},
    [GlobalEventName.LAND_RUN]: {Factory: LandRun},
    [GlobalEventName.ERADICATION_OF_GENETIC_ILLNESS]: {Factory: EradicationOfGeneticIllness},
    [GlobalEventName.MAGNETIC_FIELD_FAILURE]: {Factory: MagneticFieldFailure},
    [GlobalEventName.FOOD_SUPPLY]: {Factory: FoodSupply},
    [GlobalEventName.CONSTITUTIONAL_REFORMATION]: {Factory: ConstitutionalReformation},
    [GlobalEventName.ECOLOGY_PROJECTS]: {Factory: EcologyProjects},
    [GlobalEventName.ECOSYSTEM_DISRUPTION]: {Factory: EcosystemDisruption},
    [GlobalEventName.RED_UPRISING]: {Factory: RedUprising},
    [GlobalEventName.WILDFIRES]: {Factory: WildfiresEvent},
    [GlobalEventName.EGALITARIAN_MOVEMENTS]: {Factory: EgalitarianMovements},
    [GlobalEventName.MARS_STOCK_EXCHANGE]: {Factory: MarsStockExchange},
    [GlobalEventName.COLONIZATION_OF_MERCURY]: {Factory: ColonizationOfMercury},
    [GlobalEventName.REVISED_PATENT_LAW]: {Factory: RevisedPatentLaw},
    [GlobalEventName.ECOLOGICAL_SUPPORT]: {Factory: EcologicalSupport},
    [GlobalEventName.ABSTINANCE_BONUS]: {Factory: AbstinanceBonus},
    [GlobalEventName.RED_TOURISM]: {Factory: RedTourism},
    [GlobalEventName.PREFERENTIAL_LOANS]: {Factory: PreferentialLoans},
    [GlobalEventName.SEVERE_MARSQUAKE]: {Factory: SevereMarsquake},
    [GlobalEventName.EXTINCTION_EVENT]: {Factory: ExtinctionEvent},
    [GlobalEventName.SPACE_TRAVEL_LIMITATIONS]: {Factory: SpaceTravelLimitations},
    [GlobalEventName.RIM_SHORTAGES]: {Factory: RimShortages},
    [GlobalEventName.MICROBIAL_BOOM]: {Factory: MicrobialBoom},
    [GlobalEventName.TECHNOLOGICAL_REGRESSION]: {Factory: TechnologicalRegression},
    [GlobalEventName.POWER_GENERATION_SUBSIDIES]: {Factory: PowerGenerationSubsidies},
    [GlobalEventName.TAXATION_OF_VENUS]: {Factory: TaxationOfVenus, compatibility: 'venus'},
    [GlobalEventName.VENUS_MINING]: {Factory: VenusMining, compatibility: 'venus'},
    [GlobalEventName.DEGREDATION_OF_VENUS]: {Factory: DegredationOfVenus, compatibility: 'venus'},
    [GlobalEventName.FLOATER_TECHNOLOGY]: {Factory: FloaterTechnologyEvent, compatibility: 'venus'},
    [GlobalEventName.VENUSIAN_ECOSYSTEMS]: {Factory: VenusianEcosystems, compatibility: 'venus'},
    [GlobalEventName.SOCIETIES_OF_VENUS]: {Factory: SocietiesOfVenus, compatibility: 'venus'},
    [GlobalEventName.ANTICORROSIVE_MATERIALS]: {Factory: AnticorrosiveMaterials, compatibility: 'venus'},
    [GlobalEventName.LOWLAND_FLOODING]: {Factory: LowlandFlooding, compatibility: 'venus'},
    [GlobalEventName.COMMUNITY_SERVICES]: {Factory: CommunityServicesEvent, compatibility: 'colonies'},
    [GlobalEventName.POWER_FAILURE]: {Factory: PowerFailureEvent, compatibility: 'colonies'},
    [GlobalEventName.INTERSTELLAR_COLONIZATION]: {Factory: InterstallarColonization, compatibility: 'colonies'},
    [GlobalEventName.COLONY_PRODUCTIVITY]: {Factory: ColonyProductivity, compatibility: 'colonies'},
    [GlobalEventName.COMMAND_ECONOMY]: {Factory: CommandEconomy, compatibility: 'colonies'},
    [GlobalEventName.JOVIAN_WAR]: {Factory: JovianWar, compatibility: 'colonies'},
    [GlobalEventName.REFUGEE_CRISIS]: {Factory: RefugeeCrisis, compatibility: 'colonies'},
    [GlobalEventName.ECONOMIC_DEPRESSION]: {Factory: EconomicDepression, compatibility: 'colonies'},
  },
});
