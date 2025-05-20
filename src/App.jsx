// src/App.jsx
import { useEffect, useState } from "react";
import { FaGlobe, FaGithub, FaMobileAlt, FaRobot, FaRocket, FaWhatsapp, FaInstagram } from "react-icons/fa";
import "./App.css";

const projects = [
  {
    name: "ECL Web",
    icon: <FaGlobe />,
    url: "https://abdalmalkall.github.io/eclweb/",
  },
  {
    name: "ECL",
    icon: <FaRocket />,
    url: "https://abdalmalkall.github.io/Ecl/",
  },
  {
    name: "Fahed (GitHub)",
    icon: <FaGithub />,
    url: "https://github.com/abdalmalkall/fahed",
  },
  {
    name: "Multi Mobil",
    icon: <FaMobileAlt />,
    url: "https://abdalmalkall.github.io/multimobil/",
  },
  {
    name: "RYP",
    icon: <FaRobot />,
    url: "https://abdalmalkall.github.io/RyP/",
  },
  {
    name: "WhatsApp",
    icon: <FaWhatsapp />,
    url: "https://wa.me/962786511780",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    url: "https://www.instagram.com/_.c_ll.__?igsh=c21vM2dtdG9ma3hw&utm_source=qr",
  },
];

function App() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex flex-col items-center justify-center font-sans overflow-hidden px-4">
      <div className="flex-1 flex items-center justify-center w-full">
        <h1 className="text-5xl md:text-6xl font-bold animate-ai-glow text-center leading-tight">
          Communication Launcher
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl mt-10 pb-10">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black/30 border border-white/10 rounded-2xl p-6 shadow-lg backdrop-blur-xl transform transition-all duration-500 hover:scale-105 hover:bg-white/10 hover:shadow-neon cursor-pointer"
          >
            <div className="text-4xl mb-4 text-ai animate-float">
              {project.icon}
            </div>
            <h2 className="text-xl font-semibold text-center">{project.name}</h2>
          </a>
        ))}
      </div>
    </div>
  );
}

export default App;