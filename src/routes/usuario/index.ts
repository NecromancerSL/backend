import { loginUsuarioController } from '../../controllers/usuario/LoginUsuarioControler';
import { createUserController } from '../../controllers/usuario/CreateUsuarioController';
import { getUserByIdController } from '../../controllers/usuario/GetUserByIdController';    
import { updateUserByIdController } from '../../controllers/usuario/UpdateUserByIdController';
import { Router } from 'express';
import bodyParser from 'body-parser';

const usuarioRoutes = Router();
usuarioRoutes.use(bodyParser.json());

usuarioRoutes.post('/loginusuario', loginUsuarioController.login);
usuarioRoutes.post('/cadastrarusuario', createUserController.handle);
usuarioRoutes.get('/listarusuario/:id', getUserByIdController.handle);
usuarioRoutes.post('/atualizarusuario/:id', updateUserByIdController.handle);

export default usuarioRoutes;