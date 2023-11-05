import { Request, Response } from 'express';
import { ChangePasswordService } from '../../services/usuario/UpdatePasswordService';
import { IUsuarioUpdateData } from '../../interfaces/IUsuario';

class ChangePasswordController {
  async handle(req: Request, res: Response) {
    try {
      const { id, currentPassword, newPassword } = req.body as IUsuarioUpdateData;

      const changePasswordService = new ChangePasswordService();
      const updatedUser = await changePasswordService.execute({ id, currentPassword, newPassword });

      return res.status(200).json({ message: 'Senha alterada com sucesso', user: updatedUser });
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export const updatePasswordController = new ChangePasswordController();
