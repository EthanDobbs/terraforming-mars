import {IProjectCard} from '../IProjectCard';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import { CanAffordOptions, IPlayer } from '../../IPlayer';
import { OrOptions } from '../../inputs/OrOptions';
import { Resource } from '../../../common/Resource';
import { PlayerInput } from '../../PlayerInput';
import { SelectOption } from '../../inputs/SelectOption';
import { Tag } from '../../../common/cards/Tag';

export class ProjectAdvancement extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.PROJECT_ADVANCEMENT,
      cost: 5,
      tags: [Tag.EARTH],

      metadata: {
        cardNumber: 'x205',
        description: 'Raise any production that YOU\'VE ALREADY RAISED THIS GENERATION.',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => pb.wild(1)).asterix();
        }),
      },
    });
  }
  public data = {
    lastGenRaisedMCProd: -1,
    lastGenRaisedSteelProd: -1,
    lastGenRaisedTitaniumProd: -1,
    lastGenRaisedPlantProd: -1,
    lastGenRaisedEnergyProd: -1,
    lastGenRaisedHeatProd: -1,
  }
  public onProductionGain(player: IPlayer, resource: Resource, _amount: number) {
    switch(resource) {
      case Resource.MEGACREDITS: {
        this.data.lastGenRaisedMCProd = player.game.generation;
        break;
      }
      case Resource.STEEL: {
        this.data.lastGenRaisedSteelProd = player.game.generation;
        break;
      }
      case Resource.TITANIUM: {
        this.data.lastGenRaisedTitaniumProd = player.game.generation;
        break;
      }
      case Resource.PLANTS: {
        this.data.lastGenRaisedPlantProd = player.game.generation;
        break;
      }
      case Resource.ENERGY: {
        this.data.lastGenRaisedEnergyProd = player.game.generation;
        break;
      }
      case Resource.HEAT: {
        this.data.lastGenRaisedHeatProd = player.game.generation;
        break;
      }
    }
  }
  public override bespokeCanPlay(player: IPlayer, _canAffordOptions?: CanAffordOptions | undefined): boolean {
      return this.data.lastGenRaisedMCProd === player.game.generation ||
        this.data.lastGenRaisedSteelProd === player.game.generation ||
        this.data.lastGenRaisedTitaniumProd === player.game.generation ||
        this.data.lastGenRaisedPlantProd === player.game.generation ||
        this.data.lastGenRaisedEnergyProd === player.game.generation ||
        this.data.lastGenRaisedHeatProd === player.game.generation;
  }
  public override bespokePlay(player: IPlayer): PlayerInput | undefined {
    const orOptions = new OrOptions();

      if (this.data.lastGenRaisedMCProd === player.game.generation) {
        orOptions.options.push(new SelectOption('Raise MC production', 'Select').andThen( () => {
          player.production.add(Resource.MEGACREDITS, 1, {log: true});
          return undefined;
        }))
      }
      if (this.data.lastGenRaisedSteelProd === player.game.generation) {
        orOptions.options.push(new SelectOption('Raise steel production', 'Select').andThen( () => {
          player.production.add(Resource.STEEL, 1, {log: true});
          return undefined;
        }))
      }
      if (this.data.lastGenRaisedTitaniumProd === player.game.generation) {
        orOptions.options.push(new SelectOption('Raise titanium production', 'Select').andThen( () => {
          player.production.add(Resource.TITANIUM, 1, {log: true});
          return undefined;
        }))
      }
      if (this.data.lastGenRaisedPlantProd === player.game.generation) {
        orOptions.options.push(new SelectOption('Raise plant production', 'Select').andThen( () => {
          player.production.add(Resource.PLANTS, 1, {log: true});
          return undefined;
        }))
      }
      if (this.data.lastGenRaisedEnergyProd === player.game.generation) {
        orOptions.options.push(new SelectOption('Raise energy production', 'Select').andThen( () => {
          player.production.add(Resource.ENERGY, 1, {log: true});
          return undefined;
        }))
      }
      if (this.data.lastGenRaisedHeatProd === player.game.generation) {
        orOptions.options.push(new SelectOption('Raise heat production', 'Select').andThen( () => {
          player.production.add(Resource.HEAT, 1, {log: true});
          return undefined;
        }))
      }

    return orOptions;
  }
}
