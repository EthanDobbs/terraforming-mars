import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {PreludeCard} from '../../prelude/PreludeCard';
import {IProjectCard} from '../../IProjectCard';
import {IPlayer} from '../../../IPlayer';
import {IAward} from '../../../awards/IAward';
import {SelectOption} from '../../../inputs/SelectOption';
import {message} from '../../../logs/MessageBuilder';
import {PlayerInput} from '../../../PlayerInput';
import {OrOptions} from '../../../inputs/OrOptions';

export class CommitteeRepresentative extends PreludeCard implements IProjectCard {
  constructor() {
    super({
      name: CardName.COMMITTEE_REPRESENTATIVE,

      behavior: {
        tr: 2,
        turmoil: {sendDelegates: {count: 1}},
      },

      metadata: {
        cardNumber: 'xP52',
        renderData: CardRenderer.builder((b) => {
          b.tr(2).delegates(1).br.award();
        }),
        description: 'Raise your TR 2 steps, place a delegate, and fund an award for free.',
      },
    });
  }
  private selectAwardToFund(player: IPlayer, award: IAward): SelectOption {
    return new SelectOption(message('Fund ${0} award', (b) => b.award(award))).andThen(() => {
      player.game.fundAward(player, award);
      return undefined;
    });
  }
  public override bespokePlay(player: IPlayer): PlayerInput | undefined {
    const game = player.game;

    // Awards are disabled for 1 player games
    if (game.isSoloMode()) return;

    const freeAward = new OrOptions();
    freeAward.title = 'Select award to fund';
    freeAward.buttonLabel = 'Confirm';

    // If Vitor isn't going first and someone else funds awards, filter them out.
    const availableAwards = game.awards.filter((award) => !game.fundedAwards.map((fa) => fa.award).includes(award));
    freeAward.options = availableAwards.map((award) => this.selectAwardToFund(player, award));

    return freeAward;
  }
}
