import { Pedido } from '../../models/Pedido';

export class CancelarPedidoService {
  async cancelarPedido(pedidoId: string) {
    try {
      console.log(`Cancelando pedido com ID ${pedidoId}.`);

      // Consulta o banco de dados para obter o pedido específico
      const pedido = await Pedido.findByPk(pedidoId);

      if (!pedido) {
        throw new Error(`Pedido com ID ${pedidoId} não encontrado.`);
      }

      // Verifica se o pedido já está como entregue ou concluído
      if (pedido.statusEntrega === 'entregue' || pedido.statusPedido === 'concluido') {
        console.log(`Pedido com ID ${pedidoId} não pode ser cancelado porque já está entregue ou concluído.`);
        return false; // Ou você pode lançar uma exceção informando que o pedido não pode ser cancelado.
      }

      // Atualiza o estado do pedido para cancelado
      await pedido.update({ statusPedido: 'Cancelado' });

      console.log(`Pedido com ID ${pedidoId} cancelado com sucesso.`);

      return true; // Ou você pode retornar o pedido atualizado se necessário.
    } catch (error) {
      console.error(`Erro ao cancelar o pedido com ID ${pedidoId}:`, error);
      throw error;
    }
  }
}
