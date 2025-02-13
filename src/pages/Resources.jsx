import useTranslation from "../hooks/useTranslation";
import useLanguageStore from "../store/useLanguageStore";

const Resources = () => {
  const t = useTranslation();
  const { language } = useLanguageStore();

  return (
    <div className="min-h-screen bg-base-100">
      {/* Header Section */}
      <header className="py-16 bg-base-200 pt-32">
        <div className="container mx-auto px-4">
          <h1
            className={`text-5xl font-robotoMono text-left ${
              language === "ar" ? "text-right" : "text-left"
            }`}
          >
            {t("resources")}
          </h1>
          <p
            className={`text-lg text-base-content/70 mt-4 font-firaCode ${
              language === "ar" ? "text-right" : "text-left"
            }`}
          >
            {t("resourcesHeader")}
          </p>
        </div>
      </header>

      {/* Resources List */}
      <section className="py-16">
        <div className="container mx-auto px-4 space-y-8">
          {/* Research and Case Studies */}
          <h2 className="text-3xl font-robotoMono">
            Research and Case Studies
          </h2>
          {[
            {
              title: "AI-Based Crop Disruption Detection",
              url: "https://www.biosaline.org/multimedia/icbas-ai-based-app-aims-help-farmers-detect-crop-disruptions",
            },
            {
              title: "AI Tool for Early Breast Cancer Detection",
              url: "https://www.communityjameel.org/news/jameel-clinic-at-mit-and-king-faisal-specialist-hospital-and-research-centre-launch-pioneering-ai-early-breast-cancer-detection-tool-in-saudi-arabia",
            },
            {
              title: "AI Advancements in Arabic Language Processing",
              url: "https://www.qf.org.qa/stories/how-qfs-qcri-is-shaping-the-future-of-arabic-language-across-digital-spaces",
            },
            {
              title: "Predicting Energy Demand with AI in Saudi Arabia",
              url: "https://saudienergyconsulting.com/predicting-energy-demand-with-ai-in-saudi-arabia/#:~:text=AI%2Ddriven%20solutions%20are%20also,overall%20reliability%20of%20the%20grid.",
            },
          ].map((resource, index) => (
            <div key={index} className="p-6 border rounded-lg bg-base-200">
              <h3 className="text-2xl font-robotoMono">{resource.title}</h3>
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-4 py-2 bg-primary text-white font-firaCode rounded-lg hover:bg-primary/80 transition"
              >
                Visit Resource
              </a>
            </div>
          ))}

          {/* Technology Used */}
          <h2 className="text-3xl font-robotoMono">Technology Used</h2>
          {[
            { title: "React.js", url: "https://react.dev/" },
            { title: "Vite", url: "https://vitejs.dev/" },
            { title: "Tailwind CSS", url: "https://tailwindcss.com/" },
            { title: "DaisyUI", url: "https://daisyui.com/" },
            { title: "Zustand", url: "https://zustand-demo.pmnd.rs/" },
            { title: "Lucide Icons", url: "https://lucide.dev/" },
          ].map((tech, index) => (
            <div key={index} className="p-6 border rounded-lg bg-base-200">
              <h3 className="text-2xl font-robotoMono">{tech.title}</h3>
              <a
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-4 py-2 bg-primary text-white font-firaCode rounded-lg hover:bg-primary/80 transition"
              >
                Learn More
              </a>
            </div>
          ))}

          {/* Design Resources */}
          <h2 className="text-3xl font-robotoMono">Design Resources</h2>
          {[
            { title: "Remini (Live Avatars)", url: "https://www.remini.ai/" },
            { title: "DeepAI", url: "https://deepai.org/" },
            { title: "FreePik", url: "https://www.freepik.com/" },
            { title: "Pictory", url: "https://pictory.ai/" },
            { title: "Design.com", url: "https://design.com/" },
            { title: "Canva", url: "https://www.canva.com/" },
          ].map((design, index) => (
            <div key={index} className="p-6 border rounded-lg bg-base-200">
              <h3 className="text-2xl font-robotoMono">{design.title}</h3>
              <a
                href={design.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-4 py-2 bg-primary text-white font-firaCode rounded-lg hover:bg-primary/80 transition"
              >
                Explore
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Resources;
