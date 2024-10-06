import React from 'react';

function ActivityDetails({ title, description, steps, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/3">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="mb-4">{description}</p>
        <h3 className="text-lg font-semibold mb-2">Steps:</h3>
        <ol className="list-decimal list-inside mb-4">
          {steps.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
        <button onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-400">
          Close
        </button>
      </div>
    </div>
  );
}

export default ActivityDetails;
