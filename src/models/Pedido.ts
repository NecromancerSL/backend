import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

export interface PedidoInterface extends Model {
    id: number;
    qnt: number;
    valorTotal: number;
    statusPedido: string;
    statusEntrega: string; // Manter o campo statusEntrega
    statusPagamento: string; // Manter o campo statusPagamento
    tipoEntrega: string; // Novo campo tipoEntrega
    tipoPagamento: string; // Novo campo tipoPagamento
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
            defaultValue: 'Em andamento',
        },
        statusEntrega: { 
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        statusPagamento: { 
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        tipoEntrega: { 
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        tipoPagamento: { 
            type: DataTypes.STRING(50),
            allowNull: false,
        },
    }, {
        tableName: 'pedidos',
        timestamps: false,
    }
);

sequelize.sync();
