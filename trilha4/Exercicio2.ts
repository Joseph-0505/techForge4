interface Documento {
  titulo: string;
  conteudo: string;
}

class Texto implements Documento {
  constructor(public titulo: string, public conteudo: string) {}

  exibir(): string {
    return `Título: ${this.titulo}, Conteúdo: ${this.conteudo}`;
  }
}

const doc = new Texto("Aviso", "A reunião será amanhã.");
console.log(doc.exibir());
