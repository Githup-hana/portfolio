import Languagebutt from "../../Components/LanguageSwitcher";
import ThemeToggle from "../../Components/ThemeToggele";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useState } from "react";

import {
  FaCode,
  FaEnvelope,
  FaFolderOpen,
  FaHome,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function MainNavbar() {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="bg-app-bg dark:bg-app-bg-dark border-b border-sand/30 dark:border-app-text-dark/30 transition-colors duration-300">
      
      <div className="flex justify-between items-center px-4 py-3">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <NavLink 
            to="/" 
            className="text-xl font-bold text-app-text dark:text-app-text-dark hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            onClick={closeMobileMenu}
          >
            Hana
          </NavLink>
        </div>

        {/* Desktop Navigation - Visible on medium screens and above */}
        <nav className=" md:flex justify-center items-center space-x-2 flex-1 px-4">
          <NavLink 
            to="/" 
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
                isActive 
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30' 
                  : 'text-app-text dark:text-app-text-dark hover:text-blue-600 dark:hover:text-blue-400'
              }`
            }
          >
            <FaHome />
            <span>{t("Home")}</span>
          </NavLink>
          
          <NavLink 
            to="/about-me" 
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
                isActive 
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30' 
                  : 'text-app-text dark:text-app-text-dark hover:text-blue-600 dark:hover:text-blue-400'
              }`
            }
          >
            <FaUser />
            <span>{t("about_Me")}</span>
          </NavLink>
          
          <NavLink 
            to="/projects" 
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
                isActive 
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30' 
                  : 'text-app-text dark:text-app-text-dark hover:text-blue-600 dark:hover:text-blue-400'
              }`
            }
          >
            <FaFolderOpen />
            <span>{t("projects")}</span>
          </NavLink>
          
          <NavLink 
            to="/skills" 
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
                isActive 
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30' 
                  : 'text-app-text dark:text-app-text-dark hover:text-blue-600 dark:hover:text-blue-400'
              }`
            }
          >
            <FaCode />
            <span>{t("skills")}</span>
          </NavLink>
          
          <NavLink 
            to="/get-in-touch" 
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
                isActive 
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30' 
                  : 'text-app-text dark:text-app-text-dark hover:text-blue-600 dark:hover:text-blue-400'
              }`
            }
          >
            <FaEnvelope />
            <span>{t("GetInTouch")}</span>
          </NavLink>
        </nav>

        {/* Right Controls */}
        <div className="flex items-center space-x-3">
          {/* Controls always visible */}
          <div className=" md:flex items-center space-x-3">
            <Languagebutt />
            <ThemeToggle />
          </div>
          
          {/* Mobile controls and burger menu */}
          <div className="md:hidden flex items-center space-x-2">
            <Languagebutt />
            <ThemeToggle />
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg text-app-text dark:text-app-text-dark hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors duration-300"
            >
              {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Only visible on small screens when toggled */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen 
          ? 'max-h-96 opacity-100' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <nav className="px-4 pb-4 space-y-2 border-t border-sand/20 dark:border-app-text-dark/20">
          <NavLink 
            to="/" 
            onClick={closeMobileMenu} 
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-300 ${
                isActive 
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30' 
                  : 'text-app-text dark:text-app-text-dark hover:bg-gray-100 dark:hover:bg-gray-800/50'
              }`
            }
          >
            <FaHome /> {t("Home")}
          </NavLink>
          <NavLink 
            to="/about-me" 
            onClick={closeMobileMenu} 
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-300 ${
                isActive 
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30' 
                  : 'text-app-text dark:text-app-text-dark hover:bg-gray-100 dark:hover:bg-gray-800/50'
              }`
            }
          >
            <FaUser /> {t("about_Me")}
          </NavLink>
          <NavLink 
            to="/projects" 
            onClick={closeMobileMenu} 
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-300 ${
                isActive 
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30' 
                  : 'text-app-text dark:text-app-text-dark hover:bg-gray-100 dark:hover:bg-gray-800/50'
              }`
            }
          >
            <FaFolderOpen /> {t("projects")}
          </NavLink>
          <NavLink 
            to="/skills" 
            onClick={closeMobileMenu} 
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-300 ${
                isActive 
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30' 
                  : 'text-app-text dark:text-app-text-dark hover:bg-gray-100 dark:hover:bg-gray-800/50'
              }`
            }
          >
            <FaCode /> {t("skills")}
          </NavLink>
          <NavLink 
            to="/get-in-touch" 
            onClick={closeMobileMenu} 
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-300 ${
                isActive 
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30' 
                  : 'text-app-text dark:text-app-text-dark hover:bg-gray-100 dark:hover:bg-gray-800/50'
              }`
            }
          >
            <FaEnvelope /> {t("GetInTouch")}
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default MainNavbar;