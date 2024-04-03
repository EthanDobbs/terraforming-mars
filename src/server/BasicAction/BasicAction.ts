import { ActionType } from "@/server/BasicAction/ActionType";
import { Behavior } from "../behavior/Behavior";
import { IPlayer } from "../IPlayer";
import { TRSource } from "@/common/cards/TRSource";
import { Counter } from "../behavior/Counter";
import { Warning } from "@/common/cards/Warning";
import { Units } from "@/common/Units";
import { MAXIMUM_HABITAT_RATE, MAXIMUM_LOGISTICS_RATE, MAXIMUM_MINING_RATE, MAX_OCEAN_TILES, MAX_OXYGEN_LEVEL, MAX_TEMPERATURE, MAX_VENUS_SCALE } from "@/common/constants";
import { Turmoil } from "../turmoil/Turmoil";
import { MoonExpansion } from "../moon/MoonExpansion";
import { UnderworldExpansion } from "../underworld/UnderworldExpansion";
import { SelectResources } from "../inputs/SelectResources";
import { message } from "../logs/MessageBuilder";
import { SelectResource } from "../inputs/SelectResource";
import { ALL_RESOURCES } from "@/common/Resource";
import { AddResourcesToCard } from "../behaviorComponents/AddResourcesToCard";
import { DecreaseAnyProduction } from "../behaviorComponents/DecreaseAnyProduction";
import { RemoveAnyPlants } from "../behaviorComponents/RemoveAnyPlants";
import { BuildColony } from "../behaviorComponents/BuildColony";
import { PlaceOceanTile } from "../behaviorComponents/PlaceOceanTile";
import { PlaceCityTile } from "../behaviorComponents/PlaceCityTile";
import { PlaceGreeneryTile } from "../behaviorComponents/PlaceGreeneryTile";
import { SendDelegateToArea } from "../behaviorComponents/SendDelegateToArea";
import { PlaceMoonHabitatTile } from "../moon/PlaceMoonHabitatTile";
import { PlaceMoonMineTile } from "../moon/PlaceMoonMineTile";
import { PlaceMoonRoadTile } from "../moon/PlaceMoonRoadTile";
import { PlaceSpecialMoonTile } from "../moon/PlaceSpecialMoonTile";
import { IdentifySpacesDeferred } from "../underworld/IdentifySpacesDeferred";
import { ExcavateSpacesDeferred } from "../underworld/ExcavateSpacesDeferred";
import { IBehavior } from "../behavior/IBehaviorInstance";

export type CanAffordOptions = {
  /** The action we are trying to determine if the player can afford */ 
  action: Action
  /** Sources of TR that might be penalized by Turmoil Reds */
  additionalTR?: TRSource,
  /** Additional costs that must be payed for directly */
  additionalCosts?: Partial<Units>,
}

export class Action {
  public warnings: Set<Warning> = new Set();
  constructor(
    public readonly actionType: ActionType,
    public readonly behavior: Array<IBehavior>,
    public readonly cost: Partial<Units>,
  ) {}

  public newAffordOptions(): CanAffordOptions {
    return {
      action: this,
      additionalTR: {},
      additionalCosts: {},
    }
  }

  public getTRsources(player: IPlayer): TRSource {
    let behavior = this.behavior;
    let tr: number | undefined = undefined;
    if (behavior.tr !== undefined) {
      if (typeof(behavior.tr) === 'number') {
        tr = behavior.tr;
      } else {
        tr = new Counter(player, this).count(behavior.tr)
      }
    }
    const trSource: TRSource = {
      tr: tr,
      temperature: behavior.global?.temperature,
      oxygen: (behavior.global?.oxygen ?? 0) + (behavior.greenery !== undefined ? 1 : 0),
      venus: behavior.global?.venus,
      oceans: behavior.ocean !== undefined ? 1 : undefined,
      moonHabitat: (behavior.moon?.habitatRate ?? 0) + (behavior.moon?.habitatTile !== undefined ? 1 : 0),
      moonMining: (behavior.moon?.miningRate ?? 0) + (behavior.moon?.mineTile !== undefined ? 1 : 0),
      moonLogistics: (behavior.moon?.logisticsRate ?? 0) + (behavior.moon?.roadTile !== undefined ? 1 : 0),
    };
    return trSource;
  }

