// protectedUserRoutes.ts
import express from 'express';
import { verifyUserToken } from '../../middleware/authenticate';
import { UserRequest } from '../../middleware/authenticate';

const protectedUserRoute = express.Router();

// Aplicar o middleware de autenticação para rotas de usuário
protectedUserRoute.use(verifyUserToken);

protectedUserRoute.get('/user/profile', (req: UserRequest, res) => {
  res.json({ message: 'Rota protegida do usuário', user: req.userId });
});

export default protectedUserRoute;
