import { Usuario } from "../../models/Usuario";
import  { IUsuarioData } from "../../interfaces/IUsuario";

export class UpdateUsuarioById {
    async execute( id: number , { name, email, cpf, telefone }: IUsuarioData) {

        const usuario = await Usuario.findByPk(id);

        if (!usuario) {
            throw new Error("Usuario não encontrado");
        }

        try {

            const usuario = await Usuario.update(
                {
                    name,
                    email,
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