import { Helmet } from "react-helmet-async";
import { Github, Youtube, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Projects = () => {
  const allProjects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online store built with Laravel and MySQL. Includes user authentication, shopping cart, payment integration, and admin dashboard.",
      image: "🛒",
      github: "https://github.com",
      youtube: "https://youtube.com",
      tags: ["Laravel", "MySQL", "PHP"],
    },
    {
      title: "Task Management App",
      description: "Productivity app with real-time updates and team collaboration features. Built with modern technologies for seamless experience.",
      image: "📋",
      github: "https://github.com",
      youtube: "https://youtube.com",
      tags: ["Flutter", "Firebase", "Dart"],
    },
    {
      title: "Portfolio Website",
      description: "Modern responsive portfolio with dark mode support and smooth animations. Clean design focused on user experience.",
      image: "🌐",
      github: "https://github.com",
      youtube: "https://youtube.com",
      tags: ["React", "Tailwind", "TypeScript"],
    },
    {
      title: "Blog Platform",
      description: "A content management system with markdown support, categories, and SEO optimization.",
      image: "📝",
      github: "https://github.com",
      youtube: "https://youtube.com",
      tags: ["Laravel", "MySQL", "Bootstrap"],
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather application with location-based forecasts and beautiful visualizations.",
      image: "🌤️",
      github: "https://github.com",
      youtube: "https://youtube.com",
      tags: ["JavaScript", "API", "CSS"],
    },
    {
      title: "Chat Application",
      description: "Real-time messaging app with group chats, file sharing, and notification system.",
      image: "💬",
      github: "https://github.com",
      youtube: "https://youtube.com",
      tags: ["Firebase", "Flutter", "Dart"],
    },
  ];

  return (
    <>
      <Helmet>
        <title>razel-rollback</title>
        <meta
          name="description"
          content="Explore my portfolio of web development projects including e-commerce platforms, mobile apps, and more."
        />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-16 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-8">
              <Button variant="ghost" asChild>
                <a href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
                  <ArrowLeft className="h-4 w-4" />
                  Back Home
                </a>
              </Button>
            </div>

            <div className="text-center mb-16 animate-fade-in">
              <p className="font-mono text-primary text-sm mb-4">{"// All Projects"}</p>
              <h1 className="text-3xl md:text-5xl font-bold font-mono text-foreground">
                Projects<span className="text-primary">_</span>
              </h1>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allProjects.map((project, index) => (
                <div
                  key={project.title}
                  className="group bg-card rounded-xl overflow-hidden border border-border card-shadow hover:border-primary/50 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                      {project.image}
                    </span>
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="font-mono text-lg font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-3">
                      {project.description}
                    </p>
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
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Projects;
