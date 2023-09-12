import { Model, DataTypes} from 'sequelize';
import { sequelize } from '../config/database';
import { Produto } from './Produto';
import { User } from './User';
import { ItemPedido } from './ItemPedido';

export interface PedidoInterface extends Model{
    id: number;
    qnt: number;
    valorTotal: number;
    status: string;
    userId: number;
}

export const Pedido = sequelize.define<PedidoInterface>(
    'Pedido', {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
        },
        qnt: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        valorTotal: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id',
            },
        },
    }, {
        tableName: 'pedidos',
        timestamps: false,
    }
);


sequelize.sync();
