import { Usuario } from '../../models/Usuario';
import { hash, compare } from 'bcryptjs';
import { IUsuarioUpdateData } from '../../interfaces/IUsuario';

export class ChangePasswordService {
  async execute({ id, currentPassword, newPassword }: IUsuarioUpdateData) {
    try {
      const user = await Usuario.findByPk(id)

      if (!user) {
        throw new Error('Usuário não encontrado');
      }

      const isPasswordValid = await compare(currentPassword, user.password);

      if (!isPasswordValid) {
        throw new Error('A senha atual está incorreta');
      }

      const hashedPassword = await hash(newPassword, 10);

      user.password = hashedPassword;
      await user.save();

      return user;
    } catch (error) {
      throw error;
    }
  }
}
