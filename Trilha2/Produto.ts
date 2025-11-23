class Produto {
  constructor(
    public nome: string,
    public preco: number,
    public quantidade: number
  ) {}

  valorTotalEmEstoque(): number {
    return this.preco * this.quantidade;
  }
}
