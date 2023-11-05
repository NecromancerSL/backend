import { Router } from 'express';
import adminRoutes from './admin';
import produtoRoutes from './produto';
import usuarioRoutes from './usuario';
import enderecoRoutes from './endereco';
import pedidoRoutes from './pedido';
import protectedAdminRoute from './admin'; // Importe a rota protegida de administrador
import protectedUserRoute from './usuario'; 
import cometarioRoutes from './comentario';

const mainRoutes = Router();

mainRoutes.use(adminRoutes);
mainRoutes.use(produtoRoutes);
mainRoutes.use(usuarioRoutes);
mainRoutes.use(enderecoRoutes);
mainRoutes.use(pedidoRoutes);
mainRoutes.use(cometarioRoutes);

mainRoutes.use('/admin', protectedAdminRoute);
mainRoutes.use('/user', protectedUserRoute);

export default mainRoutes;