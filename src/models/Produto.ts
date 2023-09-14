import { Model, DataTypes } from 'sequelize';   
import { sequelize } from '../config/database';

export interface ProdutoInterface extends Model {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    imagem: string;
    qntEstoque: number;
}

export const Produto = sequelize.define<ProdutoInterface>(
    'Produto', {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
        },
        nome: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        descricao: {
            type: DataTypes.STRING(300),
            allowNull: false,
        },
        preco: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        imagem: {
            type: DataTypes.STRING(300),
            allowNull: false,
        },
        qntEstoque: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        tableName: 'produtos',
        timestamps: false,
    }
);

sequelize.sync();