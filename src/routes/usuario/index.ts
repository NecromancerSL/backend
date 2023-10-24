import { loginUsuarioController } from '../../controllers/usuario/LoginUsuarioControler';
import { createUserController } from '../../controllers/usuario/CreateUsuarioController';
import { Router } from 'express';
import bodyParser from 'body-parser';

const usuarioRoutes = Router();
usuarioRoutes.use(bodyParser.json());

usuarioRoutes.post('/loginusuario', loginUsuarioController.login);
usuarioRoutes.post('/cadastrarusuario', createUserController.handle);

export default usuarioRoutes;