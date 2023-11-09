import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';
import { Endereco } from './Endereco';
import { Pedido } from './Pedido';
import { Produto } from './Produto';
import { ItemPedido } from './ItemPedido';
import { Comentario } from './Comentario';

export interface UsuarioInterface extends Model {
    id: number;
    name: string;
    email: string;
    password: string;
    cpf: string;
    telefone: string;
}

export const Usuario = sequelize.define<UsuarioInterface>(
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
            type: DataTypes.STRING(1000),
            allowNull: false,
        },
        cpf: {
            type: DataTypes.STRING(14),
            allowNull: false,
        },
        telefone: {
            type: DataTypes.STRING(15),
            allowNull: false,
        },
    }, {
        tableName: 'usuarios',
        timestamps: false,
    }
);

Endereco.belongsTo(Usuario, { foreignKey: 'usuarioId' });
Usuario.hasMany(Endereco, { foreignKey: 'usuarioId' }); 

Usuario.hasMany(Pedido, { foreignKey: 'usuarioId' });
Pedido.belongsTo(Usuario, { foreignKey: 'usuarioId' });

Produto.hasMany(ItemPedido, { foreignKey: 'produtoId' });
ItemPedido.belongsTo(Produto, { foreignKey: 'produtoId' });

Pedido.hasMany(ItemPedido, { foreignKey: 'pedidoId' });
ItemPedido.belongsTo(Pedido, { foreignKey: 'pedidoId' });

Produto.hasMany(Comentario, { foreignKey: 'produtoId' });
Comentario.belongsTo(Produto, { foreignKey: 'produtoId' });

Usuario.hasMany(Comentario, { foreignKey: 'usuarioId' });
Comentario.belongsTo(Usuario, { foreignKey: 'usuarioId' });

sequelize.sync();
