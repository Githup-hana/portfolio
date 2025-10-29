import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3Alt,
  faGitAlt,
  faGithub,
  faHtml5,
  faJs,
  faReact,
  faNodeJs,
  faSass,
  faSlack,
} from "@fortawesome/free-brands-svg-icons";
import { 
  faCode, 
  faDatabase, 
  faCloud, 
  faPaintBrush, 
  faTasks,
  faLeaf,
  faServer,
  faRocket
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import webImg from "../../../assets/ webdeweloper2.jpg";

function SkillsNew() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("frontend");

  // Frontend Technologies
  const frontendSkills = [
    { name: "HTML5", icon: faHtml5, color: "text-orange-500", level: 85, description: "Semantisches HTML & Web Standards" },
    { name: "CSS3", icon: faCss3Alt, color: "text-blue-500", level: 80, description: "Modern CSS, Flexbox & Grid" },
    { name: "JavaScript", icon: faJs, color: "text-yellow-500", level: 80, description: "ES6+, DOM Manipulation" },
    { name: "React", icon: faReact, color: "text-cyan-500", level: 80, description: "Hooks, Context API, Components" },
    { name: "TypeScript", icon: faCode, color: "text-blue-600", level: 80, description: "Type Safety & Interfaces" },
    { name: "Tailwind CSS", icon: faLeaf, color: "text-teal-500", level: 80, description: "Utility-first CSS Framework" },
    { name: "SASS", icon: faSass, color: "text-pink-500", level: 70, description: "CSS Preprocessor & Variables" },
    { name: "Next.js", icon: faReact, color: "text-black dark:text-white", level: 60, description: "SSR & Static Generation" },
    { name: "Vite", icon: faRocket, color: "text-purple-500", level: 75, description: "Fast Build Tool & HMR" },
  ];

  // Backend & Database
  const backendSkills = [
    { name: "Node.js", icon: faNodeJs, color: "text-green-600", level: 80, description: "Server-side JavaScript Runtime" },
    { name: "Bun", icon: faServer, color: "text-orange-600", level: 50, description: "Fast JavaScript Runtime & Package Manager" },
    { name: "MongoDB", icon: faDatabase, color: "text-green-500", level: 80, description: "NoSQL Database & Mongoose" },
  ];

  // Tools & Deployment
  const toolsSkills = [
    { name: "Git", icon: faGitAlt, color: "text-red-500", level: 85, description: "Version Control & Branching" },
    { name: "GitHub", icon: faGithub, color: "text-gray-800 dark:text-white", level: 80, description: "Code Hosting & Collaboration" },
    { name: "Vercel", icon: faCloud, color: "text-black dark:text-white", level: 70, description: "Frontend Deployment Platform" },
    { name: "Render", icon: faCloud, color: "text-blue-600", level: 65, description: "Full-stack Cloud Platform" },
    { name: "Trello", icon: faTasks, color: "text-blue-500", level: 85, description: "Project Management & Organization" },
    { name: "Slack", icon: faSlack, color: "text-purple-600", level: 80, description: "Team Communication & Collaboration" },
    { name: "Canva", icon: faPaintBrush, color: "text-pink-500", level: 85, description: "Design & Visual Content Creation" },
  ];

  const categories = [
    { id: "frontend", name: "Frontend", skills: frontendSkills, emoji: "🎨" },
    { id: "backend", name: "Backend", skills: backendSkills, emoji: "⚙️" },
    { id: "tools", name: "Tools & DevOps", skills: toolsSkills, emoji: "🛠️" },
  ];

  const activeSkills = categories.find((cat) => cat.id === activeCategory)?.skills || [];

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
      <div className="absolute inset-0 bg-black/60 dark:bg-black/75"></div>
      
      {/* Content */}
      <div className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent drop-shadow-2xl mb-6">
              💻 Meine Tech Skills
            </h1>
            
            {/* Animated Underline */}
            <div className="w-40 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mx-auto rounded-full animate-pulse mb-8"></div>
            
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed font-light max-w-3xl mx-auto">
              Moderne Technologien und Tools für professionelle Webentwicklung - 
              von Frontend bis Deployment
            </p>
          </div>

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-3 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25 border-2 border-white/20"
                    : "bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border-2 border-white/10 hover:border-white/30"
                }`}
              >
                <span className="text-xl">{category.emoji}</span>
                <span>{category.name}</span>
                <span className="text-sm opacity-75">({category.skills.length})</span>
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="group bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animation: 'slideInUp 0.6s ease-out forwards'
                }}
              >
                {/* Skill Icon & Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`text-5xl ${skill.color} group-hover:scale-110 transition-transform duration-300 drop-shadow-lg`}>
                    <FontAwesomeIcon icon={skill.icon} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-white/70 mt-1">{skill.description}</p>
                  </div>
                </div>

                {/* Experience Level Badge */}
                <div className="mb-6">
                  <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    skill.level >= 80 ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                    skill.level >= 70 ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                    skill.level >= 60 ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' :
                    'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                  }`}>
                    {skill.level >= 80 ? '⭐ Gut vertraut' : 
                     skill.level >= 70 ? '📚 Aktiv lernend' : 
                     skill.level >= 60 ? '🌱 Grundlagen' : 
                     '🔍 Entdecke'}
                  </span>
                </div>

                {/* Status Indicator */}
                <div className="flex justify-between items-center">
                  <span className="text-sm text-white/60">
                    {skill.level >= 80 ? 'Sicher im Umgang' :
                     skill.level >= 70 ? 'In Entwicklung' :
                     skill.level >= 60 ? 'Erste Projekte' :
                     'Neu für mich'}
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-white/50">lerne</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Experience Summary */}
          <div className="mt-20">
            <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/20 max-w-5xl mx-auto shadow-2xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  🚀 Mein Technologie-Stack
                </h2>
                <p className="text-white/80 text-lg">
                  Professionelle Webentwicklung mit modernen Tools und bewährten Practices
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                  <div className="text-4xl mb-4">🎨</div>
                  <h3 className="font-bold text-blue-300 text-xl mb-3">Frontend Lernen</h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Ich lerne das React-Ökosystem mit TypeScript, moderne CSS-Frameworks wie Tailwind, 
                    und Build-Tools wie Vite für optimale Performance und Developer Experience.
                  </p>
                </div>
                
                <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                  <div className="text-4xl mb-4">⚙️</div>
                  <h3 className="font-bold text-green-300 text-xl mb-3">Backend Entwicklung</h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Ich entwickle Kenntnisse in Node.js und moderne Runtime-Umgebungen wie Bun, 
                    kombiniert mit NoSQL-Datenbanken wie MongoDB für skalierbare Anwendungen.
                  </p>
                </div>
                
                <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                  <div className="text-4xl mb-4">🛠️</div>
                  <h3 className="font-bold text-purple-300 text-xl mb-3">Tools & Workflow</h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Ich lerne professionelle Workflows mit Git/GitHub, Cloud-Deployment über Vercel/Render, 
                    und Projektmanagement mit Trello und Slack für effiziente Zusammenarbeit.
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="p-4 bg-white/5 rounded-xl">
                  <div className="text-2xl font-bold text-blue-400">{frontendSkills.length}</div>
                  <div className="text-sm text-white/70">Frontend Tech</div>
                </div>
                <div className="p-4 bg-white/5 rounded-xl">
                  <div className="text-2xl font-bold text-green-400">{backendSkills.length}</div>
                  <div className="text-sm text-white/70">Backend Tools</div>
                </div>
                <div className="p-4 bg-white/5 rounded-xl">
                  <div className="text-2xl font-bold text-purple-400">{toolsSkills.length}</div>
                  <div className="text-sm text-white/70">DevOps Tools</div>
                </div>
                <div className="p-4 bg-white/5 rounded-xl">
                  <div className="text-2xl font-bold text-yellow-400">Lernend</div>
                  <div className="text-sm text-white/70">Erfahrung</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default SkillsNew;