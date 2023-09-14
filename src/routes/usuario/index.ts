import * as UsuarioController from '../../controllers/usuarioController';
import { Router } from 'express';
import bodyParser from 'body-parser';

const usuarioRoutes = Router();
usuarioRoutes.use(bodyParser.json());

usuarioRoutes.post('/cadastrarusuario', UsuarioController.cadastrarUsuario);

export default usuarioRoutes;