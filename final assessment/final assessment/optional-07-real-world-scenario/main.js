import Restaurant from './Restaurant.js';

const restaurant = new Restaurant();

// Tambah pesanan
restaurant.addOrder('John Doe', [
  { name: 'Burger', price: 50 },
  { name: 'Fries', price: 20 },
]);

restaurant.addOrder('Jane Smith', [
  { name: 'Pizza', price: 100 },
  { name: 'Soda', price: 30 },
]);

// Lihat pesanan
restaurant.viewOrders();

// Ubah status pesanan
restaurant.updateOrderStatus(1, 'Diproses');
restaurant.updateOrderStatus(2, 'Selesai');

// Lihat pesanan setelah pembaruan
restaurant.viewOrders();
