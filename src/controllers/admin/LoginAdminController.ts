import { LoginAdminService } from "../../services/admin/LoginAdminService";
import { Request, Response } from "express";

class LoginAdminController {
    async login(request: Request, response: Response){

        const loginAdmin = new LoginAdminService();

        const { email, password } = request.body;

        try{
            const admin = await loginAdmin.execute({ email, password });

            if(!admin){
                return response.status(401).json({ message: 'Credenciais inválidas' });
            }

            return response.json({ message: 'Autenticação bem-sucedida', admin });

        }catch(error){
            return response.status(500).json(error);
        }
    }
}

export const loginAdminController = new LoginAdminController();