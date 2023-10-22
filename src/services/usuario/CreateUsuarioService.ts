import { Usuario } from "../../models/Usuario";
import { IUsuarioData } from "../../interfaces/IUsuario";
import { hash } from "bcryptjs";

export class CreateUsuarioService {
    async execute({ name, email, password, cpf, telefone }: IUsuarioData) {
        try {

            if(!email) {
              throw new Error("Email incorreto")
            }

            const usuarioExistente = await Usuario.findOne({
              where: {
                email: email,
              },
            })

            if(usuarioExistente) {
              throw new Error("Usuário já existe")
            }

            const hashedPassword = await hash(password, 10);

            const usuario = await Usuario.create({
              data: {
                name,
                email,
                password: hashedPassword,
                cpf,
                telefone,
              },
              select: {
                id: true,
                name: true,
                email: true,
                cpf: true,
                telefone: true,
              }
             
            });

            return usuario;

          } catch (error) {
                throw error;
          }
    }
}
