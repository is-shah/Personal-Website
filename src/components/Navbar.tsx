
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

type NavLinkItem = {
  name: string;
  href: string;
};

const navLinks: NavLinkItem[] = [
  { name: "Home", href: "/" },
  { name: "Background", href: "/background" },
  { name: "Experiences", href: "/journey" },
  { name: "CV", href: "/cv" },
];

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(prefersDark);
    document.documentElement.classList.toggle("dark", prefersDark);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-md shadow-sm border-b border-border/50"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container max-w-6xl mx-auto px-4 md:px-8">
        <nav className="flex items-center justify-between">
          <NavLink to="/" className="text-xl font-semibold hover:text-primary transition-colors">
            Ishan Shah
          </NavLink>

          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-8">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.href}
                    className={({ isActive }) =>
                      `hover-underline-animation font-medium text-sm transition-colors ${
                        isActive
                          ? "text-foreground"
                          : "text-foreground/70 hover:text-foreground"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </Button>
          </div>

          <div className="flex md:hidden items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="mr-2"
            >
              {isDarkMode ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </nav>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-[60px] left-0 w-full h-screen bg-background z-40 animate-fade-in border-t border-border/50">
          <div className="container mx-auto px-4 py-8">
            <ul className="flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <li key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <NavLink
                    to={link.href}
                    className={({ isActive }) =>
                      `block text-lg font-medium py-2 transition-colors ${
                        isActive ? "text-foreground" : "text-foreground/70"
                      }`
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
