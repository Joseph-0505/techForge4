interface LivroBiblioteca {
  titulo: string;
  autor: string;
  genero: string;
  disponivel: boolean;
}

class BibliotecaGestao {
  private livros: LivroBiblioteca[] = [];

  adicionarLivro(livro: LivroBiblioteca): void {
    this.livros.push(livro);
  }

  filtrarPorGenero(genero: string): LivroBiblioteca[] {
    return this.livros.filter((livro) => livro.genero === genero);
  }

  buscarPorAutor(autor: string): LivroBiblioteca[] {
    return this.livros.filter((livro) => livro.autor === autor);
  }

  obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] {
    return this.livros
      .filter((livro) => livro.disponivel)
      .sort((a, b) => a.titulo.localeCompare(b.titulo));
  }
}

const gestao = new BibliotecaGestao();

gestao.adicionarLivro({
  titulo: "Zeta",
  autor: "Ana",
  genero: "Ficção",
  disponivel: true,
});
gestao.adicionarLivro({
  titulo: "Alfa",
  autor: "Ana",
  genero: "Ficção",
  disponivel: true,
});
gestao.adicionarLivro({
  titulo: "Python",
  autor: "Carlos",
  genero: "Educação",
  disponivel: false,
});

console.log(gestao.filtrarPorGenero("Ficção"));
console.log(gestao.buscarPorAutor("Ana"));
console.log(gestao.obterLivrosDisponiveisOrdenados());
