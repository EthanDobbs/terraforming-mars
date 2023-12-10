import {CardName} from '../../../common/cards/CardName';
import {GlobalEventName} from '../../../common/turmoil/globalEvents/GlobalEventName';
import {ModuleManifest} from '../ModuleManifest';
import {Overgrowth} from './base/Overgrowth';
import {Wildfires} from './base/Wildfires';
import {AsteroidMiningExpedition} from './base/AsteroidMiningExpedition';
import {ArtificialAsteroid} from './base/ArtificialAsteroid';
import {TemporarySmeltingPlant} from './base/TemporarySmeltingPlant';
import {EcologicalShipment} from './base/EcologicalShipment';
import {OxygenShipment} from './base/OxygenShipment';
import {CondensedGasConvoy} from './base/CondensedGasConvoy';
import {ImportedFuel} from './base/ImportedFuel';
import {PanspermicAsteroid} from './base/PanspermicAsteroid';
import {InstantiatedSolarFlare} from './base/InstantiatedSolarFlare';
import {HighSpeedComet} from './base/HighSpeedComet';
import {TitaniumComet} from './base/TitaniumComet';
import {GiantCarbonateAsteroid} from './base/GiantCarbonateAsteroid';
import {CarbonateAsteroid} from './base/CarbonateAsteroid';
import {AcceleratedImpactor} from './base/AcceleratedImpactor';
import {IronRichAsteroid} from './base/IronRichAsteroid';
import {MinorImpactor} from './base/MinorImpactor';
import {ConvoyFromTitan} from './base/ConvoyFromTitan';
import {HydrogenFromSaturn} from './base/HydrogenFromSaturn';
import {ExpeditionToDione} from './base/ExpeditionToDione';
import {LargeThermalDetonator} from './base/LargeThermalDetonator';
import {SubcrustVaporTrapping} from './base/SubcrustVaporTrapping';
import {CyanobacteriaBloom} from './base/CyanobacteriaBloom';
import {HabitatConservation} from './base/HabitatConservation';
import {ArchivalStudies} from './base/ArchivalStudies';
import {Overclock} from './base/Overclock';
import {EarlyExpeditionChemical} from './base/EarlyExpeditionChemical';
import {AsteroidStudy} from './base/AsteroidStudy';
import {NitrogenAsteroids} from './base/NitrogenAsteroids';
import {OxygenatedComets} from './base/OxygenatedComets';
import {KuiperBeltIceAsteroids} from './base/KuiperBeltIceAsteroids';
import {CeresMiningOperations} from './base/CeresMiningOperations';
import {AmmoniaHeavyAsteroids} from './base/AmmoniaHeavyAsteroids';
import {MTypeAsteroidMining} from './base/MTypeAsteroidMining';
import {FloatingWeatherProbes} from './base/FloatingWeatherProbes';
import {ProductionDrones} from './base/ProductionDrones';
import {EuropanBacteria} from './base/EuropanBacteria';
import {Termites} from './base/Termites';
import {MartianThermophiles} from './base/MartianThermophiles';
import {MimicryArchaea} from './base/MimicryArchaea';
import {MyceliumFungi} from './base/MyceliumFungi';
import {Macroplankton} from './base/Macroplankton';
import {WaterSplittingMicrobes} from './base/WaterSplittingMicrobes';
import {AntiOxidationBacteria} from './base/AntiOxidationBacteria';
import {ThallophyteProtists} from './base/ThallophyteProtists';
import {EnzymeConstructors} from './base/EnzymeConstructors';
import {LatticeConstructionMicrobes} from './base/LatticeConstructionMicrobes';
import {ElectroplaqueMicrobes} from './base/ElectroplaqueMicrobes';
import {LargeAquaticMammals} from './base/LargeAquaticMammals';
import {TundraWildlife} from './base/TundraWildlife';
import {Poultry} from './base/Poultry';
import {FishFarmingLake} from './base/FishFarmingLake';
import {Cephalopods} from './base/Cephalopods';
import {EndangeredSpeciesRefuge} from './base/EndangeredSpeciesRefuge';
import {NonHypoxicSmallAnimals} from './base/NonHypoxicSmallAnimals';
import {SubterranianCreatures} from './base/SubterranianCreatures';
import {AridRegionReptiles} from './base/AridRegionReptiles';
import {AntarcticKrill} from './base/AntarcticKrill';
import {AncientArthopods} from './base/AncientArthropods';
import {HabitatDomes} from './base/HabitatDomes';
import {Aquaponics} from './base/Aquaponics';
import {RegolithTreatment} from './base/RegolithTreatment';
import {EuropaWaterSplitting} from './base/EuropaWaterSplitting';
import {SiliconFactory} from './base/SiliconFactory';
import {AluminumFoundry} from './base/AluminumFoundry';
import {LocalTemperatureControl} from './base/LocalTemperatureControl';
import {AdvancedGeneticAdaption} from './base/AdvancedGeneticAdaption';
import {OceanographyResearch} from './base/OceanographyResearch';
import {HeavyAerospaceTech} from './base/HeavyAerospaceTech';
import {FreightShuttles} from './base/FreightShuttles';
import {GeneticEngineeringLab} from './base/GeneticEngineeringLab';
import {CO2Vents} from './base/CO2Vents';
import {PublicLand} from './base/PublicLand';
import {EcologicalContract} from './base/EcologicalContract';
import {Biodomes} from './base/Biodomes';
import {TemperateRainforest} from './base/TemperateRainforest';
import {BiomassReactor} from './base/BiomassReactor';
import {MicrobeCultivationFacility} from './base/MicrobeCultivationFacility';
import {BiodiversityContract} from './base/BiodiversityContract';
import {ImperativeSettlement} from './base/ImperativeSettlement';
import {EcoCentral} from './base/EcoCentral';
import {SprawlingCity} from './base/SprawlingCity';
import {ThawMining} from './base/ThawMining';
import {IndependentSettlement} from './base/IndependentSettlement';
import {MultifunctionalDome} from './base/MultifunctionalDome';
import {MiningCommunity} from './base/MiningCommunity';
import {DeepBurrowSettlement} from './base/DeepBurrowSettlement';
import {InsulatedCity} from './base/InsulatedCity';
import {BuriedSettlement} from './base/BuriedSettlement';
import {InstituteSettlement} from './base/InstituteSettlement';
import {HugeCity} from './base/HugeCity';
import {HugeGlacier} from './base/HugeGlacier';
import {FreshwaterLake} from './base/FreshwaterLake';
import {DeepWellPump} from './base/DeepWellPump';
import {GeothermalReserviorHeating} from './base/GeothermalReserviorHeating';
import {MunicipalReservior} from './base/MunicipalReservior';
import {ExplosivesTestSite} from './base/ExplosivesTestSite';
import {LumberMill} from './base/LumberMill';
import {CommercialImports} from './base/CommercialImports';
import {UrbanDevelopment} from './base/UrbanDevelopment';
import {TunnelBoring} from './base/TunnelBoring';
import {LithiumMine} from './base/LithiumMine';
import {ChasmaExcavation} from './base/ChasmaExcavation';
import {DeepPolarExtraction} from './base/DeepPolarExtraction';
import {PhobosMiningOperations} from './base/PhobosMiningOperations';
import {CallistoOperations} from './base/CallistoOperations';
import {LaserFactory} from './base/LaserFactory';
import {RegolithAeration} from './base/RegolithAeration';
import {Mixotrophs} from './base/Mixotrophs';
import {BotanicalLab} from './base/BotanicalLab';
import {Composting} from './base/Composting';
import {EnzymaticTreatment} from './base/EnzymaticTreatment';
import {ExtremeNitrophiles} from './base/ExtremeNitrophiles';
import {VascularTundraPlants} from './base/VascularTundraPlants';
import {Bamboo} from './base/Bamboo';
import {ErosionReducingGreenery} from './base/ErosionReducingGreenery';
import {DwarfWillow} from './base/DwarfWillow';
import {Wildberries} from './base/Wildberries';
import {AnaerobicEnergyCropping} from './base/AnaerobicEnergyCropping';
import {AdaptedHardwood} from './base/AdaptedHardwood';
import {AquaticBiodomes} from './base/AquaticBiodomes';
import {Conifers} from './base/Conifers';
import {Barley} from './base/Barley';
import {WetlandsChemical} from './base/WetlandsChemical';
import {Cacti} from './base/Cacti';
import {AdaptedFruitFarming} from './base/AdaptedFruitFarming';
import {RiceFields} from './base/RiceFields';
import {CoralReef} from './base/CoralReef';
import {CyanobacteriaChemical} from './base/CyanobacteriaChemical';
import {HydroponicsFacility} from './base/HydroponicsFacility';
import {RedAlgae} from './base/RedAlgae';
import {Irrigation} from './base/Irrigation';
import {Monsoons} from './base/Monsoons';
import {HeavyRespirators} from './base/HeavyRespirators';
import {BeeFarming} from './base/BeeFarming';
import {SaturnGasMine} from './base/SaturnGasMine';
import {SpaceBasedSolarPower} from './base/SpaceBasedSolarPower';
import {LargePowerPlant} from './base/LargePowerPlant';
import {HydrocarbonSynthesis} from './base/HydrocarbonSynthesis';
import {AtmosphericProcessing} from './base/AtmosphericProcessing';
import {UraniumDeposit} from './base/UraniumDeposit';
import {MassiveSolarFarm} from './base/MassiveSolarFarm';
import {EnrichmentPlant} from './base/EnrichmentPlant';
import {FuelCellProduction} from './base/FuelCellProduction';
import {EnergyMohole} from './base/EnergyMohole';
import {EfficientBatteries} from './base/EfficientBatteries';
import {AdvancedHydropower} from './base/AdvancedHydropower';
import {HighPowerBetavoltaics} from './base/HighPowerBetavoltaics';
import {CentralPowerPlant} from './base/CentralPowerPlant';
import {OsmoticPower} from './base/OsmoticPower';
import {SolidStateWildEnergy} from './base/SolidStateWildEnergy';
import {AtmosphericPressureEngine} from './base/AtmosphericPressureEngine';
import {IsotopeEnrichingBacteria} from './base/IsotopeEnrichingBacteria';
import {AnaerobicBacteria} from './base/AnaerobicBacteria';
import {CarbonateDeposit} from './base/CarbonateDeposit';
import {HFCProduction} from './base/HFCProduction';
import {GHGFactoryDistrict} from './base/GHGFactoryDistrict';
import {LaserCannon} from './base/LaserCannon';
import {NaturalGasExtraction} from './base/NaturalGasExtraction';
import {OzoneFactories} from './base/OzoneFactories';
import {SyntheticGrowthHormones} from './base/SyntheticGrowthHormones';
import {ProbioticTreatment} from './base/ProbioticTreatment';
import {MirandaLabs} from './base/MirandaLabs';
import {MarsLifeScienceInstitute} from './base/MarsLifeScienceInstitute';
import {SpeciesCryopreservation} from './base/SpeciesCryopreservation';
import {EarlyPolarOutpost} from './base/EarlyPolarOutpost';
import {RuralHousing} from './base/RuralHousing';
import {Parasite} from './corpera/Parasite';
import {PowerFailure} from './corpera/PowerFailure';
import {FailedSpaceMission} from './corpera/FailedSpaceMission';
import {AquiferRelocation} from './corpera/AquiferRelocation';
import {PublicRecords} from './corpera/PublicRecords';
import {AssetLiquidation} from './corpera/AssetLiquidation';
import {SmallSupplyDrop} from './corpera/SmallSupplyDrop';
import {PatentTrading} from './corpera/PatentTrading';
import {TechnologyExhibition} from './corpera/TechnologyExhibition';
import {ResearchDonation} from './corpera/ResearchDonation';
import {PopulationBoom} from './corpera/PopulationBoom';
import {GeneticBreakthrough} from './corpera/GeneticBreakthrough';
import {AstrophysicsCenter} from './corpera/AstrophysicsCenter';
import {CentaurLandings} from './corpera/CentaurLandings';
import {VestaObservatory} from './corpera/VestaObservatory';
import {EnceladusOutpost} from './corpera/EnceladusOutpost';
import {MeasurementDrones} from './corpera/MeasurementDrones';
import {AdvancedBiomachinery} from './corpera/AdvancedBiomachinery';
import {ViralAmeboid} from './corpera/ViralAmeboid';
import {LongTermEvolutionStudy} from './corpera/LongTermEvolutionStudy';
import {LaserLightsails} from './corpera/LaserLightsails';
import {AlloyFactory} from './corpera/AlloyFactory';
import {UndergroundTestSite} from './corpera/UndergroundTestSite';
import {ScientificMegaopolis} from './corpera/ScientificMegaopolis';
import {AlchemicReactions} from './corpera/AlchemicReactions';
import {WirelessEnergyTransfer} from './corpera/WirelessEnergyTransfer';
import {Kugelblitz} from './corpera/Kugelblitz';
import {ScientificLogs} from './corpera/ScientificLogs';
import {SponsoredResearchFirm} from './corpera/SponsoredResearchFirm';
import {NeuralEnhancers} from './corpera/NeuralEnchancers';
import {ConstructionCenter} from './corpera/ConstructionCenter';
import {BiodiversityGrants} from './corpera/BiodiversityGrants';
import {MarsBuinessInvestments} from './corpera/MarsBusinessInvestments';
import {Canals} from './corpera/Canals';
import {SteelExports} from './corpera/SteelExports';
import {JovianSuppliers} from './corpera/JovianSuppliers';
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
import {GrandStadium} from './corpera/GrandStadium';
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
import {HydrualicMining} from './corpera/HydrualicMining';
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
import {NearMissRotaryAsteroid} from './venus/NearMissRotaryAsteroid';
import {DwarfPlanetCollision} from './venus/DwarfPlanetCollision';
import {ConvoyToVenus} from './venus/ConvoyToVenus';
import {HugeWaterShipments} from './venus/HugeWaterShipments';
import {ImportedNeutralGasses} from './venus/ImportedNeutralGasses';
import {NitrogenFromVenus} from './venus/NitrogenFromVenus';
import {AtmosphereLiftingDetonations} from './venus/AtmosphereLiftingDetonations';
import {VenusMiningExpedition} from './venus/VenusMiningExpedition';
import {UltralightFloaters} from './venus/UltralightFloaters';
import {DanuMontesRover} from './venus/DanuMontesRover';
import {CollaborationProject} from './venus/CollaborationProject';
import {ConsistentBombardment} from './venus/ConsistentBombardment';
import {PanSolarMining} from './venus/PanSolarMining';
import {HighAltitudeStations} from './venus/HighAltitudeStations';
import {FloatingResearchBase} from './venus/FloatingResearchBase';
import {FloaterDocks} from './venus/FloaterDocks';
import {MesosphereShades} from './venus/MesosphereShades';
import {LowLevelScrappers} from './venus/LowLevelScrappers';
import {CarbonSolidification} from './venus/CarbonSolidifcation';
import {LocalMagneticShielding} from './venus/LocalMagneticShielding';
import {SkyCommunications} from './venus/SkyCommunications';
import {FloatingBiodomes} from './venus/FloatingBiodomes';
import {EndemicVenusianArchaea} from './venus/EndemicVenusianArchaea';
import {AirborneMicrobes} from './venus/AirborneMicrobes';
import {PHNeutralizers} from './venus/PHNeutralizers';
import {CarbonFixingMicrobes} from './venus/CarbonFixingMicrobes';
import {DesignedFlyers} from './venus/DesignedFlyers';
import {VenusSurfaceDwellers} from './venus/VenusSurfaceDwellers';
import {VenusianInvertebrates} from './venus/VenusianInvertebrates';
import {BioengineeringStudies} from './venus/BioengineeringStudies';
import {VenusBiolab} from './venus/VenusBiolab';
import {LocalDecompression} from './venus/LocalDecompression';
import {UndergroundVenusBase} from './venus/UndergroundVenusBase';
import {VenusSolarWaystation} from './venus/VenusSolarWaystation';
import {TowersOfFreyja} from './venus/TowersOfFreyja';
import {DryIceRings} from './venus/DryIceRings';
import {TheBehemoth} from './venus/TheBehemoth';
import {VenusMiningIndustries} from './venus/VenusMiningIndustries';
import {OvdaCity} from './venus/OvdaCity';
import {CapitalOfVenus} from './venus/CapitalOfVenus';
import {HydrogenInjection} from './venus/HydrogenInjection';
import {SwarmShaders} from './venus/SwarmShaders';
import {VortexEngine} from './venus/VortexEngine';
import {PhotonicMetamaterials} from './venus/PhontoicMetamaterials';
import {NeutralizerDrones} from './venus/NeutralizerDrones';
import {CondenstationCatalysts} from './venus/CondenstationCatalysts';
import {BasaltMining} from './venus/BasaltMining';
import {VenusianFungi} from './venus/VenusianFungi';
import {SpinInducingMassDrivers} from './venus/SpinInducingMassDrivers';
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
import {TradeDealLeverage} from './colonies/TradeDealLeverage';
import {RemoteTestZone} from './colonies/RemoteTestZone';
import {WaypointColony} from './colonies/WaypointColony';
import {PrivateColony} from './colonies/PrivateColony';
import {RemoteMiningBase} from './colonies/RemoteMiningBase';
import {ResearchMissions} from './colonies/ResearchMissions';
import {VenusTradeStation} from './colonies/VenusTradeStation';
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
import {SolarStation} from './colonies/SolarStation';
import {OrbitalShipyard} from './colonies/OrbitalShipyard';
import {LunarH3Mining} from './colonies/LunarH3Mining';
import {ColonyMiningInfrastructure} from './colonies/ColonyMiningInfrastructure';
import {HemeraBunker} from './colonies/HemeraBunker';
import {OrbitalBiodomes} from './colonies/OrbitalBiodomes';
import {AzaleaBushes} from './colonies/AzaleaBushes';
import {Wildflowers} from './colonies/Wildflowers';
import {ColonySpaceMirrors} from './colonies/ColonySpaceMirrors';
import {LunarPowerGrid} from './colonies/LunarPowerGrid';
import {ProtoDysonSwarm} from './colonies/ProtoDysonSwarm';
import {HydrothermalVents} from './colonies/HydrothermalVents';
import {EarthEmbassyChemical} from './colonies/EarthEmbassyChemical';
import {HighOrbitResearchStation} from './colonies/HighOrbitResearchStation';
import {TerrestrialResearchSummit} from './colonies/TerrestrialResearchSummit';
import {AstronomicalClaim} from './colonies/AstronomicalClaim';
import {SaturnAsteroidCollection} from './colonies/SaturnAsteroidCollection';
import {ThisAtmosphereFloaters} from './colonies/ThinAtmosphereFloaters';
import {ArcticEndoliths} from './colonies/ArcticEndoliths';
import {HyperExtremophileFungi} from './colonies/HyperExtremophileFungi';
import {BiodiversityBoom} from './colonies/BiodiversityBoom';
import {ColonyReforms} from './colonies/ColonyReforms';
import {DirectedSabotageImpact} from './turmoil/DirectedSabotageImpact';
import {FusionBombing} from './turmoil/FusionBombing';
//import {DemocraticReform} from './DemocraticReform';
import {MediaManipulation} from './turmoil/MediaManipulation';
import {InaugerationCeremony} from './turmoil/InaugerationCeremony';
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
//import {StimulusPrograms} from './StimulusPrograms',
import {CommitteeCoalition} from './turmoil/CommitteeCoalition';
import {LegalFirm} from './turmoil/LegalFirm';
import {Kickbacks} from './turmoil/Kickbacks';
import {RemoteAreaSuppliers} from './turmoil/RemoteAreaSuppliers';
import {MedicalInstitute} from './turmoil/MedicalInstitute';
import {MicrobialSupport} from './turmoil/MicrobialSupport';
import {VenusSocietySupport} from './turmoil/VenusSocietySupport';
//import {PrimalNationalPark} from './PrimalNationalPark';
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
//import {SpecialDesignChemical} from './replacements/archived/SpecialDesignChemical';
import {AerobrakedAmmoniaAsteroidChemical} from './replacements/AerobrakedAmmoniaAsteroidChemical';
//import {SmallAsteroidChemical} from './replacements/archived/SmallAsteroidChemical';
//import {GHGProducingBacteriaChemical} from './replacements/archived/GHGProducingBacteriaChemical';
//import {AdaptationTechnologyChemical} from './replacements/archived/AdaptationTechnologyChemical';
import {UndergroundDetonationsChemical} from './replacements/UndergroundDetonationsChemical';
//import {SpaceMirrorsChemical} from './replacements/archived/SpaceMirrorsChemical';
import {EarthCatapultChemical} from './replacements/EarthCatapultChemical';
import {MarsUniversityChemical} from './replacements/MarsUniversityChemical';
//import {OlympusConferenceChemical} from './replacements/archived/OlympusConferenceChemical';
import {IndustrialCenterChemical} from './replacements/IndustrialCenterChemical';
import {ForcedPrecipitationChemical} from './replacements/ForcedPrecipitationChemical';
import {JetStreamMicroscrappersChemical} from './replacements/JetStreamMicroscrappersChemical';
import {ExtractorBalloonsChemical} from './replacements/ExtractorBalloonsChemical';
import {ThermophilesChemical} from './replacements/ThermophilesChemical';
import {VenusWaystationChemical} from './replacements/VenusWaystationChemical';
//import {SubZeroSaltFishChemical} from './replacements/archived/SubZeroSaltFishChemical';
import {MartianZooChemical} from './replacements/MartianZooChemical';
import {TradingColonyChemical} from './replacements/TradingColonyChemical';
//import {SpinoffDepartmentChemical} from './replacements/archived/SpinoffDepartmentChemical';
//import {DirectedImpactorsChemical} from './replacements/archived/DirectedImpactorsChemical';
import {AsteroidHollowingChemical} from './replacements/AsteroidHollowingChemical';
import {OrbitalCleanupChemical} from './replacements/OrbitalCleanupChemical';
import {CuttingEdgeTechnologyChemical} from './replacements/CuttingEdgeTechnologyChemical';
import {MeatIndustryChemical} from './replacements/MeatIndustryChemical';
//import {CarbonNanosystemsChemical} from './CarbonNanosystemsChemical';
//import {SolarLogisticsChemical} from './replacements/archived/SolarLogisticsChemical';
//import {MartianLumberCorpChemical} from './replacements/archived/MartianLumberCorpChemical';
//import {UndergroundCityChemical} from './replacements/archived/UndergroundCityChemical';
//import {CloudSeedingChemical} from './replacements/archived/CloudSeedingChemical';
import {BiomassCombustorsChemical} from './replacements/BiomassCombustorsChemical';
import {WormsChemical} from './replacements/WormsChemical';
import {AsteroidMiningConsortiumChemical} from './replacements/AsteroidMiningConsortiumChemical';
import {TollStationChemical} from './replacements/TollStationChemical';
//import {ResearchChemical} from './replacements/archived/ResearchChemical';
//import {HackersChemical} from './replacements/archived/HackersChemical';
//import {CorporateStrongholdChemical} from './replacements/archived/CorporateStrongholdChemical';
import {VenusSoilsChemical} from './replacements/VenusSoilsChemical';
import {ResearchColonyChemical} from './replacements/ResearchColonyChemical';
import {SpacePortColonyChemical} from './replacements/SpacePortColonyChemical';
//import {SnowAlgaeChemical} from './replacements/archived/SnowAlgaeChemical';
import {BactoviralResearchChemical} from './replacements/BactoviralResearchChemical';
import {LegalExperts} from './preludes/LegalExperts';
import {MaterialLoan} from './preludes/MaterialLoan';
import {ResearchLoan} from './preludes/ResearchLoan';
import {EarlyLandClaim} from './preludes/EarlyLandClaim';
import {TerraformingSponors} from './preludes/TerraformingSponsors';
import {EntertainmentIndustry} from './preludes/EntertainmentIndustry';
import {CoerciveDealings} from './preludes/CoerciveDealings';
import {NoctisSettlement} from './preludes/NoctisSettlement';
import {AquaponicsFacility} from './preludes/AquaponicsFacility';
import {WildlifeSponsors} from './preludes/WildlfieSponsors';
import {BlueprintAI} from './preludes/BlueprintAI';
import {RareMineralReserve} from './preludes/RareMineralReserve';
import {HeavyMetalComet} from './base/HeavyMetalComet';
import {Bioplastics} from './preludes/Bioplastics';
import {NuclearFuelMining} from './preludes/NuclearFuelMining';
import {AsteroidBeltOperations} from './preludes/AsteroidBeltOperations';
import {LunarMiningIndustries} from './preludes/LunarMiningIndustries';
import {LaserMining} from './preludes/LaserMining';
import {InfrastructureSupport} from './preludes/InfrastructureSupport';
import {GlacialAlgae} from './preludes/GlacialAlgae';
import {AmmoniaAsteroid} from './preludes/AmmoniaAsteroid';
import {AdaptedVascularGreenery} from './preludes/AdaptedVascularGreenery';
import {ProtistLifeforms} from './preludes/ProtistLifeforms';
import {EcologicalReserve} from './preludes/EcologicalReserve';
import {PowerCore} from './preludes/PowerCore';
import {EnergyBeam} from './preludes/EnergyBeam';
import {ThermalPlant} from './preludes/ThermalPlant';
import {AdvancedHeatingTech} from './preludes/AdvancedHeatingTech';
import {NanotechLab} from './preludes/NanotechLab';
import {AdvancedBiosphere} from './preludes/AdvancedBiosphere';
import {ResearchBase} from './preludes/ResearchBase';
import {FurtherDevelopment} from './preludes/FurtherDevelopment';
import {CorporateEspionage} from './preludes/CorporateEspionage';
import {VenusFirstChemical} from './preludes/VenusFirstChemical';
import {AirScrappingOperations} from './preludes/AirScrappingOperations';
import {HydrogenBombardmentChemical} from './preludes/HydrogenBombardmentChemical';
import {EarlyVenusBiosphere} from './preludes/EarlyVenusBiosphere';
import {VenusSupplier} from './preludes/VenusSupplier';
import {VenusGHGExports} from './preludes/VenusGHGExports';
import {InnerSolarMission} from './preludes/InnerSolarMission';
import {SisterPlanetResearch} from './preludes/SisterPlanetResearch';
import {FloatingCity} from './preludes/FloatingCity';
import {EarlyColony} from './preludes/EarlyColony';
import {IsolatedEcologyResearch} from './preludes/IsolatedEcologyResearch';
import {JovianProjectBase} from './preludes/JovianProjectBase';
import {InterplanetaryTradingPort} from './preludes/InterplanetaryTradingPort';
import {GasMine} from './preludes/GasMine';
import {TradingNetwork} from './preludes/TradingNetwork';
import {TitanSettlement} from './preludes/TitanSettlement';
import {TradeInfrastructure} from './preludes/TradeInfrastructure';
import {PhobosSpacePort} from './preludes/PhobosSpacePort';
import {CommitteeRepresentative} from './preludes/CommitteeRepresentative';
import {ByElectionChemical} from './preludes/ByElectionChemical';
import {ExecutiveOrderChemical} from './preludes/ExecutiveOrderChemical';
//import {ContractedIntelligenceAgency} from './ContractedIntelligenceAgency';
import {PartyInsiders} from './preludes/PartyInsiders';
import {PoliticalUprisingChemical} from './preludes/PoliticalUprisingChemical';
import {MartianRepublic} from './preludes/MartianRepublic';
import {IntellectualistMovement} from './globalevents/IntellectualistMovement';
import {CorporateAlliance} from './preludes/CorporateAlliance';
import {GreenMarsInitiative} from './preludes/GreenMarsInitiative';
import {PreservationistCampaign} from './preludes/PreservationistCampaign';
import {HeatFirstInitiative} from './globalevents/HeatFirstInitiative';
import { SelfSufficientSettlementChemical } from './replacements/SelfSufficientSettlementChemical';
import { MoholeExcavationChemical } from './replacements/MoholeExcavationChemical';
import { GalileanMiningChemical } from './replacements/GalileanMiningChemical';
import { OrbitalConstructionYardChemical } from './replacements/OrbitalConstructionYardChemical';
import { NitrogenShipmentChemical } from './replacements/NitrogenShipmentChemical';
import { BiosphereSupportChemical } from './replacements/BiosphereSupportChemical';
import { EarlySettlementChemical } from './replacements/EarlySettlementChemical';
import { BiofuelsChemical } from './replacements/BiofuelsChemical';
import { DomeFarmingChemical } from './replacements/DomeFarmingChemical';
import { SocietySupportChemical } from './replacements/SocietySupportChemical';
import { MoholeChemical } from './replacements/MoholeChemical';
import { PolarIndustriesChemical } from './replacements/PolarIndustriesChemical';
import { HugeAsteroidChemical } from './replacements/HugeAsteroidChemical';
import { LandDelegation } from './globalevents/LandDelegation';
import { IntellectualistMovements } from './preludes/IntellectualistMovements';
import { MandatoryInsurance } from './globalevents/MandatoryInsurance';
import { TradeEmbargo } from './globalevents/TradeEmbargo';
import { Insurgency } from './globalevents/Insurgency';
import { LaborRevolt } from './globalevents/LaborRevolt';
import { InterplanetaryCommunities } from './globalevents/InterplanetaryCommunities';
import { ChemicalPollution } from './globalevents/ChemicalPollution';
import { PesticideApplication } from './globalevents/PesticideApplication';
import { Cyberattacks } from './globalevents/Cyberattacks';
import { MiningIndustries } from './globalevents/MiningIndustries';
import { Famine } from './globalevents/Famine';
import { NanotechInnovation } from './globalevents/NanotechInnovation';
import { PowerSurplus } from './globalevents/PowerSurplus';
import { LandRun } from './globalevents/LandRun';
import { EradicationOfGeneticIllness } from './globalevents/EradicationOfGeneticIllness';
import { MagneticFieldFailure } from './globalevents/MagneticFieldFailure';
import { FoodSupply } from './globalevents/FoodSupply';
import { ConstitutionalReformation } from './globalevents/ConstitutionalReformation';
import { EcologyProjects } from './globalevents/EcologyProjects';
import { EcosystemDisruption } from './globalevents/EcosystemDisruption';
import {RedUprising} from './globalevents/RedUprising';
import { WildfiresEvent } from './globalevents/WildfiresEvent';
import { EgalitarianMovements } from './globalevents/EgalitarianMovements';
import { MarsStockExchange } from './globalevents/MarsStockExchange';
import { ColonizationOfMercury } from './globalevents/ColonizationOfMercury';
import { RevisedPatentLaw } from './globalevents/RevisedPatentLaw';
import { EcologicalSupport } from './globalevents/EcologicalSupport';
import {AbstinanceBonus} from './globalevents/AbstinanceBonus';
import { RedTourism } from './globalevents/RedTourism';
import { PreferentialLoans } from './globalevents/PreferentialLoans';
import { SevereMarsquake } from './globalevents/SevereMarsquake';
import { ExtinctionEvent } from './globalevents/ExtinctionEvent';
import { SpaceTravelLimitations } from './globalevents/SpaceTravelLimitations';
import { RimShortages } from './globalevents/RimShortages';
import { MicrobialBoom } from './globalevents/MicrobialBoom';
import { TechnologicalRegression } from './globalevents/TechnologicalRegression';
import { PowerGenerationSubsidies } from './globalevents/PowerGenerationSubsidies';
import { TaxationOfVenus } from './globalevents/TaxationOfVenus';
import { VenusMining } from './globalevents/VenusMining';
import { DegredationOfVenus } from './globalevents/DegredationOfVenus';
import { FloaterTechnologyEvent } from './globalevents/FloaterTechnologyEvent';
import { VenusianEcosystems } from './globalevents/VenusianEcosystems';
import { SocietiesOfVenus } from './globalevents/SocietiesOfVenus';
import { AnticorrosiveMaterials } from './globalevents/AnticorrosiveMaterials';
import { LowlandFlooding } from './globalevents/LowlandFlooding';
import { CommunityServicesEvent } from './globalevents/CommunityServicesEvent';
import { PowerFailureEvent } from './globalevents/PowerFailureEvent';
import { InterstallarColonization } from './globalevents/InterstallarColonization';
import { ColonyProductivity } from './globalevents/ColonyProductivity';
import { CommandEconomy } from './globalevents/CommandEconomy';
import { JovianWar } from './globalevents/JovianWar';
import { RefugeeCrisis } from './globalevents/RefugeeCrisis';
import { EconomicDepression } from './globalevents/EconomicDepression';

