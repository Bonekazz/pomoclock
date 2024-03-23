import { UserPomodorListController } from "./controllers/userPomodorList.controller";
import { UserPomodorListService } from "./services/userPomodorList.service";
import { UserPomodorListView } from "./views/userPomodorList.view";

import { createIcons, Menu, Eye, Ellipsis, Plus, SquareLibrary, ChevronLeft, Frown} from "lucide";

createIcons({
    icons: {
        Menu,
        Eye,
        Ellipsis,
        Plus, 
        SquareLibrary, 
        ChevronLeft, Frown
    }
});

const userPomodorListController = new UserPomodorListController(new UserPomodorListService, new UserPomodorListView);