import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGamepad,
  faDumbbell,
  faComments,
  faHeadphones,
  faLightbulb,
  faOm,
} from "@fortawesome/free-solid-svg-icons";
import * as THREE from "three";
import { useInView } from "react-intersection-observer";

function HeroSection() {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("threejs-canvas").appendChild(renderer.domElement);

    const starCount = 10000;
    const starsGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 2000;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 2000;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2000;
    }

    starsGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const starMaterial = new THREE.PointsMaterial({
      size: 5,
      transparent: true,
      opacity: 0.8,
      color: 0xffffff,
    });
    const stars = new THREE.Points(starsGeometry, starMaterial);
    scene.add(stars);

    camera.position.z = 350;

    const animate = () => {
      requestAnimationFrame(animate);
      stars.rotation.y += 0.005;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      starsGeometry.dispose();
      starMaterial.dispose();
    };
  }, []);

  const cardData = [
    {
      path: "/gamespage",
      icon: faGamepad,
      title: "Games",
      description: "Exciting games!",
      gradient: "from-blue-500 to-blue-700",
    },
    {
      path: "/physical-tasks",
      icon: faDumbbell,
      title: "Physical Tasks",
      description: "Engaging challenges!",
      gradient: "from-green-500 to-green-700",
    },
    {
      path: "/chat",
      icon: faComments,
      title: "Chat",
      description: "Connect with astronauts!",
      gradient: "from-yellow-500 to-yellow-700",
    },
    {
      path: "/book-audio",
      icon: faHeadphones,
      title: "Audio Books",
      description: "Immerse yourself in learning, entertainment anytime!",
      gradient: "from-indigo-500 to-indigo-700",
    },
    {
      path: "/yoga-meditation",
      icon: faOm,
      title: "Yoga",
      description: "Find inner peace!",
      gradient: "from-teal-500 to-teal-700",
    },
    {
      path: "/daily-tips",
      icon: faLightbulb,
      title: "Daily Tips",
      description: "Stay healthy in space!",
      gradient: "from-purple-500 to-purple-700",
    },
  ];

  return (
    <div className="relative h-screen w-screen flex flex-col items-center text-white overflow-hidden">
      <div id="threejs-canvas" className="absolute inset-0 w-full h-full"></div>
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="relative z-10 text-center p-4 mt-10">
        {" "}
        {/* Reduced mt */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 hover:scale-110 transition-transform duration-500">
          Welcome to AstroConnect!
        </h1>
        <p className="text-sm sm:text-base lg:text-lg mb-4">
          Connecting astronauts to a world of fun and friendship!
        </p>
        <p className="text-xs sm:text-sm mb-6 italic">
          "In the vastness of space, laughter and joy bring us closer together."
        </p>
      </div>

      <div className="relative  z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full px-12 mt-8 md:mt-12">
        {cardData.map((card, index) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.1,
          });

          return (
            <Link key={index} to={card.path} className="flex flex-col">
              <div
                ref={ref}
                className={`transform transition-opacity duration-700 ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                } bg-gradient-to-r ${
                  card.gradient
                } h-60 p-4 rounded-lg text-center transition-transform hover:scale-105 shadow-lg flex flex-col justify-between`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h2 className="text-xl font-semibold mb-1 flex items-center justify-center">
                  <FontAwesomeIcon icon={card.icon} className="mr-1" />{" "}
                  {card.title}
                </h2>
                <p className="text-lg">{card.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default HeroSection;
