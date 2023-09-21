import { Usuario } from '../../models/Usuario';
import { IUsuarioData } from '../../interfaces/IUsuario';

export class DeleteUsuarioService {
  async execute(id: number) {
    try {
      const usuario = await Usuario.destroy({
        where: { id },
      });
      return usuario;
      console.log("Usuario deletado com sucesso");
    } catch (error) {
      throw error;
    }
  }
}
