function Orders() {
  return (
    <div>
      <h1>Orders Page</h1>
      <p>Here you can view your past orders and their details.</p>
      <label htmlFor="orderId">Enter Order ID:</label>
      <input type="text" id="orderId" name="orderId" />
      <button>View Order Details</button>
      <label htmlFor="orderHistory">View Order History:</label>
      <input type="checkbox" id="orderHistory" name="orderHistory" />
      <button>View Order History</button>
    </div>
  );
}
export default Orders;