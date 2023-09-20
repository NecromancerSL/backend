import { Request, Response } from 'express';
import { createUsuarioService } from '../../services/usuario/CreateUsuarioService';

class CreateUsuarioController {
    async handle(request: Request, response: Response) {
        const { name, email, password, cpf, telefone } = request.body;

        const createUsuario = new createUsuarioService();

        const usuario = await createUsuario.execute({
            name,
            email,
            password,
            cpf,
            telefone,
        });

        return response.json(usuario);
    }
}

export const createUsuarioController = new CreateUsuarioController();