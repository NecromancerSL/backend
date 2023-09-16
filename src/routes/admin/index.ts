import * as AdminController from '../../controllers/adminController'
import { Router } from 'express';
import bodyParser from 'body-parser';

const adminRoutes = Router();
adminRoutes.use(bodyParser.json());

adminRoutes.post('/cadastraradmin', AdminController.cadastrarAdmin);
adminRoutes.post('/loginadmin', AdminController.loginAdmin);

export default adminRoutes;