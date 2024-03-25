// When the user opens the "my pomodors" page

import { TimeBlock } from "../models/timeBlock.model";
import { UserPomodor } from "../models/userPomodor.model";

export class UserPomodorListView {
    private app: HTMLElement;
    private addButton: HTMLElement;

    private userPomodorListElement: HTMLElement;

    private pomodorListSideBar: HTMLElement;
    private pomodorSideBarBtn: NodeList;

    
    constructor() {

        this.init_elements();
        this.init_listeners();
    }

    init_elements() {
        this.app = document.getElementById("root") as HTMLElement;
        this.addButton = this.createElement("button");

        this.userPomodorListElement = document.getElementById("div-user-pomodor-list") as HTMLElement;
        this.pomodorListSideBar = document.getElementById("pomodor-list-sidebar") as HTMLElement;
        this.pomodorSideBarBtn = document.querySelectorAll(".pomodor-sidebar-btn") as NodeList;

        this.addButton.innerText = "add random";

        this.app.appendChild(this.addButton);
    }

    init_listeners() {
        this.pomodorSideBarBtn.forEach(button => button.addEventListener("click", event => this.show_list_sidebar(event)));
    }

    createElement(tag: string) {
        const element = document.createElement(tag);
        return element as HTMLElement;
    }

    show_list_sidebar(event: Event) {
        console.log(event.currentTarget);
        this.pomodorListSideBar.classList.toggle("hidden");
        this.pomodorListSideBar.classList.toggle("flex");
        // add transition later
    }

    // Binds which will receive service functions from the controller
    
    bindAddUserPomodor(handler: Function) { 
        this.addButton.addEventListener("click", () => {
            const randPomodor = new UserPomodor("random", [new TimeBlock({type: "focus", time: {hours: 0, minutes: 0, seconds: 5}})])
            handler(randPomodor);
        })
    }
    // bindDeletePomodor(handeler: Function) {}
    // bindEditPomodor(handeler: Function) {}

    displayUserPomodorList(userPomodorList: UserPomodor[]) {
        if(userPomodorList.length === 0) {
            this.userPomodorListElement.innerHTML = `
                <div class="flex gap-2 mt-[5em]">
                    <p>you dont have pomodors</p>
                    <i data-lucide="frown"></i>
                </div>
                <button class="button border p-2 rounded-md">create one</button>
            `
            return;
        }

        this.userPomodorListElement.innerHTML = userPomodorList.map(pomodor => {
            const id = pomodor.id;
            const title = pomodor.title;
            const blocks = pomodor.blocks;

            const blocksHtml = blocks.map(block => {
                return `
                    <span class="w-full h-[2px] rounded-full ${block.type === "focus" ? "bg-black" : "bg-black/20"}">
                    </span>
                `
            }).join("");

            return `
                <div id="${id}" class="border p-2 rounded-md w-full">
                    <h2>${title}</h2>
                    <div class="w-full flex flex-col gap-2">
                        ${blocksHtml}
                    </div>
                </div>
            `
        }).join("");
    }

}