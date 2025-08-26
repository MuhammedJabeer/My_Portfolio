import React from "react";
import { Code2, Database, Layers, Settings } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "HTML", "CSS"],
      color: "text-white-400",
      icon: <Code2 className="h-5 w-5 sm:h-6 sm:w-6 text-white-400" />,
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL", "PostgreSQL"],
      color: "text-green-400",
      icon: <Database className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />,
    },
    {
      title: "Libraries & Frameworks",
      skills: ["Node.js", "Express", "React", "Redux", "Tailwind CSS", "Bootstrap"],
      color: "text-white-400",
      icon: <Layers className="h-5 w-5 sm:h-6 sm:w-6 text-white-400" />,
    },
    {
      title: "Tools & Platforms",
      skills: ["Socket.IO", "Postman", "Render", "Git", "VSCode", "Vercel", "Supabase"],
      color: "text-green-400",
      icon: <Settings className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />,
    },
  ];

  return (
    <section
      id="skills"
      className="section-padding relative bg-gradient-to-b from-gray-950 via-black to-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Technical{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
                Skills
              </span>
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-green-500 mx-auto mb-4 sm:mb-6 rounded-full"></div>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              My technical expertise spans the full stack — I can design, build,
              and optimize scalable web applications from frontend to backend.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="glassmorphism p-5 sm:p-6 rounded-2xl shadow-lg hover:shadow-green-500/20 transition-all duration-300"
              >
                <div className="flex items-center mb-3 sm:mb-4 space-x-2">
                  {category.icon}
                  <h3 className={`text-base sm:text-lg font-semibold ${category.color}`}>
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-gray-800/60 rounded-full text-gray-300 hover:bg-green-500/20 hover:text-green-400 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
