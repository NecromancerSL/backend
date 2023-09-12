import * as ProdutoController from '../../controller/produto/create';
import { Router } from 'express';

const produtoRoutes = Router();

produtoRoutes.post('/criarproduto', ProdutoController.create);

export default produtoRoutes;