import express, {Router} from 'express';
import recruitController from '../../controllers/wd/wd.controller';
const router: Router = express.Router();

router.post('/post', recruitController.post);
router.post('/update',recruitController.update);
router.post('/remove',recruitController.remove);
router.post('/requestAll',recruitController.requestAll);
router.get('/search',recruitController.search);
router.post('/read/:id',recruitController.read);


export default router;