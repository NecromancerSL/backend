import { Pedido } from '../../models/Pedido';
import { Produto } from '../../models/Produto';
import { ItemPedido } from '../../models/ItemPedido';
import { IItemPedido } from '../../interfaces/IItemPedido';

class AdicionarProdutoAoPedidoService {
  async execute({ pedidoId, produtoId, quantidade }: IItemPedido) {
    try {
      // Verifique se o pedido e o produto existem
      let pedido = await Pedido.findByPk(pedidoId);
      const produto = await Produto.findByPk(produtoId);

      if (!produto) {
        throw new Error('Produto não encontrado');
      }

      // Se não houver um pedido existente, crie um novo pedido
      if (!pedido) {
        pedido = await Pedido.create({
          qnt: 0, // Inicialmente, o pedido não contém itens
          valorTotal: 0, // Inicialmente, o valor total é zero
          status: 'Em andamento', // Defina o status apropriado
        });
      }

      // Verifique se há estoque suficiente do produto
      if (produto.qntEstoque < quantidade) {
        throw new Error('Quantidade solicitada excede o estoque disponível');
      }

      // Calcule o valor total do item do pedido
      const valorTotalItem = produto.preco * quantidade;

      // Crie o item do pedido
      const itemPedido = await ItemPedido.create({
        qntProduto: quantidade,
        valorTotal: valorTotalItem,
        pedidoId: pedido.id, // Associe o item ao pedido
        produtoId: produto.id, // Associe o item ao produto
      });

      // Atualize o estoque do produto
      produto.qntEstoque -= quantidade;
      await produto.save();

      // Atualize o valor total do pedido
      pedido.valorTotal += valorTotalItem;
      pedido.qnt += 1; // Atualize a quantidade de itens no pedido
      await pedido.save();

      return itemPedido;
    } catch (error) {
      throw error;
    }
  }
}

export default AdicionarProdutoAoPedidoService;
