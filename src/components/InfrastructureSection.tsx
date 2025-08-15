const machineryData = [
  {
    category: "Milling",
    machines: [
      { name: "5-Axis CNC Milling Center", model: "DMG MORI DMU 50", quantity: 2 },
      { name: "Vertical Machining Center", model: "Haas VF-3SS", quantity: 3 },
      { name: "High-Speed Milling", model: "Mikron VCP 600", quantity: 1 }
    ]
  },
  {
    category: "Turning",
    machines: [
      { name: "CNC Turning Center", model: "Mazak INTEGREX i-200", quantity: 2 },
      { name: "Multi-Axis Lathe", model: "DMG MORI NLX 2500", quantity: 1 },
      { name: "Swiss-Type Lathe", model: "Citizen K16E", quantity: 2 }
    ]
  },
  {
    category: "Grinding",
    machines: [
      { name: "Surface Grinding", model: "OKAMOTO ACC-1234DX", quantity: 1 },
      { name: "Cylindrical Grinding", model: "Studer S33", quantity: 1 },
      { name: "Tool & Cutter Grinding", model: "ANCA MX7", quantity: 1 }
    ]
  },
  {
    category: "Inspection",
    machines: [
      { name: "CMM Machine", model: "Zeiss CONTURA G2", quantity: 1 },
      { name: "Optical Measurement", model: "KEYENCE IM-7000", quantity: 2 },
      { name: "Surface Roughness Tester", model: "Mitutoyo SJ-410", quantity: 1 }
    ]
  }
];

const InfrastructureSection = () => {
  return (
    <section id="infrastructure" className="py-20 bg-background-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">
            <span className="gradient-text">Infrastructure</span>
          </h2>
          <p className="text-foreground-muted text-xl">
            State-of-the-art machinery and equipment for precision manufacturing
          </p>
        </div>

        <div className="overflow-x-auto bg-card rounded-xl shadow-lg">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="border-b border-border">
                <th className="table-header-blue text-left p-4">Category</th>
                <th className="table-header-blue text-left p-4">Machine Type</th>
                <th className="table-header-blue text-left p-4">Model</th>
                <th className="table-header-blue text-center p-4">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {machineryData.map((category, categoryIndex) => (
                category.machines.map((machine, machineIndex) => (
                  <tr 
                    key={`${categoryIndex}-${machineIndex}`}
                    className={`border-b border-border last:border-b-0 ${
                      (categoryIndex + machineIndex) % 2 === 0 ? 'bg-background' : 'bg-background-light'
                    }`}
                  >
                    <td className={`p-4 font-semibold ${
                      categoryIndex % 2 === 0 ? 'text-primary' : 'text-accent'
                    }`}>
                      {machineIndex === 0 ? category.category : ''}
                    </td>
                    <td className="p-4 text-foreground font-medium">{machine.name}</td>
                    <td className="p-4 text-foreground-muted">{machine.model}</td>
                    <td className="p-4 text-center font-semibold text-foreground">{machine.quantity}</td>
                  </tr>
                ))
              ))}
            </tbody>
          </table>
        </div>

        {/* Machinery Gallery */}
        <div className="mt-16">
          <h3 className="text-3xl font-extrabold text-center mb-12">
            <span className="gradient-text">Our Machinery</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="machinery-card group">
              <img 
                src="/lovable-uploads/912a0d6a-9b01-49c3-8020-6668af82a715.png" 
                alt="TSUGAMI CNC Turning Center"
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="p-4">
                <h4 className="font-semibold text-foreground">CNC Turning Center</h4>
                <p className="text-foreground-muted text-sm">TSUGAMI Model</p>
              </div>
            </div>
            
            <div className="machinery-card group">
              <img 
                src="/lovable-uploads/cfee96e7-0071-4299-a3eb-22d8599e231e.png" 
                alt="COSMOS CVM 1050 Vertical Machining Center"
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="p-4">
                <h4 className="font-semibold text-foreground">Vertical Machining Center</h4>
                <p className="text-foreground-muted text-sm">COSMOS CVM 1050</p>
              </div>
            </div>
            
            <div className="machinery-card group">
              <img 
                src="/lovable-uploads/5f8c3951-14e0-43c8-bb51-bf313f059bbd.png" 
                alt="COSMOS CVM 800 Vertical Machining Center"
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="p-4">
                <h4 className="font-semibold text-foreground">Vertical Machining Center</h4>
                <p className="text-foreground-muted text-sm">COSMOS CVM 800</p>
              </div>
            </div>
            
            <div className="machinery-card group">
              <img 
                src="/lovable-uploads/094a70ad-7aec-4085-974b-7e83a1039ca8.png" 
                alt="COSMOS CVM 1370 Vertical Machining Center"
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="p-4">
                <h4 className="font-semibold text-foreground">Vertical Machining Center</h4>
                <p className="text-foreground-muted text-sm">COSMOS CVM 1370</p>
              </div>
            </div>
            
            <div className="machinery-card group">
              <img 
                src="/lovable-uploads/350f3476-8496-4271-af04-707312ac05e8.png" 
                alt="Sparktec EDM Machine"
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="p-4">
                <h4 className="font-semibold text-foreground">EDM Machine</h4>
                <p className="text-foreground-muted text-sm">Sparktec</p>
              </div>
            </div>
            
            <div className="machinery-card group">
              <img 
                src="/lovable-uploads/cbc402c4-0dd5-4af3-8fdb-d6a97a8e3207.png" 
                alt="Electronica Wire EDM"
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="p-4">
                <h4 className="font-semibold text-foreground">Wire EDM</h4>
                <p className="text-foreground-muted text-sm">Electronica SPRINTCUT MINI</p>
              </div>
            </div>
            
            <div className="machinery-card group">
              <img 
                src="/lovable-uploads/61abc8fa-7cf2-4035-8550-a3766264dbc4.png" 
                alt="CMM Coordinate Measuring Machine"
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="p-4">
                <h4 className="font-semibold text-foreground">CMM Machine</h4>
                <p className="text-foreground-muted text-sm">Coordinate Measuring Machine</p>
              </div>
            </div>
            
            <div className="machinery-card group">
              <img 
                src="/lovable-uploads/06cb8aa6-07ca-4b62-ad1f-0f2d0e20fd1b.png" 
                alt="BFW BMV 50 TC24 Machining Center"
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="p-4">
                <h4 className="font-semibold text-foreground">CNC Machining Center</h4>
                <p className="text-foreground-muted text-sm">BFW BMV 50 TC24</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-extrabold text-primary mb-2">20,000+</div>
            <div className="text-foreground-muted">Sq Ft Facility</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-extrabold text-accent mb-2">±0.005mm</div>
            <div className="text-foreground-muted">Precision Tolerance</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-extrabold text-primary mb-2">24/7</div>
            <div className="text-foreground-muted">Production Capability</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;