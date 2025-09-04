import { useTranslation } from "react-i18next";
import myResume from "../../../assets/My Resume (2).pdf";
import webImg from "../../../assets/ webdeweloper2.jpg";

function About() {
  const { t } = useTranslation();

  return (
    <div 
      className="min-h-screen relative flex items-center justify-center py-16 px-4"
      style={{
        backgroundImage: `url(${webImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-black/60 dark:bg-black/70"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span>{t("aboutMeTitle")}</span>
          </h1>
        </div>

        <div className="max-w-6xl mx-auto bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
          
          <div className="space-y-6 text-white/90 text-lg leading-relaxed">
            <p>
              {t("aboutIntro").split("Fullstack Web Developer").map((part, index) => (
                index === 0 ? (
                  <span key={index}>
                    {part}<strong className="text-white">{t("fullstackDeveloper")}</strong>
                  </span>
                ) : (
                  <span key={index}>{part}</span>
                )
              ))}
            </p>

            <p>
              {t("aboutSkills")}
            </p>

            <p>
              {t("aboutPhilosophy")}
            </p>

            <p>
              {t("aboutConclusion")}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
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
        </div>
      </div>
    </div>
  );
}

export default About;