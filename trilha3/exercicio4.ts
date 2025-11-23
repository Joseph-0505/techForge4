class Animal {
  private energia: number = 50;

  protected alterarEnergia(valor: number) {
    this.energia += valor;
  }

  comer(): void {
    this.alterarEnergia(+10);
  }

  statusEnergia(): void {
    console.log(`Energia atual: ${this.energia}`);
  }
}

class Leao extends Animal {
  comer(): void {
    console.log("O leão está caçando...");
    this.alterarEnergia(-20);
    super.comer();
  }
}

class Passaro extends Animal {
  comer(): void {
    console.log("O pássaro está se alimentando...");
    super.comer();
  }
}

function alimentarAnimais(animais: Animal[]) {
  animais.forEach((animal) => {
    animal.comer();
    animal.statusEnergia();
  });
}

alimentarAnimais([new Leao(), new Passaro()]);
