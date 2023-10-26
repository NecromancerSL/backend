import { Request, Response } from "express";
import { UpdateUsuarioById } from "../../services/usuario/UpdateUsuarioByIdService";

class UpdateUserByIdController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const { name, email, password, cpf, telefone } = request.body;

        const updateUsuarioService = new UpdateUsuarioById(); 

        const usuario = await updateUsuarioService.execute(Number(id),{
            name,
            email,
            password,
            cpf,
            telefone
        });

        return response.json(usuario);
    }
}

export const updateUserByIdController = new UpdateUserByIdController();