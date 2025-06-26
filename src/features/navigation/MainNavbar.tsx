import Languagebutt from "../../Components/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";


import {
  FaCode,
  FaEnvelope,
  FaFolderOpen,
  FaHome,
  FaUser,
} from "react-icons/fa";

function MainNavbar() {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center">
      {/* <div className="flex  flex-col sm:flex-row justify-end "> */}
      {/* <button 
          className="lg:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button> */}

      <nav className="flex justify-between flex-col sm:flex-row lg:justify-end   space-x-8  p-2 mb-2 rounded-3xl lg:w-xl ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-2 ${
              isActive ? "text-red-500" : "text-sand dark:text-white"
            }`
          }
        >
          <FaHome />
          {t("Home")}
        </NavLink>
        <NavLink
          to="/about-me"
          className={({ isActive }) =>
            `flex items-center gap-2 ${
              isActive ? "text-red-500" : "text-sand dark:text-white"
            }`
          }
        >
          <FaUser />
          {t("about_Me")}
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `flex items-center gap-2 ${
              isActive ? "text-red-500" : "text-sand dark:text-white"
            }`
          }
        >
          <FaFolderOpen />
          {t("projects")}
        </NavLink>
        <NavLink
          to="/skills"
          className={({ isActive }) =>
            `flex items-center gap-2 ${
              isActive ? "text-red-500" : "text-sand dark:text-white"
            }`
          }
        >
          <FaCode />
          {t("skills")}
        </NavLink>
        <NavLink
          to="/get-in-touch"
          className={({ isActive }) =>
            `flex items-center gap-2 ${
              isActive ? "text-red-500" : "text-sand dark:text-white"
            }`
          }
        >
          <FaEnvelope />
          {t("GetInTouch")}
        </NavLink>
      </nav>
      <Languagebutt />
      
    </div>
    // </div>
  );
}

export default MainNavbar;
