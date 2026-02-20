import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const experiences = [
  {
    title: 'Java Developer Intern',
    company: 'TAP Academy',
    location: 'Bengaluru',
    period: 'June 2025 – Dec 2025',
    type: 'Internship (Completed)',
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

export const ExperienceSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section 
      id="experience" 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-surface/30 scroll-animate ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
        <div className="text-center space-y-3 sm:space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            My <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional journey and hands-on learning experiences
          </p>
        </div>

        <div className="space-y-5 sm:space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-glass hover:shadow-glow transition-all duration-300">
              <CardHeader className="p-4 sm:p-6">
                <div className="flex flex-col gap-3 sm:gap-4">
                  <CardTitle className="flex items-start gap-2 sm:gap-3">
                    <Briefcase className="text-primary flex-shrink-0 mt-1" size={20} />
                    <div className="min-w-0">
                      <h3 className="text-lg sm:text-xl leading-tight">{exp.title}</h3>
                      <p className="text-base sm:text-lg text-muted-foreground font-normal">{exp.company}</p>
                    </div>
                  </CardTitle>
                  <div className="flex flex-wrap gap-2 items-center">
                    <Badge variant="secondary" className="text-xs">{exp.type}</Badge>
                    <div className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="px-4 pb-4 sm:px-6 sm:pb-6 space-y-4 sm:space-y-6">
                <div>
                  <h4 className="font-semibold mb-2 sm:mb-3 text-primary text-sm sm:text-base">Key Achievements</h4>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 sm:mb-3 text-primary text-sm sm:text-base">Technologies Used</h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="border-accent text-accent text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
