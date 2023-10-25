import { Request, Response } from 'express';
import { LoginUsuarioService } from '../../services/usuario/LoginUsuarioService';
import { generateUserToken } from '../../utils/AuthUserToken'; // Importe a função de geração de token

class LoginUsuarioController {
  async login(request: Request, response: Response) {
    const { email, password } = request.body;
    const loginUsuario = new LoginUsuarioService();

    try {
      const user = await loginUsuario.execute({ email, password });

      if (!user) {
        return response.status(401).json({ message: 'Credenciais inválidas' });
      }

      // Gere um token JWT após a autenticação bem-sucedida
      const token = generateUserToken(user.id);
      return response.json({
        token,
        id: user.id, // Substitua por como você obtém o ID do usuário
        name: user.name, // Substitua por como você obtém o nome do usuário
      });

    } catch (error) {
      return response.status(500).json(error);
    }
  }
}

export const loginUsuarioController = new LoginUsuarioController();
