// protectedAdminRoutes.ts

import express from 'express';
import { verifyAdminToken } from '../../middleware/authenticate'; // Certifique-se de usar o caminho correto para importar o middleware
import { AdminRequest } from '../../middleware/authenticate'; // Importe a interface personalizada AdminRequest

const protectedAdminRoute = express.Router();

// Aplicar o middleware de autenticação para rotas de administrador
protectedAdminRoute.use(verifyAdminToken);

protectedAdminRoute.get('/admin/dashboard', (req: AdminRequest, res) => {
  res.json({ message: 'Rota protegida do administrador', user: req.adminId });
});

export default protectedAdminRoute;
