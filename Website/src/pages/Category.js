function Category() {
  return (
    <div>
      <h1>Category Page</h1>
      <p>Here you can browse products by category.</p>
      <p>More features coming soon!</p>
      <label htmlFor="category">Select a category:</label>
      <select id="category" name="category">
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
        <option value="home">Home & Kitchen</option>
      </select>
    </div>
  );
} 
export default Category;
