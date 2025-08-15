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