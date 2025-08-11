import { BrowserRouter } from "react-router";
import "./App.css";
import "../src/features/pages_styles/skills.css";
import "../src/features/pages_styles/about-me.css";
import "../src/features/pages_styles/home.css";
import "../src/features/pages_styles/projects.css";
import MainNavbar from "./features/navigation/MainNavbar";
import AllRouts from "./features/routing/AllRoutes";
import LanguageSwitcher from "./Components/LanguageContext";
import Footer from "./Components/Footer";

// ✅ KORREKT: Ihre eigene AnimatedCursor-Komponente verwenden
import AnimatedCursor from "./Components/AnimatedCursor";
import "./styles/cursor.css"; // Ihre CSS-Datei importieren

function App() {
  return (
    <LanguageSwitcher>
      <div className="min-h-screen bg-app-bg dark:bg-app-bg-dark text-app-text dark:text-app-text-dark transition-colors duration-300 flex flex-col">
        
        {/* ✅ Ihre eigene AnimatedCursor-Komponente */}
        <AnimatedCursor />
        
        <BrowserRouter>
          <MainNavbar />
          <main className="flex-grow">
            <AllRouts />
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </LanguageSwitcher>
  );
}

export default App;