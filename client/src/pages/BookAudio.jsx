import React, { useState, useRef, useEffect } from "react";

import taleImage from "../assets/tail_of_two_cities.jpg";
import taleAudio from "../assets/a-tale-of-two-cities.mp3";
import awakeningImage from "../assets/The_Awakening.jpg";
import awakeningAudio from "../assets/awakening_01_chopin.mp3";
import christmasTreeImage from "../assets/The_Christmas_Tree.jpg";
import christmasTreeAudio from "../assets/The_christmas_tree.mp3";
import greatExpectationsImage from "../assets/great_expectation.jpg";
import greatExpectationsAudio from "../assets/great-expectations.mp3";

const audiobooks = [
  {
    id: 2,
    title: "A Tale of Two Cities",
    description:
      "A classic novel by Charles Dickens, set in London and Paris before and during the French Revolution.",
    image: taleImage,
    audioPreview: taleAudio,
  },
  {
    id: 3,
    title: "The Awakening",
    description:
      "A novel by Kate Chopin that explores themes of individuality and self-discovery.",
    image: awakeningImage,
    audioPreview: awakeningAudio,
  },
  {
    id: 4,
    title: "The Christmas Tree",
    description:
      "A beautiful short story by Charles Dickens that captures the spirit of Christmas.",
    image: christmasTreeImage,
    audioPreview: christmasTreeAudio,
  },
  {
    id: 5,
    title: "Great Expectations",
    description:
      "A masterpiece by Charles Dickens, following the journey of Pip.",
    image: greatExpectationsImage,
    audioPreview: greatExpectationsAudio,
  },
];

function BookAudio() {
  const [activeAudio, setActiveAudio] = useState(null);
  const [audioUrl, setAudioUrl] = useState("");
  const audioRef = useRef(null);

  const toggleAudioPlayer = (id, url) => {
    if (activeAudio === id) {
      setActiveAudio(null);
      if (audioRef.current) {
        audioRef.current.pause();
      }
    } else {
      setActiveAudio(id);
      setAudioUrl(url);
    }
  };

  useEffect(() => {
    if (audioRef.current && audioUrl) {
      audioRef.current.load();
      audioRef.current.play();
    }
  }, [audioUrl]);

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-8"
      style={{ backgroundColor: "#CF9FFF", minHeight: "100vh" }}
    >
      {audiobooks.map((audiobook) => (
        <div
          key={audiobook.id}
          className="relative bg-gradient-to-r from-purple-700 to-blue-500 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        >
          <img
            src={audiobook.image}
            alt={audiobook.title}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h2 className="text-xl font-bold text-white mb-2">
            {audiobook.title}
          </h2>
          <p className="text-gray-300 mb-4">{audiobook.description}</p>

          <div
            className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
            onClick={() =>
              toggleAudioPlayer(audiobook.id, audiobook.audioPreview)
            }
          >
            <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition">
              ▶ Play
            </button>
          </div>

          {activeAudio === audiobook.id && (
            <audio ref={audioRef} controls className="mt-4 w-full" autoPlay>
              <source src={audioUrl} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          )}
        </div>
      ))}
    </div>
  );
}

export default BookAudio;
