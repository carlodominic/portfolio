
export const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-light text-gray-900 dark:text-white mb-6">About Me</h2>
          <div className="w-16 h-0.5 bg-gray-900 dark:bg-white mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-8">
              Passionate about creating meaningful experiences
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 text-lg">
              With over 5 years of experience in design, I specialize in creating 
              digital products that are not only visually appealing but also 
              functionally excellent. My approach combines aesthetic sensibility 
              with user-centered design principles.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              I believe great design should be invisible – it should enhance the 
              user's experience without drawing attention to itself. Every project 
              is an opportunity to solve problems creatively and make people's 
              lives a little bit better.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-700 rounded-2xl p-10 shadow-lg dark:shadow-gray-900/20">
            <div className="space-y-8">
              {[
                { label: "Projects Completed", value: "0" },
                { label: "Years of Experience", value: "4" },
                { label: "Certifications", value: "2" },
                { label: "Clients", value: "0" }
              ].map((stat, index) => (
                <div key={index} className="flex justify-between items-center border-b border-gray-100 dark:border-gray-600 pb-4 last:border-b-0">
                  <span className="text-gray-600 dark:text-gray-300 text-lg">{stat.label}</span>
                  <span className="text-2xl font-light text-gray-900 dark:text-white">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
