import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export default function About() {
  return (
    <Layout>
      <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold">
              About <span className="gradient-text">Me</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate about solving real-world challenges through technology
            </p>
          </div>

          {/* Bio */}
          <Card className="card-metallic">
            <CardContent className="p-8">
              <div className="space-y-6 text-lg leading-relaxed text-foreground">
                <p>
                  I'm <span className="font-semibold text-primary">Ajith V</span>, a Computer Science and Business Systems undergraduate at Canara Engineering College, Mangaluru.
                </p>
                
                <p>
                  With a strong foundation in <span className="font-medium text-accent">Python, Java, machine learning, and cryptography</span>, I enjoy using code to make a real-world impact. I'm passionate about building secure, intelligent systems that combine innovation with practical usability — always focused on delivering solutions that are both technically robust and user-friendly.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Education Timeline */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-center">Education</h2>
            <div className="space-y-6">
              <Card className="card-metallic">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <GraduationCap className="text-primary" />
                    B.E. in Computer Science and Business Systems
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="font-semibold">Canara Engineering College, Mangaluru</p>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>Expected 2025</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>Mangaluru, Karnataka</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-metallic">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <GraduationCap className="text-accent" />
                    PUC in Computer Science
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="font-semibold">Rotary PU College, Sullia</p>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>2021</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>Sullia, Dakshina Kannada</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-center">Core Strengths</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {['Problem-solving', 'Quick Learning', 'Attention to Detail'].map((skill) => (
                <Card key={skill} className="card-metallic text-center">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold gradient-text">{skill}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}