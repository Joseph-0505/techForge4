interface Livro {
  titulo: string;
  autor: string;
  disponivel: boolean;
}

class Biblioteca {
  private livros: Livro[] = [];

  adicionarLivro(livro: Livro): void {
    this.livros.push(livro);
  }

  buscarLivrosDisponiveis(): Livro[] {
    return this.livros.filter((livro) => livro.disponivel === true);
  }
}

const biblioteca = new Biblioteca();
biblioteca.adicionarLivro({ titulo: "A", autor: "Autor1", disponivel: true });
biblioteca.adicionarLivro({ titulo: "B", autor: "Autor2", disponivel: false });

console.log(biblioteca.buscarLivrosDisponiveis());
