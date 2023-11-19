// src/controllers/produto/SearchProdutoByNameController.ts
import { Request, Response } from 'express';
import { SearchProdutoByNameService } from '../../services/produto/SearchProdutoByNameService';

class SearchProdutoByNameController {
  async handle(request: Request, response: Response) {
    try {
      const { nome } = request.params;

      const searchProdutoByNameService = new SearchProdutoByNameService();

      const produtos = await searchProdutoByNameService.execute(nome);

      if (produtos.length === 0) {
        return response.status(404).json({ error: 'No products found with the provided name.' });
      }

      return response.json(produtos);
    } catch (error) {
      console.error('Error searching products by name:', error);
      return response.status(500).json({ error: 'Internal server error.' });
    }
  }
}

export const searchProdutoByNameController = new SearchProdutoByNameController();
