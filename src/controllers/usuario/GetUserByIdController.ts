import { GetUserByIdService } from "../../services/usuario/GetUserByIdService";
import { Request, Response } from "express";

class GetUserByIdController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const getUserById = new GetUserByIdService();

        const user = await getUserById.execute(Number(id));

        return response.json(user);
    }
}

export const getUserByIdController = new GetUserByIdController();