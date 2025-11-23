abstract class Funcionario {
  constructor(private nome: string, private salario: number) {}

  getSalario(): number {
    return this.salario;
  }

  getNome(): string {
    return this.nome;
  }

  abstract calcularBonus(): number;
}

class Gerente extends Funcionario {
  calcularBonus(): number {
    return this.getSalario() * 0.1;
  }
}

class Operario extends Funcionario {
  calcularBonus(): number {
    return this.getSalario() * 0.05;
  }
}

function calcularSalarioComBonus(funcionarios: Funcionario[]) {
  funcionarios.forEach((func) => {
    const total = func.getSalario() + func.calcularBonus();
    console.log(`${func.getNome()} → Salário final: R$ ${total}`);
  });
}

calcularSalarioComBonus([
  new Gerente("Carlos", 5000),
  new Operario("João", 3000),
]);
