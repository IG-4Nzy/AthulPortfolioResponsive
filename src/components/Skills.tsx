import { services, techStack } from "@/lib/constants";

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">
              Skills & <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Leveraging cutting-edge technologies to build exceptional digital
              experiences
            </p>
          </div>

          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-8 text-center">Tech Stack</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech, i) => (
                <div
                  key={i}
                  className="glass px-6 py-3 rounded-full hover:glass-strong hover:glow-primary transition-all duration-300 group cursor-pointer"
                >
                  <span className="font-medium group-hover:text-primary transition-colors">
                    {tech.name}
                  </span>
                  <span className="text-xs text-muted-foreground ml-2 group-hover:text-primary/70">
                    {tech.category}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">What I Do</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="glass-strong rounded-xl p-8 hover:border-primary/50 transition-all duration-300 group relative overflow-hidden"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  ></div>
                  <div className="relative z-10">
                    <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
