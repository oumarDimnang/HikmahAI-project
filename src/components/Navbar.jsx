import { Link, useNavigate } from "react-router-dom";
import { MessageSquare, Settings, Menu } from "lucide-react";
import useLanguageStore from "../store/useLanguageStore";
import useTranslation from "../hooks/useTranslation";
import { useState } from "react";
import MobileMenu from "./MobileMenu"; // Import the MobileMenu component

const Navbar = () => {
  const navigate = useNavigate();
  const { language, toggleLanguage } = useLanguageStore();
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
              <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>
              <h1 className="lg:text-3xl font-bold">HikmahAI</h1>
            </Link>
          </div>

          {/* Navigation Buttons (Hidden on Mobile) */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={() => handleNavigation("responsibleai")}
              className="btn-md gap-2 hover:text-secondary"
            >
              <span>{t("responsibleAI")}</span>
            </button>

            <button
              onClick={() => handleNavigation("casestudies")}
              className="btn-md gap-2 hover:text-secondary"
            >
              <span>{t("caseStudies")}</span>
            </button>

            <button
              onClick={() => handleNavigation("resources")}
              className="btn-md gap-2 hover:text-secondary"
            >
              <span>{t("resources")}</span>
            </button>

            <button
              onClick={() => handleNavigation("team")}
              className="btn-md gap-2 hover:text-secondary"
            >
              <span>{t("team")}</span>
            </button>
          </div>

          {/* Mode and Language buttons (Hidden on Mobile) */}
          <div className="hidden lg:flex items-center gap-2">
            <Link to="/settings" className="btn btn-md gap-2 transition-colors">
              <Settings className="w-4 h-4" />
              <span>{t("mode")}</span>
            </Link>
            <button
              onClick={toggleLanguage}
              className="btn btn-md gap-2 transition-colors"
            >
              <span>{language === "en" ? "عربي" : "English"}</span>
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
