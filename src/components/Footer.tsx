
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, BookOpen } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50 bg-muted/30">
      <div className="container max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Ishan Shah. All rights reserved.
            </p>
          </div>

          <div className="flex gap-3">
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://github.com/Xclusive-Ishan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://www.linkedin.com/in/ishan-shah-6a1584287"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:Ishanshah.iit@gmail.com" aria-label="Email Me">
                <Mail className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://www.quora.com/profile/Ishan-Shah-266"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Quora Profile"
              >
                <BookOpen className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
