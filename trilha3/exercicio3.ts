class Pagamento {
  processar(): void {
    console.log("Processando pagamento...");
  }
}

class PagamentoCartao extends Pagamento {
  constructor(public numeroCartao: string) {
    super();
  }

  processar(): void {
    if (this.numeroCartao.length !== 16) {
      console.log("Número do cartão inválido!");
      return;
    }
    console.log("Pagamento no cartão aprovado!");
  }
}

class PagamentoBoleto extends Pagamento {
  processar(): void {
    const codigo = Math.floor(Math.random() * 99999999999);
    console.log("Boleto gerado! Código:", codigo);
  }
}

function processarPagamentos(pagamentos: Pagamento[]) {
  pagamentos.forEach((p) => p.processar());
}

processarPagamentos([
  new PagamentoCartao("1234567890123456"),
  new PagamentoBoleto(),
]);
