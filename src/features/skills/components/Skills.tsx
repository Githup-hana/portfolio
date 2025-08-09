import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3Alt,
  faGitAlt,
  faGithub,
  faHtml5,
  faJs,
  faLinux,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import webImg from "../../../assets/ webdeweloper2.jpg";
import { Link } from "react-router-dom";

function Skills() {
  const { t } = useTranslation();
  const [showSkills, setShowSkills] = useState(true);

  const toggleView = () => {
    setShowSkills((prev) => !prev);
  };

  const skillsData = [
    { name: "HTML", icon: faHtml5, color: "text-orange-500" },
    { name: "CSS", icon: faCss3Alt, color: "text-blue-500" },
    { name: "JavaScript", icon: faJs, color: "text-yellow-500" },
    { name: "React", icon: faReact, color: "text-cyan-500" },
    { name: "TypeScript", icon: faCode, color: "text-blue-600" },
  ];

  const toolsData = [
    { name: "Git", icon: faGitAlt, color: "text-red-500" },
    { name: "GitHub", icon: faGithub, color: "text-white" },
    { name: "VS Code", icon: faCode, color: "text-blue-500" },
    { name: "Linux", icon: faLinux, color: "text-yellow-600" },
  ];

  return (
    <div 
      className="min-h-screen relative"
      style={{
        backgroundImage: `url(${webImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>
      
      {/* Content */}
      <div className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent drop-shadow-2xl mb-6">
              {t("skillsTitle")}
            </h1>
            
            {/* Animated Underline */}
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full animate-pulse mb-8"></div>
            
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed font-light max-w-2xl mx-auto">
              {t("skillsDescription")}
            </p>
          </div>

          {/* Toggle Button */}
          <div className="flex justify-center mb-12">
            <div 
              onClick={toggleView}
              className="relative bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-full p-2 shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 border border-white/30"
            >
              <div className="flex">
                <button
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    showSkills 
                      ? "bg-white/20 text-white shadow-md border border-white/30" 
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {t("skillsTab")}
                </button>
                <button
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    !showSkills 
                      ? "bg-white/20 text-white shadow-md border border-white/30" 
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {t("toolsTab")}
                </button>
              </div>
            </div>
          </div>

          {/* Skills/Tools Grid */}
          <div className="relative overflow-hidden">
            
            {/* Skills List */}
            <div 
              className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ${
                showSkills 
                  ? "opacity-100 transform translate-x-0" 
                  : "opacity-0 transform translate-x-full absolute inset-0"
              }`}
            >
              {skillsData.map((skill, index) => (
                <div
                  key={skill.name}
                  className="bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border border-white/20 hover:border-white/40"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-center flex-col text-center">
                    <FontAwesomeIcon
                      icon={skill.icon}
                      className={`text-5xl ${skill.color} mb-6 transition-transform duration-300 hover:scale-110`}
                    />
                    <h3 className="text-xl font-bold text-white">
                      {skill.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Tools List */}
            <div 
              className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-500 ${
                !showSkills 
                  ? "opacity-100 transform translate-x-0" 
                  : "opacity-0 transform -translate-x-full absolute inset-0"
              }`}
            >
              {toolsData.map((tool, index) => (
                <div
                  key={tool.name}
                  className="bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border border-white/20 hover:border-white/40"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-center flex-col text-center">
                    <FontAwesomeIcon
                      icon={tool.icon}
                      className={`text-5xl ${tool.color} mb-6 transition-transform duration-300 hover:scale-110`}
                    />
                    <h3 className="text-xl font-bold text-white mb-2">
                      {tool.name}
                    </h3>
                    <p className="text-sm text-white/70">
                      {t("developmentTool")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-16 text-center">
            <div className="bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                {t("continuousLearning")}
              </h3>
              <p className="text-white/80 mb-6">
                {t("continuousLearningDescription")}
              </p>
              
              
              <Link 
                to="/projects"
                className="group relative inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-lg text-white font-semibold py-4 px-8 rounded-xl border border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
              >
                {/* Button Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Button Content */}
                <div className="relative flex items-center gap-3">
                  <span>{t("viewMyProjects")}</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;