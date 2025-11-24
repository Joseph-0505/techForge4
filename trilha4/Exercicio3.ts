interface ProdutoLoja {
  codigo: number;
  nome: string;
}

class Loja {
  private produtos: ProdutoLoja[] = [];

  adicionarProduto(produto: ProdutoLoja): void {
    this.produtos.push(produto);
  }

  buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined {
    return this.produtos.find((p) => p.codigo === codigo);
  }
}

const loja = new Loja();
loja.adicionarProduto({ codigo: 1, nome: "Teclado" });
loja.adicionarProduto({ codigo: 2, nome: "Monitor" });

console.log(loja.buscarProdutoPorCodigo(2));
console.log(loja.buscarProdutoPorCodigo(99));
