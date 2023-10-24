import { Router } from 'express';
import adminRoutes from './admin';
import produtoRoutes from './produto';
import usuarioRoutes from './usuario';
import pedidoRoutes from './pedido';



const mainRoutes = Router();

mainRoutes.use(adminRoutes);
mainRoutes.use(produtoRoutes);
mainRoutes.use(usuarioRoutes);
mainRoutes.use(pedidoRoutes);



export default mainRoutes;