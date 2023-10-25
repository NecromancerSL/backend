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

      return response.json({ message: 'Autenticação bem-sucedida', token });
    } catch (error) {
      return response.status(500).json(error);
    }
  }
}

export const loginAdminController = new LoginAdminController();
