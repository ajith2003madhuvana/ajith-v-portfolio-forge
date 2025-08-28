import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Code, Database, Brain, Shield, Wrench, Users } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    skills: [
      { name: 'Java', level: 90 },
      { name: 'Python', level: 88 },
      { name: 'C', level: 85 },
      { name: 'JavaScript', level: 75 },
      { name: 'SQL', level: 85 }
    ]
  },
  {
    title: 'Backend Development',
    icon: Database,
    skills: [
      { name: 'Spring Boot', level: 85 },
      { name: 'MySQL', level: 80 },
      { name: 'SQLite', level: 78 },
      { name: 'Data Structures & Algorithms', level: 88 },
      { name: 'Backend Architecture', level: 82 }
    ]
  },
  {
    title: 'Web Development',
    icon: Wrench,
    skills: [
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 88 },
      { name: 'JavaScript', level: 75 },
      { name: 'Streamlit', level: 85 },
      { name: 'Responsive Design', level: 80 }
    ]
  },
  {
    title: 'Machine Learning & AI',
    icon: Brain,
    skills: [
      { name: 'Machine Learning', level: 88 },
      { name: 'KNN Algorithm', level: 85 },
      { name: 'Deep Learning (CNN)', level: 80 },
      { name: 'Computer Vision', level: 85 },
      { name: 'Data Analysis', level: 88 }
    ]
  },
  {
    title: 'Data Science & Visualization',
    icon: Database,
    skills: [
      { name: 'Pandas', level: 85 },
      { name: 'NumPy', level: 85 },
      { name: 'Matplotlib', level: 80 },
      { name: 'Seaborn', level: 80 },
      { name: 'Data Preprocessing', level: 88 }
    ]
  },
  {
    title: 'Cybersecurity & Cryptography',
    icon: Shield,
    skills: [
      { name: 'Cryptography', level: 85 },
      { name: 'AES Encryption', level: 80 },
      { name: 'RSA Encryption', level: 80 },
      { name: 'HMAC', level: 78 },
      { name: 'Data Security', level: 85 }
    ]
  },
  {
    title: 'Cloud & Tools',
    icon: Wrench,
    skills: [
      { name: 'Microsoft Azure', level: 75 },
      { name: 'Git/GitHub', level: 90 },
      { name: 'OpenCV', level: 85 },
      { name: 'Telegram API', level: 80 },
      { name: 'Prompt Engineering', level: 75 }
    ]
  },
  {
    title: 'Soft Skills',
    icon: Users,
    skills: [
      { name: 'Analytical Thinking', level: 90 },
      { name: 'Problem Solving', level: 88 },
      { name: 'Communication', level: 85 },
      { name: 'Team Collaboration', level: 88 },
      { name: 'Time Management', level: 85 },
      { name: 'Adaptability', level: 90 }
    ]
  }
];

export default function Skills() {
  return (
    <Layout>
      <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold">
              My <span className="gradient-text">Skills</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technical expertise and professional capabilities
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="card-metallic hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <category.icon className="text-primary" size={24} />
                    <span>{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Technologies as Badges */}
          <Card className="card-metallic">
            <CardHeader>
              <CardTitle className="text-center">Technology Stack</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3 justify-center">
            {[
              'Java', 'Spring Boot', 'Python', 'Machine Learning', 'SQL', 'MySQL', 
              'Cybersecurity', 'AES Encryption', 'RSA Encryption', 'OpenCV', 'Computer Vision',
              'Streamlit', 'Data Science', 'Pandas', 'NumPy', 'Microsoft Azure', 
              'Git', 'GitHub', 'Deep Learning', 'CNN', 'Healthcare Technology'
            ].map((tech) => (
                  <Badge 
                    key={tech} 
                    variant="secondary" 
                    className="text-sm px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Looking for expertise in any of these areas?
            </p>
            <a href="/contact" className="text-primary hover:text-accent transition-colors font-semibold">
              Let's discuss your project →
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}