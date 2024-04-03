import { IPlayer } from "@/server/IPlayer";
import { IBehavior } from "../IBehaviorInstance";
import { CountItem, CountableUnits } from "../CountItem";

export class GainResources implements IBehavior {
    constructor(private units: Partial<CountableUnits>) {}
    
    public Execute(player: IPlayer): undefined {
        player.stock.addUnits(CountItem.countUnits(this.units, player), {log: true});
        return undefined;
    }
}