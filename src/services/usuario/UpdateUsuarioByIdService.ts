import { Usuario } from "../../models/Usuario";
import  { IUsuarioData } from "../../interfaces/IUsuario";

export class updateUsuarioById {
    async execute( id: number , { name, email, password, cpf, telefone }: IUsuarioData) {

        const usuario = await Usuario.findByPk(id);

        if (!usuario) {
            throw new Error("Usuario não encontrado");
        }

        try {

            const usuario = await Usuario.update(
                {
                    name,
                    email,
                    password,
                    cpf,
                    telefone,
                },
                {
                    where: { id },
                }
            );
            return usuario;

        } catch (error) {
            throw error;
        }
    }
}