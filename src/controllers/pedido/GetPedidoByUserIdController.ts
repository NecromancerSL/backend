import { Request, Response } from "express";
import { GetUserPedidosService } from "../../services/pedido/GetPedidoByUserIdService";

class GetPedidoByUserIdController {
  async handle(request: Request, response: Response) {
    try {
      const { usuarioId } = request.params; // Assumindo que o ID do usuário está nos parâmetros da requisição

      const getUserPedidosService = new GetUserPedidosService();
      const pedidos = await getUserPedidosService.getUserPedidos(usuarioId);

      return response.json(pedidos);
    } catch (error) {
      console.error('Erro ao obter os pedidos do usuário:', error);
      return response.status(500).json({ error: 'Erro ao processar a requisição' });
    }
  }
}

export const getPedidoByUserIdController = new GetPedidoByUserIdController();
