import { Github, Linkedin, Instagram, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  return (
    <footer className="section-professional bg-surface border-t border-border/50">
      <div className="container-professional">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Enhanced Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow group-hover:shadow-glow-accent transition-all duration-300">
                  <span className="text-primary-foreground font-bold text-2xl">A</span>
                </div>
                <div className="absolute inset-0 bg-gradient-primary rounded-xl opacity-0 group-hover:opacity-20 blur-sm transition-all duration-300"></div>
              </div>
              <div>
                <span className="font-bold text-2xl gradient-text">Ajith V</span>
                <div className="text-sm text-text-medium font-medium">Software Developer</div>
              </div>
            </div>
            <p className="text-text-medium text-lg font-medium leading-relaxed">
              Crafting intelligent solutions that bridge technology and innovation.
            </p>
          </div>

          {/* Professional Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-text-high">Get In Touch</h3>
            <div className="space-y-4">
              <a 
                href="mailto:ajith2003madhuvana@gmail.com"
                className="flex items-center space-x-3 text-text-medium hover:text-primary transition-colors duration-300 group"
              >
                <div className="w-10 h-10 bg-surface-elevated rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                  <Mail size={18} />
                </div>
                <span className="font-medium">ajith2003madhuvana@gmail.com</span>
              </a>
              <a 
                href="tel:+918904140598"
                className="flex items-center space-x-3 text-text-medium hover:text-primary transition-colors duration-300 group"
              >
                <div className="w-10 h-10 bg-surface-elevated rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                  <Phone size={18} />
                </div>
                <span className="font-medium">+91 8904140598</span>
              </a>
            </div>
          </div>

          {/* Professional Social Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-text-high">Connect & Follow</h3>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" size="sm" asChild className="btn-ghost">
                <a href="mailto:ajith2003madhuvana@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Mail size={18} className="mr-2" />
                  Email
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild className="btn-ghost">
                <a href="https://www.linkedin.com/in/ajith162003/" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={18} className="mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild className="btn-ghost">
                <a href="https://github.com/ajith2003madhuvana" target="_blank" rel="noopener noreferrer">
                  <Github size={18} className="mr-2" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild className="btn-ghost">
                <a href="https://www.instagram.com/_ajith_v_nair_/" target="_blank" rel="noopener noreferrer">
                  <Instagram size={18} className="mr-2" />
                  Instagram
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-text-medium font-medium">
              © 2024 Ajith V. Crafted with passion and precision.
            </p>
            <div className="flex items-center space-x-2 text-sm text-text-low">
              <span>Built with</span>
              <span className="text-primary font-medium">React</span>
              <span>&</span>
              <span className="text-accent font-medium">TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};