  public canExecute(player: IPlayer) {


    const behavior = this.behavior;
    const ctx = new Counter(player, this);
    const game = player.game;
    const canAffordOptions = this.newAffordOptions();
    const tr = this.getTRsources(player);

    if (tr.temperature && game.getTemperature() >= MAX_TEMPERATURE) this.warnings.add('maxtemp');
    if (tr.oxygen && game.getOxygenLevel() >= MAX_OXYGEN_LEVEL) this.warnings.add('maxoxygen');
    if (tr.venus !== undefined && game.getVenusScaleLevel() >= MAX_VENUS_SCALE) this.warnings.add('maxvenus');
    if (tr.oceans && game.board.getOceanSpaces().length >= MAX_OCEAN_TILES) this.warnings.add('maxoceans');

    if (behavior.decreaseAnyProduction && !game.isSoloMode()) {
      const dap = behavior.decreaseAnyProduction;
      const targets = game.getPlayers().filter((p) => p.canHaveProductionReduced(dap.type, dap.count, player));
      if (targets.length === 0) return false;
      if (targets.length === 1 && targets[0] === player) this.warnings.add('decreaseOwnProduction');
    }
  
    if (behavior.city) {
      if (behavior.city.space === undefined) {
        if (game.board.getAvailableSpacesForType(player, behavior.city.on ?? 'city', canAffordOptions).length === 0) return false;
      } else {
        // Special case for Star Vegas. The space may already be occupied.
        if (game.board.getSpace(behavior.city.space).tile) return false;
      }
    }
    if (behavior.greenery && game.board.getAvailableSpacesForType(player, behavior.greenery.on ?? 'greenery', canAffordOptions).length === 0) return false;
    if (behavior.tile && game.board.getAvailableSpacesForType(player, behavior.tile.on, canAffordOptions).length === 0) return false;

    if (behavior.colonies?.buildColony && player.colonies.getPlayableColonies(behavior.colonies.buildColony.allowDuplicates).length === 0) return false;
  
    if (behavior.turmoil?.sendDelegates && Turmoil.getTurmoil(game).getAvailableDelegateCount(player) < behavior.turmoil.sendDelegates.count) return false;
  
    if (behavior.moon) {
      const moon = behavior.moon;
      const moonData = MoonExpansion.moonData(game);
      if (moon.habitatTile && moon.habitatTile.space === undefined && moonData.moon.getAvailableSpacesOnLand(player).length === 0) return false;
      if (moon.mineTile && moon.mineTile.space === undefined && moonData.moon.getAvailableSpacesForMine(player).length === 0) return false;
      if (moon.roadTile && moon.roadTile.space === undefined && moonData.moon.getAvailableSpacesOnLand(player).length === 0) return false;
      if ((moon.habitatRate ?? 0) >= MAXIMUM_HABITAT_RATE) this.warnings.add('maxHabitatRate');
      if ((moon.miningRate ?? 0) >= MAXIMUM_MINING_RATE) this.warnings.add('maxMiningRate');
      if ((moon.logisticsRate ?? 0) >= MAXIMUM_LOGISTICS_RATE) this.warnings.add('maxLogisticsRate');
    }
  
    if (behavior.underworld) {
      const underworld = behavior.underworld;
      if (underworld.identify) {
        //if (card.name === CardName.NEUTRINOGRAPH || player.cardIsInEffect(CardName.NEUTRINOGRAPH)) {
          // Special case for Neutrinograph. Excavatable spaces are ones that are unidentified or reidentifiable.
        //  if (UnderworldExpansion.excavatableSpaces(player).length === 0) {
        //    return false;
        //  }
        //} else {
          if (UnderworldExpansion.identifiableSpaces(player).length === 0) return false;
        //}
      }
    }
    return true;
  }

