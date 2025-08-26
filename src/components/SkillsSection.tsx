import React from 'react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['JavaScript', 'HTML', 'CSS'],
      color: 'text-blue-400'
    },
    {
      title: 'Databases',
      skills: ['MongoDB', 'MySQL', 'PostgreSQL'],
      color: 'text-green-400'
    },
    {
      title: 'Libraries & Frameworks',
      skills: ['Node.js', 'Express', 'React', 'Redux', 'Tailwind CSS', 'Bootstrap'],
      color: 'text-purple-400'
    },
    {
      title: 'Tools & Platforms',
      skills: ['Socket.IO', 'Postman', 'Render', 'Git', 'VSCode', 'Vercel', 'Supabase'],
      color: 'text-orange-400'
    }
  ];

  return (
    <section id="skills" className="section-padding bg-black/20">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-glow mb-6">
              Technical <span className="text-green-500">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-green-500 mx-auto mb-8"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              My technical expertise spans across the full stack, enabling me to build 
              complete web applications from frontend to backend.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="glassmorphism p-6 card-hover">
                <h3 className={`text-lg font-semibold mb-4 ${category.color}`}>
                  {category.title}
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="bg-gray-800/50 rounded-lg p-2 text-sm text-gray-300 hover:bg-green-500/10 hover:text-green-400 transition-colors duration-300"
                    >
                      {skill}
                    </div>
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