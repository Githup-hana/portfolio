import { FaGlobe } from "react-icons/fa";
import { useLang } from "./LanguageContext";

function Languagebutt() {
  const {language, changeLanguage} = useLang();

  return (
    <div className="flex justify-center items-center space-x-4">
      <button
        className="text-yellow-500"
        onClick={() => changeLanguage(language === "en" ? "de" : "en")}
        aria-label={`Switch to ${language === "en" ? "German" : "English"}`}
      >
   <div className="flex items-center gap-2 text-sand dark:text-white">
  {language === "en" ? "English" : "Deutsch"}
  <FaGlobe />
</div>
      
      </button>
    </div>
  );
}

export default Languagebutt;
