import { Pedido } from '../../models/Pedido';
import { IPedidoData } from '../../interfaces/IPedido';

export class UpdatePedidoService {
  async execute(id: number, { statusPedido, statusEntrega, statusPagamento }: IPedidoData) {
    try {
      const pedido = await Pedido.findByPk(id);

      if (!pedido) {
        throw new Error('Pedido não encontrado');
      }

      const pedidoAtualizado = await pedido.update({
        statusPedido,
        statusEntrega,
        statusPagamento,
      });

      return pedidoAtualizado;
    } catch (error) {
      throw new Error('Erro ao atualizar o pedido');
    }
  }
}
