import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Layout>
      <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your project and explore possibilities together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="card-metallic">
              <CardHeader>
                <CardTitle className="text-2xl">Send Me a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="bg-card border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-card border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, requirements, or any questions you have..."
                      rows={6}
                      required
                      className="bg-card border-border resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary hover:opacity-90 btn-glow"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="card-metallic">
                <CardHeader>
                  <CardTitle className="text-2xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="text-primary-foreground" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-muted-foreground">ajith2003madhuvana@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="text-primary-foreground" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-muted-foreground">+91 8904140598</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-primary-foreground" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-muted-foreground">Sullia, Dakshina Kannada, Karnataka</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="card-metallic">
                <CardHeader>
                  <CardTitle className="text-2xl">Connect With Me</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Follow my journey and connect with me on social platforms
                  </p>
                  <div className="flex gap-4">
                    <Button variant="outline" size="lg" asChild>
                      <a href="mailto:ajith2003madhuvana@gmail.com" target="_blank" rel="noopener noreferrer">
                        <Mail className="mr-2 h-5 w-5" />
                        Email
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="mr-2 h-5 w-5" />
                        LinkedIn
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-5 w-5" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Availability */}
              <Card className="card-metallic">
                <CardHeader>
                  <CardTitle className="text-2xl">Availability</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="font-semibold">Available for new projects</span>
                    </div>
                    <p className="text-muted-foreground">
                      I'm currently accepting new opportunities and exciting projects. 
                      Let's discuss how I can help bring your vision to life.
                    </p>
                    <div className="pt-3">
                      <p className="text-sm text-muted-foreground">
                        <strong>Response time:</strong> Usually within 24 hours
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <Card className="card-metallic">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    q: "What types of projects do you work on?",
                    a: "I specialize in AI/ML projects, automation solutions, web applications, and computer vision systems."
                  },
                  {
                    q: "How long does a typical project take?",
                    a: "Project timelines vary based on complexity, but most projects range from 2-8 weeks."
                  },
                  {
                    q: "Do you provide ongoing support?",
                    a: "Yes, I offer maintenance and support packages for all delivered projects."
                  },
                  {
                    q: "Can you work with existing teams?",
                    a: "Absolutely! I collaborate well with existing development teams and stakeholders."
                  }
                ].map((faq, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="font-semibold text-primary">{faq.q}</h4>
                    <p className="text-sm text-muted-foreground">{faq.a}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}