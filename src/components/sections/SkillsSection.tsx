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
    title: 'Cybersecurity & Cryptography',
    icon: Shield,
    skills: [
      { name: 'Cryptography', level: 85 },
      { name: 'AES Encryption', level: 80 },
      { name: 'RSA Encryption', level: 80 },
      { name: 'HMAC', level: 78 },
      { name: 'Data Security', level: 85 }
    ]
  }
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">
            My <span className="gradient-text">Skills</span>
          </h2>
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
      </div>
    </section>
  );
};
