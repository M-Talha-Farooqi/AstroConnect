import React from "react";

import orbitalThumbnail from "../assets/game_1.png"; 
import zombieThumbnail from "../assets/game_2.png"; 

const games = [
  {
    gameName: "Orbital Defenders",
    description:
      "Protect the planet! Destroy the asteroids to save your people!",
    gameThumbnail: orbitalThumbnail, 
    gameUrl: "https://codepen.io/M-Talha-Farooqi/full/VwojmjE", 
  },
  {
    gameName: "Zombie Hunter",
    description: "Hunt zombies and survive the apocalypse!",
    gameThumbnail: zombieThumbnail, 
    gameUrl: "https://codepen.io/M-Talha-Farooqi/full/bGXeByg", 
  },
];

const GamesPage = () => {
  const handlePlayClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer,fullscreen=yes");
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gradient-to-b from-blue-900 to-purple-900 min-h-screen">
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
        Space Games
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game, idx) => (
          <div
            key={idx}
            className="relative bg-gradient-to-r from-purple-700 to-blue-500 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
          >
            <img
              src={game.gameThumbnail}
              alt={`${game.gameName} thumbnail`}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-4">
              {game.gameName}
            </h2>
            <p className="text-gray-200 mb-4 text-sm sm:text-base">
              {game.description}
            </p>

            <button
              onClick={() => handlePlayClick(game.gameUrl)}
              className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-green-400 transition"
            >
              <span>Play Game</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamesPage;
