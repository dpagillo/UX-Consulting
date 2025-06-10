import React from 'react';

function Services() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6 text-center">Signature Packages</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-2">1-Week Prototype Sprint</h3>
          <p className="text-blue-600 font-semibold mb-4">$4,500</p>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Kickoff call</li>
            <li>Wireframes + flows</li>
            <li>Figma prototype</li>
            <li>Revision round</li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-2">UX Audit</h3>
          <p className="text-blue-600 font-semibold mb-4">$2,000</p>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Heuristic review</li>
            <li>Redesign suggestions</li>
            <li>Strategy call</li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-2">Strategy Hour</h3>
          <p className="text-blue-600 font-semibold mb-4">$250</p>
          <p className="text-sm text-gray-700">
            Zoom session for teardown or product coaching.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
