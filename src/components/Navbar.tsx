import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Link, useLocation } from "react-router-dom"; // Add useLocation

const Navbar = () => {
  const [isDark, setIsDark] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation(); // Get current location

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  // Function to handle hash link scrolling
  const scrollToSection = (hash: string) => {
    if (location.pathname !== "/") {
      // If not on home page, navigate to home with hash
      window.location.href = `/#${hash}`;
    } else {
      // If on home page, scroll to section
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navLinks = [
    { name: "Home", hash: "home" },
    { name: "Skills", hash: "skills" },
    { name: "Projects", hash: "projects" },
    { name: "Contact Me", hash: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="font-mono text-xl font-bold text-foreground hover:text-primary transition-colors"
          >
            razel-rollback<span className="text-primary">_</span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.hash)}
                className="nav-link font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </button>
            ))}
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile */}
          <div className="flex md:hidden items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
              {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  scrollToSection(link.hash);
                  setIsMobileOpen(false);
                }}
                className="block py-2 font-mono text-sm text-muted-foreground hover:text-foreground"
              >
                {link.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;