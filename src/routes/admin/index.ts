import * as AdminController from '../../controller/admin/create';
import { Router } from 'express';

const adminRoutes = Router();

adminRoutes.post('/criaradmin', AdminController.create);

export default adminRoutes;