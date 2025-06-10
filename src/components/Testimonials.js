import React from 'react';

function Testimonials() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-2">Testimonials</h2>
      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">
        “Dylan brought structure to our mess. His sprint turned our early idea into a demo that closed investors.”
        <br />
        <span className="block mt-2 font-medium">— CEO, EV Startup</span>
      </blockquote>
    </section>
  );
}

export default Testimonials;
