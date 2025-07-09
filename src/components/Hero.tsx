import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Download } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

export const Hero = () => {
  const [email, setEmail] = useState('');

  const handleConnect = () => {
    if (email) {
      toast({
        title: "Thanks for connecting!",
        description: "I'll get back to you soon.",
      });
      setEmail('');
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="hero-decoration top-20 left-10 w-16 h-16 border-2 border-primary rotate-45 animate-float"></div>
      <div className="hero-decoration top-40 right-20 w-12 h-12 border-2 border-accent rotate-12 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="hero-decoration bottom-32 left-20 w-20 h-20 border-2 border-primary/50 rotate-45 animate-float" style={{ animationDelay: '4s' }}></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Turning Ideas into{' '}
              <span className="gradient-text">Intelligent Systems</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              I'm a CSBS graduate passionate about AI/ML, automation, and building meaningful solutions that scale.
            </p>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0">
              <Input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-card border-border"
              />
              <Button 
                onClick={handleConnect}
                className="bg-gradient-primary hover:opacity-90 btn-glow"
              >
                Connect With Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button variant="outline" className="group">
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download Resume
              </Button>
              <Button variant="ghost">
                Explore My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden bg-gradient-primary p-1">
              <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                <img
                  src="/lovable-uploads/ca759ab0-b524-42f7-aa0f-f5f08ee3afaf.png"
                  alt="Ajith V"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
            <div className="absolute -z-10 inset-0 bg-gradient-primary blur-3xl opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};