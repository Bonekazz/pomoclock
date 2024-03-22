import { UserPomodorController } from "./controllers/userPomodor.controller";
import { UserPomodorService } from "./services/userPomodor.service";

const userPomodorController = new UserPomodorController(new UserPomodorService);