import { Request, Response } from "express";
import { FindUserByNameService } from "../../services/usuario/FindUserByNameService";

class FindUserByNameController {
  async handle(request: Request, response: Response) {
    const { name } = request.params;

    const findUserByNameService = new FindUserByNameService();

    const user = await findUserByNameService.execute(name);

    return response.json(user);
  }
}

export const findUserByNameController = new FindUserByNameController();