  import { Github, Youtube, ArrowRight, EyeOff, ExternalLink, ChevronDown } from "lucide-react";
  import { Button } from "./ui/button";
  import { Link } from "react-router-dom";
  import { useState } from "react";
  import premiere from "@/assets/priemere.png";
  import spg from "@/assets/poultry.png";
  import rr from "@/assets/rr.png";
  import farm from "@/assets/farm.png";

  const ProjectsSection = () => {
    const [expandedDescriptions, setExpandedDescriptions] = useState<Set<string>>(new Set());

    const toggleDescription = (title: string) => {
      const newExpanded = new Set(expandedDescriptions);
      if (newExpanded.has(title)) {
        newExpanded.delete(title);
      } else {
        newExpanded.add(title);
      }
      setExpandedDescriptions(newExpanded);
    };

    const projects = [
      {
        title: "Premiere: SHS Student Registration System",
        description: "Comprehensive Laravel-based platform that automates student enrollment, section assignment, and payment tracking with secure role-based access. Features dynamic scheduling, CRUD management for academic components, and automated report generation.",
        image: premiere,
        github: "https://github.com/razel-rollback/Premiere",
        youtube: "null",
        tags: ["Laravel", "MySQL", "PHP", "Bootstrap", "JavaScript"],
        liveDemo: "#",
      },
      {
        title: "Smart Poultry Guardian",
        description: "IoT solution for poultry farm automation using Arduino sensors (DHT22, LDR) and actuators controlled via Python-to-Arduino serial bridge. Laravel web dashboard for real-time monitoring, device control, and programmable schedules.",
        image: spg,
        github: "https://github.com/razel-rollback/smart_poultry_guardian",
        youtube: "null",
        tags: ["Arduino", "Python", "Laravel", "IoT", "MySQL"],
        liveDemo: "#",
      },
      {
        title: "Portfolio Website",
        description: "Sleek, responsive portfolio website with dark mode interface and smooth animations. Built with modern UI/UX principles using shadcn/ui components for optimal user experience.",
        image: rr,
        github: "https://github.com/razel-rollback/razel-rollback.com",
        youtube: "null",
        tags: ["React", "TypeScript", "Tailwind", "Vite", "Shadcn/UI"],
        liveDemo: "https://razel-rollback.github.io/rr/",
      },
    ];

    return (
      <section id="projects" className="py-24 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <p className="font-mono text-primary text-sm mb-4">{"// Projects"}</p>
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-foreground">
              Featured Projects<span className="text-primary">_</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-card rounded-xl overflow-hidden border border-border card-shadow hover:border-primary/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center overflow-hidden">
                    {typeof project.image === 'string' && project.image.includes('/') ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                        {project.image}
                      </span>
                    )}
                  </div>
                <div className="p-6 space-y-4">
                  <h3 className="font-mono text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <div>
                    <p className={`text-muted-foreground text-sm ${expandedDescriptions.has(project.title) ? '' : 'line-clamp-3'}`}>
                      {project.description}
                    </p>
                    {project.description.length > 150 && (
                      <button
                        onClick={() => toggleDescription(project.title)}
                        className="text-primary text-xs font-mono hover:text-primary/80 transition-colors mt-2 flex items-center gap-1"
                      >
                        {expandedDescriptions.has(project.title) ? (
                          <>
                            Show Less
                            <ChevronDown className="h-3 w-3 rotate-180" />
                          </>
                        ) : (
                          <>
                            Show More
                            <ChevronDown className="h-3 w-3" />
                          </>
                        )}
                      </button>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-mono bg-primary/10 text-primary rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 pt-2">
                    {/* GitHub Button - Conditional Rendering */}
                    {project.github === "null" ? (
                      <span className="flex items-center gap-2 text-sm text-muted-foreground/50 cursor-not-allowed">
                        <EyeOff className="h-4 w-4" />
                        Not Available
                      </span>
                    ) : (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    )}

                    {/* YouTube Button - Conditional Rendering */}
                    {project.youtube === "null" ? (
                      <span className="flex items-center gap-2 text-sm text-muted-foreground/50 cursor-not-allowed">
                        <EyeOff className="h-4 w-4" />
                        Not Available
                      </span>
                    ) : (
                      <a
                        href={project.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-red-500 transition-colors"
                      >
                        <Youtube className="h-4 w-4" />
                        Demo
                      </a>
                    )}

                    {/* Live Demo Button - Conditional Rendering */}
                    {project.liveDemo !== "#" && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-green-500 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/projects" className="inline-flex items-center gap-2">
              View More Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          </div>
        </div>
      </section>
    );
  };

  export default ProjectsSection;
