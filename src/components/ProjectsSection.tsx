  import { Github, Youtube, ArrowRight } from "lucide-react";
  import { Button } from "./ui/button";
  import { Link } from "react-router-dom";
  import premiere from "@/assets/priemere.png";
  import spg from "@/assets/poultry.png";
  import rr from "@/assets/rr.png";

  const ProjectsSection = () => {
    const projects = [
      {
        title: "Premiere: SHS Student Registration System",
        description: "Developed a comprehensive Laravel-based platform that automates student enrollment, section assignment, and payment tracking with secure role-based access. Integrated dynamic scheduling, CRUD management for academic components, and automated report generation to streamline administrative workflows. Ensured data integrity and security through authentication, validation, and relational database design.",
        image: premiere,
        github: "https://github.com/razel-rollback/Premiere",
        youtube: "https://youtube.com",
      },
      {
        title: "Smart Poultry Guardian",
        description: "Designed and implemented an IoT solution for poultry farm automation using Arduino sensors (DHT22, LDR) and actuators (servo, fan) controlled via a custom Python-to-Arduino serial bridge. Developed a Laravel web dashboard for real-time environmental monitoring, manual device control, and programmable feeding/lighting schedules to optimize chicken health and farm efficiency. Integrated a three-tier architecture (hardware, gateway, and cloud) to enable remote management and reduce manual labor in small-scale farming.",
        image: spg,
        github: "https://github.com/razel-rollback/smart_poultry_guardian",
        youtube: "https://youtube.com",
      },
      {
        title: "Portfolio Website",
        description: "A sleek, responsive portfolio website featuring a dark mode interface and smooth animations. The site showcases technical projects, skills,  and contact functionality while maintaining clean, maintainable code architecture. Designed with modern UI/UX principles using shadcn/ui components for optimal user experience and professional presentation.",
        image: rr,
        github: "https://github.com/razel-rollback/razel-rollback.com",
        youtube: "https://youtube.com",
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
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="font-mono text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-3 pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                    <a
                      href={project.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-red-500 transition-colors"
                    >
                      <Youtube className="h-4 w-4" />
                      Demo
                    </a>
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
