import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section 
      id="about" 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-14 sm:py-20 px-4 sm:px-6 lg:px-8 scroll-animate ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
        <div className="text-center space-y-3 sm:space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about solving real-world challenges through technology
          </p>
        </div>

        <Card className="card-glass">
          <CardContent className="p-5 sm:p-8">
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg leading-relaxed text-foreground">
              <p>
                I'm <span className="font-semibold text-primary">Ajith V</span>, a Computer Science and Business Systems undergraduate at Canara Engineering College, Mangaluru.
              </p>
              <p>
                With a strong foundation in <span className="font-medium text-accent">Python, Java, machine learning, and cryptography</span>, I enjoy using code to make a real-world impact. I'm passionate about building secure, intelligent systems that combine innovation with practical usability — always focused on delivering solutions that are both technically robust and user-friendly.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Education */}
        <div className="space-y-4 sm:space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-center">Education</h3>
          <div className="space-y-4 sm:space-y-6">
            <Card className="card-glass">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="flex items-start sm:items-center gap-2 sm:gap-3 text-base sm:text-lg">
                  <GraduationCap className="text-primary flex-shrink-0 mt-0.5 sm:mt-0" size={20} />
                  <span>B.E. in Computer Science and Business Systems</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-4 sm:px-6 sm:pb-6 space-y-2">
                <p className="font-semibold text-sm sm:text-base">Canara Engineering College, Mangaluru</p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>Expected 2025</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    <span>Mangaluru, Karnataka</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-glass">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="flex items-start sm:items-center gap-2 sm:gap-3 text-base sm:text-lg">
                  <GraduationCap className="text-accent flex-shrink-0 mt-0.5 sm:mt-0" size={20} />
                  <span>PUC in Computer Science</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-4 sm:px-6 sm:pb-6 space-y-2">
                <p className="font-semibold text-sm sm:text-base">Rotary PU College, Sullia</p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>2021</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    <span>Sullia, Dakshina Kannada</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Certifications */}
        <div className="space-y-4 sm:space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-center">Certifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              { title: 'Microsoft Azure Fundamentals', desc: 'Cloud computing fundamentals - July 2025' },
              { title: 'Mastercard Cybersecurity Job Simulation', desc: 'Forage - July 2025' },
              { title: 'Foundations of Cybersecurity', desc: 'Google (Coursera)' },
              { title: 'C Programming & CSS Training', desc: 'Spoken Tutorial by IIT Bombay' },
            ].map((cert) => (
              <Card key={cert.title} className="card-glass">
                <CardContent className="p-4 sm:p-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary text-sm sm:text-base">{cert.title}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">{cert.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Core Strengths */}
        <div className="space-y-4 sm:space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-center">Core Strengths</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
            {[
              'Analytical Thinking', 'Problem Solving', 'Team Collaboration', 'Time Management',
              'Effective Communication', 'Adaptability', 'Continuous Learning', 'Task Prioritization'
            ].map((skill) => (
              <Card key={skill} className="card-glass text-center">
                <CardContent className="p-3 sm:p-4">
                  <h4 className="text-xs sm:text-sm font-semibold gradient-text">{skill}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
