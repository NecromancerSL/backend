import { Request, Response } from 'express';
import { CancelarPedidoService } from '../../services/pedido/CancelPedidoService';

export class CancelarPedidoController {
  
  async handle(req: Request, res: Response) {
    const pedidoId = req.params.pedidoId;

    try {
      const cancelarPedidoService = new CancelarPedidoService(); // Criar uma instância do serviço aqui

      const sucesso = await cancelarPedidoService.cancelarPedido(pedidoId);

      if (sucesso) {
        res.status(200).json({ mensagem: `Pedido com ID ${pedidoId} cancelado com sucesso.` });
      } else {
        res.status(400).json({ mensagem: `Pedido com ID ${pedidoId} não pode ser cancelado.` });
      }
    } catch (error) {
      console.error('Erro ao cancelar o pedido:', error);
      res.status(500).json({ mensagem: 'Erro interno ao cancelar o pedido.' });
    }
  }
}

export const cancelarPedidoController = new CancelarPedidoController();
