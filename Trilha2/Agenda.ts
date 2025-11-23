class Agenda {
  private compromissos: string[] = [];

  adicionarCompromisso(texto: string): void {
    this.compromissos.push(texto);
  }

  listarCompromissos(): string[] {
    return this.compromissos;
  }
}
