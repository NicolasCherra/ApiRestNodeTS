
import { Router } from 'express';
import { controllerNotes} from '../controllers/ControllerNotes';

class RoutesNotes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', controllerNotes.index);
        this.router.get('/add', controllerNotes.renderFormNote);
        this.router.post('/add', controllerNotes.saveNote);
    }

}

const routesNotes = new RoutesNotes();
export default routesNotes.router;