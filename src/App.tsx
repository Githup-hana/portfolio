import { BrowserRouter } from "react-router";
import "./App.css";
import "../src/features/pages_styles/skills.css";
import "../src/features/pages_styles/about-me.css";
import "../src/features/pages_styles/home.css";
import "../src/features/pages_styles/projects.css";
import MainNavbar from "./features/navigation/MainNavbar";
import AllRouts from "./features/routing/AllRoutes";
import LanguageSwitcher from "./Components/LanguageContext";
import ThemeToggle from "./Components/ThemeToggele";
import Footer from "./Components/Footer";

function App() {
  return (
    <LanguageSwitcher>
      <div className="min-h-screen bg-app-bg dark:bg-app-bg-dark text-app-text dark:text-app-text-dark transition-colors duration-300 flex flex-col">
        <BrowserRouter>
          <div className="fixed top-4 right-4 z-50">
            <ThemeToggle />
          </div>
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