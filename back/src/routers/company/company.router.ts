import express, {Router} from 'express';
import companyController from '../../controllers/company/company.controller';

const router: Router = express.Router();
router.post('/post', companyController.post);


export default router;