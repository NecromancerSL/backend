import { deleteProductService } from "../../services/produto/DeleteProdutoService";
import { Request, Response } from "express";

class DeleteProdutoController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const deleteProduto = new deleteProductService();

        await deleteProduto.execute(Number(id));

        return response.json({ message: "Produto deletado com sucesso!" });
    }
}

export const deleteProdutoController = new DeleteProdutoController();