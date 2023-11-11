import { Request, Response } from "express";
import { UpdatePedidoService } from "../../services/pedido/UpdatePedidoService";

class UpdatePedidoController {
    async handle(request: Request, response: Response) {
        const { pedidoId } = request.params;
        const id = Number(pedidoId);
        const { statusPedido, statusEntrega, statusPagamento } = request.body;

        const updatePedidoService = new UpdatePedidoService(); 

        const pedido = await updatePedidoService.execute((id),{
            statusPedido,
            statusEntrega,
            statusPagamento
        });

        return response.json(pedido);
    }
}

export const updatePedidoController = new UpdatePedidoController();