import wdRouter from './wd/wd.router';
import companyRouter from './company/company.router';

import express, { Router } from 'express';

const router = express.Router();

router.use('/wd',wdRouter);
router.use('/company',companyRouter)


export default router;