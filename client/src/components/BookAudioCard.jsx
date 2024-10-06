import React from "react";

function BookAudioCard({ title, description, audioPreviewUrl, imageUrl }) {
  const handlePlay = () => {
    if (audioPreviewUrl) {
      new Audio(audioPreviewUrl).play();
    } else {
      alert("This audio preview is not available.");
    }
  };

  return (
    <div className="bg-gradient-to-r from-purple-700 to-blue-500 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-40 object-cover mb-4 rounded-lg"
      />
      <h2 className="text-xl md:text-2xl font-bold text-white mb-2">{title}</h2>
      <p className="text-gray-300 mb-4 text-sm md:text-base">{description}</p>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition"
        onClick={handlePlay}
      >
        ▶ Play
      </button>
    </div>
  );
}

export default BookAudioCard;
