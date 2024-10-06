// src/components/ChallengeCard.js
import React from "react";

function ChallengeCard({ title, description, onClick }) {
  return (
    <div
      className="bg-gradient-to-r from-purple-700 to-blue-500 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
      onClick={onClick} 
    >
      <h2 className="text-xl md:text-2xl font-bold text-white mb-2">{title}</h2>
      <p className="text-gray-300 text-sm md:text-base">{description}</p>
      <button className="mt-4 bg-green-500 text-gray-800 px-4 py-2 rounded-full hover:bg-green-600 transition">
        Take Challenge
      </button>
    </div>
  );
}

export default ChallengeCard;
