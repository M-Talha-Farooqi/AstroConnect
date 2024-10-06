// src/components/ProgressBar.jsx
import React from 'react';

function ProgressBar({ progress }) {
  return (
    <div className="w-full bg-gray-300 rounded-full h-4 mb-4">
      <div
        className="bg-green-500 h-4 rounded-full transition-all duration-300"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}

export default ProgressBar;
