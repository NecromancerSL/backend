import { Router } from 'express';
import adminRoutes from './admin';
import produtoRoutes from './produto';
import usuarioRoutes from './usuario';
import enderecoRoutes from './endereco';
import protectedAdminRoute from './admin'; // Importe a rota protegida de administrador
import protectedUserRoute from './usuario'; 

const mainRoutes = Router();

mainRoutes.use(adminRoutes);
mainRoutes.use(produtoRoutes);
mainRoutes.use(usuarioRoutes);
mainRoutes.use(enderecoRoutes);

mainRoutes.use('/admin', protectedAdminRoute);
mainRoutes.use('/user', protectedUserRoute);

export default mainRoutes;