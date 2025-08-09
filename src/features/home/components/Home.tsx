import { useTranslation } from "react-i18next";
import myResume from "../../../assets/My Resume (2).pdf";
import SocialIcons from "../../../Components/socialcons";
import avatar from "../../../assets/mypic.jpg";
import webImg from "../../../assets/ webdeweloper2.jpg";
import logo from "../../../assets/mylogo.png";

function Home() {
  const { t } = useTranslation();

  return (
    <div 
      className="min-h-screen relative flex items-center justify-center"
      style={{
        backgroundImage: `url(${webImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Global Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>
      
      {/* Centered Content */}
      <div className="relative z-10 text-center px-4 py-20">
        
        {/* Modern Avatar with Glassmorphism */}
        <div className="mb-12 relative">
          <div className="relative inline-block">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-30 scale-110 animate-pulse"></div>
            
            {/* Avatar */}
            <div className="relative bg-white/20 dark:bg-white/10 backdrop-blur-lg rounded-full p-2 shadow-2xl border border-white/30">
              <img
                src={avatar}
                alt="Hana Abrham"
                className="w-48 h-48 sm:w-56 sm:h-56 rounded-full object-cover shadow-xl"
              />
            </div>
            
            {/* Status Indicator */}
            <div className="absolute -bottom-4 -right-4 bg-green-500 w-12 h-12 rounded-full border-4 border-white dark:border-gray-800 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm">✓</span>
            </div>
          </div>
        </div>

        {/* Modern Typography */}
        <div className="mb-12">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent drop-shadow-2xl">
            Hana Abrham
          </h1>
          
          <div className="relative">
            <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 font-light mb-8 drop-shadow-lg">
              {t("fullstackDeveloper", { defaultValue: "Fullstack Web Developer" })}
            </p>
            
            {/* Animated Underline */}
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Description */}
        <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-12 font-light">
          {t("homeIntro", {
            defaultValue:
              "I'm passionate about building clean, efficient, and scalable web applications. With a focus on modern technologies and user experience, I create digital solutions that make a difference.",
          })}
        </p>

        {/* Modern Social Icons */}
        <div className="mb-12">
          <div className="flex justify-center gap-6">
            <div className="bg-white/20 dark:bg-white/10 backdrop-blur-lg rounded-2xl p-4  shadow-xl hover:bg-white/30 transition-all duration-300 hover:scale-110">
              <SocialIcons />
            </div>
          </div>
        </div>

        {/* Primary Action Buttons */}
   {/* Minimale Glassmorphism Buttons */}
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
  <a
              href={myResume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white hover:bg-white/30 hover:text-white transform hover:scale-105 transition-all duration-300 shadow-lg font-semibold"
            >
              <span>👀</span>
              <span>{t("viewResume")}</span>
            </a>
            
            <a
              href={myResume}
              download="Hana_Abrham_Resume.pdf"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/15 backdrop-blur-md rounded-full border border-white/25 text-white/90 hover:bg-white/25 hover:text-white transform hover:scale-105 transition-all duration-300 shadow-lg font-semibold"
            >
              <span>⬇️</span>
              <span>{t("downloadResume")}</span>
            </a>
</div>

        {/* Quote Section */}
        <div className="bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-3xl  border-white/20 shadow-2xl p-8 max-w-4xl mx-auto">
          <blockquote className="text-center">
            <div className="text-4xl text-white/20 mb-2"></div>
            <p className="text-lg sm:text-xl text-white/90 italic leading-relaxed mb-6 font-light">
              "In life, there's no such thing as staying where you are. If you are
              not actively growing, you are inevitably falling behind."
            </p>
            <footer className="text-white/60 font-medium">
              — The Lubavitcher Rebbe
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
export default Home;