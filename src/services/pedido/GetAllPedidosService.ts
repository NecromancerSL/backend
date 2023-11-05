import { Pedido } from '../../models/Pedido';

export class GetAllPedidosService {
  async getAllPedidosService() {
    try {
      console.log('Solicitando todos os pedidos.');

      // Consulta o banco de dados para obter todos os pedidos
      const pedidos = await Pedido.findAll();

      console.log('Pedidos recuperados com sucesso:', pedidos);

      return pedidos;
    } catch (error) {
      console.error('Erro ao obter os pedidos:', error);
      throw error;
    }
  }
}
