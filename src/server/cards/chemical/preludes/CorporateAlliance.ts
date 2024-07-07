import {PreludeCard} from '../../prelude/PreludeCard';
import {IProjectCard} from '../../IProjectCard';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {PartyName} from '../../../../common/turmoil/PartyName';
import {Tag} from '../../../../common/cards/Tag';
import {ALL_RESOURCES} from '../../../../common/Resource';
import {IPlayer} from '../../../IPlayer';
import {PlayerInput} from '../../../PlayerInput';
import {OrOptions} from '../../../inputs/OrOptions';
import {SelectOption} from '../../../inputs/SelectOption';

export class CorporateAlliance extends PreludeCard implements IProjectCard {
  constructor() {
    super({
      name: CardName.CORPORATE_ALLIANCE,
      tags: [Tag.EARTH],

      behavior: {
        turmoil: {sendDelegates: {count: 2, party: PartyName.UNITY}},
        production: {megacredits: 1},
      },

      metadata: {
        cardNumber: 'xP60',
        renderData: CardRenderer.builder((b) => {
          b.delegates(2).unity().production((pb) => pb.megacredits(1).wild(1));
        }),
        description: 'Place 2 delegates into Unity. Increase your M€ production 1 step and ANY production 1 step.',
      },
    });
  }
  public override bespokePlay(player: IPlayer): PlayerInput | undefined {
    const orOptions = new OrOptions();

    ALL_RESOURCES.forEach((resource) => {
      orOptions.options.push(new SelectOption('Increase ' + resource + ' production 1 step', 'Select').andThen( () => {
        player.production.add(resource, 1, {log: true});
        return undefined;
      }),
      );
    });

    return orOptions;
  }
}
