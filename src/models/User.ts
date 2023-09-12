import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';
import { Adress } from './Adress';
import { Pedido } from './Pedido';
import { Produto } from './Produto';
import { ItemPedido } from './ItemPedido';

export interface UserInterface extends Model {
    id: number;
    name: string;
    email: string;
    password: string;
    cpf: string;
    telefone: string;
}

export const User = sequelize.define<UserInterface>(
    'User', {
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
        },
        cpf: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        telefone: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
    }, {
        tableName: 'users',
        timestamps: false,
    }
);

User.hasMany(Adress, { foreignKey: 'userId' });
Adress.hasMany(User, { foreignKey: 'adressId' });

User.hasMany(Pedido, { foreignKey: 'userId' });
Pedido.belongsTo(User, { foreignKey: 'userId' });

Pedido.hasMany(ItemPedido, { foreignKey: 'pedidoId' });
Produto.hasMany(ItemPedido, { foreignKey: 'produtoId' });
ItemPedido.belongsTo(Pedido, { foreignKey: 'pedidoId' });
ItemPedido.belongsTo(Produto, { foreignKey: 'produtoId' });



sequelize.sync();
