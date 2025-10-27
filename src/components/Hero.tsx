import { ArrowRight, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-bg.jpg";
import { EXPERIENCE, NAME, PROJECTS_COUNT } from "@/lib/constants";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Hero Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background"></div>
      </div>

      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">
              Available for new opportunities
            </span>
          </div> */}

          <h1 className="mb-6 animate-fade-in-up">
            <span className="block text-gradient">{NAME}</span>
          </h1>

          <p
            className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Software Developer | Full Stack Developer
          </p>

          <p
            className="text-lg md:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            I build scalable systems with delightful user experiences
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary group"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 hover:border-primary hover:bg-primary/10 group-hover:text-white"
            >
              <Download className="mr-2 w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              Download Resume
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto">
            {[
              { value: `${EXPERIENCE}+`, label: "Years Experience" },
              { value: `${PROJECTS_COUNT}+`, label: "Projects Completed" },
              { value: "100%", label: "Client Satisfaction" },
            ].map((stat, i) => (
              <div
                key={i}
                className="animate-fade-in-up"
                style={{ animationDelay: `${0.8 + i * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
