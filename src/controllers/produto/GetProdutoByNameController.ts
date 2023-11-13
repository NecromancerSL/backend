import { Request, Response } from "express";
import { GetProdutoByNameService } from "../../services/produto/GetProdutoByNameService";

class GetProdutoByNameController {
  async handle(request: Request, response: Response) {
    const { nome } = request.params;

    const getProdutoByNameService = new GetProdutoByNameService();

    const produto = await getProdutoByNameService.execute(nome);

    return response.json(produto);
  }
}

export const getProdutoByNameController = new GetProdutoByNameController();