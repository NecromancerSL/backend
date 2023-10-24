import { createUserService } from "../../services/usuario/CreateUsuarioService";
import { Request, Response } from "express";

class CreateUserController {
    async handle(request: Request, response: Response) {
        const { name, email, password, cpf, telefone } = request.body;

        const createUser = new createUserService();

        const admin = await createUser.execute({ name, email, password, cpf, telefone });

        return response.json(admin);
    }
}

export const createUserController = new CreateUserController();