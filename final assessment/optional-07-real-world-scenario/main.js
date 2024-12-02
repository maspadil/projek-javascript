
import Order from './Order.js';

class Restaurant {
  constructor() {
    this.orders = [];  
  }


  addOrder(customerName, items) {
    const newOrder = new Order(this.nextId, customerName, items);
    this.orders.push(newOrder);
    this.nextId++;  
    console.log(`Pesanan untuk ${customerName} telah ditambahkan.`);
  }

  
  updateOrderStatus(orderId, status) {
    const order = this.orders.find(order => order.id === orderId);
    if (order) {
      order.status = status;
      console.log(`Status pesanan ID ${orderId} telah diperbarui ke: ${status}`);
    } else {
      console.log(`Pesanan ID ${orderId} tidak ditemukan.`);
    }
  }

 
  viewOrders() {
    if (this.orders.length === 0) {
      console.log('Tidak ada pesanan.');
    } else {
      console.log('Daftar Pesanan:');
      this.orders.forEach(order => {
        console.log(`ID: ${order.id}, Pelanggan: ${order.customerName}, Status: ${order.status}, Total: ${order.totalPrice}`);
        order.items.forEach(item => {
          console.log(`- ${item.name}: ${item.price}`);
        });
      });
    }
  }
}

export default Restaurant;
