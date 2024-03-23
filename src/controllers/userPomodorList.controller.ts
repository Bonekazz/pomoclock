/**
 * @class Controller
 * 
 * @classdesc links the user data actions and the user data view output
 * 
 * - gets the user's pomodors from data, through pomodor.model.ts, and renders them with pomodor.view
 * 
 * @param service
 * @param view
 */

import { UserPomodor } from "../models/userPomodor.model";
import { UserPomodorListService } from "../services/userPomodorList.service";
import { UserPomodorListView } from "../views/userPomodorList.view";

export class UserPomodorListController {
    private userPomodorListService: UserPomodorListService;
    private userPomodorListView: UserPomodorListView;

    constructor(userPomodorListService: UserPomodorListService, userPomodorListView: UserPomodorListView) { 
        this.userPomodorListService = userPomodorListService;
        this.userPomodorListView = userPomodorListView;

        this.init_bindings();
        
        // Display initial users
        this.onUserPomodorListChanged(this.userPomodorListService.userPomodorList);
    }

    init_bindings() {
        this.userPomodorListService.bindUserPomodorListChanged((userPomodorsList: UserPomodor[]) => this.onUserPomodorListChanged(userPomodorsList));
        this.userPomodorListView.bindAddUserPomodor((pomodor: UserPomodor) => this.handleAddUserPomodor(pomodor));
    }

    onUserPomodorListChanged(userPomodors: UserPomodor[]) {
        this.userPomodorListView.displayUserPomodorList(userPomodors);
        console.log("displaying users:");
        console.log(userPomodors);
    }

    handleAddUserPomodor(pomodor: UserPomodor){
        this.userPomodorListService.addPomodor(pomodor);
    }

    //handleDeleteUserPomodor(){}
    //handleEditUserPomodor(){}
}