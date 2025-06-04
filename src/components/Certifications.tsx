import { useState, useRef, useEffect } from "react";

export const Certifications = () => {
  const certifications = [
    {
      title: "Excel Mastery Certificate: Beyond The Basics",
      issuer: "Excel Academy",
      date: "2025",
      description: "",
      image: "images/beyond_the_basics.png",
      credentialUrl: "https://drive.google.com/file/d/1MGpfuTOS162uQJNYSg4FUTIt9z5Oiclq/view?usp=sharing",
      status: "Visible"
    },
    {
      title: "Get Certified as an Excel Pro! - Microsoft Essentials",
      issuer: "Microsoft",
      date: "2025",
      description: "",
      image: "images/essentials_excel.png",
      credentialUrl: "https://drive.google.com/file/d/1MDRfV00ghivE-UeMmOF1DbOYrBj_zS4B/view?usp=sharing",
      status: "Visible"
    },
    {
      title: "Certification of Completion: On-the-Job Training (OJT)",
      issuer: "Commission on Audit - Region 10",
      date: "2025",
      description: "",
      image: "images/coa_certification.jpg",
      credentialUrl: "https://drive.google.com/file/d/1_pQfl3qGQcrTK5djPmSOyLY_JoRBUfS7/view?usp=sharing",
      status: "Visible"
    },
    {
      title: "The user is currently working on this certification.",
      issuer: "TBA",
      date: "2025",
      description: "",
      image: "images/currently_working.jpg",
      credentialUrl: "#",
      status: "Visible"
    },
    {
      title: "The user is currently working on this certification.",
      issuer: "TBA",
      date: "2025",
      description: "",
      image: "images/currently_working.jpg",
      credentialUrl: "#",
      status: "Visible"
    },
  ];

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
    const clampedIndex = Math.min(Math.max(index, 0), certifications.length - 1);
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
    <section id="certifications" className="py-20 px-6 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 dark:text-white mb-6">Certifications</h2>
          <div className="w-16 h-0.5 bg-gray-900 dark:bg-white mx-auto"></div>
        </div>

        <div className="relative">
          <div
            ref={containerRef}
            className="flex overflow-x-auto gap-8 pb-4 px-2 scrollbar-hide"
            onScroll={handleScroll}
          >
            {certifications.map((cert, index) => (
              <a
                key={index}
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div
                  ref={index === 0 ? cardRef : null}
                  className="flex-none w-80 sm:w-96 bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden group cursor-pointer"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {cert.status && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                          {cert.status}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                        {cert.title}
                      </h3>
                      <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <span>{cert.issuer}</span>
                        <span>{cert.date}</span>
                      </div>
                    </div>
                    {cert.description && (
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                        {cert.description}
                      </p>
                    )}
                    <div className="inline-flex items-center text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors text-sm font-medium">
                      View Credential
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
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
        </div>

        <div className="flex justify-center mt-6 gap-2">
          {certifications.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                activeIndex === index
                  ? "bg-gray-900 dark:bg-white scale-125"
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
              }`}
              aria-label={`Go to certification ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};