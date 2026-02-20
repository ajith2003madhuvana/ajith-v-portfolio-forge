import { Github, Linkedin, Instagram, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  return (
    <footer className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-surface border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4 sm:space-y-6 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
                <span className="text-primary-foreground font-bold text-lg sm:text-2xl">A</span>
              </div>
              <div>
                <span className="font-bold text-xl sm:text-2xl gradient-text">Ajith V</span>
                <div className="text-xs sm:text-sm text-text-medium font-medium">Software Developer</div>
              </div>
            </div>
            <p className="text-text-medium text-sm sm:text-lg font-medium leading-relaxed max-w-sm">
              Crafting intelligent solutions that bridge technology and innovation.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-lg sm:text-xl font-bold text-text-high">Get In Touch</h3>
            <div className="space-y-3">
              <a href="mailto:ajith2003madhuvana@gmail.com" className="flex items-center space-x-3 text-text-medium hover:text-primary transition-colors duration-300 group">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-surface-elevated rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Mail size={16} />
                </div>
                <span className="font-medium text-xs sm:text-sm truncate">ajith2003madhuvana@gmail.com</span>
              </a>
              <a href="tel:+918904140598" className="flex items-center space-x-3 text-text-medium hover:text-primary transition-colors duration-300 group">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-surface-elevated rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Phone size={16} />
                </div>
                <span className="font-medium text-sm">+91 8904140598</span>
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-lg sm:text-xl font-bold text-text-high">Connect & Follow</h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {[
                { icon: Mail, label: 'Email', href: 'mailto:ajith2003madhuvana@gmail.com' },
                { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/ajith162003/' },
                { icon: Github, label: 'GitHub', href: 'https://github.com/ajith2003madhuvana' },
                { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/_ajith_v_nair_/' },
              ].map((link) => (
                <Button key={link.label} variant="outline" size="sm" asChild className="btn-ghost text-xs sm:text-sm">
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    <link.icon size={16} className="mr-1.5" />
                    {link.label}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
            <p className="text-text-medium font-medium text-xs sm:text-sm">
              © 2024 Ajith V. Crafted with passion and precision.
            </p>
            <div className="flex items-center space-x-2 text-xs text-text-low">
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
