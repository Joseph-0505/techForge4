interface Produto {
  id: number;
  nome: string;
  preco: number;
}

class ItemLoja implements Produto {
  constructor(public id: number, public nome: string, public preco: number) {}
}

const item1 = new ItemLoja(1, "Mouse Gamer", 89.9);
console.log(item1);
