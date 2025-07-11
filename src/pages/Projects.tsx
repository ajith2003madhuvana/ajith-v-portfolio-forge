import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Brain, Shield, Eye } from 'lucide-react';
import secureMedImage from '@/assets/securemed-cybersecurity.jpg';
import faceDetectionImage from '@/assets/face-detection-project.jpg';

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
    image: secureMedImage,
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
    image: faceDetectionImage,
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

                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </Layout>
  );
}