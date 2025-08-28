import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Java Developer Intern',
    company: 'AP Academy',
    location: 'Bengaluru',
    period: 'June 2025 – Present',
    type: 'Internship',
    achievements: [
      'Developing skills in Java, SQL, and fundamental software development concepts',
      'Learning data structures and algorithms for efficient programming',
      'Engaged in practical training to build reliable and efficient backend applications',
      'Gaining hands-on experience in software development lifecycle'
    ],
    technologies: ['Java', 'SQL', 'Data Structures', 'Algorithms', 'Backend Development']
  },
  {
    title: 'Python & Machine Learning Intern',
    company: 'Lpoint',
    location: 'Mangaluru',
    period: 'Feb 2025 – May 2025',
    type: 'Internship',
    achievements: [
      'Developed real-time face detection system using OpenCV with Telegram integration',
      'Built KNN machine learning models for crop recommendation and diabetes prediction',
      'Created interactive Streamlit web applications for data visualization',
      'Managed end-to-end data processes including preprocessing, analysis, and SQL querying',
      'Implemented matrix operations and visualization with Matplotlib and Seaborn'
    ],
    technologies: ['Python', 'Machine Learning', 'OpenCV', 'Streamlit', 'KNN', 'Telegram API', 'Matplotlib', 'Seaborn', 'SQL']
  },
  {
    title: 'C Programming Trainee',
    company: 'QSpiders',
    location: 'Training Institute',
    period: 'Oct 2023 – Nov 2023',
    type: 'Training',
    achievements: [
      'Gained practical experience in C programming and core data structures',
      'Enhanced problem-solving and analytical skills via hands-on coding challenges',
      'Developed soft skills including communication, teamwork, and presentation abilities',
      'Mastered fundamental programming concepts and algorithm implementation'
    ],
    technologies: ['C Programming', 'Data Structures', 'Algorithms', 'Problem Solving', 'Communication Skills']
  }
];

export default function Experience() {
  return (
    <Layout>
      <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold">
              My <span className="gradient-text">Experience</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional journey and hands-on learning experiences
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="card-metallic hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <CardTitle className="flex items-center gap-3">
                      <Briefcase className="text-primary" />
                      <div>
                        <h3 className="text-xl">{exp.title}</h3>
                        <p className="text-lg text-muted-foreground font-normal">{exp.company}</p>
                      </div>
                    </CardTitle>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Badge variant="secondary" className="w-fit">
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Achievements */}
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Key Achievements</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline" className="border-accent text-accent">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Interested in working together?
            </p>
            <a href="/contact" className="text-primary hover:text-accent transition-colors font-semibold">
              Let's connect and discuss opportunities →
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}