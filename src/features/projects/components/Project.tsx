import axios from "axios";
import { useEffect, useState } from "react";
import { ExternalLink, Github, Code2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import webImg from "../../../assets/ webdeweloper2.jpg";

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
  const { t } = useTranslation();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const githubUsername = "Githup-hana";
  const githubRepoUrl = `https://api.github.com/users/${githubUsername}/repos`;
  const githubOrgName = "CommitCrush";
  const githubOrgNameUrl = `https://api.github.com/orgs/${githubOrgName}/repos`;

  
  const showcaseProjects = [
    "Explore-Massawa",
    "Finance_tracker-_with_react",
    "Memory-Game",
    "Solarpanel-Simulator",
    "event-mood-ticket",
    "recipe-planner", 
   
  ];

  const fetchProjects = async () => {
    try {
      console.log("🔍 Lade Projekte von beiden Quellen...");

      const [orgResponse, userRes] = await Promise.all([
        axios.get(githubOrgNameUrl),
        axios.get(githubRepoUrl),
      ]);

      const allProjects = [...orgResponse.data, ...userRes.data];

      console.log("🎯 Gesuchte Projekte:", showcaseProjects);

      const filteredProjects = allProjects.filter((project) =>
        showcaseProjects.includes(project.name)
      );

      setProjects(filteredProjects);
      setLoading(false);
    } catch (err) {
      setError(t("projectLoadingError"));
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, [t]);

  if (loading) {
    return (
      <div
        className="min-h-screen relative flex items-center justify-center"
        style={{
          backgroundImage: `url(${webImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>

        <div className="relative z-10 flex justify-center items-center">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 border-4 border-white/30 rounded-full animate-pulse"></div>
            <div className="absolute inset-0 border-t-4 border-white rounded-full animate-spin"></div>
          </div>
          <p className="text-white ml-4 text-lg">{t("loading")}</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="min-h-screen relative flex items-center justify-center"
        style={{
          backgroundImage: `url(${webImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>

        <div className="relative z-10 flex justify-center items-center">
          <div className="bg-white/20 dark:bg-white/10 backdrop-blur-lg border border-white/30 rounded-lg p-4 flex items-center space-x-3">
            <svg
              className="h-6 w-6 text-red-400"
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
            <span className="text-white">{error}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: `url(${webImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Global Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 py-20 px-4">
        <div className="container mx-auto sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent drop-shadow-2xl">
              {t("myGithubProjects")}
            </h2>

            {/* Animated Underline */}
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full animate-pulse mb-8"></div>

            <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto font-light">
              {t("projectsDescription")}
            </p>

           
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-white/20 dark:bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/30 hover:border-white/50"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Project Header */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md">
                  <div className="absolute inset-0 flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110">
                    <Code2 className="h-20 w-20 text-white/50" />
                  </div>

                  {/* Action Buttons on Hover */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex space-x-4">
                      <a
                        href={project.html_url}
                        className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors duration-200 hover:scale-110 transform"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={t("githubRepo")}
                      >
                        <Github className="h-6 w-6 text-gray-900" />
                      </a>
                      {project.homepage && (
                        <a
                          href={project.homepage}
                          className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors duration-200 hover:scale-110 transform"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={t("liveDemo")}
                        >
                          <ExternalLink className="h-6 w-6 text-gray-900" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 relative z-10">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="px-3 py-1 text-sm bg-white/30 dark:bg-white/20 text-white rounded-full font-medium border border-white/20">
                      {project.language || "Other"}
                    </span>
                    <span className="flex items-center text-sm text-white/80 bg-white/20 dark:bg-white/10 px-3 py-1 rounded-full border border-white/20">
                      <Github className="h-4 w-4 mr-1" />
                      {project.stargazers_count}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-300 transition-colors duration-300">
                    <Link to={`/projects/${project.name}`}>{project.name}</Link>
                  </h3>

                  {/* Project Description */}
                  <p className="text-white/80 mb-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                    {project.description || t("noDescription")}
                  </p>

                  {/* View Details Link */}
                  <div
                    className={`transform transition-all duration-500 ${
                      hoveredProject === project.id
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    }`}
                  >
                    <Link
                      to={`/projects/${project.name}`}
                      className="inline-flex items-center text-blue-300 hover:text-white font-medium transition-colors duration-300"
                    >
                      {t("viewDetails")} →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Keine Projekte gefunden */}
          {projects.length === 0 && (
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">
                  Keine Projekte gefunden
                </h3>
                <p className="text-white/80">
                  Überprüfen Sie die Konsole für Details zu verfügbaren
                  Repositories.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
