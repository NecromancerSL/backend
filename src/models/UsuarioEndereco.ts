import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

export interface UsuarioEnderecoInterface extends Model {
    id: number;
    apelidoendereco: string;
}

export const UsuarioEndereco = sequelize.define<UsuarioEnderecoInterface>(
    'UsuarioEndereco', {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
        },
        apelidoendereco: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
    }, {
        tableName: 'usuario_endereco',
        timestamps: false,
    }
);

sequelize.sync();

