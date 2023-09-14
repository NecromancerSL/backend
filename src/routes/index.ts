import { Router } from 'express';
import adminRoutes from './admin';
import produtoRoutes from './produto';
import usuarioRoutes from './usuario';



const mainRoutes = Router();

mainRoutes.use(adminRoutes);
mainRoutes.use(produtoRoutes);
mainRoutes.use(usuarioRoutes);



export default mainRoutes;