import React from 'react';
import { ExternalLink, Github, Plane, Users, MessageCircle, FileText } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Flight Booking Web Application',
      description: 'Full-stack flight booking application with secure payment integration and comprehensive booking management system.',
      icon: <Plane className="h-8 w-8" />,
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Razorpay', 'Tailwind CSS'],
      features: [
        'Flight search and filtering by destination, date, and price',
        'JWT-based authentication with secure password hashing',
        'OTP verification during registration',
        'Razorpay payment integration for secure transactions',
        'Booking cancellation with automatic refund process',
        'Email notifications for OTPs',
        'Responsive UI for mobile and desktop'
      ],
      githubLink: '#',
      liveLink: '#'
    },
    {
      title: 'Employee Management System',
      description: 'Comprehensive employee management system with CRUD operations, search functionality, and data persistence.',
      icon: <Users className="h-8 w-8" />,
      tech: ['HTML', 'CSS', 'JavaScript', 'LocalStorage', 'Bootstrap'],
      features: [
        'CRUD Operations for employee management',
        'Form validation for data integrity',
        'Dynamic search functionality by name or email',
        'Pagination with Next/Previous buttons',
        'Data persistence using LocalStorage',
        'Responsive UI design'
      ],
      githubLink: '#',
      liveLink: '#'
    },
    {
      title: 'Real-Time Chat App',
      description: 'Real-time messaging application with authentication, file uploads, and secure communication features.',
      icon: <MessageCircle className="h-8 w-8" />,
      tech: ['Express.js', 'Socket.io', 'MongoDB', 'Node.js', 'JWT', 'Nodemailer'],
      features: [
        'Real-time messaging with Socket.IO',
        'OTP verification via email',
        'JWT authentication and authorization',
        'Private one-on-one chats',
        'Image uploads in chats using Multer',
        'Session management with cookies/JWT',
        'Deployed on Render for scalable hosting'
      ],
      githubLink: '#',
      liveLink: 'https://example.com'
    },
    {
      title: 'Blog Application',
      description: 'Full-featured blog platform with admin panel, user roles, and comprehensive content management.',
      icon: <FileText className="h-8 w-8" />,
      tech: ['Node.js', 'Express.js', 'MongoDB', 'Handlebars', 'JWT', 'Multer'],
      features: [
        'CRUD operations for blog posts',
        'JWT authentication with bcrypt password hashing',
        'Admin panel for user and post management',
        'Image uploads for blog posts using Multer',
        'Role-based access control',
        'Session management with cookies/JWT',
        'Responsive UI built with Handlebars'
      ],
      githubLink: '#',
      liveLink: '#'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-black/20">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-glow mb-6">
              Featured <span className="text-green-500">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-green-500 mx-auto mb-8"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills in full-stack development, 
              from concept to deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="glassmorphism p-6 card-hover">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-green-500/10 text-green-500 mr-4">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-green-400 mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-gray-800/50 rounded text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-green-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-xs text-gray-400 flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 mr-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-4">
                  <a 
                    href={project.githubLink}
                    className="flex items-center px-4 py-2 bg-gray-800/50 rounded-lg text-sm text-gray-300 hover:bg-green-500/10 hover:text-green-400 transition-colors"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                  {project.liveLink && (
                    <a 
                      href={project.liveLink}
                      className="flex items-center px-4 py-2 bg-green-500/10 rounded-lg text-sm text-green-400 hover:bg-green-500/20 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;