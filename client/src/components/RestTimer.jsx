// src/components/RestTimer.jsx
import React, { useEffect, useState } from 'react';

function RestTimer() {
  const [restTime, setRestTime] = useState(3);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRestTime(prev => prev - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <p className="text-yellow-400 font-bold">Rest for {restTime} more seconds...</p>
  );
}

export default RestTimer;
