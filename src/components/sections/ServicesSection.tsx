import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Brain, BarChart3, Eye, Globe } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const services = [
  {
    title: 'Python Automation',
    icon: Code,
    description: 'Automate repetitive tasks, data processing, and workflows to increase efficiency and reduce manual work.',
    features: ['Task Automation', 'Data Processing', 'Workflow Optimization', 'Custom Scripts'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'ML Model Development',
    icon: Brain,
    description: 'Build intelligent ML models for classification, prediction, and data-driven decision making.',
    features: ['Predictive Models', 'Classification Systems', 'Algorithm Implementation', 'Model Optimization'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Data Analysis',
    icon: BarChart3,
    description: 'Transform raw data into meaningful insights with comprehensive analysis and interactive visualizations.',
    features: ['Statistical Analysis', 'Data Visualization', 'Report Generation', 'Dashboards'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Computer Vision',
    icon: Eye,
    description: 'Implement computer vision solutions for object detection, face recognition, and image processing.',
    features: ['Face Recognition', 'Object Detection', 'Image Processing', 'Real-time Analysis'],
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'Streamlit Web Apps',
    icon: Globe,
    description: 'Create interactive web applications with modern UI/UX for data science and ML projects.',
    features: ['Interactive UIs', 'Dashboard Creation', 'ML Deployment', 'Real-time Updates'],
    color: 'from-indigo-500 to-purple-500'
  }
];

export const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section 
      id="services" 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-surface/30 scroll-animate ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
        <div className="text-center space-y-3 sm:space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions for your technical needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-glass hover:shadow-glow transition-all duration-300 group">
              <CardHeader className="text-center p-4 sm:p-6">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-full bg-gradient-to-r ${service.color} p-0.5 mb-3 sm:mb-4`}>
                  <div className="w-full h-full bg-background rounded-full flex items-center justify-center">
                    <service.icon className="text-foreground" size={20} />
                  </div>
                </div>
                <CardTitle className="text-base sm:text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-4 sm:px-6 sm:pb-6 space-y-4">
                <p className="text-sm text-muted-foreground text-center">{service.description}</p>
                <div className="space-y-1.5">
                  <h4 className="font-semibold text-primary text-xs sm:text-sm">Key Features</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How I Work */}
        <Card className="card-glass">
          <CardHeader className="p-4 sm:p-6 text-center">
            <CardTitle className="text-xl sm:text-2xl">How I Work</CardTitle>
          </CardHeader>
          <CardContent className="px-4 pb-4 sm:px-6 sm:pb-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {[
                { step: '01', title: 'Discovery', desc: 'Understanding your requirements' },
                { step: '02', title: 'Planning', desc: 'Creating a detailed roadmap' },
                { step: '03', title: 'Development', desc: 'Building with regular updates' },
                { step: '04', title: 'Delivery', desc: 'Testing and deployment' }
              ].map((item, index) => (
                <div key={index} className="text-center space-y-2 sm:space-y-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-xs sm:text-sm">{item.step}</span>
                  </div>
                  <h3 className="font-semibold text-sm sm:text-base">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
