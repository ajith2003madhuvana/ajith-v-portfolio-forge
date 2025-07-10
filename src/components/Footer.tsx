import { Github, Linkedin, Instagram, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  return (
    <footer className="bg-metallic-darker border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">A</span>
              </div>
              <span className="font-bold text-xl gradient-text">Ajith V</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Turning Ideas into Intelligent Systems
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail size={16} />
                <span>ajith2003madhuvana@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone size={16} />
                <span>+91 8904140598</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">Connect</h3>
            <div className="flex space-x-3">
              <Button variant="outline" size="sm" asChild>
                <a href="mailto:ajith2003madhuvana@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Mail size={16} />
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://www.linkedin.com/in/ajith162003/" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={16} />
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://github.com/ajith2003madhuvana" target="_blank" rel="noopener noreferrer">
                  <Github size={16} />
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://www.instagram.com/_ajith_v_nair_/" target="_blank" rel="noopener noreferrer">
                  <Instagram size={16} />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Ajith V. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};