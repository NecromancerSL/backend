import { loginUsuarioController } from '../../controllers/usuario/LoginUsuarioControler';
import { Router } from 'express';
import bodyParser from 'body-parser';

const usuarioRoutes = Router();
usuarioRoutes.use(bodyParser.json());

usuarioRoutes.post('/loginusuario', loginUsuarioController.login);

export default usuarioRoutes;