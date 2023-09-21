import bcrypt from 'bcryptjs';
import { Usuario } from '../../models/Usuario';
import { IUsuarioLoginData } from '../../interfaces/IUsuario';

export class LoginUsuarioService {
  async execute({ email, password }: IUsuarioLoginData) {
    try {
      // Encontre o usuário pelo email fornecido
      const usuario = await Usuario.findOne({
        where: {
          email,
        },
      });

      if (!usuario) {
        return null; // Usuário não encontrado
      }

      // Verifique a senha criptografada
      const passwordMatch = await bcrypt.compare(password, usuario.password);

      if (passwordMatch) {
        return usuario; // Senha correta, usuário está logado com sucesso
      } else {
        return null; // Senha incorreta
      }
    } catch (error) {
      throw error;
    }
  }
}

