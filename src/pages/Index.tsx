import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import OverviewSection from '@/components/OverviewSection';
import CompetenciesSection from '@/components/CompetenciesSection';
import ClienteleSection from '@/components/ClienteleSection';
import ServicesSection from '@/components/ServicesSection';
import InfrastructureSection from '@/components/InfrastructureSection';
import BlogsSection from '@/components/BlogsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <OverviewSection />
        <CompetenciesSection />
        <ClienteleSection />
        <ServicesSection />
        <InfrastructureSection />
        <BlogsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="py-8 bg-foreground text-background">
        <div className="container mx-auto px-6 text-center">
          <div className="text-2xl font-extrabold mb-4">
            <span className="text-accent">neomac</span>
            <span className="text-primary"> systems</span>
          </div>
          <p className="text-background/80">
            © 2024 Neomac Systems Private Limited. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
