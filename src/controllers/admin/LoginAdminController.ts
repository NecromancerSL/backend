import { Request, Response } from 'express';
import { LoginAdminService } from '../../services/admin/LoginAdminService';
import { generateAdminToken } from '../../utils/AuthAdminToken'; // Importe a função de geração de token

class LoginAdminController {
  async login(request: Request, response: Response) {
    const loginAdmin = new LoginAdminService();
    const { email, password } = request.body;

    try {
      const admin = await loginAdmin.execute({ email, password });

      if (!admin) {
        return response.status(401).json({ message: 'Credenciais inválidas' });
      }

      // Gere um token JWT após a autenticação bem-sucedida
      const token = generateAdminToken(admin.id);
      return response.json({
        token,
        id: admin.id, // Substitua por como você obtém o ID do usuário
        name: admin.name, // Substitua por como você obtém o nome do usuário
      });
      
    } catch (error) {
      return response.status(500).json(error);
    }
  }
}

export const loginAdminController = new LoginAdminController();
