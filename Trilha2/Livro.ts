class Livro {
  constructor(
    public titulo: string,
    public autor: string,
    public paginas: number,
    public lido: boolean = false
  ) {}

  marcarComoLido(): void {
    this.lido = true;
  }
}
