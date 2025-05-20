import { useEffect, useState } from "react";
import { FaGlobe, FaGithub, FaMobileAlt, FaRobot, FaRocket } from "react-icons/fa";
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
];

function App() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex flex-col items-center justify-center font-sans overflow-hidden">
      <h1 className="text-4xl md:text-5xl font-bold mb-10 animate-ai-glow">Communication Launcher</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl px-4">
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
