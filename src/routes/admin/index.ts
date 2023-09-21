import { createAdminController } from '../../controllers/admin/CreateAdminController';
import { loginAdminController } from '../../controllers/admin/LoginAdminController';
import { Router } from 'express';
import bodyParser from 'body-parser';

const adminRoutes = Router();
adminRoutes.use(bodyParser.json());

adminRoutes.post('/cadastraradmin', createAdminController.handle);
adminRoutes.post('/loginadmin', loginAdminController.login);

export default adminRoutes;