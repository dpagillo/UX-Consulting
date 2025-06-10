import React from 'react';

function Contact() {
  return (
    <section id="contact">
      <h2 className="text-2xl font-semibold mb-2">Contact</h2>
      <form action="https://formspree.io/f/mypath" method="POST" className="space-y-4">
        <input type="text" name="name" placeholder="Your name" required className="w-full p-2 border rounded" />
        <input type="email" name="_replyto" placeholder="Your email" required className="w-full p-2 border rounded" />
        <textarea name="message" placeholder="Your message" required className="w-full p-2 border rounded"></textarea>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Send</button>
      </form>
    </section>
  );
}

export default Contact;
