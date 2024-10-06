// src/pages/PhysicalTask.jsx
import React, { useState } from "react";
import PhysicalTaskCard from "../components/PhysicalTaskCard";

function PhysicalTask() {
  const tasks = [
    {
      title: "Floating Squats",
      description: "Perform squats while stabilizing yourself in zero gravity.",
    },
    {
      title: "Microgravity Jumping Jacks",
      description: "Do jumping jacks without touching the ground.",
    },
    {
      title: "Space Plank",
      description: "Hold a plank position while floating for 1 minute.",
    },
    {
      title: "Zero-G Lunges",
      description: "Perform lunges while using handrails to stabilize.",
    },
    {
      title: "Floating Bicycle Crunches",
      description: "Engage your core with bicycle crunches in microgravity.",
    },
  ];

  const [completedTasks, setCompletedTasks] = useState(0);
  const [energyLevel, setEnergyLevel] = useState(100); // Starting energy
  const [difficulty, setDifficulty] = useState("Medium"); // Default difficulty

  const handleTaskComplete = () => {
    setCompletedTasks((prev) => prev + 1);
  };

  const updateEnergy = (amount) => {
    setEnergyLevel((prev) => Math.max(0, prev + amount)); // Prevent negative energy
  };

  const totalProgress = (completedTasks / tasks.length) * 100;

  return (
    <div className="p-4 md:p-8 bg-gradient-to-b from-indigo-900 to-purple-900 min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
        Physical Tasks for Astronauts
      </h1>
      <p className="text-white text-center mb-6">
        Overall Progress: {totalProgress}%
      </p>
      <p className="text-white text-center mb-6">
        Energy Level: {energyLevel}%
      </p>

      
      <div className="text-center mb-6">
        <label className="text-white font-bold mr-2">Choose Difficulty:</label>
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="bg-gray-700 text-white rounded p-2"
        >
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map((task, idx) => (
          <PhysicalTaskCard
            key={idx}
            title={task.title}
            description={task.description}
            difficulty={difficulty}
            onTaskComplete={handleTaskComplete}
            energyLevel={energyLevel}
            updateEnergy={updateEnergy}
          />
        ))}
      </div>
    </div>
  );
}

export default PhysicalTask;
