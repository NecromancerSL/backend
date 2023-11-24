import { loginUsuarioController } from '../../controllers/usuario/LoginUsuarioControler';
import { createUserController } from '../../controllers/usuario/CreateUsuarioController';
import { getUserByIdController } from '../../controllers/usuario/GetUserByIdController';    
import { updateUserByIdController } from '../../controllers/usuario/UpdateUserByIdController';
import { updatePasswordController } from '../../controllers/usuario/UpdatePasswordController';
import { deleteUsuarioController } from '../../controllers/usuario/DeleteUsuarioController';
import { findUserByNameController } from '../../controllers/usuario/FindUserByNameController';
import { Router } from 'express';
import bodyParser from 'body-parser';

const usuarioRoutes = Router();
usuarioRoutes.use(bodyParser.json());

usuarioRoutes.post('/loginusuario', loginUsuarioController.login);
usuarioRoutes.post('/cadastrarusuario', createUserController.handle);
usuarioRoutes.get('/listarusuario/:id', getUserByIdController.handle);
usuarioRoutes.post('/atualizarusuario/:id', updateUserByIdController.handle);
usuarioRoutes.post('/atualizarsenha/:id', updatePasswordController.handle);
usuarioRoutes.delete('/deletarusuario/:id', deleteUsuarioController.handle);
usuarioRoutes.get('/buscarusuario/:name', findUserByNameController.handle);


export default usuarioRoutes;