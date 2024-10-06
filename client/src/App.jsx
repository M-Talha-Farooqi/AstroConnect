// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Challenges from "./pages/Challenges";
import GamesPage from "./pages/GamesPage";
import PhysicalTask from "./pages/PhysicalTask";
import YogaMeditation from "./pages/YogaMeditation";
import BookAudio from "./pages/BookAudio";
import DailyTips from "./pages/DailyTipsPage";
import ChatPage from "./pages/ChatPage";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import "stream-chat-react/dist/css/index.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/challenges" element={<Challenges />} />
            <Route path="/gamespage" element={<GamesPage />} />
            <Route path="/physical-tasks" element={<PhysicalTask />} />
            <Route path="/yoga-meditation" element={<YogaMeditation />} />
            <Route path="/book-audio" element={<BookAudio />} />
            <Route path="/daily-tips" element={<DailyTips />} />
            <Route path="/chat" element={<ChatPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
