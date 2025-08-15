import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-background-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">
            <span className="gradient-text">Contact Us</span>
          </h2>
          <p className="text-foreground-muted text-xl">
            Ready to discuss your next project? Get in touch with our team
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="neomac-card">
              <h3 className="text-2xl font-bold text-primary mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Address</h4>
                    <p className="text-foreground-muted">
                      123 Industrial Park Drive<br />
                      Aerospace District<br />
                      Mumbai, Maharashtra 400001<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mr-4 flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Phone</h4>
                    <p className="text-foreground-muted">+91 22 1234 5678</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Email</h4>
                    <p className="text-foreground-muted">info@neomacsystems.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mr-4 flex-shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Business Hours</h4>
                    <p className="text-foreground-muted">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-64 bg-muted rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.4742387275595!2d72.8777!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzMzLjYiTiA3MsKwNTInMzkuNyJF!5e0!3m2!1sen!2sin!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Neomac Systems Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="neomac-card">
            <h3 className="text-2xl font-bold text-primary mb-6">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="your.email@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your project requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full neomac-button"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;