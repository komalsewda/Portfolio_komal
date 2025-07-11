import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

const Projects = () => {
  const projectsRef = useAnimateOnScroll('fade-up');

  const projects = [
    {
      title: 'MediMate',
      description: 'AI-powered health assistant providing personalized medical guidance and health monitoring.',
      tech: ['Python', 'AI/ML', 'Streamlit', 'OpenCV'],
      github: 'https://github.com/komalsewda/MediMate.git',
      demo: 'https://github.com/komalsewda/MediMate.git'
    },
    {
      title: 'LifeLine - Palm Reading using AI',
      description: 'Advanced palm reading application using computer vision and machine learning algorithms.',
      tech: ['Python', 'OpenCV', 'Machine Learning', 'Gradio'],
      github: 'https://github.com/komalsewda/LifeLine-AI.git',
      demo: 'https://github.com/komalsewda/LifeLine-AI.git'
    },
    {
      title: 'Student Marks Prediction',
      description: 'Predictive analytics system for student performance evaluation and improvement suggestions.',
      tech: ['Python', 'Pandas', 'Scikit-learn', 'NumPy'],
      github: 'https://github.com/komalsewda/student_marks.git',
      demo: 'https://github.com/komalsewda/student_marks.git'
    },
    {
      title: 'MenuBase - ERP Management',
      description: 'Comprehensive enterprise resource planning system for manufacturing industry management.',
      tech: ['JavaScript', 'Node.js', 'Express.js', 'MongoDB'],
      github: 'https://github.com/komalsewda/ManuBase.git',
      demo: 'https://github.com/komalsewda/ManuBase.git'
    },
    {
      title: 'HTML_CSS Website',
      description: 'Frontend web development project showcasing responsive design and modern UI principles.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      github: 'https://github.com/komalsewda/html_css.git',
      demo: 'https://github.com/komalsewda/html_css.git'
    },
    {
      title: 'Movie Recommendation System',
      description: 'Intelligent movie recommendation engine using collaborative filtering and content-based algorithms.',
      tech: ['Python', 'Pandas', 'Scikit-learn', 'Streamlit'],
      github: 'https://github.com/komalsewda/Movie-Recommendation.git',
      demo: 'https://github.com/komalsewda/Movie-Recommendation.git'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={projectsRef} className="opacity-0 translate-y-8 transition-all duration-1000">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            My <span className="text-emerald-600 dark:text-emerald-400">Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100 dark:border-gray-700 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-emerald-100 dark:hover:bg-emerald-900/20 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-emerald-100 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium hover:bg-emerald-200 dark:hover:bg-emerald-800/20 transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    View
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;