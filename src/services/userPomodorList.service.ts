/**
 * @class Service
 * 
 * @classdesc Serve and manage the user pomdors data
 */

import { TimeBlock } from "../models/timeBlock.model";
import { UserPomodor } from "../models/userPomodor.model";


export class UserPomodorListService {
    public userPomodorList: UserPomodor[];
    public onUserPomodorListChanged: Function;  // the function to display the data

    constructor() {
        const block1 = new TimeBlock({type: "focus", time: {hours: 0, minutes: 0, seconds: 5}});
        const block2 = new TimeBlock({type: "break", time: {hours: 0, minutes: 0, seconds: 5}});
        const block3 = new TimeBlock({type: "focus", time: {hours: 0, minutes: 0, seconds: 5}});

        const pomo1 = new UserPomodor("estudar", [block1, block2, block3]);
        const pomo2 = new UserPomodor("trabalhar", [block1, block2, block3]);
        const pomo3 = new UserPomodor("stream", [block1, block2, block3]);
        
        localStorage.setItem("pomodors", JSON.stringify([pomo1, pomo2, pomo3]));
        localStorage.removeItem("pomodors");
        
        const data = localStorage.getItem("pomodors");
        const pomodors = data === null ? [] : JSON.parse(data);
        
        this.userPomodorList = pomodors.map((pomodor: UserPomodor): UserPomodor => pomodor as UserPomodor);
    }

    addPomodor(pomodor: UserPomodor) {
        this.userPomodorList.push(pomodor);
        this.commit(this.userPomodorList);
    }
    // editPomodor()
    // deletePomodor()

    bindUserPomodorListChanged(callback: Function) { // will receive a render function from the view by the controller
        this.onUserPomodorListChanged = callback;
    }

    commit(pomodors: UserPomodor[]) {
        this.onUserPomodorListChanged(pomodors);
        localStorage.setItem("pomodors", JSON.stringify(pomodors));
    }
}