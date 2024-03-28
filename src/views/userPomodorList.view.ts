// When the user opens the "my pomodors" page

import { TimeBlock } from "../models/timeBlock.model";
import { UserPomodor } from "../models/userPomodor.model";
import { EmptyListCard } from "./components/EmptyListCard";
import { UserPomodorCard } from "./components/UserPomodorCard";

export class UserPomodorListView {
    private app: HTMLElement;
    private addButton: HTMLElement;

    private userPomodorListElement: HTMLElement;

    private createPomodorBtn: HTMLElement;

    private pomodorListSideBar: HTMLElement;
    private pomodorSideBarBtn: NodeList;

    
    constructor() {

        this.init_elements();
        this.init_listeners();
    }

    init_elements() {
        this.app = document.getElementById("root") as HTMLElement;
        this.addButton = this.createElement("button");

        this.userPomodorListElement = document.getElementById("user-pomodor-list") as HTMLElement;

        this.pomodorListSideBar = document.getElementById("pomodor-list-sidebar") as HTMLElement;
        this.pomodorSideBarBtn = document.querySelectorAll(".pomodor-sidebar-btn") as NodeList;

        this.createPomodorBtn = document.getElementById("create-pomodor-btn") as HTMLElement;

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
            const randPomodor = new UserPomodor("random", [new TimeBlock({type: "focus", time: {hours: 0, minutes: 0, seconds: 5}})]);
            handler(randPomodor);
        });
    }
    // bindDeletePomodor(handeler: Function) {}
    // bindEditPomodor(handeler: Function) {}

    displayUserPomodorList(userPomodorList: UserPomodor[]) {
        if(userPomodorList.length === 0) {

            this.userPomodorListElement.replaceChildren(EmptyListCard());
            
            this.createPomodorBtn.classList.add("hidden");

            return;
        }

        this.userPomodorListElement.replaceChildren(...userPomodorList.map(pomodor => {
            const id = pomodor.id;
            const title = pomodor.title;
            const blocks = pomodor.blocks;

            return UserPomodorCard(id, title, blocks);
        }));


        this.createPomodorBtn.classList.remove("hidden");
    }

    
}