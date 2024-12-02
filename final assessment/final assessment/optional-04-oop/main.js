import Item from './Item.js';
import Inventory from './Inventory.js';

const inventory = new Inventory();

// Tambahkan barang ke dalam inventaris
const item1 = new Item(1, 'Laptop', 10);
const item2 = new Item(2, 'Mouse', 50);
inventory.addItem(item1);
inventory.addItem(item2);

// Lihat daftar barang
inventory.listItems();

// Perbarui barang
inventory.updateItem(1, 'Gaming Laptop', 8);

// Hapus barang
inventory.removeItem(2);

// Lihat daftar barang setelah perubahan
inventory.listItems();
