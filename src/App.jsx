import "./index.css";
import { projects } from "./projects";
import ProjectCard from "./components/ProjectCard";

function App() {
  return (
    <div className="min-h-screen bg-black text-white p-8 font-sans">
      <h1 className="text-4xl font-bold mb-8 text-center">Communication Launcher</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default App;
