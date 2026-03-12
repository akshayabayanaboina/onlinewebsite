function Contact() {
    return (
        <div>
            <h1>Contact Page</h1>
            <p>Here you can contact us for any inquiries.</p>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
            <br />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
            <br />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message"></textarea>
            <br />
            <button type="submit">Send Message</button>
        </div>
    );
}
export default Contact;