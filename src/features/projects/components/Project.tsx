import axios from "axios";
import { useEffect, useState } from "react";
import { ExternalLink, Github, Code2 } from "lucide-react";
import { Link } from "react-router-dom";

interface Project {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  homepage: string | null;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const githubUsername = "Githup-hana";
  const githubRepoUrl = `https://api.github.com/users/${githubUsername}/repos`;
  const githubOrgName = "CommitCrush";
  const githubOrgNameUrl = `https://api.github.com/orgs/${githubOrgName}/repos`;

  const fetchProjects = async () => {
    try {
      const [orgResponse, userRes] = await Promise.all([
        axios.get(githubOrgNameUrl),
        axios.get(githubRepoUrl),
      ]);
      const projekts = [...userRes.data, ...orgResponse.data];
      setProjects(projekts);
      setLoading(false);
    } catch (err) {
      setError("Etwas ist schiefgelaufen beim Laden der Projekte");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="min-h-[400px] flex justify-center items-center">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-blue-200 rounded-full animate-pulse"></div>
          <div className="absolute inset-0 border-t-4 border-blue-600 rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[400px] flex justify-center items-center">
        <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg p-4 flex items-center space-x-3">
          <svg
            className="h-6 w-6 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-red-700 dark:text-red-200">{error}</span>
        </div>
      </div>
    );
  }

  return (
    <section
      id="projects"
      className="py-20 bg-sand dark:bg-darkbg  dark:to-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            My GitHub Projects
          </h2>
          <div
            className="w-24 h-1 
  bg-gradient-to-r from-[#b6aa9c] to-[#2d3341] 
  dark:from-[#2d3341] dark:to-[#b6aa9c] 
  mx-auto mb-8"
          ></div>

          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Explore my latest projects directly from GitHub. These repositories
            showcase my coding journey and technical expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-sand dark:from-blue-600/10 dark:to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div
                className="relative h-48 overflow-hidden bg-gradient-to-br 
  from-[#b6aa9c] to-[#2d334188] 
  dark:from-[#2d334188] dark:to-[#b6aa9c]"
              >
                <div className="absolute inset-0 flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110">
                  <Code2 className="h-20 w-20 text-white/30" />
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex space-x-4">
                    <a
                      href={project.html_url}
                      className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors duration-200 hover:scale-110 transform"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View on GitHub"
                    >
                      <Github className="h-6 w-6 text-gray-900" />
                    </a>
                    {project.html_url && (
                      <a
                        href={project.homepage || project.html_url}
                        className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors duration-200 hover:scale-110 transform"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="h-6 w-6 text-gray-900" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6 relative z-10">
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="px-3 py-1 text-sm bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-700 dark:text-blue-300 rounded-full font-medium">
                    {project.language || "Other"}
                  </span>
                  <span className="flex items-center text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                    <Github className="h-4 w-4 mr-1" />
                    {project.stargazers_count}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-2 text-sand dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  <Link to={`/projects/${project.name}`}>{project.name}</Link>
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                  {project.description || "A GitHub project"}
                </p>

                <div
                  className={`transform transition-all duration-500 ${
                    hoveredProject === project.id
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                >
                  <div className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium group/link">
                    <Link to={`/projects/${project.name}`}>view details</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
