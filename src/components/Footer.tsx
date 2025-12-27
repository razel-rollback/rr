import { Github, Linkedin, Twitter, Mail, Youtube } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/razel-rollback", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/razelll-razelll-02b3b537b/", label: "LinkedIn" },
    { icon: Youtube, href: "https://www.youtube.com/@user-tf2kt3oc3g", label: "YouTube" },
    { icon: Mail, href: "mailto:poncerazel@gmail.com", label: "Email" },
  ];

  return (
    <footer className="py-12 px-6 border-t border-border bg-card/50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <button
                onClick={() => {
                  const element = document.getElementById("home");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="font-mono text-xl font-bold text-foreground"
              >
                razel-rollback<span className="text-primary">_</span>
              </button>
            <p className="text-muted-foreground text-sm mt-2">
              Building digital experiences
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm font-mono">
            {"<"} Built with passion © {new Date().getFullYear()} {"/>"}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
