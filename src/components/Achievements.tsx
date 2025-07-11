import React from 'react';
import { Award, Trophy, FileText, ExternalLink } from 'lucide-react';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

const Achievements = () => {
  const achievementsRef = useAnimateOnScroll('fade-up');

  const certifications = [
    {
      title: 'Java Essentials',
      provider: 'Infosys',
      type: 'certification',
      link: 'https://drive.google.com/file/d/1_h7CDA9JhtXYnQ5dprKZdV3D_FKmwRgI/view'
    },
    {
      title: 'Python for Data Science',
      provider: 'IBM',
      type: 'certification',
      link: 'https://drive.google.com/file/d/1OF3C05s5Qz1W874nz25baQsuKZiL5lvl/view'
    },
    {
      title: 'SQL',
      provider: 'HackerRank',
      type: 'certification',
      link: 'https://drive.google.com/file/d/1Mrg39n5b5C-IQEqtHLNrJOW0AwL5VQkl/view'
    },
    {
      title: 'MERN Stack',
      provider: 'Zeetron Networks',
      type: 'certification',
      link: 'https://drive.google.com/file/d/1NnUdmwFiQPLeVvxtqMocIPwgy27Kp_q7/view'
    },
    {
      title: 'Web Development',
      provider: 'CodSoft',
      type: 'certification',
      link: 'https://drive.google.com/file/d/1nnkWqkiIuuYiV70K328zCzamvjTn_dZs/view'
    },
    {
      title: 'C Language',
      provider: 'NPTEL',
      type: 'certification',
      link: 'https://drive.google.com/file/d/1Ndm0Ct1rRnEZ_viTqXn-VOhPo0BlxsA1/view'
    },
    {
      title: 'Database Management System',
      provider: 'NPTEL',
      type: 'certification',
      link: 'https://drive.google.com/file/d/14EQJ0q7vB3Ld2xO6yfmBlRi3wgVHpaXQ/view'
    }
  ];

  const awards = [
    {
      title: 'AIU Certified National Volleyball Player',
      description: 'Recognition for excellence in volleyball at the national level',
      type: 'award'
    },
    {
      title: 'Presented Paper at ICIDLHV 2023',
      description: 'International Conference on Intelligent Data and Learning in Healthcare and Vehicles',
      type: 'award',
      link: 'https://drive.google.com/file/d/11HmHV5JnR-iY9DHSJ-VPgz2xhTvTdbr1/view'
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={achievementsRef} className="opacity-0 translate-y-8 transition-all duration-1000">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Achievements & <span className="text-emerald-600 dark:text-emerald-400">Certifications</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                <FileText className="text-emerald-600 dark:text-emerald-400" size={28} />
                Certifications
              </h3>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100 dark:border-gray-700"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {cert.title}
                        </h4>
                        <p className="text-emerald-600 dark:text-emerald-400 text-sm">
                          {cert.provider}
                        </p>
                      </div>
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-emerald-100 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 rounded-full hover:bg-emerald-200 dark:hover:bg-emerald-800/20 transition-colors duration-200"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Awards */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                <Trophy className="text-emerald-600 dark:text-emerald-400" size={28} />
                Awards
              </h3>
              
              <div className="space-y-6">
                {awards.map((award, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100 dark:border-gray-700"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/20 flex items-center justify-center">
                        <Award size={24} className="text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                          {award.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {award.description}
                        </p>
                        {award.link && (
                          <a
                            href={award.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 mt-2 text-emerald-600 dark:text-emerald-400 text-sm hover:underline"
                          >
                            <ExternalLink size={14} />
                            View Certificate
                          </a>
                        )}
                      </div>
                    </div>
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

export default Achievements;