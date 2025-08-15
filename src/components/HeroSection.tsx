import heroBackground from '@/assets/hero-background.jpg';

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient opacity-80"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          Precision Engineering
          <br />
          <span className="gradient-text">Excellence</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-medium opacity-90">
          Advanced aerospace and defense manufacturing solutions with cutting-edge technology and uncompromising quality standards.
        </p>
        <button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="neomac-button text-lg px-8 py-4"
        >
          Get In Touch
        </button>
      </div>
    </section>
  );
};

export default HeroSection;