import { Cog, Shield, Microscope, Award } from 'lucide-react';

const competencies = [
  {
    icon: Cog,
    title: "Precision Manufacturing",
    description: "Advanced CNC machining and precision engineering with tolerances up to ±0.005mm for critical aerospace components."
  },
  {
    icon: Shield,
    title: "Defense Solutions",
    description: "Specialized manufacturing for defense applications with highest security clearances and compliance standards."
  },
  {
    icon: Microscope,
    title: "Quality Assurance",
    description: "Comprehensive quality control with advanced inspection techniques and rigorous testing protocols."
  },
  {
    icon: Award,
    title: "Certification Excellence",
    description: "Multiple industry certifications including AS9100, ISO standards, and defense manufacturing approvals."
  }
];

const CompetenciesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">
            <span className="gradient-text">Core Competencies</span>
          </h2>
          <p className="text-foreground-muted text-xl">
            Excellence in every aspect of aerospace and defense manufacturing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {competencies.map((competency, index) => {
            const Icon = competency.icon;
            return (
              <div key={index} className="neomac-card text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">
                  {competency.title}
                </h3>
                <p className="text-foreground-muted leading-relaxed">
                  {competency.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CompetenciesSection;