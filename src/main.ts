import { UserPomodorController } from "./controllers/userPomodor.controller";
import { UserPomodorService } from "./services/userPomodor.service";
import { UserPomodorView } from "./views/userPomodor.view";

const userPomodorController = new UserPomodorController(new UserPomodorService, new UserPomodorView);