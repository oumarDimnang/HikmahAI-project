import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Settings } from "lucide-react";
import useLanguageStore from "../store/useLanguageStore";
import useTranslation from "../hooks/useTranslation";

const MobileMenu = ({ isOpen, onClose }) => {
  const { language, toggleLanguage } = useLanguageStore();
  const t = useTranslation();

  if (!isOpen) return null;

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
          <Link
            to="/"
            className="btn btn-ghost justify-start h-12 px-4 w-full"
            onClick={onClose}
          >
            {t("responsibleAI")}
          </Link>
          <Link
            to="/"
            className="btn btn-ghost justify-start h-12 px-4 w-full"
            onClick={onClose}
          >
            {t("caseStudies")}
          </Link>
          <Link
            to="/"
            className="btn btn-ghost justify-start h-12 px-4 w-full"
            onClick={onClose}
          >
            {t("resources")}
          </Link>
          <Link
            to="/"
            className="btn btn-ghost justify-start h-12 px-4 w-full"
            onClick={onClose}
          >
            {t("team")}
          </Link>

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
