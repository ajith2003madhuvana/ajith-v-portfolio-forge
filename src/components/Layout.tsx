import { Navigation } from './Navigation';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-hero text-foreground antialiased">
      <Navigation />
      <main className="relative z-0">{children}</main>
      <Footer />
    </div>
  );
};