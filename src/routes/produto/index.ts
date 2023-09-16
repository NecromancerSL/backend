import * as ProdutoController from '../../controllers/produtoController';
import { Router } from 'express';
import bodyParser from 'body-parser';


const produtoRoutes = Router();

produtoRoutes.use(bodyParser.json());

produtoRoutes.post('/criarproduto', ProdutoController.cadastrarProduto);

export default produtoRoutes;