// src/pages/DailyTipsPage.jsx
import React from "react";
import DailyTipCard from "../components/DailyTipsCard";

const tips = [
  "Stay hydrated and drink plenty of water throughout the day.",
  "Take short breaks while working to boost productivity.",
  "Practice gratitude by writing down three things you’re thankful for.",
  "Set achievable goals for the day to maintain focus.",
  "Engage in at least 30 minutes of physical activity.",
  "Try to read something new every day, even if it’s just a paragraph.",
  "Connect with a friend or loved one to strengthen relationships.",
  "Plan your meals to ensure a balanced diet.",
  "Practice deep breathing or meditation for relaxation.",
  "Limit screen time to improve your mental well-being.",
  "Keep a journal to reflect on your thoughts and experiences.",
  "Set aside time for a hobby or creative activity.",
  "Make your bed every morning for a fresh start.",
  "Spend time in nature to improve mood and reduce stress.",
  "Learn a new skill or hobby to keep your mind active.",
  "Volunteer or help someone in need to boost your mood.",
  "Try to get at least 7-8 hours of sleep each night.",
  "Declutter your space to promote a calm environment.",
  "Cook a new recipe to explore different cuisines.",
  "Practice self-care by indulging in your favorite activities.",
  "Take a moment to appreciate your surroundings and practice mindfulness.",
  "Stay organized to reduce stress and increase efficiency.",
  "Celebrate small wins to stay motivated.",
  "Avoid multitasking to maintain focus and quality of work.",
  "Engage in regular brainstorming sessions to foster creativity.",
  "Establish a morning routine to start your day right.",
  "Listen to music or podcasts to stimulate your mind.",
  "Create a vision board to visualize your goals.",
  "Practice kindness and offer compliments to uplift others.",
  "Reflect on your progress at the end of the day.",
  "Prioritize tasks by importance to manage time effectively.",
];

const DailyTipsPage = () => {
  const currentDate = new Date();
  const currentDay = currentDate.getDate();

  const tipIndex = (currentDay - 1) % tips.length;

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gradient-to-b from-blue-900 to-purple-900 min-h-screen">
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
        Daily Tip
      </h1>
      <DailyTipCard
        tip={tips[tipIndex]}
        date={`${currentDate.toLocaleString("default", {
          month: "long",
        })} ${currentDay}`}
      />
    </div>
  );
};

export default DailyTipsPage;
