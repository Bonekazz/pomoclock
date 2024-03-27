import { TimeBlock } from "../../models/timeBlock.model";
import { ElementGen } from "../../utils/elementGen";

export function UserPomodorCard(id: string, title: string, blocks: TimeBlock[]) {

    const blockNodes = blocks.map(block => {
        const type = block.type === "focus" ? "bg-black" : "bg-black/20";
        const span = ElementGen.createElement("span", null, `w-full h-[2px] rounded-full ${type}`);
        return span;
    });

    const blocksWrapper = ElementGen.createElement("div", null, "w-full flex flex-col gap-2");
    blocksWrapper.append(...blockNodes);

    const card = ElementGen.createElement("div", id, "border p-2 rounded-md w-full");
    const cardTitle = ElementGen.createElement("h2");
    cardTitle.innerText = title;

    card.append(cardTitle, blocksWrapper);

    return card;
}