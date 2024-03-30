import { Message } from "@/common/logs/Message";
import { SelectMany } from "./basicInputs/SelectMany";
import { CardSelection } from "./selectables/CardSelection";
import {Options} from "./selectables/CardSelection";
import { ICard } from "../cards/ICard";

export class SelectCard<T extends ICard> extends SelectMany<T> {
    constructor(
        title: string | Message,
        buttonLabel: string,
        cards: Array<T>,
        amount?: number,
        config?: Partial<Options>,
    ) {
        super(new CardSelection<T>(title, buttonLabel, cards, config), amount ?? 1, amount ?? 1)
    }
}