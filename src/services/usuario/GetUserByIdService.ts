import { Usuario } from '../../models/Usuario';

export class GetUserByIdService {
    async execute(id: number) {
        const usuario = await Usuario.findByPk(id);

        if (!usuario) {
            throw new Error('Usuário não encontrado');
        }

        return usuario;
    }
}