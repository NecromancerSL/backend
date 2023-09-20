import { UpdateProdutoService } from "../../services/produto/UpdateProdutoService";
import { Request, Response } from "express";

class UpdateProdutoController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const { nome, preco, descricao, imagem, categoria, qntEstoque } = request.body;

        const updateProdutoService = new UpdateProdutoService(); 

        const produto = await updateProdutoService.execute(Number(id),{
            nome,
            preco,
            descricao,
            categoria,
            imagem,
            qntEstoque
        });

        return response.json(produto);
    }
}

export const updateProdutoController = new UpdateProdutoController(); 
