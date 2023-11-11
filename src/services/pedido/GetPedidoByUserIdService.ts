import { Pedido } from '../../models/Pedido';

export class GetUserPedidosService {
  async getUserPedidos(usuarioId: string) {
    try {
      console.log(`Solicitando pedidos para o usuário com ID ${usuarioId}.`);

      // Consulta o banco de dados para obter todos os pedidos do usuário específico
      const pedidos = await Pedido.findAll({
        where: {
          usuarioId: usuarioId
        }
      });

      console.log(`Pedidos do usuário com ID ${usuarioId} recuperados com sucesso:`, pedidos);

      return pedidos;
    } catch (error) {
      console.error(`Erro ao obter os pedidos do usuário com ID ${usuarioId}:`, error);
      throw error;
    }
  }
}
