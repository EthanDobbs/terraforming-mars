import {IPlayer} from '../../../IPlayer';
import {PreludeCard} from '../../prelude/PreludeCard';
import {IProjectCard} from '../../IProjectCard';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {Turmoil} from '../../../turmoil/Turmoil';
import {SimpleDeferredAction} from '../../../deferredActions/DeferredAction';
import {OrOptions} from '../../../inputs/OrOptions';
import {SelectOption} from '../../../inputs/SelectOption';
import {IGlobalEvent} from '../../../turmoil/globalEvents/IGlobalEvent';
import {message} from '../../../logs/MessageBuilder';
import {Size} from '../../../../common/cards/render/Size';

export class ContractedIntelligenceAgency extends PreludeCard implements IProjectCard {
  constructor() {
    super({
      name: CardName.CONTRACTED_INTELLIGENCE_AGENCY,

      metadata: {
        cardNumber: 'xP55',
        renderData: CardRenderer.builder((b) => {
          b.action(undefined, (eb) => eb.empty().startAction.empty()).text('Action: Look at the top card and either buy it or discard it', Size.SMALL, true).br;
          b.text('3').globalEvent().asterix().nbsp.production((pb) => pb.megacredits(1));
        }),
        description: 'Draw 3 global events, and return them to the global events draw pile in any order you please. Increase your M€ production 1 step.',
      },
    });
  }

  public override bespokePlay(player: IPlayer) {
    const turmoil = Turmoil.getTurmoil(player.game);
    const globalEvents: IGlobalEvent[] = [];

    for (let i = 0; i < 3; i++) {
      const event = turmoil.globalEventDealer.draw();
      if (event !== undefined) {
        globalEvents.push(event);
      }
    }

    player.game.defer(new SimpleDeferredAction(player, () => {
      return new OrOptions(
        ...globalEvents.map((event) => {
          // TODO(kberg): Render as SelectGlobalEvent
          const description = message('${0}: ${1} Neutral delegate added: ${2}', (b) => b.globalEvent(event).string(event.description).partyName(event.currentDelegate));
          return new SelectOption(description).andThen(() => {
            turmoil.currentGlobalEvent = event;
            turmoil.sendDelegateToParty('NEUTRAL', event.currentDelegate, player.game);

            globalEvents.forEach((ge) => {
              if (ge.name !== event.name) {
                turmoil.globalEventDealer.discard(ge);
              }
            });

            return undefined;
          });
        }),
      );
    }));
    return undefined
  }
}
