import { IPlayer } from "@/server/IPlayer";
import { IBehavior } from "../IBehaviorInstance";
import { CountItem, CountableUnits } from "../CountItem";

export class AdjustProduction implements IBehavior {
    constructor(private units: Partial<CountableUnits>) {}
    
    public CanExecute(player: IPlayer): boolean {
        return player.production.canAdjust(CountItem.countUnits(this.units, player))
    }
    public Execute(player: IPlayer): undefined {
        player.production.adjust(CountItem.countUnits(this.units, player), {log: true});
        return undefined;
    }
}