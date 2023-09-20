import { loginUsuarioService } from "../../services/usuario/LoginUsuarioService";
import { Request, Response } from "express";

class LoginUsuarioController {
  async login(request: Request, response: Response) {
    const { email, password } = request.body;

    const loginUsuario= new loginUsuarioService();

    try {
      const user = await loginUsuario.execute({ email, password });

      if (!user) {
        return response.status(401).json({ message: 'Credenciais inválidas' });
      }

      // Autenticação bem-sucedida, aqui você pode gerar um token de autenticação, por exemplo
      // e retornar informações do usuário, se necessário
      return response.json({ message: 'Autenticação bem-sucedida', user });
    } catch (error) {
      return response.status(500).json(error);
    }
  }
}

export const loginUsuarioController = new LoginUsuarioController();