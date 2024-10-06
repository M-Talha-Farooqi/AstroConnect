import React, { useState, useEffect } from 'react';

function ChallengeModal({ challenge, onClose }) {
  const [stepIndex, setStepIndex] = useState(0); 
  const [isCompleted, setIsCompleted] = useState(false); 
  const [timeTaken, setTimeTaken] = useState(0); 
  const [timerId, setTimerId] = useState(null); 

  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeTaken(prev => prev + 1);
    }, 1000);
    setTimerId(timer);
    return () => clearInterval(timer);
  }, []);

  const handleNextStep = () => {
    if (stepIndex < challenge.steps.length - 1) {
      setStepIndex(stepIndex + 1); 
    } else {
      setIsCompleted(true); 
      clearInterval(timerId); 
    }
  };

  const handleRestart = () => {
    setStepIndex(0);
    setIsCompleted(false);
    setTimeTaken(0);
    const timer = setInterval(() => {
      setTimeTaken(prev => prev + 1);
    }, 1000);
    setTimerId(timer);
  };

  // Calculate progress percentage
  const progress = ((stepIndex + 1) / challenge.steps.length) * 100;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">{challenge.title}</h2>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
          <div
            className="bg-blue-500 h-4 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

    
        <p className="text-gray-600 mb-4">Time Taken: {timeTaken} seconds</p>

        {!isCompleted ? (
          <>
            <p className="mb-4">{challenge.steps[stepIndex]}</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={handleNextStep}
            >
              {stepIndex < challenge.steps.length - 1 ? 'Next Step' : 'Complete Challenge'}
            </button>
          </>
        ) : (
          <>
            <p className="mb-4 text-green-600 font-bold">Congratulations! 🎉 You've completed the challenge!</p>
            <p className="text-gray-600 mb-4">Your time: {timeTaken} seconds</p>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              onClick={handleRestart}
            >
              Try Again
            </button>
          </>
        )}

        <button
          className="mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default ChallengeModal;
