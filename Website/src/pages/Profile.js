function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>
      <p>Here you can view and edit your profile information.</p>
      <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <br />
        <button type="submit">Update Profile</button>
    </div>
  );
}
export default Profile;