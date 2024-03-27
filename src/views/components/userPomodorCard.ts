import { TimeBlock } from "../../models/timeBlock.model";

export function userPomodorCard(id: string, title: string, blocks: TimeBlock[]) {

    const blocksHtml = blocks.map(block => {
        return `
            <span class="w-full h-[2px] rounded-full ${block.type === "focus" ? "bg-black" : "bg-black/20"}">
            </span>
        `;
    }).join("");
    
    const component = `
            <div id="${id}" class="border p-2 rounded-md w-full">
                <h2>${title}</h2>
                <div class="w-full flex flex-col gap-2">
                    ${blocksHtml}
                </div>
            </div>
    `;

    return component;
}