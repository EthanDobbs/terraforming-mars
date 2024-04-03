import { IPlayer } from "@/server/IPlayer";
import { IBehavior } from "../IBehaviorInstance";
import { CountItem, Countable } from "../CountItem";
import { message } from "@/server/logs/MessageBuilder";
import { SelectResource } from "@/server/inputs/SelectResource";
import { PlayerInput } from "@/server/PlayerInput";
import { ALL_RESOURCES } from "@/common/Resource";
import { Units } from "@/common/Units";
import { SelectResources } from "@/server/inputs/SelectResources";

export class GainStandardResources implements IBehavior {
    constructor(private amount: Countable, private same: boolean = false) {}
    
    public Execute(player: IPlayer): PlayerInput {
        const amount = CountItem.resolve(this.amount, player);
        if (this.same) {
            const title = message('Gain ${0} units of a standard resource', (b) => b.number(amount))
            return new SelectResource(title, 'Gain Resources', ALL_RESOURCES).andThen((unit) => {
                player.stock.add(Units.ResourceMap[unit], amount, {log: true});
                return undefined;
            });
        } else {
            return new SelectResources(player, amount, ALL_RESOURCES);
          }
    }
}