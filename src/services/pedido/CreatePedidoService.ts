import { Pedido } from '../../models/Pedido';
import { Produto } from '../../models/Produto';
import { ItemPedido } from '../../models/ItemPedido';

export class CreatePedidoService {
  static async criarPedido(
    usuarioId: number,
    produtos: Array<{ produtoId: number; qntProduto: number }>,
    nomeUsuario: string,
    formaEntrega: string,
    formaPagamento: string
  ) {
    try {
      console.log('Recebida solicitação para criar um novo pedido.');
      console.log('Dados da solicitação:', { usuarioId, produtos, nomeUsuario, formaEntrega, formaPagamento });

      const pedido = await Pedido.create({
        usuarioId,
        qnt: 0,
        valorTotal: 0,
        nomeUsuario: nomeUsuario, // Defina o nome do usuário
        statusPedido: 'Em andamento',
        statusEntrega: 'Pendente',
        statusPagamento: 'Aguardando pagamento',
        tipoEntrega: formaEntrega, // Defina o tipo de entrega desejado
        tipoPagamento: formaPagamento, // Defina o tipo de pagamento desejado
      });

      console.log('Pedido criado com sucesso:', pedido);

      for (const { produtoId, qntProduto } of produtos) {
        const produto = await Produto.findByPk(produtoId);

        if (!produto) {
          console.error(`Produto com ID ${produtoId} não encontrado.`);
          throw new Error(`Produto com ID ${produtoId} não encontrado.`);
        }

        if (produto.qntEstoque < qntProduto) {
          console.error(`Quantidade desejada de ${produto.nome} indisponível.`);
          throw new Error(`Quantidade desejada de ${produto.nome} indisponível.`);
        }

        const valorTotal = produto.preco * qntProduto;
        const itemPedido = await ItemPedido.create({
          pedidoId: pedido.id,
          produtoId,
          qntProduto,
          valorTotal,
        });

        produto.qntEstoque -= qntProduto;
        await produto.save();

        pedido.qnt += qntProduto;
        pedido.valorTotal += valorTotal;
        await pedido.save();
      }

      return pedido;
    } catch (error) {
      console.error('Erro ao criar o pedido:', error);
      throw error;
    }
  }
}
