import React from 'react';

const DailyTipCard = ({ tip, date }) => {
  return (
    <div className="bg-gradient-to-r from-purple-700 to-blue-500 p-6 rounded-lg shadow-lg text-white">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Tip for {date}:</h2> {/* Adjusted heading size for smaller screens */}
      <p className="text-base sm:text-lg">{tip}</p> {/* Adjusted paragraph size for readability */}
    </div>
  );
};

export default DailyTipCard;
