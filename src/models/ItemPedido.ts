import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';
import { Pedido } from './Pedido';
import { Produto } from './Produto';

export interface ItemPedidoInterface extends Model {
    id: number;
    qntProduto: number;
    valorTotal: number;
}

export const ItemPedido = sequelize.define<ItemPedidoInterface>(
    'ItemPedido', {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
        },
        qntProduto: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        valorTotal: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    }, {
        tableName: 'itensPedidos',
        timestamps: false,
    }
);


sequelize.sync();

