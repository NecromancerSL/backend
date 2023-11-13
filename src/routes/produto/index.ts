import { createProdutoController } from '../../controllers/produto/CreateProdutoController';
import { deleteProdutoController } from '../../controllers/produto/DeleteProdutoController';
import { getAllProdutosController } from '../../controllers/produto/GetAllProdutosController';
import { getProdutoByIdController } from '../../controllers/produto/GetProdutoByIdController';
import { updateProdutoController } from '../../controllers/produto/UpdateProdutoController';
import { getProdutoByNameController } from '../../controllers/produto/GetProdutoByNameController';
import { listProdutoByNameController } from '../../controllers/produto/ListProdutoByNameController';
import { Router } from 'express';
import bodyParser from 'body-parser';

const produtoRoutes = Router();

produtoRoutes.use(bodyParser.json());

produtoRoutes.post('/criarproduto', createProdutoController.handle);
produtoRoutes.get('/listarprodutos', getAllProdutosController.handle);
produtoRoutes.post('/atualizarproduto/:id', updateProdutoController.handle);
produtoRoutes.get('/listarproduto/:id', getProdutoByIdController.handle);
produtoRoutes.delete('/deletarproduto/:id', deleteProdutoController.handle);
produtoRoutes.get('/pesquisarprodutos/:nome', getProdutoByNameController.handle);
produtoRoutes.get('/listarprodutos/:nome', listProdutoByNameController.handle);


export default produtoRoutes;
