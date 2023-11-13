import { Request, Response } from 'express';
import { ListProdutoByNameService } from '../../services/produto/ListProdutoByNameService';

class ListProdutoByNameController {
  async handle(request: Request, response: Response) {
    try {
      const { nome } = request.params;

      const listProdutoByNameService = new ListProdutoByNameService();

      const produtos = await listProdutoByNameService.execute(nome);

      if (produtos.length === 0) {
        return response.status(404).json({ error: 'No products found with the provided name.' });
      }

      return response.json(produtos);
    } catch (error) {
      console.error('Error listing products by name:', error);
      return response.status(500).json({ error: 'Internal server error.' });
    }
  }
}

export const listProdutoByNameController = new ListProdutoByNameController();
