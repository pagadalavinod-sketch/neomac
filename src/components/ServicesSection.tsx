import { Wrench, CheckCircle } from 'lucide-react';

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-foreground-muted text-xl">
            Comprehensive solutions for aerospace and defense industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Manufacturing & Engineering */}
          <div className="neomac-card">
            <div className="flex items-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mr-4">
                <Wrench className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary">
                Manufacturing & Engineering
              </h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-accent mt-1 mr-3 flex-shrink-0" />
                <span className="text-foreground-muted">Precision CNC machining with advanced 5-axis capabilities</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-accent mt-1 mr-3 flex-shrink-0" />
                <span className="text-foreground-muted">Complex aerospace component manufacturing</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-accent mt-1 mr-3 flex-shrink-0" />
                <span className="text-foreground-muted">Defense systems engineering and production</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-accent mt-1 mr-3 flex-shrink-0" />
                <span className="text-foreground-muted">Prototype development and testing</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-accent mt-1 mr-3 flex-shrink-0" />
                <span className="text-foreground-muted">Assembly and integration services</span>
              </div>
            </div>
          </div>

          {/* Quality & Compliance Consulting */}
          <div className="neomac-card">
            <div className="flex items-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mr-4">
                <CheckCircle className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-accent">
                Quality & Compliance Consulting
              </h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <span className="text-foreground-muted">AS9100 and ISO certification consulting</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <span className="text-foreground-muted">Quality management system implementation</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <span className="text-foreground-muted">Audit preparation and compliance training</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <span className="text-foreground-muted">Process optimization and improvement</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <span className="text-foreground-muted">Supplier qualification and management</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;