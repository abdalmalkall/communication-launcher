const ProjectCard = ({ title, description, icon }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300">
      <div className="text-4xl mb-4">{icon}</div>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default ProjectCard;
