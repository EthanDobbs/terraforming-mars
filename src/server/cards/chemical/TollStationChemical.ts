import {IProjectCard} from '../IProjectCard';
import {Tag} from '../../../common/cards/Tag';
import {Card} from '../Card';
import {CardType} from '../../../common/cards/CardType';
import {CardName} from '../../../common/cards/CardName';
import {CardRenderer} from '../render/CardRenderer';
import {all, played} from '../Options';
import {IPlayer} from '../../IPlayer';
import {PlayerInput} from '../../PlayerInput';
import {Resource} from '../../../common/Resource';

export class TollStationChemical extends Card implements IProjectCard {
  constructor() {
    super({
      type: CardType.AUTOMATED,
      name: CardName.TOLL_STATION_CHEMICAL,
      tags: [Tag.SPACE],
      cost: 12,

      metadata: {
        cardNumber: 'xR34',
        renderData: CardRenderer.builder((b) => {
          b.production((pb) => {
            pb.megacredits(1).slash().space({played, all}).asterix();
          });
        }),
        description: 'Increase your M€ production 1 step for each space tag your opponent with the most space tags has.',
      },
    });
  }
  public override bespokePlay(player: IPlayer): PlayerInput | undefined {
    if(player.game.isSoloMode()){
      return undefined;
    }
    let mostSpaceTags = 0;
    player.game.getPlayers().filter((p) => p.id !== player.id).forEach((p) => {
      const playerSpaceTags = p.tags.count(Tag.SPACE, 'raw')
      if (playerSpaceTags > mostSpaceTags) {
        mostSpaceTags = playerSpaceTags;
      }
    })
    player.production.add(Resource.MEGACREDITS, mostSpaceTags);
    return undefined;
  }
}
