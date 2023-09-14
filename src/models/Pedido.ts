import { Model, DataTypes} from 'sequelize';
import { sequelize } from '../config/database';


export interface PedidoInterface extends Model{
    id: number;
    qnt: number;
    valorTotal: number;
    status: string;
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
    }, {
        tableName: 'pedidos',
        timestamps: false,
    }
);


sequelize.sync();
