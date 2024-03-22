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
    private _onUserPomodorListChanged: Function;

    constructor(userPomodorService: UserPomodorService) { 
        this._userPomodorService = userPomodorService;

        

        // Display initial users
        this._onUserPomodorListChanged(this.userPomodorService.userPomodors);
    }

    init_bindings() {
        this._userPomodorService.bindUserPomodorListChanged(this._onUserPomodorListChanged);
        //this.userPomodorView.bindAddUser(this.handleAddUser);
    }

    //handleAddUser(){}
}