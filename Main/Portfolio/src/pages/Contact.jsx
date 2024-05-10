import React from 'react';

const Contact = () => {
  return (
    <div>
      <h1>Contact Me</h1>
      <p>Feel free to reach out to me for any inquiries or collaborations.</p>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      <div className="social-links">
        <a href="https://github.com/GTodd711">github</a>
        <br></br>
        <a href="https://r.search.yahoo.com/_ylt=Awr9zhC6jT1mBgQAEytXNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1716519610/RO=10/RU=https%3a%2f%2fmail.google.com%2fmail/RK=2/RS=g6r66LH3OhdqsCeHGydmvIEq5Hk-">gtodd7701@gmail.com</a>
        <br></br>
        <a> My phone number: 479-235-7869</a>
      </div>
    </div>
  );
};

export default Contact;
