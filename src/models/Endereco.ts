import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

export interface EnderecoInterface extends Model {
    id: number;
    cep: string;
    rua: string;
    numero: number;
    complemento: string;
    bairro: string;
    cidade: string;
    estado: string;
    usuarioId: number; // Adicione uma coluna para armazenar o ID do usuário
}

export const Endereco = sequelize.define<EnderecoInterface>(
    'Address', {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
        },
        cep: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        rua: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        numero: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        complemento: {
            type: DataTypes.STRING(50),
        },
        bairro: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        cidade: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        estado: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        usuarioId: {
            type: DataTypes.INTEGER, // Coluna para a chave estrangeira (ID do usuário)
            allowNull: false,
        },
    }, {
        tableName: 'enderecos',
        timestamps: false,
    }
);


sequelize.sync();
