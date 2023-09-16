import * as UsuarioController from '../../controllers/usuarioController';
import { Router } from 'express';
import bodyParser from 'body-parser';

const usuarioRoutes = Router();
usuarioRoutes.use(bodyParser.json());

usuarioRoutes.post('/cadastrarusuario', UsuarioController.cadastrarUsuario);
usuarioRoutes.put('/editarusuario/:id', UsuarioController.editarUsuario);
usuarioRoutes.delete('/excluirusuario/:id', UsuarioController.excluirUsuario);
usuarioRoutes.post('/loginusuario', UsuarioController.loginUsuario);

export default usuarioRoutes;