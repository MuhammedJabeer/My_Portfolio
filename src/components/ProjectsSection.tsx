import React, { useState } from "react";
import {
  ExternalLink,
  Github,
  Plane,
  Users,
  MessageCircle,
  FileText,
  CheckCircle2,
} from "lucide-react";

const ProjectsSection = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const projects = [
    {
      title: "Flight Booking Web Application",
      description:
        "Full-stack flight booking application with secure payment integration and comprehensive booking management system.",
      icon: <Plane className="h-6 w-6 sm:h-8 sm:w-8" />,
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Razorpay",
        "Tailwind CSS",
      ],
      features: [
        "Flight search and filtering by destination, date, and price",
        "JWT-based authentication with secure password hashing",
        "OTP verification during registration",
        "Razorpay payment integration for secure transactions",
        "Booking cancellation with automatic refund process",
        "Email notifications for OTPs",
        "Responsive UI for mobile and desktop",
      ],
      githubLink: "https://github.com/MuhammedJabeer/Flight_Booking_FrontEnd",
      liveLink: "https://flight-booking-front-end-zeta.vercel.app/",
    },
    {
      title: "Employee Management System",
      description:
        "Comprehensive employee management system with CRUD operations, search functionality, and data persistence.",
      icon: <Users className="h-6 w-6 sm:h-8 sm:w-8" />,
      tech: ["HTML", "CSS", "JavaScript", "LocalStorage", "Bootstrap"],
      features: [
        "CRUD Operations for employee management",
        "Form validation for data integrity",
        "Dynamic search functionality by name or email",
        "Pagination with Next/Previous buttons",
        "Data persistence using LocalStorage",
        "Responsive UI design",
      ],
      githubLink: "https://github.com/MuhammedJabeer/Java_script_project",
    },
    {
      title: "Real-Time Chat App",
      description:
        "Real-time messaging application with authentication, file uploads, and secure communication features.",
      icon: <MessageCircle className="h-6 w-6 sm:h-8 sm:w-8" />,
      tech: [
        "Express.js",
        "Socket.io",
        "MongoDB",
        "Node.js",
        "JWT",
        "Nodemailer",
      ],
      features: [
        "Real-time messaging with Socket.IO",
        "OTP verification via email",
        "JWT authentication and authorization",
        "Private one-on-one chats",
        "Image uploads in chats using Multer",
        "Session management with cookies/JWT",
        "Deployed on Render for scalable hosting",
      ],
      githubLink: "https://github.com/MuhammedJabeer/Real_Time_Chat_APP",
      liveLink: "https://real-time-chat-app-xj5w.onrender.com/",
    },
    {
      title: "Blog Application",
      description:
        "Full-featured blog platform with admin panel, user roles, and comprehensive content management.",
      icon: <FileText className="h-6 w-6 sm:h-8 sm:w-8" />,
      tech: ["Node.js", "Express.js", "MongoDB", "Handlebars", "JWT", "Multer"],
      features: [
        "CRUD operations for blog posts",
        "JWT authentication with bcrypt password hashing",
        "Admin panel for user and post management",
        "Image uploads for blog posts using Multer",
        "Role-based access control",
        "Session management with cookies/JWT",
        "Responsive UI built with Handlebars",
      ],
      githubLink: "https://github.com/MuhammedJabeer/Blog_web",
      liveLink: "",
    },
  ];

  return (
    <section
      id="projects"
      className="section-padding bg-gradient-to-b from-black via-gray-950 to-black"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
                Projects
              </span>
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-green-500 mx-auto mb-6 sm:mb-8 rounded-full"></div>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              A selection of my recent projects showcasing expertise in
              full-stack development, from backend architecture to frontend
              design.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glassmorphism p-5 sm:p-6 card-hover flex flex-col justify-between rounded-2xl"
              >
                {/* Header */}
                <div className="flex items-center mb-4">
                  <div className="p-2 sm:p-3 rounded-lg bg-green-500/10 text-green-500 mr-3 sm:mr-4">
                    {project.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-4 text-sm sm:text-base leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-4">
                  <h4 className="text-xs sm:text-sm font-medium text-green-400 mb-2">
                    Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-800/50 rounded text-xs sm:text-sm text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-xs sm:text-sm font-medium text-green-400 mb-2">
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {(expanded === index
                      ? project.features
                      : project.features.slice(0, 4)
                    ).map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="text-xs sm:text-sm text-gray-400 flex items-start"
                      >
                        <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {project.features.length > 4 && (
                    <button
                      onClick={() =>
                        setExpanded(expanded === index ? null : index)
                      }
                      className="mt-2 sm:mt-3 text-xs text-green-400 hover:text-green-300 transition-colors"
                    >
                      {expanded === index ? "Show Less" : "Show More"}
                    </button>
                  )}
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    className="flex items-center justify-center px-4 py-2 bg-gray-800/50 rounded-lg text-xs sm:text-sm text-gray-300 hover:bg-green-500/10 hover:text-green-400 transition-colors"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      className="flex items-center justify-center px-4 py-2 bg-green-500/10 rounded-lg text-xs sm:text-sm text-green-400 hover:bg-green-500/20 transition-colors"
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
