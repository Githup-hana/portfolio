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

        {/* Desktop Navigation - Ab 768px sichtbar */}
        <nav className="hidden md:flex justify-center items-center space-x-2 flex-1 px-4">
          <NavLink to="/" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-app-text dark:text-app-text-dark hover:text-blue-600 dark:hover:text-blue-400">
            <FaHome />
            <span>{t("Home")}</span>
          </NavLink>
          
          <NavLink to="/about-me" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-app-text dark:text-app-text-dark hover:text-blue-600 dark:hover:text-blue-400">
            <FaUser />
            <span>{t("about_Me")}</span>
          </NavLink>
          
          <NavLink to="/projects" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-app-text dark:text-app-text-dark hover:text-blue-600 dark:hover:text-blue-400">
            <FaFolderOpen />
            <span>{t("projects")}</span>
          </NavLink>
          
          <NavLink to="/skills" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-app-text dark:text-app-text-dark hover:text-blue-600 dark:hover:text-blue-400">
            <FaCode />
            <span>{t("skills")}</span>
          </NavLink>
          
          <NavLink to="/get-in-touch" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-app-text dark:text-app-text-dark hover:text-blue-600 dark:hover:text-blue-400">
            <FaEnvelope />
            <span>{t("GetInTouch")}</span>
          </NavLink>
        </nav>

        {/* Right Controls */}
        <div className="flex items-center space-x-3">
          {/* Controls immer sichtbar */}
          <Languagebutt />
          <ThemeToggle />
          
          {/* Burger nur auf Mobile */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg text-app-text dark:text-app-text-dark hover:bg-gray-100 dark:hover:bg-gray-800/50"
          >
            {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <nav className="px-4 pb-4 space-y-2 border-t border-sand/20 dark:border-app-text-dark/20">
          <NavLink to="/" onClick={closeMobileMenu} className="flex items-center gap-3 px-4 py-3 text-app-text dark:text-app-text-dark">
            <FaHome /> {t("Home")}
          </NavLink>
          <NavLink to="/about-me" onClick={closeMobileMenu} className="flex items-center gap-3 px-4 py-3 text-app-text dark:text-app-text-dark">
            <FaUser /> {t("about_Me")}
          </NavLink>
          <NavLink to="/projects" onClick={closeMobileMenu} className="flex items-center gap-3 px-4 py-3 text-app-text dark:text-app-text-dark">
            <FaFolderOpen /> {t("projects")}
          </NavLink>
          <NavLink to="/skills" onClick={closeMobileMenu} className="flex items-center gap-3 px-4 py-3 text-app-text dark:text-app-text-dark">
            <FaCode /> {t("skills")}
          </NavLink>
          <NavLink to="/get-in-touch" onClick={closeMobileMenu} className="flex items-center gap-3 px-4 py-3 text-app-text dark:text-app-text-dark">
            <FaEnvelope /> {t("GetInTouch")}
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default MainNavbar;