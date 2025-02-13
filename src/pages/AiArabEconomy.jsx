import aiGame from "../assets/gameDevelopment.jpeg";
import aiBanking from "../assets/financeBanking.jpeg";
import aiEnergy from "../assets/energySustainability.jpeg";
import aiCommerce from "../assets/ecommerce.jpeg";
import useTranslation from "../hooks/useTranslation";
import useLanguageStore from "../store/useLanguageStore";

const AiArabEconomy = () => {
  const t = useTranslation();
  const { language } = useLanguageStore();

  return (
    <div className="">
      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-[calc(100vh-4rem)] relative flex items-center pt-28"
      >
        <div className="mx-auto px-4">
          <div className="max-w-3xl space-y-6">
            <h1
              className={`text-4xl md:text-6xl font-bold font-robotoMono ${
                language === "ar" ? "text-right" : "text-left"
              }`}
            >
              {t("h6")}
            </h1>
            <p
              className={`text-xl text-base-content/70 font-montserrat ${
                language === "ar" ? "text-right" : "text-left"
              }`}
            >
              {t("d6")}
            </p>
            <p
              className={`text-lg text-base-content/80 font-firaCode ${
                language === "ar" ? "text-right" : "text-left"
              }`}
            >
              {t("p6")}
            </p>
          </div>
        </div>
      </section>

      {/* How AI is Driving Economic Transformation Section */}
      <section id="economic-transformation" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2
              className={`text-3xl font-robotoMono ${
                language === "ar" ? "text-right" : "text-left"
              }`}
            >
              {t("h7")}
            </h2>
            <p
              className={`text-base-content/70 font-montserrat ${
                language === "ar" ? "text-right" : "text-left"
              }`}
            >
              {t("d7")}
            </p>
          </div>

          {/* AI in Finance & Banking */}
          <div className="mt-16 grid md:grid-cols-2 gap-8 items-center pt-20">
            <div className="space-y-6">
              <h3
                className={`text-2xl font-robotoMono ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("h8")}
              </h3>
              <h4
                className={`text-xl font-montserrat ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("d8")}
              </h4>
              <p
                className={`text-base-content/70 font-firaCode ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("p8")}
              </p>
              <a
                href="https://www.mckinsey.com/industries/financial-services/how-we-help-clients/how-a-uae-bank-transformed-to-lead-with-ai-and-advanced-analytics"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Learn More
              </a>
            </div>
            <figure>
              <img
                src={aiBanking}
                alt="AI in Finance & Banking"
                className="w-full max-h-96 rounded-lg shadow-lg"
              />
            </figure>
          </div>

          {/* AI in Energy & Sustainability */}
          <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
            <figure>
              <img
                src={aiEnergy}
                alt="AI in Energy & Sustainability"
                className="w-full max-h-96 rounded-lg shadow-lg"
              />
            </figure>
            <div className="space-y-6">
              <h3
                className={`text-2xl font-robotoMono ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("h9")}
              </h3>
              <h4
                className={`text-xl font-montserrat ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("d9")}
              </h4>
              <p
                className={`text-base-content/70 font-firaCode ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("p9")}
              </p>
              <a
                href="https://saudienergyconsulting.com/predicting-energy-demand-with-ai-in-saudi-arabia/#:~:text=AI%2Ddriven%20solutions%20are%20also,overall%20reliability%20of%20the%20grid."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* AI in Ecommerce & Supply Chain */}
          <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3
                className={`text-2xl font-robotoMono ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("h10")}
              </h3>
              <h4
                className={`text-xl font-montserrat ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("d10")}
              </h4>
              <p
                className={`text-base-content/70 font-firaCode ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("p10")}
              </p>
              <a
                href="https://www.sary.com/en"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Visit Sary
              </a>
            </div>
            <figure>
              <img
                src={aiCommerce}
                alt="AI in Ecommerce & Supply Chain"
                className="w-full max-h-96 rounded-lg shadow-lg"
              />
            </figure>
          </div>

          {/* AI in Game Development */}
          <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
            <figure>
              <img
                src={aiGame}
                alt="AI in Game Development"
                className="w-full max-h-96 rounded-lg shadow-lg"
              />
            </figure>
            <div className="space-y-6">
              <h3
                className={`text-2xl font-robotoMono ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("h11")}
              </h3>
              <h4
                className={`text-xl font-montserrat ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("d11")}
              </h4>
              <p
                className={`text-base-content/70 font-firaCode ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("p11")}
              </p>
              <a
                href="https://tamatem.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Visit Tamatem
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiArabEconomy;
