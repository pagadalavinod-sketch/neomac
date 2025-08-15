import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-extrabold">
            <span className="text-accent">neomac</span>
            <span className="text-primary"> systems</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="neomac-nav-link"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="neomac-nav-link"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('infrastructure')}
              className="neomac-nav-link"
            >
              Infrastructure
            </button>
            <button 
              onClick={() => scrollToSection('blogs')}
              className="neomac-nav-link"
            >
              Blogs & News
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="neomac-nav-link"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="neomac-nav-link text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="neomac-nav-link text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('infrastructure')}
                className="neomac-nav-link text-left"
              >
                Infrastructure
              </button>
              <button 
                onClick={() => scrollToSection('blogs')}
                className="neomac-nav-link text-left"
              >
                Blogs & News
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="neomac-nav-link text-left"
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;