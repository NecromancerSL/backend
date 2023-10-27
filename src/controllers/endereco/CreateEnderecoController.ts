import { CreateEnderecoService } from "../../services/endereco/CreateEnderecoService";
import { Request, Response } from "express";

class CreateEnderecoController {
    async handle(request: Request, response: Response) {
        const { cep, rua, numero, complemento, bairro, cidade, estado, userId } = request.body;

        const createEndereco = new CreateEnderecoService();

        const endereco = await createEndereco.execute({ cep, rua, numero, complemento, bairro, cidade, estado, userId });

        return response.json(endereco);
    }
}

export const createEnderecoController = new CreateEnderecoController();
