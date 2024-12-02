import Item from './Item.js';
import Inventory from './Inventory.js';


const inventory = new Inventory();


const item1 = new Item(1, 'Laptop', 10);
const item2 = new Item(2, 'Mouse', 50);
inventory.addItem(item1);
inventory.addItem(item2);


inventory.listItems();


inventory.updateItem(1, 'Gaming Laptop', 8);


inventory.removeItem(2);

inventory.listItems();
