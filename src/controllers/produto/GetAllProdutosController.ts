import { GetAllProdutosService } from "../../services/produto/GetAllProdutosService";
import { Request, Response } from "express";

class GetAllProdutosController {
    async handle(request: Request, response: Response) {
        const getAllProdutos = new GetAllProdutosService();

        const produtos = await getAllProdutos.execute();

        return response.json(produtos);
    }
}

export const getAllProdutosController = new GetAllProdutosController();