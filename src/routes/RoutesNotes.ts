
import { Router } from 'express';
import { controllerNotes} from '../controllers/ControllerNotes';

class RoutesNotes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/add', controllerNotes.saveNote);
    }

}

const routesNotes = new RoutesNotes();
export default routesNotes.router;