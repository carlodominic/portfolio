export const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      category: "Web Design",
      description: "A modern e-commerce platform with intuitive user experience and clean design.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop"
    },
    {
      title: "Mobile App Design",
      category: "UI/UX Design",
      description: "A comprehensive mobile application design for a fitness tracking app.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop"
    },
    {
      title: "Brand Identity",
      category: "Branding",
      description: "Complete brand identity design for a sustainable fashion company.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop"
    },
    {
      title: "Dashboard Design",
      category: "Web Design",
      description: "Analytics dashboard with focus on data visualization and user experience.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 dark:text-white mb-6">Selected Work</h2>
          <div className="w-16 h-0.5 bg-gray-900 dark:bg-white mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 mb-6">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">{project.category}</p>
                <h3 className="text-xl font-light text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};