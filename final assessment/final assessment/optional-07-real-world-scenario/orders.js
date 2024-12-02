class Order {
  constructor(id, customerName, items) {
    this.id = id;
    this.customerName = customerName;
    this.items = items;
    this.totalPrice = items.reduce((sum, item) => sum + item.price, 0);
    this.status = 'Menunggu'; // Status awal
  }
}

export default Order;
