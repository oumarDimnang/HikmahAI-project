import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown, Settings } from "lucide-react";
import useLanguageStore from "../store/useLanguageStore";
import useTranslation from "../hooks/useTranslation";

const MobileMenu = ({ isOpen, onClose }) => {
  const { language, toggleLanguage } = useLanguageStore();
  const t = useTranslation();
  const navigate = useNavigate();

  if (!isOpen) return null;

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
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />

      {/* Menu */}
      <div
        className={`fixed inset-y-0 right-0 w-full max-w-sm z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } bg-base-100 shadow-xl flex flex-col`}
      >
        {/* Header */}
        <div className="h-24 px-4 flex items-center justify-between border-b border-base-300 bg-base-100 p-9">
          <span className="font-semibold text-base-content">Menu</span>
          <button
            onClick={onClose}
            className="btn btn-ghost btn-sm px-2 text-base-content"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col p-4 gap-2 bg-base-100 flex-1">
          <div className="dropdown dropdown-hover">
            <button className="btn-md gap-2 hover:text-secondary flex items-center">
              <span>{t("responsibleAI")}</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link to="/ai-for-good">
                  <button>
                    <span>{t("aiForGood")}</span>
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/ai-arab-economy">
                  <button>
                    <span>{t("aiEconomy")}</span>
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/ai-education">
                  <button>
                    <span>{t("aiEducation")}</span>
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/using-ai">
                  <button>
                    <span>{t("usingAI")}</span>
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/ai-principles">
                  <button>
                    <span>{t("aiPrinciples")}</span>
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          <Link
            to="/resources"
            className="btn btn-ghost justify-start h-12 px-4 w-full"
            onClick={onClose}
          >
            {t("resources")}
          </Link>
          <Link
            to="/youth-ai"
            className="btn btn-ghost justify-start h-12 px-4 w-full"
            onClick={onClose}
          >
            {t("youthAI")}
          </Link>
          <div className="dropdown dropdown-hover">
            <button className="btn-md gap-2 hover:text-secondary flex items-center">
              <span>{t("about")}</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <button
                  onClick={() => handleNavigation("team")}
                  className="btn-ghost"
                >
                  <span>{t("team")}</span>
                </button>
              </li>
              <li>
                <Link to="/about-hikmah">
                  <button>
                    <span>{t("aboutHikmah")}</span>
                  </button>
                </Link>
              </li>
            </ul>
          </div>

          <div className="divider my-2"></div>

          <button
            onClick={toggleLanguage}
            className="btn btn-ghost justify-start h-12 px-4 w-full"
          >
            {language === "en" ? "عربي" : "English"}
          </button>

          <Link
            to="/settings"
            className="btn btn-ghost justify-start h-12 px-4 w-full"
            onClick={onClose}
          >
            <Settings className="w-4 h-4 mr-2" />
            {t("mode")}
          </Link>
        </nav>
      </div>
    </>
  );
};

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default MobileMenu;
