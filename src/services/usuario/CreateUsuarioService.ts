import { Usuario } from "../../models/Usuario";
import { IUsuarioData } from "../../interfaces/IUsuario";
import bcrypt from "bcryptjs";

export class CreateUsuarioService {
    async execute({ name, email, password, cpf, telefone }: IUsuarioData) {
        try {

            const hashedPassword = await bcrypt.hash(password, 10);
            const usuario = await Usuario.create({
              name,
              email,
              password: hashedPassword,
              cpf,
              telefone,
            });

            return usuario;

          } catch (error) {
                throw error;
          }
    }
}
