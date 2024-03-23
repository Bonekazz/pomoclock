// When the user opens the "my pomodors" page

import { TimeBlock } from "../models/timeBlock.model";
import { UserPomodor } from "../models/userPomodor.model";

export class UserPomodorListView {
    private app: HTMLElement;
    private addButton: HTMLElement;
    
    constructor() {

        this.init_elements();
    }

    init_elements() {
        this.app = document.getElementById("root") as HTMLElement;
        this.addButton = this.createElement("button")
        this.addButton.innerText = "add random";

        this.app.appendChild(this.addButton);
    }

    //init_listeners() {}

    createElement(tag: string, className?: string) {
        const element = document.createElement(tag);

        if (className) element.classList.add(className);

        return element;
    }

    // Binds which will receive service functions from the controller
    
    bindAddUserPomodor(handler: Function) { 
        this.addButton.addEventListener("click", () => {
            const randPomodor = new UserPomodor([new TimeBlock({type: "focus", time: {hours: 0, minutes: 0, seconds: 5}})])
            handler(randPomodor);
        })
    }
    // bindDeletePomodor(handeler: Function) {}
    // bindEditPomodor(handeler: Function) {}

}