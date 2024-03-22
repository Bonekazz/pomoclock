/**
 * @class Controller
 * 
 * @classdesc links the user input and the view output
 * 
 * - gets the user's pomodors from data, through pomodor.model.ts, and renders them with pomodor.view
 * 
 * @param model
 * @param view
 */

import { UserPomodor } from "../models/userPomodor.model";
import { UserPomodorService } from "../services/userPomodor.service";
//import { UserPomodorView } from "../views/userPomodor.view";

export class UserPomodorController {
    private userPomodorService: UserPomodorService;

    constructor(userPomodorService: UserPomodorService) { 
        this.userPomodorService = userPomodorService;

        this.init_bindings();
        
        // Display initial users
        this.onUserPomodorListChanged(this.userPomodorService.userPomodorList);
    }

    init_bindings() {
        this.userPomodorService.bindUserPomodorListChanged(this.onUserPomodorListChanged);
        //this.userPomodorView.bindAddUser(this.handleAddUser);
    }

    onUserPomodorListChanged(userPomodors: UserPomodor[]) {
        //this.userPomodorView.displayUserPomodorList(userPomodors);
        console.log("displaying users:");
        console.log(userPomodors);
    }

    //handleAddUser(){}
}