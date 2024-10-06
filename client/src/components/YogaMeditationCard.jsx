import React from "react";

function YogaMeditationCard({ title, description, onStart }) {
  return (
    <div className="bg-gradient-to-r from-purple-700 to-blue-500 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <h2 className="text-xl md:text-2xl font-bold text-white mb-2">{title}</h2>
      <p className="text-gray-200 text-sm md:text-base">{description}</p>
      <button
        onClick={onStart} // Trigger the onStart function passed from the parent
        className="mt-4 bg-green-400 text-gray-800 px-4 py-2 rounded-full hover:bg-green-300 transition"
      >
        Start Activity
      </button>
    </div>
  );
}

export default YogaMeditationCard;
