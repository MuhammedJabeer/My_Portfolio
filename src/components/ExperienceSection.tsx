import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const ExperienceSection = () => {
  const responsibilities = [
    'Developed and maintained web applications using JavaScript, Node.js, React, MongoDB, and SQL',
    'Built and optimized RESTful APIs for data exchange between frontend and backend',
    'Implemented authentication and authorization (JWT, sessions, cookies) for secure access',
    'Integrated Multer for file uploads and managed media storage',
    'Developed interactive UI components using React.js and Handlebars (hbs)',
    'Worked with Socket.IO for real-time messaging features',
    'Used Git & GitHub for version control and collaborated with the team',
    'Debugged and optimized application performance for better scalability'
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-glow mb-6">
              Work <span className="text-green-500">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-green-500 mx-auto mb-8"></div>
          </div>

          <div className="glassmorphism p-8 card-hover">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">Software Engineer Intern</h3>
                <h4 className="text-xl text-green-400 mb-4">Stackup Learning Hub</h4>
              </div>
              <div className="flex flex-col lg:items-end space-y-2">
                <div className="flex items-center text-gray-300">
                  <Calendar className="h-4 w-4 mr-2 text-green-500" />
                  <span className="text-sm">October 2024 – Present</span>
                </div>
              </div>
            </div>

            <div>
              <h5 className="text-lg font-medium text-green-400 mb-4">Key Responsibilities:</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {responsibilities.map((responsibility, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm leading-relaxed">{responsibility}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;