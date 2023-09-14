import * as AdminController from '../../controllers/adminController'
import { Router } from 'express';
import bodyParser from 'body-parser';

const adminRoutes = Router();
adminRoutes.use(bodyParser.json());

adminRoutes.post('/criaradmin', AdminController.create);
adminRoutes.post('/login', AdminController.login);

export default adminRoutes;