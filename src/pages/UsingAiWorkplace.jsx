import aiWorkflowEfficiency from "../assets/employeeProd.jpeg"; // Replace with your image
import aiDataDriven from "../assets/decisionMaking.jpeg"; // Replace with your image
import aiRemoteWork from "../assets/remoteWork.jpeg"; // Replace with your image

import useTranslation from "../hooks/useTranslation";
import useLanguageStore from "../store/useLanguageStore";

const UsingAiWorkplace = () => {
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
              {t("h18")}
            </h1>
            <p
              className={`text-xl text-base-content/70 font-montserrat ${
                language === "ar" ? "text-right" : "text-left"
              }`}
            >
              {t("d18")}
            </p>
            <p
              className={`text-lg text-base-content/80 font-firaCode ${
                language === "ar" ? "text-right" : "text-left"
              }`}
            >
              {t("p18")}
            </p>
          </div>
        </div>
      </section>

      {/* How to Use AI Effectively Section */}
      <section id="using-ai-effectively" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2
              className={`text-3xl font-robotoMono ${
                language === "ar" ? "text-right" : "text-left"
              }`}
            >
              {t("h19")}
            </h2>
            <p
              className={`text-base-content/70 font-montserrat ${
                language === "ar" ? "text-right" : "text-left"
              }`}
            >
              {t("d19")}
            </p>
          </div>

          {/* Enhancing Employee Productivity and Workflow Efficiency */}
          <div className="mt-16 grid md:grid-cols-2 gap-8 items-center pt-20">
            <div className="space-y-6">
              <h3
                className={`text-2xl font-robotoMono ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("h20")}
              </h3>
              <p
                className={`text-base-content/70 font-firaCode ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("p20")}
              </p>
              <h4
                className={`text-xl font-montserrat ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("h21")}
              </h4>
              <p
                className={`text-base-content/70 font-firaCode ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("d21")}
              </p>
              <p
                className={`text-base-content/70 font-firaCode ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("p21")}
              </p>
              <a
                href="https://cedar-consulting.com/our-global-offices.html"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Learn More
              </a>
            </div>
            <figure>
              <img
                src={aiWorkflowEfficiency}
                alt="Enhancing Employee Productivity and Workflow Efficiency"
                className="w-full max-h-96 rounded-lg shadow-lg"
              />
            </figure>
          </div>

          {/* Data-Driven Decision Making */}
          <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
            <figure>
              <img
                src={aiDataDriven}
                alt="Data-Driven Decision Making"
                className="w-full max-h-96 rounded-lg shadow-lg"
              />
            </figure>
            <div className="space-y-6">
              <h3
                className={`text-2xl font-robotoMono ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("h22")}
              </h3>
              <p
                className={`text-base-content/70 font-firaCode ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("p22")}
              </p>
              <h4
                className={`text-xl font-montserrat ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("h23")}
              </h4>
              <p
                className={`text-base-content/70 font-firaCode ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("d23")}
              </p>
              <p
                className={`text-base-content/70 font-firaCode ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("p23")}
              </p>
              <a
                href="https://www.instadeep.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Visit InstaDeep
              </a>
            </div>
          </div>

          {/* AI for Remote Work and Collaboration */}
          <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3
                className={`text-2xl font-robotoMono ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("h24")}
              </h3>
              <p
                className={`text-base-content/70 font-firaCode ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("p24")}
              </p>
              <h4
                className={`text-xl font-montserrat ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("h25")}
              </h4>
              <p
                className={`text-base-content/70 font-firaCode ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("d25")}
              </p>
              <p
                className={`text-base-content/70 font-firaCode ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("p25")}
              </p>
              <a
                href="https://zid.sa/en"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Visit Zid
              </a>
            </div>
            <figure>
              <img
                src={aiRemoteWork}
                alt="AI for Remote Work and Collaboration"
                className="w-full max-h-96 rounded-lg shadow-lg"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* Key Steps to Implement AI Effectively Section */}
      <section id="key-steps" className="py-24 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2
              className={`text-3xl font-robotoMono ${
                language === "ar" ? "text-right" : "text-left"
              }`}
            >
              {t("h26")}
            </h2>
            <p
              className={`text-base-content/70 font-montserrat ${
                language === "ar" ? "text-right" : "text-left"
              }`}
            >
              {t("p26")}
            </p>
          </div>
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3
                className={`text-2xl font-robotoMono ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("h27")}
              </h3>
              <p
                className={`text-base-content/70 font-firaCode ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("p27")}
              </p>
            </div>
            <div className="space-y-6">
              <h3
                className={`text-2xl font-robotoMono ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("h28")}
              </h3>
              <p
                className={`text-base-content/70 font-firaCode ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("p28")}
              </p>
            </div>
            <div className="space-y-6">
              <h3
                className={`text-2xl font-robotoMono ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("h29")}
              </h3>
              <p
                className={`text-base-content/70 font-firaCode ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("p29")}
              </p>
            </div>
            <div className="space-y-6">
              <h3
                className={`text-2xl font-robotoMono ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("h30")}
              </h3>
              <p
                className={`text-base-content/70 font-firaCode ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("p30")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Do's and Don'ts Section */}
      <section id="dos-and-donts" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2
              className={`text-3xl font-robotoMono ${
                language === "ar" ? "text-right" : "text-left"
              }`}
            >
              {t("h31")}
            </h2>
            <p
              className={`text-base-content/70 font-montserrat ${
                language === "ar" ? "text-right" : "text-left"
              }`}
            >
              {t("p31")}
            </p>
          </div>
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3
                className={`text-2xl font-robotoMono ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("dos")}
              </h3>
              <ul
                className={`list-disc list-inside text-base-content/70 font-firaCode ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                <li>{t("dos1")}</li>
                <li>{t("dos2")}</li>
                <li>{t("dos3")}</li>
                <li>{t("dos4")}</li>
                <li>{t("dos5")}</li>
              </ul>
            </div>
            <div className="space-y-6">
              <h3
                className={`text-2xl font-robotoMono ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("donts")}
              </h3>
              <ul
                className={`list-disc list-inside text-base-content/70 font-firaCode ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                <li>{t("donts1")}</li>
                <li>{t("donts2")}</li>
                <li>{t("donts3")}</li>
                <li>{t("donts4")}</li>
                <li>{t("donts5")}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UsingAiWorkplace;
