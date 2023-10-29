import { DeleteEnderecoService } from "../../services/endereco/DeleteEnderecoByIdService";
import { Request, Response } from "express";

class DeleteEnderecoController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const deleteEndereco= new DeleteEnderecoService();

        await deleteEndereco.execute(Number(id));

        return response.json({ message: "Produto deletado com sucesso!" });
    }
}

export const deleteEnderecoController = new DeleteEnderecoController();