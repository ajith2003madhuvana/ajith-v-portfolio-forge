import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Download } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import ajithImage from '@/assets/ajith-professional.jpg';

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
    <section className="min-h-screen flex items-center justify-center pt-20 section-professional relative overflow-hidden bg-gradient-hero">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-glow opacity-40"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.15),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent)/0.12),transparent_60%)]"></div>
      
      {/* Professional Floating Decorations */}
      <div className="decoration-float top-24 left-12 w-20 h-20 border border-primary/20 rounded-2xl bg-gradient-primary/5 backdrop-blur-sm" style={{ animationDelay: '0s' }}></div>
      <div className="decoration-float top-48 right-16 w-14 h-14 border border-accent/25 rounded-xl bg-gradient-primary/10 backdrop-blur-sm" style={{ animationDelay: '2s' }}></div>
      <div className="decoration-float bottom-40 left-24 w-24 h-24 border border-primary/15 rounded-3xl bg-accent/5 backdrop-blur-sm" style={{ animationDelay: '4s' }}></div>
      <div className="decoration-float top-36 right-32 w-10 h-10 border border-accent/30 rounded-lg bg-primary/10 backdrop-blur-sm" style={{ animationDelay: '6s' }}></div>
      
      <div className="container-professional grid-feature relative z-10">
        {/* Enhanced Content */}
        <div className="space-y-10 text-center lg:text-left animate-fade-in">
          {/* Professional Status Badges */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
            <div className="card-glass px-5 py-3 rounded-full">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full animate-glow"></div>
                <span className="text-sm font-semibold text-primary">Java Developer Intern at TAP Academy</span>
              </div>
            </div>
            <div className="card-glass px-5 py-3 rounded-full">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse-professional"></div>
                <span className="text-sm font-semibold text-accent">Open to Opportunities</span>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-tight tracking-tight text-professional">
              Crafting{' '}
              <span className="gradient-text block lg:inline">
                Intelligent Solutions
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-text-medium max-w-3xl leading-relaxed font-medium">
              Computer Science graduate specializing in Java development, machine learning, and cybersecurity. 
              Building secure, intelligent systems that solve real-world problems.
            </p>
          </div>

          {/* Professional Connect Section */}
          <div className="space-y-8">
            <div className="card-premium p-8 max-w-2xl mx-auto lg:mx-0">
              <form onSubmit={handleConnect} className="space-y-4 sm:space-y-0 sm:flex sm:gap-4">
                <Input
                  type="email"
                  placeholder="Enter your professional email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-surface/50 border-border/50 backdrop-blur-sm h-14 text-lg rounded-xl font-medium"
                  required
                />
                <Button 
                  type="submit"
                  className="btn-primary h-14 px-8 text-lg whitespace-nowrap"
                >
                  Let's Connect
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </form>
            </div>
            
            <div className="flex justify-center lg:justify-start">
              <Button 
                variant="outline" 
                asChild
                className="btn-ghost group h-14 px-8 text-lg"
              >
                <a 
                  href="https://drive.google.com/file/d/1EsioiRUzyusNX4nOWlPVbrLMJ4pl6tFO/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-3 h-5 w-5 group-hover:animate-bounce" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Enhanced Tech Stack */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-text-medium text-center lg:text-left">Core Technologies</h3>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {['Java', 'Python', 'Machine Learning', 'Spring Boot', 'Cybersecurity', 'SQL', 'Azure'].map((tech) => (
                <div key={tech} className="card-glass px-4 py-2 rounded-xl text-sm font-semibold border border-border/30 hover:border-primary/40 transition-all duration-300 hover:scale-105">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Professional Profile Image Section */}
        <div className="flex justify-center lg:justify-end animate-slide-up">
          <div className="relative group">
            {/* Main Image Container */}
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Enhanced Gradient Border */}
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl p-1.5 group-hover:scale-105 transition-all duration-700 shadow-elevated">
                <div className="w-full h-full rounded-[1.5rem] bg-surface-elevated/95 backdrop-blur-md flex items-center justify-center overflow-hidden">
                  <img
                    src={ajithImage}
                    alt="Ajith V - Software Developer"
                    className="w-full h-full object-cover rounded-[1.5rem] group-hover:scale-110 transition-transform duration-1000"
                  />
                </div>
              </div>
              
              {/* Professional Info Card */}
              <div className="absolute -top-4 -right-6 card-premium p-4 shadow-xl group-hover:scale-105 transition-all duration-700 z-10 animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full animate-glow"></div>
                  <div>
                    <p className="text-sm font-bold text-text-high">Based in</p>
                    <p className="text-xs text-text-medium font-medium">Mangaluru, India</p>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Glow Effects */}
              <div className="absolute -z-10 inset-0 bg-gradient-primary/20 blur-3xl opacity-60 group-hover:opacity-80 transition-all duration-700 rounded-full"></div>
              <div className="absolute -z-20 inset-0 bg-gradient-primary/10 blur-[120px] opacity-40 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};