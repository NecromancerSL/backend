import { Usuario } from '../../models/Usuario';
import { IUsuarioData } from '../../interfaces/IUsuario';
import { hash } from 'bcryptjs';

export class createUserService {
    async execute({ name, email, password, cpf , telefone }: IUsuarioData) {
        try {

          if(!email) {
            throw new Error("Email incorreto")
          }

          const userExistente = await Usuario.findOne({
            where: {
              email: email,
            },
          })

          if(userExistente) {
            throw new Error("Usuário ja cadastrado")
          }


            const hashedPassword = await hash(password, 10);

            const user = await Usuario.create({
              name,
              email,
              password: hashedPassword,
              cpf,
              telefone
            });

            return user;

        }catch(error) {
            throw error;
          }
    }
}