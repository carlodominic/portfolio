export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-4xl font-light text-gray-900 dark:text-white mb-6">Let's Work Together</h2>
          <div className="w-16 h-0.5 bg-gray-900 dark:bg-white mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-gray-600 dark:text-gray-300">📧</span>
            </div>
            <h3 className="font-medium text-gray-900 dark:text-white mb-2">Email</h3>
            <p className="text-gray-600 dark:text-gray-300">hello@designer.com</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-gray-600 dark:text-gray-300">📱</span>
            </div>
            <h3 className="font-medium text-gray-900 dark:text-white mb-2">Phone</h3>
            <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-gray-600 dark:text-gray-300">📍</span>
            </div>
            <h3 className="font-medium text-gray-900 dark:text-white mb-2">Location</h3>
            <p className="text-gray-600 dark:text-gray-300">New York, NY</p>
          </div>
        </div>
        
        <div className="flex justify-center space-x-6">
          {["LinkedIn", "Dribbble", "Behance", "Instagram"].map((social, index) => (
            <a 
              key={index}
              href="#"
              className="text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};