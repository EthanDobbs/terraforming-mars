import { Units } from "@/common/Units";
import { IPlayer } from "../IPlayer";

export type Countable = number | CountItem;

export type CountableUnits = {[k in keyof Units]: Countable}

export type CountConfig = {
    start?: number,
    per?: number,
    each?: number,
    where?: 'self' | 'all' | 'opponents-only',
}

export abstract class CountItem {
    constructor(protected readonly config?: CountConfig) {}

    abstract countSelf(player: IPlayer): number;

    public countOpponent(opponent: IPlayer): number {
        return this.countSelf(opponent);
    }

    public count(player: IPlayer): number {
        let sum = this.config?.start ?? 0;

        const where = this.config?.where ?? 'self';
        if (where === ('self' || 'all')) sum += this.countSelf(player)
        if (where === ('opponents-only' || 'all')) {
            player.getOpponents().forEach((opponent) => {
                sum += this.countOpponent(opponent);
            });
        }
        const per = this.config?.per;
        if (per) sum = Math.min(sum / per);
        const each = this.config?.each;
        if (each) sum *= each;

        return sum
    }

    static resolve(v: Countable, player: IPlayer): number {
        if (typeof v === 'number') return v;
        return v.count(player);
    }
    static countUnits(countableUnits: Partial<CountableUnits>, player: IPlayer): Units {
        const units: Units = {...Units.EMPTY};
        for (const key in units) {
          const safeKey = key as keyof CountableUnits;
          const countable = countableUnits[safeKey] ?? 0;
          units[safeKey] = this.resolve(countable, player);
        }
        return units;
    }
}