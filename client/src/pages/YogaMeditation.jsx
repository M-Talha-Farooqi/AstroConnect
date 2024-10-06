import React, { useState } from "react";
import YogaMeditationCard from "../components/YogaMeditationCard";
import ActivityDetails from "../components/ActivityDetails";

function YogaMeditation() {
  const activities = [
    {
      title: "Sun Salutation",
      description: "A series of yoga poses performed in a flowing sequence.",
      steps: [
        "Stand tall and inhale your arms overhead.",
        "Exhale and fold forward into a forward bend.",
        "Inhale and step back into a plank position.",
        "Lower down into a push-up position and then inhale into upward-facing dog.",
        "Exhale and press back into downward-facing dog.",
        "Step forward and rise to standing position.",
        "Repeat for several rounds.",
      ],
    },
    {
      title: "Breathing Exercises",
      description: "Practice deep breathing techniques for relaxation.",
      steps: [
        "Find a comfortable seated position.",
        "Close your eyes and take a deep breath in through your nose.",
        "Hold for a few seconds, then exhale slowly through your mouth.",
        "Repeat for 5-10 minutes, focusing on your breath.",
      ],
    },
    {
      title: "Tree Pose",
      description: "A balancing pose that enhances focus and stability.",
      steps: [
        "Stand tall and shift your weight to your right foot.",
        "Bend your left knee and place your left foot on your right thigh.",
        "Press your palms together in front of your chest.",
        "Focus on a point in front of you and hold the pose for 5-10 breaths.",
        "Switch sides.",
      ],
    },
    {
      title: "Guided Meditation",
      description:
        "Follow along with a guided meditation session for mindfulness.",
      steps: [
        "Find a quiet space and sit comfortably.",
        "Close your eyes and take deep breaths.",
        "Listen to the guided meditation audio.",
        "Focus on the instructions given during the session.",
        "Gradually bring your awareness back to your surroundings when finished.",
      ],
    },
    {
      title: "Cobra Pose",
      description: "A gentle backbend that opens the chest and lungs.",
      steps: [
        "Lie face down with your hands under your shoulders.",
        "Inhale and slowly lift your chest off the ground, using your back muscles.",
        "Keep your elbows close to your body.",
        "Hold the pose for 15-30 seconds while breathing deeply.",
        "Exhale and lower back down.",
      ],
    },
    {
      title: "Child’s Pose",
      description: "A gentle resting pose that stretches the back and hips.",
      steps: [
        "Kneel on the floor and sit back on your heels.",
        "Reach your arms forward and lower your torso to the ground.",
        "Rest your forehead on the mat and breathe deeply.",
        "Hold the pose for as long as you like, feeling the stretch.",
      ],
    },
    {
      title: "Warrior II",
      description: "A standing pose that builds strength and stamina.",
      steps: [
        "Stand with your feet wide apart.",
        "Turn your right foot out and bend your right knee, keeping it above your ankle.",
        "Extend your arms parallel to the ground, gazing over your right hand.",
        "Hold for 5-10 breaths and switch sides.",
      ],
    },
    {
      title: "Lotus Position",
      description: "A seated position for deep meditation and reflection.",
      steps: [
        "Sit with your legs crossed and feet resting on your thighs.",
        "Keep your back straight and shoulders relaxed.",
        "Rest your hands on your knees, palms facing up or down.",
        "Breathe deeply and focus your mind.",
      ],
    },
  ];

  const [selectedActivity, setSelectedActivity] = useState(null);

  const handleActivityClick = (activity) => {
    setSelectedActivity(activity);
  };

  const handleCloseDetails = () => {
    setSelectedActivity(null);
  };

  return (
    <div className="p-4 md:p-8 bg-gradient-to-b from-blue-900 to-purple-900 min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
        Yoga and Meditation Activities
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {activities.map((activity, idx) => (
          <YogaMeditationCard
            key={idx}
            title={activity.title}
            description={activity.description}
            onStart={() => handleActivityClick(activity)} // Pass the click handler
          />
        ))}
      </div>

      
      {selectedActivity && (
        <ActivityDetails
          title={selectedActivity.title}
          description={selectedActivity.description}
          steps={selectedActivity.steps}
          onClose={handleCloseDetails}
        />
      )}
    </div>
  );
}

export default YogaMeditation;
