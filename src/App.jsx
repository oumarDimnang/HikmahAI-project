import { useLocation } from "react-router-dom"; // Import useLocation
import Navbar from "./components/Navbar.jsx";
import { useThemeStore } from "./store/useThemeStore.js";
import { Routes, Route } from "react-router-dom";
import SettingsPage from "./pages/SettingsPage.jsx";
import AiForGood from "./pages/AiForGood.jsx";
import AiArabEconomy from "./pages/AiArabEconomy.jsx";
import AiEducation from "./pages/AiEducation.jsx";
import UsingAiWorkplace from "./pages/UsingAiWorkplace.jsx";
import AiPrinciples from "./pages/AiPrinciples.jsx";
import Resources from "./pages/Resources.jsx";
import AboutHikmahAI from "./pages/AboutHikmahAI.jsx";
import Home from "./pages/Home.jsx";
import YouthAI from "./pages/YouthAI.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  const { theme } = useThemeStore();
  const location = useLocation(); // Get the current location

  // Conditionally render Navbar if the path is not "/youth-ai"
  const showNavbar = location.pathname !== "/youth-ai";

  return (
    <div data-theme={theme}>
      {showNavbar && <Navbar />}{" "}
      {/* Render Navbar only if showNavbar is true */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai-for-good" element={<AiForGood />} />
        <Route path="/ai-arab-economy" element={<AiArabEconomy />} />
        <Route path="/ai-education" element={<AiEducation />} />
        <Route path="/using-ai" element={<UsingAiWorkplace />} />
        <Route path="/ai-principles" element={<AiPrinciples />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/about-hikmah" element={<AboutHikmahAI />} />
        <Route path="/youth-ai" element={<YouthAI />} />
      </Routes>
      {showNavbar && <Footer />}{" "}
    </div>
  );
};

export default App;
