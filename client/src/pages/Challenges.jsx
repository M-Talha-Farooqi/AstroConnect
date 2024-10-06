// src/pages/Challenges.js
import React, { useState } from "react";
import ChallengeCard from "../components/ChallengeCard";
import ChallengeModal from "../components/ChallengeModal";

function Challenges() {
  const [selectedChallenge, setSelectedChallenge] = useState(null); // State for selected challenge
  const challenges = [
    {
      title: "Zero-G Backflip",
      description: "Perform a backflip in microgravity!",
      steps: [
        "Step 1: Position yourself in a free space.",
        "Step 2: Bend your knees and prepare to jump.",
        "Step 3: Push off and tuck your legs to rotate backward.",
        "Step 4: Maintain control as you spin through the air.",
        "Step 5: Land safely, keeping your balance in zero gravity.",
      ],
    },
    {
      title: "Floating Push-ups",
      description: "Do push-ups in a zero-gravity environment.",
      steps: [
        "Step 1: Position yourself horizontally in the air.",
        "Step 2: Engage your core to keep your body stable.",
        "Step 3: Lower your chest towards the floor while floating.",
        "Step 4: Push yourself back up to the starting position.",
        "Step 5: Repeat the movement while maintaining balance.",
      ],
    },
    {
      title: "Space Sprint",
      description: "Sprint while floating and beat your best time.",
      steps: [
        "Step 1: Push off from a solid surface to gain momentum.",
        "Step 2: Maintain your body alignment as you move forward.",
        "Step 3: Focus on quick, controlled movements to sprint.",
        "Step 4: Reach your target destination as fast as possible.",
        "Step 5: Stop your movement carefully using a handhold.",
      ],
    },
    {
      title: "Satellite Toss",
      description: "Toss a small satellite from one point to another.",
      steps: [
        "Step 1: Position yourself at the starting point.",
        "Step 2: Hold the satellite and aim at your target destination.",
        "Step 3: Give a gentle push to launch the satellite.",
        "Step 4: Watch it float smoothly through space.",
        "Step 5: Catch it or stop its movement at the target.",
      ],
    },
    {
      title: "Martian Rock Climb",
      description: "Simulate climbing a Martian rock wall in reduced gravity.",
      steps: [
        "Step 1: Position yourself near the rock wall.",
        "Step 2: Grab onto the first handhold and lift yourself.",
        "Step 3: Move one hand and foot at a time, slowly climbing up.",
        "Step 4: Use your upper body strength to maintain balance.",
        "Step 5: Reach the top and celebrate your climb!",
      ],
    },
    {
      title: "Asteroid Dodging",
      description: "Dodge incoming asteroids while floating in space.",
      steps: [
        "Step 1: Stay in an open area with good visibility.",
        "Step 2: Observe the incoming asteroids and their paths.",
        "Step 3: Start moving sideways or upward to avoid the closest one.",
        "Step 4: Stay alert and keep dodging by moving in different directions.",
        "Step 5: Successfully avoid all asteroids and reach safety.",
      ],
    },
    {
      title: "Orbital Soccer",
      description: "Play a soccer match in orbit with no gravity!",
      steps: [
        "Step 1: Position yourself near the floating soccer ball.",
        "Step 2: Push off a surface to kick the ball in mid-air.",
        "Step 3: Chase after the ball by floating towards it.",
        "Step 4: Aim and kick the ball towards the goal.",
        "Step 5: Score a goal while keeping your balance in space!",
      ],
    },
  ];

  const handleClose = () => setSelectedChallenge(null);
  const handleOpen = (challenge) => setSelectedChallenge(challenge);

  return (
    <div className="p-6 md:p-8 bg-gradient-to-b from-blue-900 to-purple-900 min-h-screen">
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 text-center">
        Astronaut Challenges
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {challenges.map((challenge, idx) => (
          <ChallengeCard
            key={idx}
            title={challenge.title}
            description={challenge.description}
            onClick={() => handleOpen(challenge)} // Open the modal with challenge details
          />
        ))}
      </div>

      {selectedChallenge && (
        <ChallengeModal challenge={selectedChallenge} onClose={handleClose} />
      )}
    </div>
  );
}

export default Challenges;
