import { Link, useNavigate } from "react-router-dom";
import { Menu, Lightbulb, ChevronDown } from "lucide-react"; // Import ChevronDown for the dropdown icon
import useLanguageStore from "../store/useLanguageStore";
import useTranslation from "../hooks/useTranslation";
import { useState } from "react";
import MobileMenu from "./MobileMenu"; // Import the MobileMenu component
import { useThemeStore } from "../store/useThemeStore"; // Import the useThemeStore hook
import logoLight from "../assets/logo-light.png";
import logoDark from "../assets/logo-dark.png";

const Navbar = () => {
  const navigate = useNavigate();
  const { language, toggleLanguage } = useLanguageStore();
  const { theme } = useThemeStore(); // Get the current theme
  const t = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  const handleNavigation = (to) => {
    if (window.location.pathname !== "/") {
      navigate("/");
    }
    setTimeout(() => {
      const section = document.getElementById(to);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  // Conditional logo based on theme
  const getLogoSrc = () => {
    if (
      theme === "dark" ||
      theme === "synthwave" ||
      theme === "halloween" ||
      theme === "forest" ||
      theme === "aqua" ||
      theme === "black" ||
      theme === "dracula" ||
      theme === "night" ||
      theme === "coffee" ||
      theme === "dim" ||
      theme === "sunset"
    ) {
      return logoLight; // Light logo for dark mode
    } else {
      return logoDark; // Dark logo for light mode
    }
  };

  return (
    <header className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 backdrop-blur-lg bg-base-100/80">
      <div className="container mx-auto px-4 h-24">
        <div className="flex items-center justify-between h-full">
          {/* Logo and Name */}
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="flex items-center gap-2.5 hover:opacity-80 transition-all"
            >
              {/* Logo dynamically rendered */}
              <img src={getLogoSrc()} alt="Logo" className="h-12" />
              <h1 className="lg:text-3xl font-bold font-robotoMono">
                HikmahAI
              </h1>
            </Link>
          </div>

          {/* Navigation Buttons (Hidden on Mobile) */}
          <div className="hidden lg:flex items-center gap-2">
            {/* Dropdown Responsible AI */}
            <div className="dropdown dropdown-hover">
              <button className="btn-md gap-2 hover:text-secondary flex items-center">
                <span className="font-firaCode">{t("responsibleAI")}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <Link to="/ai-for-good">
                    <button>
                      <span className="font-firaCode">{t("aiForGood")}</span>
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/ai-arab-economy">
                    <button>
                      <span className="font-firaCode">{t("aiEconomy")}</span>
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/ai-education">
                    <button>
                      <span className="font-firaCode">{t("aiEducation")}</span>
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/using-ai">
                    <button>
                      <span className="font-firaCode">{t("usingAI")}</span>
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/ai-principles">
                    <button>
                      <span className="font-firaCode">{t("aiPrinciples")}</span>
                    </button>
                  </Link>
                </li>
              </ul>
            </div>

            <Link to="/resources">
              <button className="btn-md gap-2 hover:text-secondary">
                <span className="font-firaCode">{t("resources")}</span>
              </button>
            </Link>

            <Link to="/youth-ai">
              <button className="btn-md gap-2 hover:text-secondary">
                <span className="font-firaCode">{t("youthAI")}</span>
              </button>
            </Link>

            {/* Dropdown for About */}
            <div className="dropdown dropdown-hover">
              <button className="btn-md gap-2 hover:text-secondary flex items-center">
                <span className="font-firaCode">{t("about")}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <button
                    onClick={() => handleNavigation("team")}
                    className="btn-ghost"
                  >
                    <span className="font-firaCode">{t("team")}</span>
                  </button>
                </li>
                <li>
                  <Link to="/about-hikmah">
                    <button>
                      <span className="font-firaCode">{t("aboutHikmah")}</span>
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Mode and Language buttons (Hidden on Mobile) */}
          <div className="hidden lg:flex items-center gap-2">
            <Link to="/settings" className="btn btn-md gap-2 transition-colors">
              <Lightbulb className="w-4 h-4" />
              <span className="font-firaCode">{t("mode")}</span>
            </Link>
            <button
              onClick={toggleLanguage}
              className="btn btn-md gap-2 transition-colors"
            >
              <span className="font-firaCode">
                {language === "en" ? "عربي" : "English"}
              </span>
            </button>
          </div>

          {/* Hamburger Menu Button (Visible on Mobile) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden btn btn-ghost"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu (Conditionally Rendered) */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
};

export default Navbar;
