import { Model,  DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

export interface ComentarioInterface extends Model {
    id: number;
    nota: number;
    comentario: string;
    usuarioId: number;
    produtoId: number;
    usuarioNome: string;
}

export const Comentario = sequelize.define<ComentarioInterface>(
    'Comentario', {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
        },
        nota: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        comentario: {
            type: DataTypes.STRING(10000),
            allowNull: false,
        },
        usuarioId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        produtoId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        usuarioNome: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
    }, {
        tableName: 'comentarios',
    }
);

sequelize.sync();


