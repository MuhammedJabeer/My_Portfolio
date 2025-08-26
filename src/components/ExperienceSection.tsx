import React from "react";
import { Calendar, Briefcase, CheckCircle2 } from "lucide-react";

const ExperienceSection = () => {
  const responsibilities = [
    "Developed and maintained web applications using JavaScript, Node.js, React, MongoDB, and SQL",
    "Built and optimized RESTful APIs for data exchange between frontend and backend",
    "Implemented authentication and authorization (JWT, sessions, cookies) for secure access",
    "Integrated Multer for file uploads and managed media storage",
    "Developed interactive UI components using React.js and Handlebars (hbs)",
    "Worked with Socket.IO for real-time messaging features",
    "Used Git & GitHub for version control and collaborated with the team",
    "Debugged and optimized application performance for better scalability",
  ];

  return (
    <section
      id="experience"
      className="section-padding relative bg-gradient-to-b from-gray-950 via-black to-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Work{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
                Experience
              </span>
            </h2>
            <div className="w-20 h-1 bg-green-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Hands-on industry experience working with modern web technologies
              and best practices in real-world projects.
            </p>
          </div>

          {/* Timeline Card */}
          <div className="relative pl-6 sm:pl-10 border-l border-green-500/30">
            <div className="glassmorphism p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-green-500/20 transition-all duration-300 relative">
              {/* Timeline Dot */}
              <div className="absolute -left-[10px] sm:-left-[13px] top-6 w-4 h-4 sm:w-6 sm:h-6 bg-green-500 rounded-full border-4 border-black"></div>

              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6 gap-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white flex items-center gap-2 flex-wrap">
                    <Briefcase className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />
                    Software Engineer Intern
                  </h3>
                  <h4 className="text-base sm:text-lg text-green-400 mt-1">
                    Stackup Learning Hub
                  </h4>
                </div>

                <div className="flex items-center text-gray-300 text-sm">
                  <Calendar className="h-4 w-4 mr-2 text-green-500" />
                  <span>October 2024 – Present</span>
                </div>
              </div>

              {/* Responsibilities */}
              <h5 className="text-base sm:text-lg font-medium text-green-400 mb-4">
                Key Responsibilities:
              </h5>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {responsibilities.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-gray-300 text-sm leading-relaxed"
                  >
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
