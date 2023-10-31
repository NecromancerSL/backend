import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

export interface PedidoInterface extends Model {
    id: number;
    qnt: number;
    valorTotal: number;
    statusPedido: string; // Alteração do nome do campo
    statusEntrega: string; // Novo campo
    statusPagamento: string; // Novo campo
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
        statusPedido: { 
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        statusEntrega: { 
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        statusPagamento: { 
            type: DataTypes.STRING(50),
            allowNull: false,
        },
    }, {
        tableName: 'pedidos',
        timestamps: false,
    }
);

sequelize.sync();

