import { createElement, Frown } from "lucide";
import { ElementGen } from "../../utils/elementGen";

export function EmptyListCard() {
    const mainDiv = ElementGen.createElement("div", null, "flex flex-col gap-2");

    const phraseDiv = ElementGen.createElement("div", null, "flex gap-2 mt-[5em]");

    const phrase = ElementGen.createElement("p");
    phrase.innerHTML = "you dont have pomodors";

    const icon = createElement(Frown);

    phraseDiv.append(phrase, icon);

    const createButton = ElementGen.createElement("button", null, "button border p-2 rounded-md");
    createButton.innerText = "create one";

    mainDiv.append(phraseDiv, createButton);
    
    return mainDiv;
}