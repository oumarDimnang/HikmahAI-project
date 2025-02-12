import { ArrowRight, Users, ChevronDown } from "lucide-react";
import useTranslation from "../hooks/useTranslation";
import member1 from "../assets/cactus.jpg";
import member2 from "../assets/dragon.jpg";
import member3 from "../assets/lavender.jpg";
import member4 from "../assets/tulips.jpg";

const Home = () => {
  const t = useTranslation();

  const scrollToNextSection = () => {
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      const nextSection = heroSection.nextElementSibling;
      nextSection?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="">
      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-[calc(100vh-4rem)] relative flex items-center"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              Empowering Ethical AI Solutions for a Better Tomorrow
            </h1>
            <p className="text-xl text-base-content/70">
              Discover how we contribute to the community to make the world a
              safer place.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="btn btn-primary">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="btn">Learn More</button>
            </div>
          </div>
        </div>
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
            <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">The team.</h2>
            <p className="text-base-content/70">
              Meet the experts behind our ethical AI solutions.
            </p>
          </div>
          <div className="mt-16 grid md:grid-cols-4 gap-8">
            <div className="card bg-base-200">
              <figure className="pt-8">
                <div className="size-40 rounded-full ring-4 ring-primary/10 overflow-hidden">
                  <img
                    src={member1}
                    alt="member1"
                    className="w-full h-full object-cover"
                  />
                </div>
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title">Habiba Maher</h3>
                <p className="text-sm text-base-content/70">Position</p>
              </div>
            </div>
            <div className="card bg-base-200">
              <figure className="pt-8">
                <div className="size-40 rounded-full ring-4 ring-primary/10 overflow-hidden">
                  <img
                    src={member2}
                    alt="member2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title">Oumar Dimnang</h3>
                <p className="text-sm text-base-content/70">Position</p>
              </div>
            </div>
            <div className="card bg-base-200">
              <figure className="pt-8">
                <div className="size-40 rounded-full ring-4 ring-primary/10 overflow-hidden">
                  <img
                    src={member3}
                    alt="member3"
                    className="w-full h-full object-cover"
                  />
                </div>
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title">Sondos Ali</h3>
                <p className="text-sm text-base-content/70">Position</p>
              </div>
            </div>
            <div className="card bg-base-200">
              <figure className="pt-8">
                <div className="size-40 rounded-full ring-4 ring-primary/10 overflow-hidden">
                  <img
                    src={member4}
                    alt="member4"
                    className="w-full h-full object-cover"
                  />
                </div>
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title">Mohammed Hussain</h3>
                <p className="text-sm text-base-content/70">Position</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
