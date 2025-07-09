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
      { name: 'Python', level: 90 },
      { name: 'C', level: 80 },
      { name: 'Java', level: 75 },
      { name: 'JavaScript', level: 70 }
    ]
  },
  {
    title: 'Web Technologies',
    icon: Database,
    skills: [
      { name: 'HTML/CSS', level: 85 },
      { name: 'Streamlit', level: 80 },
      { name: 'Responsive Design', level: 75 }
    ]
  },
  {
    title: 'ML & Data Science',
    icon: Brain,
    skills: [
      { name: 'KNN Algorithm', level: 85 },
      { name: 'Pandas', level: 80 },
      { name: 'NumPy', level: 80 },
      { name: 'Matplotlib', level: 75 },
      { name: 'Seaborn', level: 75 }
    ]
  },
  {
    title: 'Computer Vision & Security',
    icon: Shield,
    skills: [
      { name: 'OpenCV', level: 80 },
      { name: 'Haar Cascade', level: 75 },
      { name: 'AES Encryption', level: 70 },
      { name: 'RSA', level: 70 },
      { name: 'HMAC', level: 65 }
    ]
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    skills: [
      { name: 'Git/GitHub', level: 85 },
      { name: 'VS Code', level: 90 },
      { name: 'Jupyter Notebook', level: 80 }
    ]
  },
  {
    title: 'Soft Skills',
    icon: Users,
    skills: [
      { name: 'Communication', level: 85 },
      { name: 'Teamwork', level: 90 },
      { name: 'Logical Thinking', level: 88 },
      { name: 'Problem Solving', level: 85 }
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
                  'Python', 'C', 'Java', 'JavaScript', 'HTML/CSS', 'Streamlit',
                  'OpenCV', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Git',
                  'GitHub', 'VS Code', 'Jupyter', 'Machine Learning', 'Computer Vision',
                  'Cryptography', 'Data Analysis', 'Web Development'
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