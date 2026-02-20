import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Brain, Shield, Eye, Film, BookOpen } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import secureMedImage from '@/assets/securemed-cybersecurity.jpg';
import faceDetectionImage from '@/assets/face-detection-project.jpg';

const projects = [
  {
    title: 'AI-Enabled Leaf Disease Detection for Smart Agriculture',
    description: 'Deep learning system using CNN for accurate detection and classification of leaf diseases to enhance crop health monitoring.',
    image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400&h=300&fit=crop',
    category: 'Agricultural AI',
    technologies: ['Python', 'Deep Learning', 'CNN', 'TensorFlow', 'Computer Vision'],
    features: [
      'AI-driven leaf disease detection with high accuracy',
      'Real-time crop health monitoring system',
      'Classification of multiple disease types',
      'Smart agriculture decision support'
    ],
    icon: Brain,
    color: 'from-green-500 to-emerald-500',
    liveUrl: '',
    githubUrl: ''
  },
  {
    title: 'SecureMed: Crypto-Powered AI Platform for Healthcare',
    description: 'Secure web platform integrating AES, RSA, and HMAC encryption for healthcare data management.',
    image: secureMedImage,
    category: 'Healthcare Cybersecurity',
    technologies: ['Cryptography', 'AES', 'RSA', 'HMAC', 'Web Development'],
    features: [
      'Multi-layer encryption (AES, RSA, HMAC)',
      'Secure patient data storage and sharing',
      'Healthcare data confidentiality assurance',
      'Crypto-powered authentication system'
    ],
    icon: Shield,
    color: 'from-blue-500 to-cyan-500',
    liveUrl: 'https://ajith2003madhuvana.github.io/Cryptography_SecureMed_Project/',
    githubUrl: ''
  },
  {
    title: 'Real-Time Face Detection with Telegram Integration',
    description: 'Advanced computer vision system using OpenCV for real-time face detection with instant Telegram alerts.',
    image: faceDetectionImage,
    category: 'Computer Vision',
    technologies: ['Python', 'OpenCV', 'Telegram API', 'Machine Learning'],
    features: [
      'Real-time face detection using OpenCV',
      'Instant Telegram alert integration',
      'Multiple face tracking capabilities',
      'Performance-optimized processing'
    ],
    icon: Eye,
    color: 'from-purple-500 to-pink-500',
    liveUrl: '',
    githubUrl: ''
  },
  {
    title: 'CineReview: Movie Review & Rating Platform',
    description: 'Interactive movie discovery platform with real-time TMDB API integration for search, rate, and review.',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=300&fit=crop',
    category: 'Web Development',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'TMDB API', 'LocalStorage'],
    features: [
      'Real-time movie search with TMDB integration',
      'Star rating system with visual feedback',
      'User review management (add/edit/delete)',
      'Favorites and history tracking'
    ],
    icon: Film,
    color: 'from-yellow-500 to-orange-500',
    liveUrl: 'https://ajith2003madhuvana.github.io/CineReview-Movie-App/',
    githubUrl: ''
  },
  {
    title: 'LearnEye – AI Course Generator for Adaptive Learning',
    description: 'AI-powered adaptive learning platform that dynamically generates personalized courses using Google Gemini API.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=300&fit=crop',
    category: 'AI & Education',
    technologies: ['React.js', 'Tailwind CSS', 'Google Gemini API', 'LocalStorage'],
    features: [
      'AI-generated personalized course modules',
      'Adaptive learning path based on quiz performance',
      'Quiz-based evaluation after each module',
      'Progress persistence using localStorage'
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
      className={`py-14 sm:py-20 px-4 sm:px-6 lg:px-8 scroll-animate ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
        <div className="text-center space-y-3 sm:space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions addressing real-world challenges
          </p>
        </div>

        <div className="space-y-6 sm:space-y-10">
          {projects.map((project, index) => (
            <Card key={index} className="card-glass hover:shadow-glow transition-all duration-300 overflow-hidden">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Image */}
                <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-20`}></div>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 sm:h-56 lg:h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r ${project.color} p-0.5`}>
                      <div className="w-full h-full bg-background rounded-full flex items-center justify-center">
                        <project.icon className="text-foreground" size={16} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`p-4 sm:p-6 lg:p-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <Badge variant="secondary" className="mb-2 text-xs">{project.category}</Badge>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-primary text-xs sm:text-sm">Key Features</h4>
                      <ul className="space-y-1 sm:space-y-1.5">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs sm:text-sm">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0 mt-1.5"></div>
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-primary text-xs sm:text-sm">Technologies</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech, i) => (
                          <Badge key={i} variant="outline" className="border-accent text-accent text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {(project.liveUrl || project.githubUrl) && (
                      <div className="flex flex-wrap gap-3 pt-2">
                        {project.liveUrl && (
                          <Button asChild variant="default" size="sm" className="text-xs sm:text-sm">
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                              <ExternalLink size={14} />
                              Live Demo
                            </a>
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button asChild variant="outline" size="sm" className="text-xs sm:text-sm">
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                              <Github size={14} />
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