export const CHEMICAL_CARD_MANIFEST = new ModuleManifest({
  module: 'chemical',
  corporationCards: {

  },
  preludeCards: {
    [CardName.LEGAL_EXPERTS]: {Factory: LegalExperts},
    [CardName.MATERIAL_LOAN]: {Factory: MaterialLoan},
    [CardName.RESEARCH_LOAN]: {Factory: ResearchLoan},
    [CardName.EARLY_LAND_CLAIM]: {Factory: EarlyLandClaim},
    [CardName.TERRAFORMING_SPONSORS]: {Factory: TerraformingSponors},
    [CardName.ENTERTAINMENT_INDUSTRY]: {Factory: EntertainmentIndustry},
    [CardName.COERCIVE_DEALINGS]: {Factory: CoerciveDealings},
    [CardName.NOCTIS_SETTLEMENT]: {Factory: NoctisSettlement},
    [CardName.AQUAPONICS_FACILITY]: {Factory: AquaponicsFacility},
    [CardName.WILDLIFE_SPONSORS]: {Factory: WildlifeSponsors},
    [CardName.BLUEPRINT_AI]: {Factory: BlueprintAI},
    [CardName.RARE_MINERAL_RESERVE]: {Factory: RareMineralReserve},
    [CardName.HEAVY_METAL_COMET]: {Factory: HeavyMetalComet},
    [CardName.BIOPLASTICS]: {Factory: Bioplastics},
    [CardName.INFRASTRUCTURE_SUPPORT]: {Factory: InfrastructureSupport},
    [CardName.NUCLEAR_FUEL_MINING]: {Factory: NuclearFuelMining},
    [CardName.ASTEROID_BELT_OPERATIONS]: {Factory: AsteroidBeltOperations},
    [CardName.LUNAR_MINING_INDUSTRIES]: {Factory: LunarMiningIndustries},
    [CardName.LASER_MINING]: {Factory: LaserMining},
    [CardName.GLACIAL_ALGAE]: {Factory: GlacialAlgae},
    [CardName.AMMONIA_ASTEROID]: {Factory: AmmoniaAsteroid},
    [CardName.ADAPTED_VASCULAR_GREENERY]: {Factory: AdaptedVascularGreenery},
    [CardName.PROTIST_LIFEFORMS]: {Factory: ProtistLifeforms},
    [CardName.ECOLOGICAL_RESERVE]: {Factory: EcologicalReserve},
    [CardName.POWER_CORE]: {Factory: PowerCore},
    [CardName.ENERGY_BEAM]: {Factory: EnergyBeam},
    [CardName.THERMAL_PLANT]: {Factory: ThermalPlant},
    [CardName.ADVANCED_HEATING_TECH]: {Factory: AdvancedHeatingTech},
    [CardName.NANOTECH_LAB]: {Factory: NanotechLab},
    [CardName.ADVANCED_BIOSPHERE]: {Factory: AdvancedBiosphere},
    [CardName.RESEARCH_BASE]: {Factory: ResearchBase},
    [CardName.FURTHER_DEVELOPMENT]: {Factory: FurtherDevelopment},
    [CardName.CORPORATE_ESPIONAGE]: {Factory: CorporateEspionage},
    [CardName.VENUS_FIRST_CHEMICAL]: {Factory: VenusFirstChemical, compatibility: 'venus'},
    [CardName.AIR_SCRAPPING_OPERATIONS]: {Factory: AirScrappingOperations, compatibility: 'venus'},
    [CardName.HYDROGEN_BOMBARDMENT_CHEMICAL]: {Factory: HydrogenBombardmentChemical, compatibility: 'venus'},
    [CardName.EARLY_VENUS_BIOSPHERE]: {Factory: EarlyVenusBiosphere, compatibility: 'venus'},
    [CardName.VENUS_SUPPLIER]: {Factory: VenusSupplier, compatibility: 'venus'},
    [CardName.VENUS_GHG_EXPORTS]: {Factory: VenusGHGExports, compatibility: 'venus'},
    [CardName.INNER_SOLAR_MISSION]: {Factory: InnerSolarMission, compatibility: 'venus'},
    [CardName.SISTER_PLANET_RESEARCH]: {Factory: SisterPlanetResearch, compatibility: 'venus'},
    [CardName.FLOATING_CITY]: {Factory: FloatingCity, compatibility: 'venus'},
    [CardName.EARLY_COLONY]: {Factory: EarlyColony, compatibility: 'colonies'},
    [CardName.ISOLATED_ECOLOGY_RESEARCH]: {Factory: IsolatedEcologyResearch, compatibility: 'colonies'},
    [CardName.JOVIAN_PROJECT_BASE]: {Factory: JovianProjectBase, compatibility: 'colonies'},
    [CardName.INTERPLANETARY_TRADING_PORT]: {Factory: InterplanetaryTradingPort, compatibility: 'colonies'},
    [CardName.GAS_MINE]: {Factory: GasMine, compatibility: 'colonies'},
    [CardName.TRADING_NETWORK]: {Factory: TradingNetwork, compatibility: 'colonies'},
    [CardName.TITAN_SETTLEMENT]: {Factory: TitanSettlement, compatibility: 'colonies'},
    [CardName.TRADE_INFRASTRUCTURE]: {Factory: TradeInfrastructure, compatibility: 'colonies'},
    [CardName.PHOBOS_SPACE_PORT]: {Factory: PhobosSpacePort, compatibility: 'colonies'},
    [CardName.COMMITTEE_REPRESENTATIVE]: {Factory: CommitteeRepresentative, compatibility: 'turmoil'},
    [CardName.BY_ELECTION_CHEMICAL]: {Factory: ByElectionChemical, compatibility: 'turmoil'},
    [CardName.EXECUTIVE_ORDER_CHEMICAL]: {Factory: ExecutiveOrderChemical, compatibility: 'turmoil'},
    //[CardName.CONTRACTED_INTELLIGENCE_AGENCY]: {Factory: ContractedIntelligenceAgency, compatibiliy: 'turmoil'},
    [CardName.PARTY_INSIDERS]: {Factory: PartyInsiders, compatibility: 'turmoil'},
    [CardName.POLITICAL_UPRISING_CHEMICAL]: {Factory: PoliticalUprisingChemical, compatibility: 'turmoil'},
    [CardName.MARTIAN_REPUBLIC]: {Factory: MartianRepublic, compatibility: 'turmoil'},
    [CardName.INTELLECTUALIST_MOVEMENT]: {Factory: IntellectualistMovement, compatibility: 'turmoil'},
    [CardName.CORPORATE_ALLIANCE]: {Factory: CorporateAlliance, compatibility: 'turmoil'},
    [CardName.GREEN_MARS_INITIATIVE]: {Factory: GreenMarsInitiative, compatibility: 'turmoil'},
    [CardName.PRESERVATIONIST_CAMPAIGN]: {Factory: PreservationistCampaign, compatibility: 'turmoil'},
    [CardName.HEAT_FIRST_INITIATIVE]: {Factory: HeatFirstInitiative, compatibility: 'turmoil'},

    [CardName.SELF_SUFFICIENT_SETTLEMENT_CHEMICAL]: {Factory: SelfSufficientSettlementChemical},
    [CardName.MOHOLE_EXCAVATION_CHEMICAL]: {Factory: MoholeExcavationChemical},
    [CardName.GALILEAN_MINING_CHEMICAL]: {Factory: GalileanMiningChemical},
    [CardName.ORBITAL_CONSTRUCTION_YARD_CHEMICAL]: {Factory: OrbitalConstructionYardChemical},
    [CardName.NITROGEN_SHIPMENT_CHEMICAL]: {Factory: NitrogenShipmentChemical},
    [CardName.BIOSPHERE_SUPPORT_CHEMICAL]: {Factory: BiosphereSupportChemical},
    [CardName.EARLY_SETTLEMENT_CHEMICAL]: {Factory: EarlySettlementChemical},
    [CardName.DOME_FARMING_CHEMICAL]: {Factory: DomeFarmingChemical},
    [CardName.BIOFUELS_CHEMICAL]: {Factory: BiofuelsChemical},
    [CardName.SOCIETY_SUPPORT_CHEMICAL]: {Factory: SocietySupportChemical},
    [CardName.MOHOLE_CHEMICAL]: {Factory: MoholeChemical},
    [CardName.POLAR_INDUSTRIES_CHEMICAL]: {Factory: PolarIndustriesChemical},
    [CardName.HUGE_ASTEROID_CHEMICAL]: {Factory: HugeAsteroidChemical},
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
    [CardName.EARLY_EXPEDITION_CHEMICAL]: {Factory: EarlyExpeditionChemical},
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
    [CardName.MYCELIUM_FUNGI]: {Factory: MyceliumFungi},
    [CardName.MACROPLANKTON]: {Factory: Macroplankton},
    [CardName.WATER_SPLITTING_MICROBES]: {Factory: WaterSplittingMicrobes},
    [CardName.ANTI_OXIDATION_BACTERIA]: {Factory: AntiOxidationBacteria},
    [CardName.THALLOPHYTE_PROTISTS]: {Factory: ThallophyteProtists},
    [CardName.ENZYME_CONSTRUCTORS]: {Factory: EnzymeConstructors},
    [CardName.LATTICE_CONSTRUCTION_MICROBES]: {Factory: LatticeConstructionMicrobes},
    [CardName.ELECTROPLAQUE_MICROBES]: {Factory: ElectroplaqueMicrobes},
    [CardName.LARGE_AQUATIC_MAMMALS]: {Factory: LargeAquaticMammals},
    [CardName.TUNDRA_WILDLIFE]: {Factory: TundraWildlife},
    [CardName.POULTRY]: {Factory: Poultry},
    [CardName.FISH_FARMING_LAKE]: {Factory: FishFarmingLake},
    [CardName.CEPHALOPODS]: {Factory: Cephalopods},
    [CardName.ENDANGERED_SPECIES_REFUGE]: {Factory: EndangeredSpeciesRefuge},
    [CardName.NON_HYPOXIC_SMALL_ANIMALS]: {Factory: NonHypoxicSmallAnimals},
    [CardName.SUBTERRANEAN_CREATURES]: {Factory: SubterranianCreatures},
    [CardName.ARID_REGION_REPTILES]: {Factory: AridRegionReptiles},
    [CardName.ANTARCTIC_KRILL]: {Factory: AntarcticKrill},
    [CardName.ANCIENT_ARTHROPODS]: {Factory: AncientArthopods},
    [CardName.HABITAT_DOMES]: {Factory: HabitatDomes},
    [CardName.AQUAPONICS]: {Factory: Aquaponics},
    [CardName.REGOLITH_TREATMENT]: {Factory: RegolithTreatment},
    [CardName.EUROPA_WATER_SPLITTING]: {Factory: EuropaWaterSplitting},
    [CardName.SILICON_FACTORY]: {Factory: SiliconFactory},
    [CardName.ALUMINUM_FOUNDRY]: {Factory: AluminumFoundry},
    [CardName.LOCAL_TEMPERATURE_CONTROL]: {Factory: LocalTemperatureControl},
    [CardName.ADVANCED_GENETIC_ADAPTION]: {Factory: AdvancedGeneticAdaption},
    [CardName.OCEANOGRAPHY_RESEARCH]: {Factory: OceanographyResearch},
    [CardName.HEAVY_AEROSPACE_TECH]: {Factory: HeavyAerospaceTech},
    [CardName.FREIGHT_SHUTTLES]: {Factory: FreightShuttles},
    [CardName.GENETIC_ENGINEERING_LAB]: {Factory: GeneticEngineeringLab},
    [CardName.CO2_VENTS]: {Factory: CO2Vents},
    [CardName.PUBLIC_LAND]: {Factory: PublicLand},
    [CardName.ECOLOGICAL_CONTRACT]: {Factory: EcologicalContract},
    [CardName.BIODOMES]: {Factory: Biodomes},
    [CardName.TEMPERATE_RAINFOREST]: {Factory: TemperateRainforest},
    [CardName.BIOMASS_REACTOR]: {Factory: BiomassReactor},
    [CardName.MICROBE_CULTIVATION_FACILITY]: {Factory: MicrobeCultivationFacility},
    [CardName.BIODIVERSITY_CONTRACT]: {Factory: BiodiversityContract},
    [CardName.IMPERATIVE_SETTLEMENT]: {Factory: ImperativeSettlement},
    [CardName.ECO_CENTRAL]: {Factory: EcoCentral},
    [CardName.SPRAWLING_CITY]: {Factory: SprawlingCity},
    [CardName.THAW_MINING]: {Factory: ThawMining},
    [CardName.INDEPENDENT_SETTLEMENT]: {Factory: IndependentSettlement},
    [CardName.MULTIFUNCTIONAL_DOME]: {Factory: MultifunctionalDome},
    [CardName.MINING_COMMUNITY]: {Factory: MiningCommunity},
    [CardName.DEEP_BURROW_SETTLEMENT]: {Factory: DeepBurrowSettlement},
    [CardName.INSULATED_CITY]: {Factory: InsulatedCity},
    [CardName.BURIED_SETTLEMENT]: {Factory: BuriedSettlement},
    [CardName.INSTITUTE_SETTLEMENT]: {Factory: InstituteSettlement},
    [CardName.HUGE_CITY]: {Factory: HugeCity},
    [CardName.HUGE_GLACIER]: {Factory: HugeGlacier},
    [CardName.FRESHWATER_LAKE]: {Factory: FreshwaterLake},
    [CardName.DEEP_WELL_PUMP]: {Factory: DeepWellPump},
    [CardName.GEOTHERMAL_RESERVIOR_HEATING]: {Factory: GeothermalReserviorHeating},
    [CardName.MUNICIPAL_RESERVIOR]: {Factory: MunicipalReservior},
    [CardName.EXPLOSIVES_TEST_SITE]: {Factory: ExplosivesTestSite},
    [CardName.LUMBER_MILL]: {Factory: LumberMill},
    [CardName.COMMERCIAL_IMPORTS]: {Factory: CommercialImports},
    [CardName.URBAN_DEVELOPMENT]: {Factory: UrbanDevelopment},
    [CardName.TUNNEL_BORING]: {Factory: TunnelBoring},
    [CardName.LITHIUM_MINE]: {Factory: LithiumMine},
    [CardName.CHASMA_EXCAVATION]: {Factory: ChasmaExcavation},
    [CardName.DEEP_POLAR_EXTRACTION]: {Factory: DeepPolarExtraction},
    [CardName.PHOBOS_MINING_OPERATIONS]: {Factory: PhobosMiningOperations},
    [CardName.CALLISTO_OPERATIONS]: {Factory: CallistoOperations},
    [CardName.LASER_FACTORY]: {Factory: LaserFactory},
    [CardName.REGOLITH_AERATION]: {Factory: RegolithAeration},
    [CardName.MIXOTROPHS]: {Factory: Mixotrophs},
    [CardName.BOTANICAL_LAB]: {Factory: BotanicalLab},
    [CardName.COMPOSTING]: {Factory: Composting},
    [CardName.ENZYMATIC_TREATMENT]: {Factory: EnzymaticTreatment},
    [CardName.EXTREME_NITROPHILES]: {Factory: ExtremeNitrophiles},
    [CardName.VASCULAR_TUNDRA_PLANTS]: {Factory: VascularTundraPlants},
    [CardName.BAMBOO]: {Factory: Bamboo},
    [CardName.EROSION_REDUCING_GREENERY]: {Factory: ErosionReducingGreenery},
    [CardName.DWARF_WILLOW]: {Factory: DwarfWillow},
    [CardName.WILDBERRIES]: {Factory: Wildberries},
    [CardName.ANAEROBIC_ENERGY_CROPPING]: {Factory: AnaerobicEnergyCropping},
    [CardName.ADAPTED_HARDWOOD]: {Factory: AdaptedHardwood},
    [CardName.AQUATIC_BIODOMES]: {Factory: AquaticBiodomes},
    [CardName.CONIFERS]: {Factory: Conifers},
    [CardName.BARLEY]: {Factory: Barley},
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
    [CardName.SATURN_GAS_MINE]: {Factory: SaturnGasMine},
    [CardName.SPACE_BASED_SOLAR_POWER]: {Factory: SpaceBasedSolarPower},
    [CardName.LARGE_POWER_PLANT]: {Factory: LargePowerPlant},
    [CardName.HYDROCARBON_SYNTHESIS]: {Factory: HydrocarbonSynthesis},
    [CardName.ATMOSPHERIC_PROCESSING]: {Factory: AtmosphericProcessing},
    [CardName.URANIUM_DEPOSIT]: {Factory: UraniumDeposit},
    [CardName.MASSIVE_SOLAR_FARM]: {Factory: MassiveSolarFarm},
    [CardName.ENRICHMENT_PLANT]: {Factory: EnrichmentPlant},
    [CardName.FUEL_CELL_PRODUCTION]: {Factory: FuelCellProduction},
    [CardName.ENERGY_MOHOLE]: {Factory: EnergyMohole},
    [CardName.EFFICIENT_BATTERIES]: {Factory: EfficientBatteries},
    [CardName.ADVANCED_HYDROPOWER]: {Factory: AdvancedHydropower},
    [CardName.HIGH_POWER_BETAVOLTAICS]: {Factory: HighPowerBetavoltaics},
    [CardName.CENTRAL_POWER_PLANT]: {Factory: CentralPowerPlant},
    [CardName.OSMOTIC_POWER]: {Factory: OsmoticPower},
    [CardName.SOLID_STATE_WIND_ENERGY]: {Factory: SolidStateWildEnergy},
    [CardName.ATMOSPHERIC_PRESSURE_ENGINE]: {Factory: AtmosphericPressureEngine},
    [CardName.ISOTOPE_ENRICHING_BACTERIA]: {Factory: IsotopeEnrichingBacteria},
    [CardName.ANAEROBIC_BACTERIA]: {Factory: AnaerobicBacteria},
    [CardName.CARBONATE_DEPOSIT]: {Factory: CarbonateDeposit},
    [CardName.HFC_PRODUCTION]: {Factory: HFCProduction},
    [CardName.GHG_FACTORY_DISTRICT]: {Factory: GHGFactoryDistrict},
    [CardName.LASER_CANNON]: {Factory: LaserCannon},
    [CardName.NATURAL_GAS_EXTRACTION]: {Factory: NaturalGasExtraction},
    [CardName.OZONE_FACTORIES]: {Factory: OzoneFactories},
    [CardName.SYNTHETIC_GROWTH_HORMONES]: {Factory: SyntheticGrowthHormones},
    [CardName.PROBIOTIC_TREATMENT]: {Factory: ProbioticTreatment},
    [CardName.MIRANDA_LABS]: {Factory: MirandaLabs},
    [CardName.MARS_LIFE_SCIENCE_INSTITUTE]: {Factory: MarsLifeScienceInstitute},
    [CardName.SPECIES_CRYOPRESERVATION]: {Factory: SpeciesCryopreservation},
    [CardName.EARLY_POLAR_OUTPOST]: {Factory: EarlyPolarOutpost},
    [CardName.RURAL_HOUSING]: {Factory: RuralHousing},

    [CardName.PARASITE]: {Factory: Parasite, compatibility: 'corpera'},
    [CardName.POWER_FAILURE]: {Factory: PowerFailure, compatibility: 'corpera'},
    [CardName.FAILED_SPACE_MISSION]: {Factory: FailedSpaceMission, compatibility: 'corpera'},
    [CardName.AQUIFER_RELOCATION]: {Factory: AquiferRelocation, compatibility: 'corpera'},
    [CardName.PUBLIC_RECORDS]: {Factory: PublicRecords, compatibility: 'corpera'},
    [CardName.ASSET_LIQUIDATION]: {Factory: AssetLiquidation, compatibility: 'corpera'},
    [CardName.SMALL_SUPPLY_DROP]: {Factory: SmallSupplyDrop, compatibility: 'corpera'},
    [CardName.PATENT_TRADING]: {Factory: PatentTrading, compatibility: 'corpera'},
    [CardName.TECHNOLOGY_EXHIBITION]: {Factory: TechnologyExhibition, compatibility: 'corpera'},
    [CardName.RESEARCH_DONATION]: {Factory: ResearchDonation, compatibility: 'corpera'},
    [CardName.POPULATION_BOOM]: {Factory: PopulationBoom, compatibility: 'corpera'},
    [CardName.GENETIC_BREAKTHROUGH]: {Factory: GeneticBreakthrough, compatibility: 'corpera'},
    [CardName.ASTROPHYSICS_CENTER]: {Factory: AstrophysicsCenter, compatibility: 'corpera'},
    [CardName.CENTAUR_LANDINGS]: {Factory: CentaurLandings, compatibility: 'corpera'},
    [CardName.VESTA_OBSERVATORY]: {Factory: VestaObservatory, compatibility: 'corpera'},
    [CardName.ENCELADUS_OUTPOST]: {Factory: EnceladusOutpost, compatibility: 'corpera'},
    [CardName.MEASUREMENT_DRONES]: {Factory: MeasurementDrones, compatibility: 'corpera'},
    [CardName.ADVANCED_BIOMACHINERY]: {Factory: AdvancedBiomachinery, compatibility: 'corpera'},
    [CardName.VIRAL_AMEBOID]: {Factory: ViralAmeboid, compatibility: 'corpera'},
    [CardName.LONG_TERM_EVOLUTION_STUDY]: {Factory: LongTermEvolutionStudy, compatibility: 'corpera'},
    [CardName.LASER_LIGHTSAILS]: {Factory: LaserLightsails, compatibility: 'corpera'},
    [CardName.ALLOY_FACTORY]: {Factory: AlloyFactory, compatibility: 'corpera'},
    [CardName.UNDERGROUND_TEST_SITE]: {Factory: UndergroundTestSite, compatibility: 'corpera'},
    [CardName.SCIENTIFIC_MEGAOPOLIS]: {Factory: ScientificMegaopolis, compatibility: 'corpera'},
    [CardName.ALCHEMIC_REACTIONS]: {Factory: AlchemicReactions, compatibility: 'corpera'},
    [CardName.WIRELESS_ENERGY_TRANSFER]: {Factory: WirelessEnergyTransfer, compatibility: 'corpera'},
    [CardName.KUGELBLITZ]: {Factory: Kugelblitz, compatibility: 'corpera'},
    [CardName.SCIENTIFIC_LOGS]: {Factory: ScientificLogs, compatibility: 'corpera'},
    [CardName.SPONSORED_RESEARCH_FIRM]: {Factory: SponsoredResearchFirm, compatibility: 'corpera'},
    [CardName.NEURAL_ENCHANCERS]: {Factory: NeuralEnhancers, compatibility: 'corpera'},
    [CardName.CONSTRUCTION_CENTER]: {Factory: ConstructionCenter, compatibility: 'corpera'},
    [CardName.BIODIVERSITY_GRANTS]: {Factory: BiodiversityGrants, compatibility: 'corpera'},
    [CardName.MARS_BUSINESS_INVESTMENTS]: {Factory: MarsBuinessInvestments, compatibility: 'corpera'},
    [CardName.CANALS]: {Factory: Canals, compatibility: 'corpera'},
    [CardName.STEEL_EXPORTS]: {Factory: SteelExports, compatibility: 'corpera'},
    [CardName.JOVIAN_SUPPLIERS]: {Factory: JovianSuppliers, compatibility: 'corpera'},
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
    [CardName.HYDRUALIC_MINING]: {Factory: HydrualicMining, compatibility: 'corpera'},
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
    [CardName.NEAR_MISS_ROTARY_ASTEROID]: {Factory: NearMissRotaryAsteroid, compatibility: 'venus'},
    [CardName.DWARF_PLANET_COLLISION]: {Factory: DwarfPlanetCollision, compatibility: 'venus'},
    [CardName.CONVOY_TO_VENUS]: {Factory: ConvoyToVenus, compatibility: 'venus'},
    [CardName.HUGE_WATER_SHIPMENTS]: {Factory: HugeWaterShipments, compatibility: 'venus'},
    [CardName.IMPORTED_NEUTRAL_GASSES]: {Factory: ImportedNeutralGasses, compatibility: 'venus'},
    [CardName.NITROGEN_FROM_VENUS]: {Factory: NitrogenFromVenus, compatibility: 'venus'},
    [CardName.ATMOSPHERE_LIFTING_DETONATIONS]: {Factory: AtmosphereLiftingDetonations, compatibility: 'venus'},
    [CardName.VENUS_MINING_EXPEDITION]: {Factory: VenusMiningExpedition, compatibility: 'venus'},
    [CardName.ULTRALIGHT_FLOATERS]: {Factory: UltralightFloaters, compatibility: 'venus'},
    [CardName.DANU_MONTES_ROVER]: {Factory: DanuMontesRover, compatibility: 'venus'},
    [CardName.COLLABORATION_PROJECT]: {Factory: CollaborationProject, compatibility: 'venus'},
    [CardName.CONSISTENT_BOMBARDMENT]: {Factory: ConsistentBombardment, compatibility: 'venus'},
    [CardName.PAN_SOLAR_MINING]: {Factory: PanSolarMining, compatibility: 'venus'},
    [CardName.HIGH_ALTITUDE_STATIONS]: {Factory: HighAltitudeStations, compatibility: 'venus'},
    [CardName.FLOATING_RESEARCH_BASE]: {Factory: FloatingResearchBase, compatibility: 'venus'},
    [CardName.FLOATER_DOCKS]: {Factory: FloaterDocks, compatibility: 'venus'},
    [CardName.MESOSPHERE_SHADES]: {Factory: MesosphereShades, compatibility: 'venus'},
    [CardName.LOW_LEVEL_SCRAPPERS]: {Factory: LowLevelScrappers, compatibility: 'venus'},
    [CardName.CARBON_SOLIDIFICATION]: {Factory: CarbonSolidification, compatibility: 'venus'},
    [CardName.LOCAL_MAGNETIC_SHIELDING]: {Factory: LocalMagneticShielding, compatibility: 'venus'},
    [CardName.SKY_COMMUNICATIONS]: {Factory: SkyCommunications, compatibility: 'venus'},
    [CardName.FLOATING_BIODOMES]: {Factory: FloatingBiodomes, compatibility: 'venus'},
    [CardName.ENDEMIC_VENUSIAN_ARCHAEA]: {Factory: EndemicVenusianArchaea, compatibility: 'venus'},
    [CardName.AIRBORNE_MICROBES]: {Factory: AirborneMicrobes, compatibility: 'venus'},
    [CardName.PH_NEUTRALIZERS]: {Factory: PHNeutralizers, compatibility: 'venus'},
    [CardName.CARBON_FIXING_MICROBES]: {Factory: CarbonFixingMicrobes, compatibility: 'venus'},
    [CardName.DESIGNED_FLYERS]: {Factory: DesignedFlyers, compatibility: 'venus'},
    [CardName.VENUS_SURFACE_DWELLERS]: {Factory: VenusSurfaceDwellers, compatibility: 'venus'},
    [CardName.VENUSIAN_INVERTEBRATES]: {Factory: VenusianInvertebrates, compatibility: 'venus'},
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
    [CardName.SWARM_SHADERS]: {Factory: SwarmShaders, compatibility: 'venus'},
    [CardName.VORTEX_ENGINE]: {Factory: VortexEngine, compatibility: 'venus'},
    [CardName.PHOTONIC_METAMATERIALS]: {Factory: PhotonicMetamaterials, compatibility: 'venus'},
    [CardName.NEUTRALIZER_DRONES]: {Factory: NeutralizerDrones, compatibility: 'venus'},
    [CardName.CONDENSATION_CATALYSTS]: {Factory: CondenstationCatalysts, compatibility: 'venus'},
    [CardName.BASALT_MINING]: {Factory: BasaltMining, compatibility: 'venus'},
    [CardName.VENUSIAN_FUNGI]: {Factory: VenusianFungi, compatibility: 'venus'},
    [CardName.SPIN_INDUCING_MASS_DRIVERS]: {Factory: SpinInducingMassDrivers, compatibility: 'venus'},
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
    [CardName.TRADE_DEAL_LEVERAGE]: {Factory: TradeDealLeverage, compatibility: 'colonies'},
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
    [CardName.SOLAR_STATION]: {Factory: SolarStation, compatibility: 'colonies'},
    [CardName.ORBITAL_SHIPYARD]: {Factory: OrbitalShipyard, compatibility: 'colonies'},
    [CardName.LUNAR_H3_MINING]: {Factory: LunarH3Mining, compatibility: 'colonies'},
    [CardName.COLONY_MINING_INFRASTRUCTURE]: {Factory: ColonyMiningInfrastructure, compatibility: 'colonies'},
    [CardName.HEMERA_BUNKER]: {Factory: HemeraBunker, compatibility: 'colonies'},
    [CardName.ORBITAL_BIODOMES]: {Factory: OrbitalBiodomes, compatibility: 'colonies'},
    [CardName.AZALEA_BUSHES]: {Factory: AzaleaBushes, compatibility: 'colonies'},
    [CardName.WILDFLOWERS]: {Factory: Wildflowers, compatibility: 'colonies'},
    [CardName.COLONY_SPACE_MIRRORS]: {Factory: ColonySpaceMirrors, compatibility: 'colonies'},
    [CardName.LUNAR_POWER_GRID]: {Factory: LunarPowerGrid, compatibility: 'colonies'},
    [CardName.PROTO_DYSON_SWARM]: {Factory: ProtoDysonSwarm, compatibility: 'colonies'},
    [CardName.HYDROTHERMAL_VENTS]: {Factory: HydrothermalVents, compatibility: 'colonies'},
    [CardName.EARTH_EMBASSY_CHEMICAL]: {Factory: EarthEmbassyChemical, compatibility: 'colonies'},
    [CardName.HIGH_ORBIT_RESEARCH_STATION]: {Factory: HighOrbitResearchStation, compatibility: 'colonies'},
    [CardName.TERRESTRIAL_RESEARCH_SUMMIT]: {Factory: TerrestrialResearchSummit, compatibility: 'colonies'},
    [CardName.ASTRONOMICAL_CLAIM]: {Factory: AstronomicalClaim, compatibility: 'colonies'},
    [CardName.SATURN_ASTEROID_COLLECTION]: {Factory: SaturnAsteroidCollection, compatibility: 'colonies'},
    [CardName.THIN_ATMOSPHERE_FLOATERS]: {Factory: ThisAtmosphereFloaters, compatibility: 'colonies'},
    [CardName.ARCTIC_ENDOLITHS]: {Factory: ArcticEndoliths, compatibility: 'colonies'},
    [CardName.HYPER_EXTREMOPHILE_FUNGI]: {Factory: HyperExtremophileFungi, compatibility: 'colonies'},
    [CardName.BIODIVERSITY_BOOM]: {Factory: BiodiversityBoom, compatibility: 'colonies'},
    [CardName.COLONY_REFORMS]: {Factory: ColonyReforms, compatibility: 'colonies'},

    [CardName.DIRECTED_SABOTAGE_IMPACT]: {Factory: DirectedSabotageImpact, compatibility: 'turmoil'},
    [CardName.FUSION_BOMBING]: {Factory: FusionBombing, compatibility: 'turmoil'},
    //[CardName.DEMOCRATIC_REFORM]: {Factory: DemocraticReform, compatibility: 'turmoil'},
    [CardName.MEDIA_MANIPULATION]: {Factory: MediaManipulation, compatibility: 'turmoil'},
    [CardName.INAUGERATION_CEREMONY]: {Factory: InaugerationCeremony, compatibility: 'turmoil'},
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
    //[CardName.STIMULUS_PROGRAMS]: {Factory: StimulusPrograms, compatibility: 'turmoil'},
    [CardName.COMMITTEE_COALITION]: {Factory: CommitteeCoalition, compatibility: 'turmoil'},
    [CardName.LEGAL_FIRM]: {Factory: LegalFirm, compatibility: 'turmoil'},
    [CardName.KICKBACKS]: {Factory: Kickbacks, compatibility: 'turmoil'},
    [CardName.REMOTE_AREA_SUPPLIERS]: {Factory: RemoteAreaSuppliers, compatibility: 'turmoil'},
    [CardName.MEDICAL_INSTITUTE]: {Factory: MedicalInstitute, compatibility: 'turmoil'},
    [CardName.MICROBIAL_SUPPORT]: {Factory: MicrobialSupport, compatibility: 'turmoil'},
    [CardName.VENUS_SOCIETY_SUPPORT]: {Factory: VenusSocietySupport, compatibility: 'turmoil'},
    //[CardName.PRIMAL_NATIONAL_PARK]: {Factory: PrimalNationalPark, compatability: 'turmoil'},
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

    //[CardName.SPECIAL_DESIGN_CHEMICAL]: {Factory: SpecialDesignChemical},
    [CardName.AEROBRAKED_AMMONIA_ASTEROID_CHEMICAL]: {Factory: AerobrakedAmmoniaAsteroidChemical},
    //[CardName.SMALL_ASTEROID_CHEMICAL]: {Factory: SmallAsteroidChemical, compatibility: 'promo'},
    //[CardName.GHG_PRODUCING_BACTERIA_CHEMICAL]: {Factory: GHGProducingBacteriaChemical},
    //[CardName.ADAPTATION_TECHNOLOGY_CHEMICAL]: {Factory: AdaptationTechnologyChemical},
    [CardName.UNDERGROUND_DETONATIONS_CHEMICAL]: {Factory: UndergroundDetonationsChemical},
    //[CardName.SPACE_MIRRORS_CHEMICAL]: {Factory: SpaceMirrorsChemical},
    [CardName.EARTH_CATAPULT_CHEMICAL]: {Factory: EarthCatapultChemical, compatibility: 'corpera'},
    [CardName.MARS_UNIVERSITY_CHEMICAL]: {Factory: MarsUniversityChemical, compatibility: 'corpera'},
    //[CardName.OLYMPUS_CONFERENCE_CHEMICAL]: {Factory: OlympusConferenceChemical, compatibility: 'corpera'},
    [CardName.INDUSTRIAL_CENTER_CHEMICAL]: {Factory: IndustrialCenterChemical, compatibility: 'corpera'},
    [CardName.FORCED_PRECIPITATION_CHEMICAL]: {Factory: ForcedPrecipitationChemical, compatibility: 'venus'},
    [CardName.JET_STREAM_MICROSCRAPPERS_CHEMICAL]: {Factory: JetStreamMicroscrappersChemical, compatibility: 'venus'},
    [CardName.EXTRACTOR_BALLOONS_CHEMICAL]: {Factory: ExtractorBalloonsChemical, compatibility: 'venus'},
    [CardName.THERMOPHILES_CHEMICAL]: {Factory: ThermophilesChemical, compatibility: 'venus'},
    [CardName.VENUS_WAYSTATION_CHEMICAL]: {Factory: VenusWaystationChemical, compatibility: 'venus'},
    //[CardName.SUBZERO_SALT_FISH_CHEMICAL]: {Factory: SubZeroSaltFishChemical, compatibility: 'colonies'},
    [CardName.MARTIAN_ZOO_CHEMICAL]: {Factory: MartianZooChemical, compatibility: 'colonies'},
    [CardName.TRADING_COLONY_CHEMICAL]: {Factory: TradingColonyChemical, compatibility: 'colonies'},
    //[CardName.SPINOFF_DEPARTMENT_CHEMICAL]: {Factory: SpinoffDepartmentChemical, compatibility: 'colonies'},
    //[CardName.DIRECTED_IMPACTORS_CHEMICAL]: {Factory: DirectedImpactorsChemical, compatibility: 'promo'},
    [CardName.ASTEROID_HOLLOWING_CHEMICAL]: {Factory: AsteroidHollowingChemical, compatibility: 'promo'},
    [CardName.ORBITAL_CLEANUP_CHEMICAL]: {Factory: OrbitalCleanupChemical, compatibility: 'promo'},
    [CardName.CUTTING_EDGE_TECHNOLOGY_CHEMICAL]: {Factory: CuttingEdgeTechnologyChemical, compatibility: 'promo'},
    [CardName.MEAT_INDUSTRY_CHEMICAL]: {Factory: MeatIndustryChemical, compatibility: 'promo'},
    //[CardName.CARBON_NANOSYSTEMS_CHEMICAL]: {Factory: CarbonNanosystemsChemical, compatibility: 'promo'},
    //[CardName.SOLAR_LOGISTICS_CHEMICAL]: {Factory: SolarLogisticsChemical, compatibility: 'promo'},
    //[CardName.MARTIAN_LUMBER_CORP_CHEMICAL]: {Factory: MartianLumberCorpChemical, compatibility: 'promo'},
    //[CardName.UNDERGROUND_CITY_CHEMICAL]: {Factory: UndergroundCityChemical},
    //[CardName.CLOUD_SEEDING_CHEMICAL]: {Factory: CloudSeedingChemical},
    [CardName.BIOMASS_COMBUSTORS_CHEMICAL]: {Factory: BiomassCombustorsChemical},
    [CardName.WORMS_CHEMICAL]: {Factory: WormsChemical},
    [CardName.ASTEROID_MINING_CONSORTIUM_CHEMICAL]: {Factory: AsteroidMiningConsortiumChemical, compatibility: 'corpera'},
    [CardName.TOLL_STATION_CHEMICAL]: {Factory: TollStationChemical, compatibility: 'corpera'},
    //[CardName.RESEARCH_CHEMICAL]: {Factory: ResearchChemical, compatibility: 'corpera'},
    //[CardName.HACKERS_CHEMICAL]: {Factory: HackersChemical, compatibility: 'corpera'},
    //[CardName.CORPORATE_STRONGHOLD_CHEMICAL]: {Factory: CorporateStrongholdChemical, compatibility: 'corpera'},
    [CardName.VENUS_SOILS_CHEMICAL]: {Factory: VenusSoilsChemical, compatibility: 'venus'},
    [CardName.RESEARCH_COLONY_CHEMICAL]: {Factory: ResearchColonyChemical, compatibility: 'colonies'},
    [CardName.SPACE_PORT_COLONY_CHEMICAL]: {Factory: SpacePortColonyChemical, compatibility: 'colonies'},
    //[CardName.SNOW_ALGAE_CHEMICAL]: {Factory: SnowAlgaeChemical, compatibility: 'promo'},
    [CardName.BACTOVIRAL_RESEARCH_CHEMICAL]: {Factory: BactoviralResearchChemical, compatibility: 'promo'},
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
  cardsToRemove: [
    //CardName.SPECIAL_DESIGN,
    CardName.AEROBRAKED_AMMONIA_ASTEROID,
    //CardName.SMALL_ASTEROID,
    //CardName.GHG_PRODUCING_BACTERIA,
    //CardName.ADAPTATION_TECHNOLOGY,
    CardName.UNDERGROUND_DETONATIONS,
    //CardName.SPACE_MIRRORS,
    CardName.EARTH_CATAPULT,
    CardName.MARS_UNIVERSITY,
    //CardName.OLYMPUS_CONFERENCE,
    CardName.INDUSTRIAL_CENTER,
    CardName.FORCED_PRECIPITATION,
    CardName.JET_STREAM_MICROSCRAPPERS,
    CardName.EXTRACTOR_BALLOONS,
    CardName.THERMOPHILES,
    CardName.VENUS_WAYSTATION,
    //CardName.SUBZERO_SALT_FISH,
    CardName.MARTIAN_ZOO,
    CardName.TRADING_COLONY,
    //CardName.SPINOFF_DEPARTMENT,
    CardName.DIRECTED_IMPACTORS,
    //CardName.ASTEROID_HOLLOWING,
    CardName.ORBITAL_CLEANUP,
    CardName.CUTTING_EDGE_TECHNOLOGY,
    CardName.MEAT_INDUSTRY,
    //CardName.CARBON_NANOSYSTEMS,
    //CardName.SOLAR_LOGISTICS,
    //CardName.MARTIAN_LUMBER_CORP,
    //CardName.UNDERGROUND_CITY,
    //CardName.CLOUD_SEEDING,
    CardName.BIOMASS_COMBUSTORS,
    CardName.WORMS,
    CardName.ASTEROID_MINING_CONSORTIUM,
    CardName.TOLL_STATION,
    //CardName.RESEARCH,
    //CardName.HACKERS,
    //CardName.CORPORATE_STRONGHOLD,
    CardName.VENUS_SOILS,
    CardName.RESEARCH_COLONY,
    CardName.SPACE_PORT_COLONY,
    //CardName.SNOW_ALGAE,
    CardName.BACTOVIRAL_RESEARCH,
    CardName.SELF_SUFFICIENT_SETTLEMENT,
    CardName.MOHOLE_EXCAVATION,
    CardName.GALILEAN_MINING,
    CardName.ORBITAL_CONSTRUCTION_YARD,
    CardName.NITROGEN_SHIPMENT,
    CardName.BIOSPHERE_SUPPORT,
    CardName.EARLY_SETTLEMENT,
    CardName.DOME_FARMING,
    CardName.BIOFUELS,
    CardName.SOCIETY_SUPPORT,
    CardName.MOHOLE,
    CardName.POLAR_INDUSTRIES,
    CardName.HUGE_ASTEROID,
  ],
});
