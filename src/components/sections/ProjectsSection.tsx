import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Brain, Shield, Eye, Film, BookOpen } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import secureMedImage from '@/assets/securemed-cybersecurity.jpg';
import faceDetectionImage from '@/assets/face-detection-project.jpg';

const projects = [
  {
    title: 'AI-Enabled Leaf Disease Detection and Classification for Smart Agriculture',
    description: 'Deep learning system using CNN for accurate detection and classification of leaf diseases to enhance crop health monitoring and improve agricultural decision-making in smart farming.',
    image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400&h=300&fit=crop',
    category: 'Agricultural AI',
    technologies: ['Python', 'Deep Learning', 'CNN', 'TensorFlow', 'Computer Vision', 'Smart Agriculture', 'Image Classification'],
    features: [
      'AI-driven leaf disease detection with high accuracy',
      'Real-time crop health monitoring system',
      'Classification of multiple disease types',
      'Smart agriculture decision support',
      'Enhanced agricultural productivity tools'
    ],
    icon: Brain,
    color: 'from-green-500 to-emerald-500',
    liveUrl: '',
    githubUrl: ''
  },
  {
    title: 'SecureMed: Crypto-Powered AI Platform for Healthcare Data Management',
    description: 'Secure web platform integrating AES, RSA, and HMAC encryption to ensure confidentiality, integrity, and authenticity of healthcare data for safe medical record storage and sharing.',
    image: secureMedImage,
    category: 'Healthcare Cybersecurity',
    technologies: ['Cryptography', 'AES Encryption', 'RSA Encryption', 'HMAC', 'Healthcare Data Security', 'Web Development', 'Data Privacy'],
    features: [
      'Multi-layer encryption (AES, RSA, HMAC)',
      'Secure patient data storage and sharing',
      'Healthcare data confidentiality assurance',
      'Medical record integrity verification',
      'Crypto-powered authentication system'
    ],
    icon: Shield,
    color: 'from-blue-500 to-cyan-500',
    liveUrl: 'https://ajith2003madhuvana.github.io/Cryptography_SecureMed_Project/',
    githubUrl: ''
  },
  {
    title: 'Real-Time Face Detection System with Telegram Integration',
    description: 'Advanced computer vision system using OpenCV for real-time face detection with instant Telegram alert notifications, developed during ML internship at Lpoint.',
    image: faceDetectionImage,
    category: 'Computer Vision & Machine Learning',
    technologies: ['Python', 'OpenCV', 'Computer Vision', 'Telegram API', 'Real-time Processing', 'Machine Learning', 'Notification System'],
    features: [
      'Real-time face detection using OpenCV',
      'Instant Telegram alert integration',
      'Multiple face tracking capabilities',
      'Performance-optimized processing',
      'Automated notification system'
    ],
    icon: Eye,
    color: 'from-purple-500 to-pink-500',
    liveUrl: '',
    githubUrl: ''
  },
  {
    title: 'CineReview: Movie Review & Rating Platform',
    description: 'Interactive movie discovery platform with real-time TMDB API integration, allowing users to search, rate, and review movies with persistent storage for favorites and review history.',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=300&fit=crop',
    category: 'Web Development',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'TMDB API', 'LocalStorage', 'Responsive Design', 'REST API'],
    features: [
      'Real-time movie search with TMDB integration',
      'Genre-based filtering and quick filters',
      'Star rating system with visual feedback',
      'User review management (add/edit/delete)',
      'Favorites and history tracking with LocalStorage',
      'Responsive dark metallic theme design'
    ],
    icon: Film,
    color: 'from-yellow-500 to-orange-500',
    liveUrl: 'https://ajith2003madhuvana.github.io/CineReview-Movie-App/',
    githubUrl: ''
  },
  {
    title: 'LearnEye – Innovative AI Course Generator for Adaptive Learning',
    description: 'AI-powered adaptive learning platform that dynamically generates personalized courses and automatically adjusts the learning path based on learner performance using Google Gemini API.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=300&fit=crop',
    category: 'AI & Education',
    technologies: ['React.js', 'Tailwind CSS', 'JavaScript', 'Google Gemini API', 'Prompt Engineering', 'LocalStorage', 'Vercel'],
    features: [
      'AI-generated personalized course modules',
      'Adaptive learning path based on quiz performance',
      'Quiz-based evaluation after each module',
      'User onboarding with learner persona',
      'Progress persistence using localStorage',
      'Clean and intuitive user interface'
    ],
    icon: BookOpen,
    color: 'from-emerald-500 to-teal-500',
    liveUrl: 'https://learn-eye-adaptive-learning.vercel.app/',
    githubUrl: ''
  }
];

export const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section 
      id="projects" 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 px-4 sm:px-6 lg:px-8 scroll-animate ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions addressing real-world challenges
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card key={index} className="card-glass hover:shadow-glow transition-all duration-300 overflow-hidden">
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

                    {/* Project Links */}
                    {(project.liveUrl || project.githubUrl) && (
                      <div className="flex gap-4 pt-4">
                        {project.liveUrl && (
                          <Button asChild variant="default" size="sm">
                            <a 
                              href={project.liveUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              <ExternalLink size={16} />
                              Live Demo
                            </a>
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button asChild variant="outline" size="sm">
                            <a 
                              href={project.githubUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              <Github size={16} />
                              Source Code
                            </a>
                          </Button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
