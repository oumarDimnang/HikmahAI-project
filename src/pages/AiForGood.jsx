import useTranslation from "../hooks/useTranslation";
import climateChange from "../assets/climateChange.json";
import socialGood from "../assets/socialGood.json";
import "@lottiefiles/lottie-player";
import useLanguageStore from "../store/useLanguageStore";
const AiForGood = () => {
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
              {t("h1")}
            </h1>
            <p
              className={`text-xl text-base-content/70 font-montserrat ${
                language === "ar" ? "text-right" : "text-left"
              }`}
            >
              {t("d1")}
            </p>
            <p
              className={`text-lg text-base-content/80 font-firaCode ${
                language === "ar" ? "text-right" : "text-left"
              }`}
            >
              {t("p1")}
            </p>
          </div>
        </div>
      </section>

      {/* How AI is Driving Positive Change Section */}
      <section id="positive-change" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2
              className={`text-3xl font-robotoMono ${
                language === "ar" ? "text-right" : "text-left"
              }`}
            >
              {t("h2")}
            </h2>
            <p
              className={`text-base-content/70 font-montserrat ${
                language === "ar" ? "text-right" : "text-left"
              }`}
            >
              {t("d2")}
            </p>
          </div>

          {/* AI for Climate Action */}
          <div className="mt-16 grid md:grid-cols-2 gap-8 items-center pt-20">
            <div className="space-y-6">
              <h3
                className={`text-2xl font-robotoMono ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("h3")}
              </h3>
              <h4
                className={`text-xl font-montserrat ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("d3")}
              </h4>
              <p
                className={`text-base-content/70 font-firaCode ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("p3")}
              </p>
              <a
                href="https://www.biosaline.org/multimedia/icbas-ai-based-app-aims-help-farmers-detect-crop-disruptions"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Learn More
              </a>
            </div>
            <figure>
              {/* Interactive Infographic */}
              <lottie-player
                src={climateChange}
                background="transparent"
                speed="1"
                loop
                autoplay
                className="w-auto h-auto rounded-lg"
              ></lottie-player>
            </figure>
          </div>

          {/* AI in Healthcare */}
          <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
            <figure>
              {/* Animated Illustration */}
              <lottie-player
                src="https://assets9.lottiefiles.com/packages/lf20_5tkzkblw.json"
                background="transparent"
                speed="1"
                loop
                autoplay
                className="w-full h-auto"
              ></lottie-player>
            </figure>
            <div className="space-y-6">
              <h3
                className={`text-2xl font-robotoMono ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("h4")}
              </h3>
              <h4
                className={`text-xl font-semibold font-montserrat ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("d4")}
              </h4>
              <p
                className={`text-base-content/70 font-firaCode ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("p4")}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.communityjameel.org/news/jameel-clinic-at-mit-and-king-faisal-specialist-hospital-and-research-centre-launch-pioneering-ai-early-breast-cancer-detection-tool-in-saudi-arabia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  Learn More
                </a>
                <a
                  href="https://www.mdpi.com/2076-3417/13/21/12087"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  Read Research
                </a>
              </div>
            </div>
          </div>

          {/* AI for Social Good */}
          <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3
                className={`text-2xl font-robotoMono ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("h5")}
              </h3>
              <h4 className="text-xl font-montserrat">{t("d5")}</h4>
              <p
                className={`text-base-content/70 font-firaCode ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("p5")}
              </p>
              <p
                className={`text-base-content/70 font-firaCode ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("t5")}
              </p>
              <a
                href="https://www.qf.org.qa/stories/how-qfs-qcri-is-shaping-the-future-of-arabic-language-across-digital-spaces"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Learn More
              </a>
            </div>
            <figure>
              {/* Interactive Infographic */}
              <lottie-player
                src={socialGood}
                background="transparent"
                speed="1"
                loop
                autoplay
                className="w-full h-auto"
              ></lottie-player>
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiForGood;
