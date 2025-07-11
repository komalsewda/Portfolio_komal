import React from 'react';
import { CheckCircle, Target, GraduationCap } from 'lucide-react';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import FlipCard from './FlipCard';

const Dashboard = () => {
  const dashboardRef = useAnimateOnScroll('fade-up');

  const stats = [
    {
      icon: CheckCircle,
      title: 'Projects Completed',
      value: '10+',
      color: 'text-emerald-600 dark:text-emerald-400',
      bgColor: 'bg-emerald-100 dark:bg-emerald-900/20',
      backContent: {
        title: 'Project Portfolio',
        description: 'Diverse range of projects spanning AI, web development, and data science.',
        details: [
          'AI Health Assistant (MediMate)',
          'Palm Reading AI System',
          'ERP Management System',
          'Movie Recommendation Engine'
        ]
      }
    },
    {
      icon: Target,
      title: 'Skills Mastered',
      value: '15+',
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900/20',
      backContent: {
        title: 'Technical Expertise',
        description: 'Comprehensive skill set across multiple domains and technologies.',
        details: [
          'MERN Stack Development',
          'AI/ML with Python',
          'Database Management',
          'Version Control & DevOps'
        ]
      }
    },
    {
      icon: GraduationCap,
      title: 'Highest Qualification',
      value: '12+',
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-100 dark:bg-purple-900/20',
      backContent: {
        title: 'Academic Excellence',
        description: 'Strong academic foundation with outstanding performance.',
        details: [
          'CGPA: 9.31/10',
          'Computer Science Engineering',
          'Poornima Institute of Engineering',
          'Expected Graduation: 2026'
        ]
      }
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={dashboardRef} className="grid md:grid-cols-3 gap-8 opacity-0 translate-y-8 transition-all duration-1000">
          {stats.map((stat, index) => {
            return (
              <FlipCard
                key={index}
                frontContent={{
                  icon: stat.icon,
                  title: stat.value,
                  subtitle: stat.title,
                  color: stat.color,
                  bgColor: stat.bgColor
                }}
                backContent={stat.backContent}
                delay={index * 0.2}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;