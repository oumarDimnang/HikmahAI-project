import aiPersonalizedLearning from "../assets/personalized.jpeg"; // Replace with your image
import aiClassroomManagement from "../assets/classroom.jpeg"; // Replace with your image
import aiSpecialNeeds from "../assets/specialNeeds.jpeg"; // Replace with your image
import aiTeacherSupport from "../assets/teacherSupport.jpeg"; // Replace with your image
import useTranslation from "../hooks/useTranslation";
import useLanguageStore from "../store/useLanguageStore";

const AiEducation = () => {
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
              {t("h12")}
            </h1>
            <p
              className={`text-xl text-base-content/70 font-montserrat ${
                language === "ar" ? "text-right" : "text-left"
              }`}
            >
              {t("d12")}
            </p>
            <p
              className={`text-lg text-base-content/80 font-firaCode ${
                language === "ar" ? "text-right" : "text-left"
              }`}
            >
              {t("p12")}
            </p>
          </div>
        </div>
      </section>

      {/* How AI is Transforming Education Section */}
      <section id="education-transformation" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2
              className={`text-3xl font-robotoMono ${
                language === "ar" ? "text-right" : "text-left"
              }`}
            >
              {t("h13")}
            </h2>
            <p
              className={`text-base-content/70 font-montserrat ${
                language === "ar" ? "text-right" : "text-left"
              }`}
            >
              {t("d13")}
            </p>
          </div>

          {/* AI-Powered Personalized Learning */}
          <div className="mt-16 grid md:grid-cols-2 gap-8 items-center pt-20">
            <div className="space-y-6">
              <h3
                className={`text-2xl font-robotoMono ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("h14")}
              </h3>
              <h4
                className={`text-xl font-montserrat ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("d14")}
              </h4>
              <p
                className={`text-base-content/70 font-firaCode ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("p14")}
              </p>
              <a
                href="https://www.almentor.net/home?srsltid=AfmBOorMTah0v0q3fRLpthoEyj7pwACQydG5TkCt4ZMlH11ZHkDEGfMw"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Visit Almentor
              </a>
            </div>
            <figure>
              <img
                src={aiPersonalizedLearning}
                alt="AI-Powered Personalized Learning"
                className="w-full max-h-96 rounded-lg shadow-lg"
              />
            </figure>
          </div>

          {/* AI for Classroom Management */}
          <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
            <figure>
              <img
                src={aiClassroomManagement}
                alt="AI for Classroom Management"
                className="w-full max-h-96 rounded-lg shadow-lg"
              />
            </figure>
            <div className="space-y-6">
              <h3
                className={`text-2xl font-robotoMono ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("h15")}
              </h3>
              <h4
                className={`text-xl font-montserrat ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("d15")}
              </h4>
              <p
                className={`text-base-content/70 font-firaCode ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("p15")}
              </p>
              <a
                href="https://knowledgee.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Visit KnowledgeE
              </a>
            </div>
          </div>

          {/* AI-Powered Educational Content for Special Needs */}
          <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3
                className={`text-2xl font-robotoMono ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("h16")}
              </h3>
              <h4
                className={`text-xl font-montserrat ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("d16")}
              </h4>
              <p
                className={`text-base-content/70 font-firaCode ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("p16")}
              </p>
            </div>
            <figure>
              <img
                src={aiSpecialNeeds}
                alt="AI-Powered Educational Content for Special Needs"
                className="w-full max-h-96 rounded-lg shadow-lg"
              />
            </figure>
          </div>

          {/* AI for Teacher Support and Professional Development */}
          <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
            <figure>
              <img
                src={aiTeacherSupport}
                alt="AI for Teacher Support and Professional Development"
                className="w-full max-h-96 rounded-lg shadow-lg"
              />
            </figure>
            <div className="space-y-6">
              <h3
                className={`text-2xl font-robotoMono ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("h17")}
              </h3>
              <h4
                className={`text-xl font-montserrat ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("d17")}
              </h4>
              <p
                className={`text-base-content/70 font-firaCode ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
              >
                {t("p17")}
              </p>
              <a
                href="https://www.edraak.org/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Visit Edraak
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiEducation;
