import {Model, DataTypes} from 'sequelize';
import {sequelize} from '../config/database';

export interface AdminInterface extends Model{
    id: number;
    name: string;
    email: string;
    password: string;
}

export const Admin = sequelize.define<AdminInterface>(
    'Admin', {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(50),
            unique: true,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(50),
            allowNull: false,
        }
        }, {
            tableName: 'admins',
            timestamps: false,
        }
);

sequelize.sync();