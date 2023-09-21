import { createAdminService } from "../../services/admin/CreateAdminService";
import { Request, Response } from "express";

class CreateAdminController {
    async handle(request: Request, response: Response) {
        const { name, email, password } = request.body;

        const createAdmin = new createAdminService();

        const admin = await createAdmin.execute({ name, email, password });

        return response.json(admin);
    }
}

export const createAdminController = new CreateAdminController();