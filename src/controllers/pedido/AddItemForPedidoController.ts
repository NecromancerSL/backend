import { Request, Response } from 'express';
import  AdicionarProdutoAoPedidoService  from '../../services/pedido/AdiconarProdutoAoPedidoService';

class AdicionarProdutoAoPedidoController {
  async handle(request: Request, response: Response) {
    const { pedidoId, produtoId, quantidade } = request.body;

    const adicionarProdutoAoPedidoService = new AdicionarProdutoAoPedidoService();

    try {
      const itemPedido = await adicionarProdutoAoPedidoService.execute({
        pedidoId,
        produtoId,
        quantidade,
      });

      return response.json(itemPedido);
    } catch (error: any) { // Anotação de tipo explícita para 'error'
        throw error;
    }
  }
}

export const adicionarProdutoAoPedidoController = new AdicionarProdutoAoPedidoController();
