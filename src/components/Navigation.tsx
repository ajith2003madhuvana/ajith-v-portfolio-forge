import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'About', href: '/about' },
  { name: 'Experience', href: '/experience' },
  { name: 'Skills', href: '/skills' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-professional animate-fade-in">
      <div className="container-professional">
        <div className="flex items-center justify-between h-18">
          {/* Enhanced Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow group-hover:shadow-glow-accent transition-all duration-300 group-hover:scale-110">
                <span className="text-primary-foreground font-bold text-xl">A</span>
              </div>
              <div className="absolute inset-0 bg-gradient-primary rounded-xl opacity-0 group-hover:opacity-20 blur-sm transition-all duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-2xl gradient-text">Ajith V</span>
              <div className="text-xs text-text-medium font-medium">Software Developer</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "nav-item relative px-4 py-2 rounded-lg",
                  location.pathname === item.href
                    ? "nav-item-active bg-primary/10 text-primary"
                    : "hover:bg-surface/50"
                )}
              >
                {item.name}
                {location.pathname === item.href && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-primary rounded-full"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-10 h-10 rounded-xl bg-surface/50 border border-border/50 hover:bg-surface-elevated hover:border-primary/30 transition-all duration-300"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 animate-slide-up">
            <div className="card-glass p-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300",
                    location.pathname === item.href
                      ? "bg-primary/10 text-primary border border-primary/20"
                      : "text-text-medium hover:text-primary hover:bg-surface/30 border border-transparent"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};