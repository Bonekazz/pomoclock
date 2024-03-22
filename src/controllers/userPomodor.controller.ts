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

import { UserPomodorService } from "../services/userPomodor.service";
//import { UserPomodorView } from "../views/userPomodor.view";

export class UserPomodorController {
    private _userPomodorService: UserPomodorService;
    private onUserPomodorListChanged: Function;

    constructor(userPomodorService: UserPomodorService) { 
        this._userPomodorService = userPomodorService;

        

        // Display initial users
        this.onUserPomodorListChanged(this._userPomodorService.userPomodorList);
    }

    init_bindings() {
        this._userPomodorService.bindUserPomodorListChanged(this.onUserPomodorListChanged);
        //this.userPomodorView.bindAddUser(this.handleAddUser);
    }

    //handleAddUser(){}
}