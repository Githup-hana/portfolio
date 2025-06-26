import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import SocialIcons from "../../../Components/socialcons";
import avatar from "../../../assets/myAvater.jpg";

function Home() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-app-bg dark:bg-app-bg-dark text-app-text dark:text-app-text-dark">
      {/* Hero Section with Background Pattern */}
      
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-app-bg via-app-bg/90 to-app-text/10 dark:from-app-bg-dark dark:via-app-bg-dark/90 dark:to-app-text-dark/10"></div>
        
        {/* Decorative Circles */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-app-text/10 dark:bg-app-text-dark/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-app-text/15 dark:bg-app-text-dark/15 rounded-full blur-lg"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-app-text to-app-text/70 dark:from-app-text-dark dark:to-app-text-dark/70 bg-clip-text text-transparent">
              Welcome to My Portfolio
            </h1>
            <p className="text-lg sm:text-xl text-app-text/80 dark:text-app-text-dark/80 max-w-2xl mx-auto">
              {t("heroDescription", { 
                defaultValue: "Crafting digital experiences with passion and precision" 
              })}
            </p>
          </div>
        </div>
     

      {/* Profile Section */}
      <div className="-mt-32 relative z-20 flex flex-col items-center px-4 pb-20">
        {/* Profile Card */}
        <div className="bg-app-bg/80 dark:bg-app-bg-dark/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-app-text/10 dark:border-app-text-dark/10 max-w-4xl w-full">
          {/* Avatar */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <img
                src={avatar}
                alt="Hana Mustermann"
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-app-bg dark:border-app-bg-dark shadow-xl object-cover"
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-app-bg dark:border-app-bg-dark"></div>
            </div>
          </div>

          {/* Name and Title */}
          <div className="text-center mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-app-text dark:text-app-text-dark mb-2">
              Hana Abrham
            </h2>
            <p className="text-lg sm:text-xl text-app-text/70 dark:text-app-text-dark/70 font-medium">
              {t("fullstackDeveloper", { defaultValue: "Fullstack Web Developer" })}
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center mb-8">
            <div className="flex gap-4 text-2xl text-app-text/60 dark:text-app-text-dark/60">
              <SocialIcons />
            </div>
          </div>

          {/* Description */}
          <p className="text-center text-app-text/80 dark:text-app-text-dark/80 leading-relaxed max-w-2xl mx-auto mb-8">
            {t("homeIntro", {
              defaultValue:
                "I'm passionate about building clean, efficient, and scalable web applications. With a focus on modern technologies and user experience, I create digital solutions that make a difference.",
            })}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link
              to="/about-me"
              className="group px-6 py-3 bg-app-text dark:bg-app-text-dark text-app-bg dark:text-app-bg-dark rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                {t("learnAboutMe", { defaultValue: "Learn About Me" })}
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>
            
            <Link
              to="/projects"
              className="px-6 py-3 border-2 border-app-text dark:border-app-text-dark text-app-text dark:text-app-text-dark rounded-full font-semibold hover:bg-app-text/10 dark:hover:bg-app-text-dark/10 transform hover:-translate-y-1 transition-all duration-300"
            >
              {t("checkProjects", { defaultValue: "View Projects" })}
            </Link>
            
            <Link
              to="/skills"
              className="px-6 py-3 border-2 border-app-text dark:border-app-text-dark text-app-text dark:text-app-text-dark rounded-full font-semibold hover:bg-app-text/10 dark:hover:bg-app-text-dark/10 transform hover:-translate-y-1 transition-all duration-300"
            >
              {t("mySkills", { defaultValue: "My Skills" })}
            </Link>
          </div>

          {/* Quote Section */}
          <div className="border-t border-app-text/20 dark:border-app-text-dark/20 pt-8">
            <blockquote className="text-center italic text-app-text/70 dark:text-app-text-dark/70 max-w-2xl mx-auto">
              <p className="text-lg mb-4">
                "In life, there's no such thing as staying where you are. If you are
                not actively growing, you are inevitably falling behind."
              </p>
              <footer className="text-sm text-app-text/50 dark:text-app-text-dark/50">
                — The Lubavitcher Rebbe
              </footer>
            </blockquote>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-app-text/80 dark:text-app-text-dark/80 mb-6 text-lg">
            Ready to work together?
          </p>
          <Link
            to="/get-in-touch"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-app-text to-app-text/80 dark:from-app-text-dark dark:to-app-text-dark/80 text-app-bg dark:text-app-bg-dark rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
          >
            <span>{t("contactMe", { defaultValue: "Get In Touch" })}</span>
            <span className="text-xl">✨</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;