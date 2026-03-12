function OrderConfirm() {
  return (
    <div>
      <h1>Order Confirmation Page</h1>
      <p>Your order has been placed successfully! Thank you for shopping with us.</p>
      <p>You will receive an email confirmation shortly with the details of your order.</p>
      <label htmlFor="orderNumber">Order Number:</label>
      <input type="text" id="orderNumber" name="orderNumber" value="123456" readOnly />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value="customer@example.com" readOnly />
      <label htmlFor="total">Total Amount:</label>
      <input type="text" id="total" name="total" value="$99.99" readOnly />
      <label htmlFor="estimatedDelivery">Estimated Delivery Date:</label>
      <input type="text" id="estimatedDelivery" name="estimatedDelivery" value="June 30, 2024" readOnly />
      <label htmlFor="customerSupport">Customer Support:</label>
      <input type="text" id="customerSupport" name="customerSupport" value="1-800-123-4567" readOnly />
      <label htmlFor="trackingLink">Tracking Link:</label>
      <input type="text" id="trackingLink" name="trackingLink" value="https://www.shippingcompany.com/track/123456" readOnly />
      <label htmlFor="feedback">Feedback:</label>
      <textarea id="feedback" name="feedback" placeholder="Leave your feedback here..."></textarea>
      <button type="submit">Submit Feedback</button>
      <label htmlFor="continueShopping">Continue Shopping:</label>
      <button type="button" onClick={() => window.location.href = '/'}>Go to Home Page</button>
      <label htmlFor="viewOrder">View Order Details:</label>
      <button type="button" onClick={() => window.location.href = '/order-details/123456'}>View Order</button>
      <label htmlFor="share">Share Your Purchase:</label>
      <button type="button" onClick={() => alert('Share functionality coming soon!')}>Share on Social Media</button>
      <label htmlFor="save">Save Order Confirmation:</label>
      <button type="button" onClick={() => alert('Save functionality coming soon!')}>Save as PDF</button>
    </div>
  );
}
export default OrderConfirm;