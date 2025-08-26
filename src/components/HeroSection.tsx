import React, { useEffect, useRef } from "react";
import { MoveRight, Sparkles, Code, Database } from "lucide-react";

const HeroSection = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!backgroundRef.current) return;

      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      backgroundRef.current.style.transform = `translate(${x * -20}px, ${
        y * -20
      }px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-b from-gray-900 via-black to-gray-950">
      {/* Animated Background Glow */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 z-0 transition-transform duration-700 ease-out"
        style={{ willChange: "transform" }}
      >
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-green-400/10 rounded-full blur-3xl animate-pulse delay-200"></div>
      </div>

      {/* Decorative Icons */}
      <div className="absolute top-1/4 left-20 hidden lg:block opacity-20">
        <Code className="h-14 w-14 text-green-500" />
      </div>
      <div className="absolute bottom-1/4 right-20 hidden lg:block opacity-20">
        <Database className="h-16 w-16 text-green-400" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="bg-green-500/20 text-green-400 rounded-full px-5 py-1.5 text-sm font-medium inline-flex items-center mb-5 shadow-md shadow-green-500/20">
            {/* <Sparkles className="h-4 w-4 mr-1" /> */}
            MERN Stack Developer
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 drop-shadow-lg">
              Muhameed Jabeer
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
            Passionate <span className="text-green-400">MERN Stack Developer</span> 
            with expertise in JavaScript, React, Node.js, and MongoDB. 
            I craft <span className="text-green-400">scalable web apps</span> with clean 
            architecture and exceptional user experiences.
          </p>
        

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
             <Database className="h-14 w-14 text-green-500 opacity-20" />
            <a
              href="#contact"
              className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-8 rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg shadow-green-500/30 hover:shadow-green-500/50"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get In Touch
              <MoveRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#projects"
              className="bg-transparent border border-green-500 text-green-400 hover:bg-green-500/10 font-medium py-3 px-8 rounded-xl transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-green-500/20"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Projects
            </a>
            <a
  href="/Muhammed Jabeer-Software Devloper.MERN.pdf"
  download="Muhammed Jabeer-Software Devloper.MERN.pdf"
  className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-8 rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg shadow-green-500/30 hover:shadow-green-500/50"
>
  Download Resume 
   <MoveRight className="ml-2 h-5 w-5" />
</a>

             <Code className="h-14 w-14 text-green-500 opacity-20" />
          </div>
           
        </div>
      </div>
       
    </section>
  );
};

export default HeroSection;
