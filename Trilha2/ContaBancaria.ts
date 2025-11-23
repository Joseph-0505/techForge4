class ContaBancaria {
  constructor(public titular: string, public saldo: number = 0) {}

  depositar(valor: number): void {
    if (valor <= 0) {
      console.log("Valor de depósito inválido");
      return;
    }
    this.saldo += valor;
  }
  sacar(valor: number): void {
    if (valor <= 0) {
      console.log("Valor de saque inválido");
      return;
    }
    if (valor > this.saldo) {
      console.log("Saldo insuficiente");
      return;
    }
    this.saldo -= valor;
  }
}
