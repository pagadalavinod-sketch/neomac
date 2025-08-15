import facilityImage from '@/assets/facility-image.jpg';

const OverviewSection = () => {
  return (
    <section className="py-20 bg-background-light">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-extrabold mb-8">
              <span className="gradient-text">Vision & Mission</span>
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
                <p className="text-foreground-muted text-lg leading-relaxed">
                  To be the leading provider of precision engineering solutions in aerospace and defense, 
                  setting new standards for quality, innovation, and reliability in critical manufacturing applications.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-accent mb-4">Our Mission</h3>
                <p className="text-foreground-muted text-lg leading-relaxed">
                  We deliver exceptional manufacturing and engineering services through advanced technology, 
                  rigorous quality control, and a commitment to excellence that exceeds our clients' expectations 
                  in every project we undertake.
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img 
              src={facilityImage} 
              alt="Neomac Systems Manufacturing Facility" 
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;