import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      Home: "Home",
      about_Me: "About",
      projects: "Projects",
      skills: "skills",
      GetInTouch: "contact",
     Learnaboutme :"Learn More About Me"  ,
     myProject :"Check Out My Projects " , 
     contactMe :"Contact",
    },
  },
  de: {
    translation: {
      Home: "Startseite",
      about_Me: "Über mich",
      projects: "Projekte",
      GetInTouch: "Kontaktiere mich",
      skills: "Fähigkeiten",
      MySkills: "Meine Fähigkeiten",
      Learnaboutme :"Mehr über mich erfahren",
      myProject: "Schau dir meine Projekte an",
      contactMe :"Kontaktiere mich",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
