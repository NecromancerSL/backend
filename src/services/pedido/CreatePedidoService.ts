import { Pedido } from '../../models/Pedido';
import { Produto } from '../../models/Produto';
import { ItemPedido } from '../../models/ItemPedido';

export class CreatePedidoService {
  static async criarPedido(
    usuarioId: number, // ID do usuário que está fazendo o pedido
    produtos: Array<{ produtoId: number; qntProduto: number }>
  ) {
    // 1. Crie um novo pedido com os campos atualizados
    const pedido = await Pedido.create({
      usuarioId,
      qnt: 0,
      valorTotal: 0,
      statusPedido: 'Em andamento', // Inicialize o statusPedido
      statusEntrega: 'Pendente', // Inicialize o statusEntrega
      statusPagamento: 'Aguardando pagamento', // Inicialize o statusPagamento
    });

    // 2. Itere pelos produtos e crie itens de pedido
    for (const { produtoId, qntProduto } of produtos) {
      const produto = await Produto.findByPk(produtoId);
      if (!produto) {
        // Trate o cenário onde o produto não existe
        throw new Error(`Produto com ID ${produtoId} não encontrado.`);
      }

      if (produto.qntEstoque < qntProduto) {
        // Trate o cenário onde a quantidade desejada é maior do que o estoque
        throw new Error(`Quantidade desejada de ${produto.nome} indisponível.`);
      }

      // Crie um novo item de pedido
      const valorTotal = produto.preco * qntProduto;
      const itemPedido = await ItemPedido.create({
        pedidoId: pedido.id,
        produtoId,
        qntProduto,
        valorTotal,
      });

      // Atualize o estoque do produto
      produto.qntEstoque -= qntProduto;
      await produto.save();

      // Atualize as informações do pedido
      pedido.qnt += qntProduto;
      pedido.valorTotal += valorTotal;
      await pedido.save();
    }

    return pedido;
  }
}
