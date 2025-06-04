
import { Me } from "@/components/Me";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navigation />
      <Me />
      <About />
      <Projects />
      <Services />
      <Certifications />
      <Contact />
    </div>
  );
};

export default Index;
