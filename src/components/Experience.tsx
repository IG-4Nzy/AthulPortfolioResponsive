import { experiences } from "@/lib/constants";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Building innovative solutions across leading tech companies
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block"></div>

            <div className="space-y-12">
              {experiences.map((exp, i) => (
                <div key={i} className="relative">
                  <div className="absolute left-8 w-4 h-4 bg-primary rounded-full -translate-x-[7px] mt-2 glow-primary hidden md:block z-10"></div>

                  <div className="md:ml-20">
                    <div className="glass-strong rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div className="mb-4 md:mb-0">
                          <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                            {exp.position}
                          </h3>
                          <div className="flex items-center gap-2 text-lg font-semibold text-gradient-purple mb-2">
                            <Briefcase className="w-5 h-5" />
                            {exp.company}
                          </div>
                        </div>

                        <div className="flex flex-col gap-2 md:text-right">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground md:justify-end">
                            <Calendar className="w-4 h-4 text-primary" />
                            <span>
                              {exp.fromYear} - {exp.toYear}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground md:justify-end">
                            <MapPin className="w-4 h-4 text-accent" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4">
                        {exp.description}
                      </p>

                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-foreground/90">
                          Key Achievements:
                        </p>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li
                              key={achIndex}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
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

export default Experience;
