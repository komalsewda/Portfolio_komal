import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

const Education = () => {
  const educationRef = useAnimateOnScroll('fade-up');

  const education = [
    {
      degree: 'B.Tech in Computer Science',
      institution: 'Poornima Institute of Engineering & Technology',
      grade: 'CGPA: 9.31',
      duration: '2022 - 2026',
      icon: GraduationCap
    },
    {
      degree: 'Class 12 - Science',
      institution: 'RBSE',
      grade: '93.60%',
      duration: '2020',
      icon: Award
    },
    {
      degree: 'Class 10',
      institution: 'CBSE',
      grade: '82.80%',
      duration: '2018',
      icon: Award
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={educationRef} className="opacity-0 translate-y-8 transition-all duration-1000">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            My <span className="text-emerald-600 dark:text-emerald-400">Education</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {education.map((edu, index) => {
              const Icon = edu.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100 dark:border-gray-700 group hover:shadow-emerald-500/10"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={32} className="text-emerald-600 dark:text-emerald-400" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {edu.degree}
                  </h3>
                  
                  <p className="text-emerald-600 dark:text-emerald-400 font-medium mb-2">
                    {edu.institution}
                  </p>
                  
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-2">
                    <Calendar size={16} />
                    <span className="text-sm">{edu.duration}</span>
                  </div>
                  
                  <div className="bg-emerald-50 dark:bg-emerald-900/20 px-4 py-2 rounded-full">
                    <p className="text-emerald-700 dark:text-emerald-300 font-semibold text-center">
                      {edu.grade}
                    </p>
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

export default Education;