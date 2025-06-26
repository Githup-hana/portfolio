import { createContext, useContext, useState } from "react";

import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
const LangContext = createContext({} as any);

function LanguageSwitcher({ children }: { children: ReactNode }) {
  const { i18n } = useTranslation();

  const [language, setLanguage] = useState(() =>
    localStorage.getItem("language") || i18n.language
  );
  const changeLanguage = (lng: string) => {
    console.log(`Sprache wechseln zu: ${lng}`);
    i18n.changeLanguage(lng);
    setLanguage(lng);
    localStorage.setItem("language", lng);
  };

  return (
    <>
      <LangContext.Provider value={{ language, changeLanguage }}>
        {children}
      </LangContext.Provider>
    </>
  );
}
export function useLang() {
  return useContext(LangContext);
}
export default LanguageSwitcher;
