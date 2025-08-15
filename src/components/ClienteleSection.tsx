const clients = [
  { name: "Boeing", logo: "https://logos-world.net/wp-content/uploads/2020/03/Boeing-Logo.png" },
  { name: "Lockheed Martin", logo: "https://logos-world.net/wp-content/uploads/2020/11/Lockheed-Martin-Logo.png" },
  { name: "Airbus", logo: "https://logos-world.net/wp-content/uploads/2020/03/Airbus-Logo.png" },
  { name: "Raytheon", logo: "https://logos-world.net/wp-content/uploads/2020/11/Raytheon-Logo.png" },
  { name: "BAE Systems", logo: "https://logos-world.net/wp-content/uploads/2020/11/BAE-Systems-Logo.png" },
  { name: "General Dynamics", logo: "https://logos-world.net/wp-content/uploads/2020/11/General-Dynamics-Logo.png" }
];

const ClienteleSection = () => {
  return (
    <section className="py-20 bg-background-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">
            <span className="gradient-text">Our Clientele</span>
          </h2>
          <p className="text-foreground-muted text-xl">
            Trusted by industry leaders worldwide
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div key={index} className="flex items-center justify-center p-4">
              <img 
                src={client.logo} 
                alt={`${client.name} Logo`}
                className="neomac-logo-filter max-h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClienteleSection;