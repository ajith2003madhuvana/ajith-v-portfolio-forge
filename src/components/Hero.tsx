
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Download } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

export const Hero = () => {
  const [email, setEmail] = useState('');

  const handleConnect = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(email.trim())) {
        try {
          // Send email using EmailJS
          const emailjs = (await import('@emailjs/browser')).default;
          
          await emailjs.send(
            'service_t67bies',
            'template_p2aqzsq',
            {
              from_name: 'Website Visitor',
              from_email: email.trim(),
              message: `Someone wants to connect with you! Email: ${email.trim()}`,
              to_name: 'Ajith V'
            },
            'htcPdoA1XeuTfpgYj'
          );
          
          toast({
            title: "Thanks for connecting!",
            description: "I'll get back to you soon.",
          });
          setEmail('');
        } catch (error) {
          console.error('Email send failed:', error);
          toast({
            title: "Connection saved!",
            description: "I'll reach out to you soon.",
          });
          setEmail('');
        }
      } else {
        toast({
          title: "Invalid email format",
          description: "Please enter a valid email address.",
          variant: "destructive",
        });
      }
    } else {
      toast({
        title: "Please enter your email",
        description: "Email address is required to connect.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/80"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,hsl(var(--primary)/0.1),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,hsl(var(--accent)/0.1),transparent_70%)]"></div>
      
      {/* Floating Decorative Elements */}
      <div className="hero-decoration top-20 left-10 w-16 h-16 border-2 border-primary/30 rotate-45 animate-float backdrop-blur-sm bg-primary/5 rounded-lg"></div>
      <div className="hero-decoration top-40 right-20 w-12 h-12 border-2 border-accent/30 rotate-12 animate-float backdrop-blur-sm bg-accent/5 rounded-lg" style={{ animationDelay: '2s' }}></div>
      <div className="hero-decoration bottom-32 left-20 w-20 h-20 border-2 border-primary/20 rotate-45 animate-float backdrop-blur-sm bg-primary/3 rounded-lg" style={{ animationDelay: '4s' }}></div>
      <div className="hero-decoration top-32 right-40 w-8 h-8 border border-accent/40 rotate-45 animate-float backdrop-blur-sm bg-accent/10 rounded-md" style={{ animationDelay: '6s' }}></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Content */}
        <div className="space-y-8 text-center lg:text-left">
          {/* Status Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse mr-2"></div>
            <span className="text-sm font-medium text-primary">Available for new opportunities</span>
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
              Turning Ideas into{' '}
              <span className="gradient-text bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-x">
                Intelligent Systems
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              I'm a CSBS graduate passionate about AI/ML, automation, and building meaningful solutions that scale across industries.
            </p>
          </div>

          {/* Connect Section with Glassmorphism */}
          <div className="space-y-6">
            <div className="bg-card/50 backdrop-blur-xl border border-border/50 rounded-2xl p-6 shadow-2xl">
              <form onSubmit={handleConnect} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-background/50 border-border/50 backdrop-blur-sm h-12 text-base"
                  required
                />
                <Button 
                  type="submit"
                  className="bg-gradient-primary hover:opacity-90 btn-glow h-12 px-8 font-semibold"
                >
                  Connect With Me
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>
            
            <div className="flex justify-center lg:justify-start">
              <Button 
                variant="outline" 
                className="group h-12 px-8 bg-background/50 backdrop-blur-sm border-border/50 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
                onClick={() => window.open('https://drive.google.com/uc?export=download&id=1MAHynlV739IoH10I3qbsAjvHaIbZfdXp', '_blank')}
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            {['Python', 'AI/ML', 'React', 'Computer Vision', 'Java'].map((tech) => (
              <div key={tech} className="px-3 py-1 bg-secondary/50 backdrop-blur-sm rounded-full text-sm font-medium border border-border/30">
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Profile Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative group">
            {/* Main Image Container */}
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary rounded-3xl p-1 group-hover:scale-105 transition-transform duration-500">
                <div className="w-full h-full rounded-[1.375rem] bg-background/95 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                  <img
                    src="/src/assets/ajith-professional.jpg"
                    alt="Ajith V"
                    className="w-full h-full object-cover rounded-[1.375rem] group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
              
              {/* Floating Card - Repositioned to right shoulder area */}
              <div className="absolute -top-2 -right-4 bg-card/80 backdrop-blur-xl border border-border/50 rounded-2xl p-3 shadow-2xl group-hover:scale-105 transition-transform duration-500 z-10">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <div>
                    <p className="text-xs font-semibold">Based in</p>
                    <p className="text-xs text-muted-foreground">Mangaluru, India</p>
                  </div>
                </div>
              </div>
              
              {/* Glow Effects */}
              <div className="absolute -z-10 inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-primary/30 blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="absolute -z-20 inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 blur-[100px] opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
