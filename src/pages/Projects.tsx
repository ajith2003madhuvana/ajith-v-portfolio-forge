import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Brain, Shield, Eye } from 'lucide-react';

const projects = [
  {
    title: 'AI-Enabled Leaf Disease Detection',
    description: 'CNN-based system for early detection of plant diseases in agriculture, helping farmers identify and treat crop issues before they spread.',
    image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400&h=300&fit=crop',
    category: 'Agriculture AI',
    technologies: ['Python', 'CNN', 'TensorFlow', 'OpenCV', 'Agriculture'],
    features: [
      'Real-time leaf analysis',
      'Disease classification with 95% accuracy',
      'Mobile-friendly interface',
      'Treatment recommendations'
    ],
    icon: Brain,
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'SecureMed Platform',
    description: 'Encrypted medical data management system using AES, RSA, and HMAC encryption to ensure patient privacy and data security.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
    category: 'Healthcare Security',
    technologies: ['Python', 'AES', 'RSA', 'HMAC', 'Cryptography'],
    features: [
      'Multi-layer encryption',
      'Secure data transmission',
      'Access control management',
      'Audit trail logging'
    ],
    icon: Shield,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Real-Time Face Detection System',
    description: 'Advanced face detection system with Telegram integration for instant alerts, developed during internship at Lpoint.',
    image: 'https://images.unsplash.com/photo-1558618047-f4c99ded1a9c?w=400&h=300&fit=crop',
    category: 'Computer Vision',
    technologies: ['Python', 'OpenCV', 'Haar Cascade', 'Telegram API', 'Real-time'],
    features: [
      'Real-time face detection',
      'Instant Telegram notifications',
      'Multiple face tracking',
      'Performance optimization'
    ],
    icon: Eye,
    color: 'from-purple-500 to-pink-500'
  }
];

export default function Projects() {
  return (
    <Layout>
      <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold">
              Featured <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Innovative solutions addressing real-world challenges
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card key={index} className="card-metallic hover:shadow-glow transition-all duration-300 overflow-hidden">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Project Image */}
                  <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-20`}></div>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${project.color} p-0.5`}>
                        <div className="w-full h-full bg-background rounded-full flex items-center justify-center">
                          <project.icon className="text-foreground" size={20} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className={`p-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="space-y-6">
                      <div>
                        <Badge variant="secondary" className="mb-3">
                          {project.category}
                        </Badge>
                        <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Features */}
                      <div>
                        <h4 className="font-semibold mb-3 text-primary">Key Features</h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold mb-3 text-primary">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <Badge key={i} variant="outline" className="border-accent text-accent">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 pt-4">
                        <Button className="bg-gradient-primary hover:opacity-90">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Project
                        </Button>
                        <Button variant="outline">
                          <Github className="mr-2 h-4 w-4" />
                          Source Code
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Projects Teaser */}
          <Card className="card-metallic text-center">
            <CardContent className="p-12">
              <h3 className="text-2xl font-bold mb-4">
                More Projects Coming Soon
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I'm constantly working on new and exciting projects. Stay tuned for updates on my latest work in AI, machine learning, and automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-primary hover:opacity-90">
                  View All Projects
                </Button>
                <Button variant="outline">
                  Follow My Journey
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold">
              Interested in <span className="gradient-text">Collaborating</span>?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm always excited to work on new challenges and innovative solutions. Let's discuss how we can create something amazing together.
            </p>
            <Button className="bg-gradient-primary hover:opacity-90 btn-glow">
              Start a Project
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}