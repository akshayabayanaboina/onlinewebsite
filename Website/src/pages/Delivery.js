function Delivery() {
  return (
    <div>
      <h1>Delivery Page</h1>
      <p>Here you can track your delivery and view delivery details.</p>
      <label htmlFor="rating">Rate Your Delivery Experience:</label>
      <select id="rating" name="rating">
        <option value="5">5 - Excellent</option>
        <option value="4">4 - Good</option>
        <option value="3">3 - Average</option>
        <option value="2">2 - Poor</option>
        <option value="1">1 - Very Poor</option>
      </select>
      <label htmlFor="feedback">Leave Feedback:</label>
      <textarea id="feedback" name="feedback" rows="4" cols="50" placeholder="Enter your feedback here..."></textarea>
      <button>Submit Feedback</button>
    </div>
  );
}export default Delivery;