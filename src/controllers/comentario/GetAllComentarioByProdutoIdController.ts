import { Request, Response } from 'express';
import { GetAllComentarioByProdutoIdService } from '../../services/comentario/GetAllComentarioByProdutoIdService'; // Substitua pelo caminho correto

export class ComentarioController {
  async handle(req: Request, res: Response) {
    try {
      const { produto_id } = req.params; // Assumindo que o produto_id é um parâmetro da rota
      const produtoId = parseInt(produto_id, 10); // Convertemos para número

      const service = new GetAllComentarioByProdutoIdService();
      const comentarios = await service.execute(produtoId);

      return res.json(comentarios);
    } catch (error) {
      return res.status(500).json({ error: 'Ocorreu um erro ao buscar os comentários.' });
    }
  }
}

export const getAllComentarioByProdutoIdController = new ComentarioController();