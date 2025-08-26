import React from 'react';
import { MapPin, Mail, Phone, Linkedin, Github } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-glow mb-6">
              About <span className="text-green-500">Me</span>
            </h2>
            <div className="w-20 h-1 bg-green-500 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="glassmorphism p-8 card-hover">
              <h3 className="text-2xl font-semibold mb-4 text-green-400">Profile Summary</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                MERN Stack Developer with expertise in JavaScript, Node.js, React, MongoDB, and SQL. 
                Passionate about building scalable, high-performance web applications and optimizing backend systems. 
                Experienced in developing RESTful APIs, implementing authentication, and integrating databases. 
                Adept at problem-solving and continuously learning new technologies to enhance development efficiency.
              </p>

              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <MapPin className="h-5 w-5 text-green-500 mr-3" />
                  <span>Kerala, Ernakulam, 686671</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="h-5 w-5 text-green-500 mr-3" />
                  <span>jabeerjabeer1111@gmail.com</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="h-5 w-5 text-green-500 mr-3" />
                  <span>+91 9995069523</span>
                </div>
              </div>

              <div className="flex space-x-4 mt-6">
                <a 
                  href="#" 
                  className="p-2 rounded-lg bg-green-500/10 text-green-500 hover:bg-green-500/20 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="p-2 rounded-lg bg-green-500/10 text-green-500 hover:bg-green-500/20 transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="glassmorphism p-8 card-hover">
              <h3 className="text-2xl font-semibold mb-4 text-green-400">Education</h3>
              
              <div className="space-y-6">
                <div className="border-l-2 border-green-500 pl-6">
                  <h4 className="text-lg font-medium text-white">Bachelor of Commerce (B.Com)</h4>
                  <p className="text-green-400 text-sm">Arafa College of Arts and Science, MG University</p>
                  <p className="text-gray-400 text-sm">2021 – 2024</p>
                </div>
                
                <div className="border-l-2 border-green-500 pl-6">
                  <h4 className="text-lg font-medium text-white">Higher Secondary Education</h4>
                  <p className="text-green-400 text-sm">Computer Commerce - St. John's HSS Pulithanam</p>
                  <p className="text-gray-400 text-sm">2019 – 2021</p>
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