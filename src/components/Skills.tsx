export const Skills = () => {
  const skills = [
    { name: "UI/UX Design", level: 95 },
    { name: "Web Design", level: 90 },
    { name: "Branding", level: 85 },
    { name: "Prototyping", level: 88 },
    { name: "User Research", level: 82 },
    { name: "Design Systems", level: 90 }
  ];

  const tools = [
    "Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator", "Framer", "Principle", "InVision"
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 dark:text-white mb-6">Skills & Tools</h2>
          <div className="w-16 h-0.5 bg-gray-900 dark:bg-white mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-8">Expertise</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1">
                    <div 
                      className="bg-gray-900 dark:bg-white h-1 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-8">Tools</h3>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, index) => (
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