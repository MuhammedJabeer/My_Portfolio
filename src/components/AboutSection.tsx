import React from "react";
import { MapPin, Mail, Phone, Linkedin, Github } from "lucide-react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="section-padding relative bg-gradient-to-b from-gray-900 via-black to-gray-950"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
                Me
              </span>
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-green-500 mx-auto mb-4 sm:mb-6 rounded-full"></div>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              A quick snapshot of who I am, what I do, and where I come from.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Profile Summary */}
            <div className="glassmorphism p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-green-500/20 transition-shadow duration-300">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-green-400">
                Profile Summary
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                MERN Stack Developer with expertise in{" "}
                <span className="text-green-400">
                  JavaScript, Node.js, React, MongoDB, and SQL.
                </span>{" "}
                Passionate about building scalable, high-performance web
                applications and optimizing backend systems. Experienced in
                developing RESTful APIs, implementing authentication, and
                integrating databases. Adept at problem-solving and always
                learning new technologies to deliver{" "}
                <span className="text-green-400">
                  clean and efficient solutions.
                </span>
              </p>

              {/* Contact Info */}
              <div className="space-y-3 text-sm sm:text-base">
                <div className="flex items-center text-gray-300">
                  <MapPin className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>Kerala, Ernakulam, 686671</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="break-all">
                    jabeerjabeer1111@gmail.com
                  </span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>+91 9995069523</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap sm:flex-nowrap gap-4 mt-6 sm:mt-8">
                <a
                  href="https://linkedin.com/in/muhammed-jabeer-203b90331"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-green-500/10 text-green-400 hover:text-white hover:bg-green-500 transition-all transform hover:scale-110 shadow-md hover:shadow-green-500/30"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/MuhammedJabeer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-green-500/10 text-green-400 hover:text-white hover:bg-green-500 transition-all transform hover:scale-110 shadow-md hover:shadow-green-500/30"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Education */}
          <div className="glassmorphism p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-green-500/20 transition-shadow duration-300">
  <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-green-400">
    Education & Learning
  </h3>

  <div className="space-y-6 sm:space-y-8">
    <div className="relative pl-6 border-l-2 border-green-500">
      <div className="absolute -left-2 top-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full shadow-md shadow-green-500/50"></div>
      <h4 className="text-base sm:text-lg font-medium text-white">
        Self-Learner: MERN Stack Development
      </h4>
      <p className="text-green-400 text-xs sm:text-sm">
        Completed a 6-month intensive self-learning program
      </p>
      <p className="text-gray-400 text-xs sm:text-sm">2024 – 2025</p>
    </div>

    <div className="relative pl-6 border-l-2 border-green-500">
      <div className="absolute -left-2 top-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full shadow-md shadow-green-500/50"></div>
      <h4 className="text-base sm:text-lg font-medium text-white">
        Bachelor of Commerce (B.Com)
      </h4>
      <p className="text-green-400 text-xs sm:text-sm">
        Arafa College of Arts and Science, MG University
      </p>
      <p className="text-gray-400 text-xs sm:text-sm">2021 – 2024</p>
    </div>

    <div className="relative pl-6 border-l-2 border-green-500">
      <div className="absolute -left-2 top-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full shadow-md shadow-green-500/50"></div>
      <h4 className="text-base sm:text-lg font-medium text-white">
        Higher Secondary Education
      </h4>
      <p className="text-green-400 text-xs sm:text-sm">
        Computer Commerce - St. John's HSS Pulithanam
      </p>
      <p className="text-gray-400 text-xs sm:text-sm">2019 – 2021</p>
    </div>
  </div>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
