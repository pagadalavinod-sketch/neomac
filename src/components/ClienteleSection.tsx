const clients = [
  { name: "DRDO", logo: "/lovable-uploads/6a4e5c9d-7e11-4cc4-b2d1-d3fb626dde10.png" },
  { name: "DRDO RCI", logo: "/lovable-uploads/9a7c2782-8823-426d-86d5-139412b24077.png" },
  { name: "HAL", logo: "/lovable-uploads/62f9989d-2f21-4c5b-a96b-6419f9d00dc1.png" },
  { name: "Bharat Dynamics Limited", logo: "/lovable-uploads/4c5208d2-8a08-48f6-bc76-d8f44553efb8.png" },
  { name: "Bharat Electronics", logo: "/lovable-uploads/77ae744c-fb2b-499c-b6d6-27faaa3309f8.png" },
  { name: "Bharat Forge Kalyani", logo: "/lovable-uploads/4424012f-cb11-46b4-a006-c1416b570c46.png" },
  { name: "Astra Microwave Products", logo: "/lovable-uploads/e20b7f84-6541-45ee-adf3-0662d2930443.png" },
  { name: "Ananth Technologies", logo: "/lovable-uploads/d3cfa228-032f-4d85-988a-3d8576e267f9.png" },
  { name: "Avantel", logo: "/lovable-uploads/bc33ed6c-3d16-4c5e-9d1a-25ddaa397c5b.png" }
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