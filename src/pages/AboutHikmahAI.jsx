import hikmahMissionImage from "../assets/reachingGoal.jpeg"; // Replace with your image
import hikmahKidsCornerImage from "../assets/youthAI.jpeg"; // Replace with your image

import useTranslation from "../hooks/useTranslation";
import useLanguageStore from "../store/useLanguageStore";

const AboutHikmahAI = () => {
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
              {t("aboutHeader")}
            </h1>
            <p
              className={`text-xl text-base-content/70 font-montserrat ${
                language === "ar" ? "text-right" : "text-left"
              }`}
            >
              {t("aboutDescription")}
            </p>
            <p
              className={`text-lg text-base-content/80 font-firaCode ${
                language === "ar" ? "text-right" : "text-left"
              }`}
            >
              {t("aboutParagraph")}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className={`text-3xl font-robotoMono `}>{t("aboutMission")}</h2>
            <p className={`text-base-content/70 font-montserrat `}>
              {t("aboutMissionDescription")}
            </p>
          </div>
          <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p
                className={`text-base-content/70 font-firaCode ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("aboutP1")}
              </p>
              <p
                className={`text-base-content/70 font-firaCode ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("aboutP2")}
              </p>
            </div>
            <figure>
              <img
                src={hikmahMissionImage}
                alt="Our Mission"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* Kids Corner Section */}
      <section id="kids-corner" className="py-24 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className={`text-3xl font-robotoMono `}>
              {t("aboutYouthHeader")}
            </h2>
            <p className={`text-base-content/70 font-montserrat `}>
              {t("aboutYouthDescription")}
            </p>
          </div>
          <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
            <figure>
              <img
                src={hikmahKidsCornerImage}
                alt="Kids Corner"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </figure>
            <div className="space-y-6">
              <p
                className={`text-base-content/70 font-firaCode ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("aboutYouthParagraph")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-3xl font-robotoMono">
              {t("aboutCommunityHeader")}
            </h2>
            <p className="text-base-content/70 font-montserrat">
              {t("aboutCommunityDescription")}
            </p>
          </div>
          <div className="mt-16 gap-8 items-center">
            <div className="space-y-6">
              <p
                className={`text-base-content/70 font-firaCode ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("aboutCommunityParagraph")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutHikmahAI;
