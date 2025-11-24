abstract class Inventory {
  protected items: Record<string, number> = {};

  abstract addItem(item: string, quantity: number): void;
  abstract removeItem(item: string): void;
  abstract getInventory(): Record<string, number>;
}

class WarehouseInventory extends Inventory {
  addItem(item: string, quantity: number): void {
    this.items[item] = (this.items[item] || 0) + quantity;
  }

  removeItem(item: string): void {
    delete this.items[item];
  }

  getInventory(): Record<string, number> {
    return this.items;
  }
}

class StoreInventory extends Inventory {
  addItem(item: string, quantity: number): void {
    const atual = this.items[item] || 0;
    const novoTotal = atual + quantity;

    this.items[item] = Math.min(novoTotal, 10);
  }

  removeItem(item: string): void {
    delete this.items[item];
  }

  getInventory(): Record<string, number> {
    return this.items;
  }
}

const store = new StoreInventory();
store.addItem("Mouse", 8);
store.addItem("Mouse", 5);

console.log(store.getInventory());
