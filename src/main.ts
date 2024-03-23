import { UserPomodorController } from "./controllers/userPomodor.controller";
import { UserPomodorService } from "./services/userPomodor.service";
import { UserPomodorView } from "./views/userPomodor.view";

import { createIcons, Menu, Eye, Ellipsis, Plus} from "lucide";

createIcons({
    icons: {
        Menu,
        Eye,
        Ellipsis,
        Plus
    }
});

const userPomodorController = new UserPomodorController(new UserPomodorService, new UserPomodorView);