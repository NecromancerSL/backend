import { CreateProdutoService } from "../../services/produto/CreateProdutoService";
import { Request, Response } from "express";

class CreateProdutoController {
    async handle(request: Request, response: Response) {
        const { nome, preco, descricao, imagem, categoria, qntEstoque } = request.body;

        const createProduto = new CreateProdutoService();

        const produto = await createProduto.execute({ nome, preco, descricao, imagem, categoria, qntEstoque });

        return response.json(produto);
    }
}

export const createProdutoController = new CreateProdutoController();