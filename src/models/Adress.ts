import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';
import { User } from './User';

export interface AdressInterface extends Model {
    id: number;
    cep: string;
    rua: string;
    numero: number;
    complemento: string;
    bairro: string;
    cidade: string;
    estado: string;
}

export const Adress = sequelize.define<AdressInterface>(
    'Adress', {
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

    }, {
        tableName: 'adresses',
        timestamps: false,
       }
);


sequelize.sync();