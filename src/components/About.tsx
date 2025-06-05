
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
              Passionate about analyzing complex data and designing websites.
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 text-lg">
              With over 4 years of experience in web designing, I focus on creating interfaces that 
              are both visually compelling and usable.
              My approach combines a good foundation in data analysis with user-friendly 
              design principles to create experiences that are efficient.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              I believe great design serves clarity as it simplifies complexity and helps users find what they need easily. 
              Every project is an opportunity to turn insights into solutions that improve how people interact with digital information.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-700 rounded-2xl p-10 shadow-lg dark:shadow-gray-900/20">
            <div className="space-y-8">
              {[
                { label: "Projects Created", value: "6" },
                { label: "Years of Experience", value: "4" },
                { label: "Certifications", value: "3" },
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
