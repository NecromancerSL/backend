import { Request, Response } from 'express';
import { CreatePedidoService } from '../../services/pedido/CreatePedidoService';

class CreatePedidoController {
  async handle(req: Request, res: Response) {
    try {
      const { usuarioId, produtos, nomeUsuario, formaPagamento, formaEntrega } = req.body;

      if (!usuarioId || !produtos || !Array.isArray(produtos) || produtos.length === 0 || !formaPagamento || !formaEntrega) {
        return res.status(400).json({ error: 'Parâmetros inválidos.' });
      }

      const pedido = await CreatePedidoService.criarPedido(usuarioId, produtos, nomeUsuario, formaEntrega, formaPagamento);

      return res.status(201).json(pedido);
    } catch (error: any) {
      return res.status(500).json({ error: 'Erro ao criar o pedido.', message: error.message });
    }
  }
}

export const createPedidoController = new CreatePedidoController();