  public execute(player: IPlayer) {
    const behavior = this.behavior;
    const ctx = new Counter(player, this);
    const game = player.game;
    // if (behavior.steelValue === 1) player.increaseSteelValue();
    // if (behavior.titanumValue === 1) player.increaseTitaniumValue();
    const drawCard = behavior.drawCard;
    if (drawCard) {
      if (typeof(drawCard) === 'number') {
        player.drawCard(drawCard);
      } else {
        // This conditional could probably be removed, using the else clause for both.
        if (drawCard.keep === undefined && drawCard.pay === undefined) {
          player.drawCard(ctx.count(drawCard.count), {tag: drawCard.tag, resource: drawCard.resource, cardType: drawCard.type});
        } else {
          player.drawCardKeepSome(ctx.count(drawCard.count), {
            tag: drawCard.tag,
            resource: drawCard.resource,
            cardType: drawCard.type,
            keepMax: drawCard.keep,
            paying: drawCard.pay,
          });
        }
      }
    }
    const global = behavior.global;
    if (global) {
      if (global.temperature !== undefined) player.game.increaseTemperature(player, global.temperature);
      if (global.oxygen !== undefined) player.game.increaseOxygenLevel(player, global.oxygen);
      if (global.venus !== undefined) player.game.increaseVenusScaleLevel(player, global.venus);
    }
    if (behavior.tr) player.increaseTerraformRating(ctx.count(behavior.tr));

    // const addResources = behavior.addResources;
    // if (addResources !== undefined) {
    //   const count = ctx.count(addResources);
    //   player.defer(() => {
    //     player.addResourceTo(card, {qty: count, log: true});
    //     return undefined;
    //   });
    // }

    if (behavior.addResourcesToAnyCard) {
      const array = Array.isArray(behavior.addResourcesToAnyCard) ? behavior.addResourcesToAnyCard : [behavior.addResourcesToAnyCard];
      for (const arctac of array) {
        const count = ctx.count(arctac.count);
        if (count > 0) {
          player.game.defer(new AddResourcesToCard(
            player,
            arctac.type,
            {count, restrictedTag: arctac.tag}
          ));
        }
      }
    }

    if (behavior.decreaseAnyProduction) player.game.defer(new DecreaseAnyProduction(player, behavior.decreaseAnyProduction.type, {count: behavior.decreaseAnyProduction.count}));
    if (behavior.removeAnyPlants) player.game.defer(new RemoveAnyPlants(player, behavior.removeAnyPlants));

    if (behavior.ocean) {
      if (behavior.ocean.count === 2) {
        game.defer(new PlaceOceanTile(player, {title: 'Select space for first ocean'}));
        game.defer(new PlaceOceanTile(player, {title: 'Select space for second ocean'}));
      } else {
        game.defer(new PlaceOceanTile(player, {on: behavior.ocean.on}));
      }
    }
    if (behavior.city) {
      if (behavior.city.space) {
        const space = game.board.getSpace(behavior.city.space);
        game.addCity(player, space);
        // if (space.tile) { // Should never be undefined
        //   space.tile.card = card.name;
        // }
      } else {
        game.defer(new PlaceCityTile(player, {on: behavior.city.on}));
      }
    }
    if (behavior.greenery) game.defer(new PlaceGreeneryTile(player, behavior.greenery.on));
    // const tile = behavior.tile;
    // if (tile) {
    //   player.game.defer(new PlaceTile(player, {
    //     tile: {
    //       tileType: tile.type,
    //       card: card.name,
    //     },
    //     on: tile.on,
    //     title: tile.title ?? message('Select space for ${0} tile', (b) => b.cardName(card.name)),
    //     adjacencyBonus: tile.adjacencyBonus,
    //   }));
    // }

    const colonies = behavior.colonies;
    if (colonies) {
      if (colonies.buildColony) player.game.defer(new BuildColony(player, {allowDuplicate: colonies.buildColony.allowDuplicates}));
      // if (colonies.tradeDiscount) player.colonies.tradeDiscount += colonies.tradeDiscount;
      // if (colonies.tradeOffset) player.colonies.tradeOffset += colonies.tradeOffset;
      // if (colonies.addTradeFleet) {
      //   for (let idx = 0; idx < colonies.addTradeFleet; idx++) {
      //     player.colonies.increaseFleetSize();
      //   }
      // }
    }

    if (behavior.turmoil) {
      const turmoil = Turmoil.getTurmoil(player.game);
      if (behavior.turmoil.influenceBonus) turmoil.addInfluenceBonus(player);
      const sendDelegates = behavior.turmoil.sendDelegates;
      if (sendDelegates) {
        if (sendDelegates.manyParties) {
          for (let i = 0; i < sendDelegates.count; i++) {
            game.defer(new SendDelegateToArea(player, 'Select where to send delegate'));
          }
        } else {
          game.defer(new SendDelegateToArea(player, `Select where to send ${sendDelegates.count} delegates`, {count: sendDelegates.count}));
        }
      }
    }

    const moon = behavior.moon;
    if (moon) {
      if (moon.habitatTile) {
        if (moon.habitatTile.space === undefined) {
          game.defer(new PlaceMoonHabitatTile(player));
        } else {
          MoonExpansion.addHabitatTile(player, moon.habitatTile.space);
          MoonExpansion.raiseHabitatRate(player);
        }
      }
      if (moon.mineTile) {
        if (moon.mineTile.space === undefined) {
          game.defer(new PlaceMoonMineTile(player));
        } else {
          MoonExpansion.addMineTile(player, moon.mineTile.space);
          MoonExpansion.raiseMiningRate(player);
        }
      }
      if (moon.roadTile) {
        if (moon.roadTile.space === undefined) {
          game.defer(new PlaceMoonRoadTile(player));
        } else {
          MoonExpansion.addRoadTile(player, moon.roadTile.space);
          MoonExpansion.raiseLogisticRate(player);
        }
      }
      if (moon.tile) {
        if (moon.tile.space) {
          MoonExpansion.addTile(player, moon.tile.space, {tileType: moon.tile.type});
        } else {
          game.defer(new PlaceSpecialMoonTile(player, {tileType: moon.tile.type}));
        }
      }
      if (moon.habitatRate) MoonExpansion.raiseHabitatRate(player, moon.habitatRate);
      if (moon.miningRate) MoonExpansion.raiseMiningRate(player, moon.miningRate);
      if (moon.logisticsRate) MoonExpansion.raiseLogisticRate(player, moon.logisticsRate);
    }

    const underworld = behavior.underworld;
    if (underworld) {
      if (underworld.identify) game.defer(new IdentifySpacesDeferred(player, ctx.count(underworld.identify)));
      if (underworld.excavate) {
        const excavate = underworld.excavate;
        if (typeof(excavate) === 'number') {
          game.defer(new ExcavateSpacesDeferred(player, excavate));
        } else {
          player.game.defer(new ExcavateSpacesDeferred(player, ctx.count(excavate.count), excavate.ignorePlacementRestrictions));
        }
      }
      if (underworld.corruption) UnderworldExpansion.gainCorruption(player, ctx.count(underworld.corruption), {log: true});
      // if (underworld.markThisGeneration) {
      //   if (isIProjectCard(card)) {
      //     card.generationUsed = player.game.generation;
      //   }
      // }
    }
  }
}