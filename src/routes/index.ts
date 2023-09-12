import { Router } from 'express';
import adminRoutes from './admin';
import produtoRoutes from './produto';


const mainRoutes = Router();

mainRoutes.use(adminRoutes);
mainRoutes.use(produtoRoutes);


export default mainRoutes;