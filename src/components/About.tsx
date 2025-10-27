import { EXPERIENCE } from "@/lib/constants";
import { Code2, Palette, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description: "Building end-to-end solutions with modern web technologies",
    },
    {
      icon: Palette,
      title: "Cleaner Code",
      description:
        "Writing code in a cleaner and arranged manner for readability and maintainability",
    },
    {
      icon: Zap,
      title: "Performance First",
      description:
        "Optimizing for speed, scalability, and seamless experiences",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate about transforming ideas into production-ready digital
              products
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gradient-purple">
                Full Stack Developer Specializing in Modern Web Technologies
              </h3>
              <p className="text-lg text-muted-foreground mb-4">
                I am a Diploma graduate in Computer Engineering with 1.4+ years
                of hands-on experience as a Full Stack Developer. I specialize
                in building scalable web applications using modern technologies
                such as React, Redux, SCSS, Tailwind CSS, and Java Spring Boot.
                I enjoy transforming ideas into functional, user-friendly
                digital solutions and continuously learning to stay aligned with
                the latest industry trends.
              </p>

              <p className="text-lg text-foreground/90 font-semibold">
                "Transforming ideas into production-ready digital products."
              </p>
            </div>

            <div className="relative">
              <div className="glass-strong rounded-2xl p-8 border-2 border-primary/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/20 rounded-full blur-3xl"></div>

                <div className="relative space-y-4">
                  {[
                    { label: "Experience", value: `${EXPERIENCE}+ Years` },
                    { label: "Projects", value: `${10}+ Completed` },
                    { label: "Expertise", value: "Full Stack" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center py-3 border-b border-primary/10 last:border-0"
                    >
                      <span className="text-muted-foreground">
                        {item.label}
                      </span>
                      <span className="text-lg font-bold text-primary">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, i) => (
              <div
                key={i}
                className="glass-strong rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:glow-primary group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
