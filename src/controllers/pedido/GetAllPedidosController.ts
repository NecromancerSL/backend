import { Request, Response } from "express";
import { GetAllPedidosService } from "../../services/pedido/GetAllPedidosService";

class GetAllPedidosController{
    async handle(request: Request, response: Response){
        const getAllPedidosService = new GetAllPedidosService();
        const pedidos = await getAllPedidosService.getAllPedidosService();
    
        return response.json(pedidos);
    }
}

export const getAllPedidosController = new GetAllPedidosController();