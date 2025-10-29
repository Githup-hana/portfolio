import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import myResume from "../../../assets/My Resume (2).pdf";
import SocialIcons from "../../../Components/socialcons";
import avatar from "../../../assets/mypassbilder.png";
import webImg from "../../../assets/ webdeweloper2.jpg";

function Home() {
  const { t } = useTranslation();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

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
      <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>
      
      <div className={`relative z-10 text-center px-4 py-20 transition-all duration-1000 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        
        <div className="mb-12 relative group">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-30 scale-110 animate-pulse group-hover:opacity-50 group-hover:scale-125 transition-all duration-500"></div>
            
            <div className="relative bg-white/20 dark:bg-white/10 backdrop-blur-lg rounded-full p-2 shadow-2xl border border-white/30 group-hover:border-white/50 transition-all duration-300 group-hover:scale-105">
              <img
                src={avatar}
                alt="Hana Abrham"
                className="w-48 h-48 sm:w-56 sm:h-56 rounded-full object-cover shadow-xl group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-green-500 w-12 h-12 rounded-full border-4 border-white dark:border-gray-800 flex items-center justify-center shadow-lg animate-bounce group-hover:animate-none group-hover:scale-110 transition-all duration-300">
              <span className="text-white font-bold text-sm">✓</span>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent drop-shadow-2xl animate-pulse">
            Hana Abrham
          </h1>
          
          <div className="relative">
            <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 font-light mb-8 drop-shadow-lg">
              {t("fullstackDeveloper", { defaultValue: "Fullstack Web Developer" })}
            </p>
            
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full animate-pulse hover:w-48 transition-all duration-500"></div>
          </div>
        </div>

        <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-12 font-light">
          {t("homeIntro", {
            defaultValue:
              "I'm passionate about building clean, efficient, and scalable web applications. With a focus on modern technologies and user experience, I create digital solutions that make a difference.",
          })}
        </p>

        <div className="mb-12">
          <div className="flex justify-center gap-6">
            <div className="bg-white/20 dark:bg-white/10 backdrop-blur-lg rounded-2xl p-4 shadow-xl hover:bg-white/30 transition-all duration-300 hover:scale-110 hover:-translate-y-1 group">
              <div className="group-hover:animate-pulse">
                <SocialIcons />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href={myResume}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white hover:bg-white/30 hover:text-white transform hover:scale-105 transition-all duration-300 shadow-lg font-semibold overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></div>
            <span className="relative z-10">👀</span>
            <span className="relative z-10">{t("viewResume")}</span>
          </a>
          
          <a
            href={myResume}
            download="Hana_Abrham_Resume.pdf"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white/15 backdrop-blur-md rounded-full border border-white/25 text-white/90 hover:bg-white/25 hover:text-white transform hover:scale-105 transition-all duration-300 shadow-lg font-semibold overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></div>
            <span className="relative z-10">⬇️</span>
            <span className="relative z-10">{t("downloadResume")}</span>
          </a>
        </div>        <div className="bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-3xl  border-white/20 shadow-2xl p-8 max-w-4xl mx-auto">
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