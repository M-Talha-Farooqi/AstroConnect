// src/components/PhysicalTaskCard.jsx
import React, { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";
import RestTimer from "./RestTimer";

function PhysicalTaskCard({
  title,
  description,
  difficulty,
  onTaskComplete,
  energyLevel,
  updateEnergy,
}) {
  const [reps, setReps] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isResting, setIsResting] = useState(false);
  const [isTaskCompleted, setIsTaskCompleted] = useState(false);
  const [progress, setProgress] = useState(0);

  const maxReps = difficulty === "Easy" ? 5 : difficulty === "Medium" ? 10 : 15;
  const maxHoldTime =
    difficulty === "Easy" ? 5 : difficulty === "Medium" ? 10 : 15;

  const startTask = () => {
    if (energyLevel <= 0) {
      alert("You're too tired! Rest before continuing.");
      return;
    }

    if (title.includes("Hold") || title.includes("Plank")) {
      startTimer();
    } else {
      setReps((prev) => prev + 1);
      updateEnergy(-5); // Decrease energy with each rep
      setProgress(((reps + 1) / maxReps) * 100);

      if (reps >= maxReps - 1) {
        completeTask();
      }
    }
  };

  const startTimer = () => {
    const intervalId = setInterval(() => {
      setTimer((prev) => prev + 1);
      updateEnergy(-1); // Decrease energy with time
      setProgress(((timer + 1) / maxHoldTime) * 100);

      if (timer >= maxHoldTime) {
        clearInterval(intervalId);
        completeTask();
      }
    }, 1000);
  };

  const completeTask = () => {
    setIsTaskCompleted(true);
    setIsResting(true);
    onTaskComplete();

    // Start rest timer after task completion
    setTimeout(() => setIsResting(false), 3000); // 3-second rest
  };

  return (
    <div className="bg-gradient-to-r from-purple-700 to-blue-500 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <h2 className="text-xl font-bold text-white mb-2">
        {title} ({difficulty} Mode)
      </h2>
      <p className="text-gray-200 mb-4">{description}</p>

      {!isTaskCompleted ? (
        <>
          <ProgressBar progress={progress} />
          {isResting ? (
            <RestTimer />
          ) : (
            <>
              <p className="text-gray-100 mb-4">
                {title.includes("Hold") || title.includes("Plank")
                  ? `Hold for ${maxHoldTime - timer} more seconds.`
                  : `Complete ${maxReps - reps} more reps.`}
              </p>
              <button
                className="bg-green-400 text-gray-800 px-4 py-2 rounded-full hover:bg-green-300 transition"
                onClick={startTask}
              >
                {title.includes("Hold") || title.includes("Plank")
                  ? "Start Holding"
                  : "Start Task"}
              </button>
            </>
          )}
        </>
      ) : (
        <p className="text-green-400 font-bold">Task Completed! 🎉</p>
      )}
    </div>
  );
}

export default PhysicalTaskCard;
