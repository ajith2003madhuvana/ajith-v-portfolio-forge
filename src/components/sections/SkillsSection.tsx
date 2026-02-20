import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Code, Database, Brain, Shield } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

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
      { name: 'DSA', level: 88 },
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
    title: 'Cybersecurity',
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
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section 
      id="skills" 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-14 sm:py-20 px-4 sm:px-6 lg:px-8 scroll-animate ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
        <div className="text-center space-y-3 sm:space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Technical expertise and professional capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-glass hover:shadow-glow transition-all duration-300">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg">
                  <category.icon className="text-primary flex-shrink-0" size={20} />
                  <span>{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-4 sm:px-6 sm:pb-6 space-y-3 sm:space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-sm">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-1.5 sm:h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="card-glass">
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="text-center text-base sm:text-lg">Technology Stack</CardTitle>
          </CardHeader>
          <CardContent className="px-4 pb-4 sm:px-6 sm:pb-6">
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
              {[
                'Java', 'Spring Boot', 'Python', 'Machine Learning', 'SQL', 'MySQL', 
                'Cybersecurity', 'AES Encryption', 'RSA Encryption', 'OpenCV', 'Computer Vision',
                'Streamlit', 'Data Science', 'Pandas', 'NumPy', 'Microsoft Azure', 
                'Git', 'GitHub', 'Deep Learning', 'CNN', 'Healthcare Technology'
              ].map((tech) => (
                <Badge 
                  key={tech} 
                  variant="secondary" 
                  className="text-xs sm:text-sm px-2.5 sm:px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-colors"
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
