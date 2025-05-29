import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const Me = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <div className="mb-16">
            <Avatar className="w-36 h-36 mx-auto mb-8 ring-4 ring-gray-100 dark:ring-gray-700 shadow-lg">
              <AvatarImage 
                src='/images/profile_pic.png' 
                alt="Profile" 
              />
              <AvatarFallback className="text-3xl font-semibold bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                JD
              </AvatarFallback>
            </Avatar>
            <h3 className="text-3xl font-medium text-gray-900 dark:text-white mb-3">Carlo Dominic Suaybaguio</h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">Data Analyst & Web Developer</p>
            <p className="text-base text-gray-500 dark:text-gray-400 max-w-lg mx-auto leading-relaxed">
              Passionate on analyzing complex data and website designing that improves user experience and optimizes information access.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              View My Work
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-full hover:border-gray-900 dark:hover:border-white transition-all duration-300 hover:scale-105"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
