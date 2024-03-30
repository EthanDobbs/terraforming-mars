import { Message } from "@/common/logs/Message";
import { Space } from "../boards/Space";
import { SpaceSelection } from "./selectables/SpaceSelection";
import { SelectOne } from "./basicInputs/SelectOne";

export class SelectSpace extends SelectOne<Space> {
    constructor(
        title: string | Message,
        spaces: ReadonlyArray<Space>,
    ) {
        super(new SpaceSelection(title, spaces))
    }
}