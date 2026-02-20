import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Send, Loader2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await emailjs.send('service_t67bies', 'template_p2aqzsq', {
        from_name: formData.name, from_email: formData.email, message: formData.message, to_name: 'Ajith'
      }, 'htcPdoA1XeuTfpgYj');
      toast({ title: "Message sent successfully!", description: "Thank you for reaching out. I'll get back to you soon." });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({ title: "Failed to send message", description: "Something went wrong. Please try again.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section 
      id="contact" 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-surface/30 scroll-animate ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
        <div className="text-center space-y-3 sm:space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm open to software development opportunities. Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Form */}
          <Card className="card-glass">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-xl sm:text-2xl">Send Me a Message</CardTitle>
            </CardHeader>
            <CardContent className="px-4 pb-4 sm:px-6 sm:pb-6">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-sm">Full Name</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" required className="bg-card border-border h-10 sm:h-11" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-sm">Email Address</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your.email@example.com" required className="bg-card border-border h-10 sm:h-11" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-sm">Message</Label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your project..." rows={5} required className="bg-card border-border resize-none" />
                </div>
                <Button type="submit" disabled={isLoading} className="w-full bg-gradient-primary hover:opacity-90 h-10 sm:h-11">
                  {isLoading ? (<><Loader2 className="mr-2 h-4 w-4 animate-spin" />Sending...</>) : (<><Send className="mr-2 h-4 w-4" />Send Message</>)}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6">
            <Card className="card-glass">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-xl sm:text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-4 sm:px-6 sm:pb-6 space-y-4 sm:space-y-6">
                {[
                  { icon: Mail, label: 'Email', value: 'ajith2003madhuvana@gmail.com' },
                  { icon: Phone, label: 'Phone', value: '+91 8904140598' },
                  { icon: MapPin, label: 'Location', value: 'Sullia, Dakshina Kannada' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-primary-foreground" size={16} />
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-sm">{item.label}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground truncate">{item.value}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="card-glass">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-xl sm:text-2xl">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-4 sm:px-6 sm:pb-6 space-y-3">
                <p className="text-sm text-muted-foreground">Follow my journey on social platforms</p>
                <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-3">
                  {[
                    { icon: Mail, label: 'Email', href: 'mailto:ajith2003madhuvana@gmail.com' },
                    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/ajith162003/' },
                    { icon: Github, label: 'GitHub', href: 'https://github.com/ajith2003madhuvana' },
                    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/_ajith_v_nair_/' },
                  ].map((link) => (
                    <Button key={link.label} variant="outline" size="sm" asChild className="text-xs sm:text-sm">
                      <a href={link.href} target="_blank" rel="noopener noreferrer">
                        <link.icon className="mr-1.5 h-4 w-4" />
                        {link.label}
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="card-glass">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-xl sm:text-2xl">Availability</CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-4 sm:px-6 sm:pb-6">
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-semibold text-sm">Actively seeking employment</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Looking for full-time positions in AI/ML, software development, and automation.
                  </p>
                  <p className="text-xs text-muted-foreground"><strong>Response time:</strong> Within 24 hours</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
