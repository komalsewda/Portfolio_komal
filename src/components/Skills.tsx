import React from 'react';
import { Code, Database, Brain, Settings, Users } from 'lucide-react';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

const Skills = () => {
  const skillsRef = useAnimateOnScroll('fade-up');

  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      skills: ['Python', 'JavaScript', 'HTML', 'CSS', 'C++', 'SQL'],
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900/20'
    },
    {
      title: 'Frameworks',
      icon: Database,
      skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-100 dark:bg-green-900/20'
    },
    {
      title: 'AI/ML',
      icon: Brain,
      skills: ['Pandas', 'NumPy', 'Scikit-learn', 'Streamlit', 'OpenCV'],
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-100 dark:bg-purple-900/20'
    },
    {
      title: 'Tools',
      icon: Settings,
      skills: ['GitHub', 'VS Code', 'Gradio', 'MySQL'],
      color: 'text-orange-600 dark:text-orange-400',
      bgColor: 'bg-orange-100 dark:bg-orange-900/20'
    },
    {
      title: 'Soft Skills',
      icon: Users,
      skills: ['Leadership', 'Teamwork', 'Communication'],
      color: 'text-pink-600 dark:text-pink-400',
      bgColor: 'bg-pink-100 dark:bg-pink-900/20'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={skillsRef} className="opacity-0 translate-y-8 transition-all duration-1000">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            My <span className="text-emerald-600 dark:text-emerald-400">Skills</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100 dark:border-gray-700"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-16 h-16 rounded-full ${category.bgColor} flex items-center justify-center mb-6`}>
                    <Icon size={32} className={category.color} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {category.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-emerald-100 dark:hover:bg-emerald-900/20 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;