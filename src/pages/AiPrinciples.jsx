import justiceImage from "../assets/justice.jpeg"; // Replace with your image
import socialGoodImage from "../assets/socialGoods.jpeg"; // Replace with your image
import privacyImage from "../assets/privacy.jpeg"; // Replace with your image
import environmentImage from "../assets/khalifa.jpeg"; // Replace with your image

import useTranslation from "../hooks/useTranslation";
import useLanguageStore from "../store/useLanguageStore";

const AiPrinciples = () => {
  const t = useTranslation();
  const { language } = useLanguageStore();

  return (
    <div className="">
      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-[calc(100vh-4rem)] relative flex items-center pt-20"
      >
        <div className="mx-auto px-4">
          <div className="max-w-3xl space-y-6">
            <h1
              className={`text-4xl md:text-6xl font-bold font-robotoMono ${
                language === "ar" ? "text-right" : "text-left"
              }`}
            >
              {t("h32")}
            </h1>
            <p
              className={`text-xl text-base-content/70 font-montserrat ${
                language === "ar" ? "text-right" : "text-left"
              }`}
            >
              {t("d32")}
            </p>
            <p
              className={`text-lg text-base-content/80 font-firaCode ${
                language === "ar" ? "text-right" : "text-left"
              }`}
            >
              {t("p32")}
            </p>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section id="principles" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2
              className={`text-3xl font-robotoMono ${
                language === "ar" ? "text-right" : "text-left"
              }`}
            >
              {t("h33")}
            </h2>
            <p
              className={`text-base-content/70 font-montserrat ${
                language === "ar" ? "text-right" : "text-left"
              }`}
            >
              {t("d33")}
            </p>
          </div>

          {/* Justice & Fairness */}
          <div className="mt-16 grid md:grid-cols-2 gap-8 items-center pt-20">
            <div className="space-y-6">
              <h3
                className={`text-2xl font-robotoMono ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("h34")}
              </h3>
              <p
                className={`text-base-content/70 font-firaCode ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("d34")}
              </p>
            </div>
            <figure>
              <img
                src={justiceImage}
                alt="Justice & Fairness"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </figure>
          </div>

          {/* Social Good */}
          <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
            <figure>
              <img
                src={socialGoodImage}
                alt="Social Good"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </figure>
            <div className="space-y-6">
              <h3
                className={`text-2xl font-robotoMono ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("h35")}
              </h3>
              <p
                className={`text-base-content/70 font-firaCode ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("d35")}
              </p>
            </div>
          </div>

          {/* Privacy */}
          <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3
                className={`text-2xl font-robotoMono ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("h36")}
              </h3>
              <p
                className={`text-base-content/70 font-firaCode ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("d36")}
              </p>
            </div>
            <figure>
              <img
                src={privacyImage}
                alt="Privacy"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </figure>
          </div>

          {/* Environmental Stewardship */}
          <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
            <figure>
              <img
                src={environmentImage}
                alt="Environmental Stewardship"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </figure>
            <div className="space-y-6">
              <h3
                className={`text-2xl font-robotoMono ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("h37")}
              </h3>
              <p
                className={`text-base-content/70 font-firaCode ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("d37")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiPrinciples;
