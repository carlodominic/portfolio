import { useState, useRef, useEffect } from "react";

// Define Project interface for type safety
interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
}

// Reusable ProjectSection component
const ProjectSection = ({ projects }: { projects: Project[] }) => {
  // Display message if no projects exist
  if (projects.length === 0) {
    return <p className="text-center text-gray-500 dark:text-gray-400">No projects in this category yet.</p>;
  }

  const [activeIndex, setActiveIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(320);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (cardRef.current) {
        setCardWidth(cardRef.current.offsetWidth);
      }
      handleScroll();
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const handleScroll = (e?: React.UIEvent<HTMLDivElement>) => {
    const container = e?.currentTarget || containerRef.current;
    if (!container) return;

    const index = Math.round(container.scrollLeft / cardWidth);
    const clampedIndex = Math.min(Math.max(index, 0), projects.length - 1);
    setActiveIndex(clampedIndex);

    setAtStart(container.scrollLeft === 0);
    setAtEnd(
      container.scrollLeft + container.clientWidth >= container.scrollWidth - 1
    );
  };

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -cardWidth,
        behavior: "smooth"
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: cardWidth,
        behavior: "smooth"
      });
    }
  };

  const scrollToIndex = (index: number) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: cardWidth * index,
        behavior: "smooth"
      });
      setActiveIndex(index);
    }
  };

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="flex overflow-x-auto gap-8 pb-4 px-2 scrollbar-hide"
        onScroll={handleScroll}
      >
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div
              ref={index === 0 ? cardRef : null}
              className="flex-none w-80 sm:w-96 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>
              <div className="p-6 space-y-2">
                <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">{project.category}</p>
                <h3 className="text-xl font-light text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>

      <button
        onClick={scrollLeft}
        className={`absolute top-1/2 left-0 -translate-y-1/2 z-10 p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 ${
          atStart ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        aria-label="Scroll left"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <button
        onClick={scrollRight}
        className={`absolute top-1/2 right-0 -translate-y-1/2 z-10 p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 ${
          atEnd ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        aria-label="Scroll right"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      <div className="flex justify-center mt-6 gap-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              activeIndex === index
                ? "bg-gray-900 dark:bg-white scale-125"
                : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export const Projects = () => {
  const webProjects: Project[] = [
    {
      title: "UnheardThoughts Blog Site",
      category: "Next JS | Supabase",
      description: "Built with Next.js and Supabase, it empowers creators to share unspoken stories and connect through emotionally resonant content.",
      image: "/images/unheard-thoughts.png",
      link: "https://unheard-thoughts.netlify.app/"
    },
    {
      title: "Market Tracker",
      category: "React JS | Tailwind",
      description: "Online market tracker application that allows users to track market trends and prices with responsive layout.",
      image: "/images/market-tracker.png",
      link: "https://market-tracker-carlo.netlify.app/"
    },
    {
      title: "InvestVision",
      category: "Vite JS",
      description: "Landing page template for investor created through a request seen in public posts with modern design and responsive layout.",
      image: "/images/investment_landing_page.png",
      link: "https://investor-page.netlify.app/"
    },
    {
      title: "Sleezy Online Store",
      category: "TypeScript | Node JS",
      description: "Online store built with TypeScript and Node.js, featuring a modern design and responsive layout. Soon to have backend functionality.",
      image: "/images/sleezy-store.png",
      link: "https://sleezy-store.netlify.app/"
    },
  ];

  const dataProjects: Project[] = [
    {
      title: "Deployed Soon",
      category: "TBA",
      description: "The user is currently creating the said project, please check back later.",
      image: "/images/unavailable.jpg",
      link: "#"
    },
        {
      title: "Deployed Soon",
      category: "TBA",
      description: "The user is currently creating the said project, please check back later.",
      image: "/images/unavailable.jpg",
      link: "#"
    },
        {
      title: "Deployed Soon",
      category: "TBA",
      description: "The user is currently creating the said project, please check back later.",
      image: "/images/unavailable.jpg",
      link: "#"
    },
        {
      title: "Deployed Soon",
      category: "TBA",
      description: "The user is currently creating the said project, please check back later.",
      image: "/images/unavailable.jpg",
      link: "#"
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 dark:text-white mb-6">Created Projects</h2>
          <div className="w-16 h-0.5 bg-gray-900 dark:bg-white mx-auto"></div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-8">Data Projects</h3>
          <ProjectSection projects={dataProjects} />
        </div>

        <div>
          <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-8">Web Projects</h3>
          <ProjectSection projects={webProjects} />
        </div>
      </div>
    </section>
  );
};