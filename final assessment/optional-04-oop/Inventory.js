import Item from './Item.js';


class Inventory {
  constructor() {
    this.items = []; 
  }

  
  addItem(item) {
    this.items.push(item);
    console.log(`Item "${item.name}" added to inventory.`);
  }

  removeItem(id) {
    const index = this.items.findIndex((item) => item.id === id);
    if (index !== -1) {
      const removedItem = this.items.splice(index, 1)[0];
      console.log(`Item "${removedItem.name}" removed from inventory.`);
    } else {
      console.log(`Item with ID "${id}" not found.`);
    }
  }


  updateItem(id, newName, newQuantity) {
    const item = this.items.find((item) => item.id === id);
    if (item) {
      item.name = newName;
      item.quantity = newQuantity;
      console.log(`Item "${id}" updated.`);
    } else {
      console.log(`Item with ID "${id}" not found.`);
    }
  }

  listItems() {
    if (this.items.length === 0) {
      console.log('Inventory is empty.');
    } else {
      console.log('Current Inventory:');
      this.items.forEach((item) => {
        console.log(`- [${item.id}] ${item.name} (Quantity: ${item.quantity})`);
      });
    }
  }
}

export default Inventory;
