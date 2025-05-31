export const Services = () => {
  const services = [
    { name: "JavaScript", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Python", level: 85 },
    { name: "PHP", level: 88 }
  ];

  const analyst = [
    "Data Processing", "Data Cleaning", "Data Analysis", "Data Entry", "Database Management", "Data Validation"
  ];

  return (
    <section id="services" className="py-20 px-6 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 dark:text-white mb-6">Services</h2>
          <div className="w-16 h-0.5 bg-gray-900 dark:bg-white mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-8">Languages Used</h3>
            <div className="space-y-6">
              {services.map((services, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 dark:text-gray-300">{services.name}</span>
                    <span className="text-gray-500 dark:text-gray-400">{services.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1">
                    <div 
                      className="bg-gray-900 dark:bg-white h-1 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${services.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-8">Data Related Service</h3>
            <div className="grid grid-cols-2 gap-4">
              {analyst.map((tool, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-700 rounded-lg p-4 text-center shadow-sm hover:shadow-md dark:shadow-gray-900/20 transition-all duration-300"
                >
                  <span className="text-gray-700 dark:text-gray-300">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};