import { GetProductByIdService } from "../../services/produto/GetProdutoByIdService";
import { Request, Response } from "express";

class GetProdutoByIdController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const getProdutoById = new GetProductByIdService();

        const produto = await getProdutoById.execute(Number(id));

        return response.json(produto);
    }
}

export const getProdutoByIdController = new GetProdutoByIdController();