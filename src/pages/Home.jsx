import { ArrowRight, ChevronDown } from "lucide-react";
import useTranslation from "../hooks/useTranslation";
import member1 from "../assets/habibaAI.gif";
import member2 from "../assets/oumarAI.gif";
import member3 from "../assets/sondosAI.gif";
import member4 from "../assets/mohammedAI.gif";
import { Link } from "react-router-dom";
import useLanguageStore from "../store/useLanguageStore";
import heroVideo from "../assets/heroVideo.mp4";
import { useRef, useState } from "react";

const Home = () => {
  const t = useTranslation();
  const { language } = useLanguageStore();
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const scrollToNextSection = () => {
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      const nextSection = heroSection.nextElementSibling;
      nextSection?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="">
      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-[calc(100vh-4rem)] relative flex items-center"
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          {/* Text Content */}
          <div className="max-w-3xl space-y-6 flex-1 pt-32">
            <h1
              className={`text-4xl md:text-6xl font-bold font-robotoMono ${
                language === "ar" ? "text-right" : "text-left"
              }`}
            >
              {t("heroHeader")}
            </h1>
            <p
              className={`text-xl text-base-content/70 font-firaCode ${
                language === "ar" ? "text-right" : "text-left"
              }`}
            >
              {t("heroParagraph")}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="ai-for-good">
                <button className="btn btn-primary">
                  Explore more
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>

          {/* Video Section */}
          <div className="flex-1">
            <div className="aspect-video w-full rounded-lg overflow-hidden relative">
              <video
                ref={videoRef}
                autoPlay
                muted={isMuted}
                loop
                playsInline
                controls
                className="w-full h-full object-cover"
              >
                <source src={heroVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {isMuted && (
                <button
                  onClick={handleUnmute}
                  className="absolute bottom-4 right-4 bg-black/50 text-white p-2 rounded-full"
                >
                  Unmute
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Scroll Down Button */}
        <button
          onClick={scrollToNextSection}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-3xl font-firaCode">{t("ourTeam")}</h2>
            <p className="text-base-content/70 font-montserrat">
              {t("teamDescription")}
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[member1, member2, member3, member4].map((member, index) => (
              <div key={index} className="card bg-base-200">
                <figure className="pt-8">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full ring-4 ring-primary/10 overflow-hidden mx-auto">
                    <img
                      src={member}
                      alt={`member${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </figure>
                <div className="card-body items-center text-center">
                  <h3 className="card-title font-robotoMono">
                    {t(`name${index + 1}`)}
                  </h3>
                  <p className="text-sm text-base-content/70 font-firaCode">
                    {t(`position${index + 1}`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
