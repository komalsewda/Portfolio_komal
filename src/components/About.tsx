import React from 'react';
import { Download } from 'lucide-react';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

const About = () => {
  const aboutRef = useAnimateOnScroll('fade-up');

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={aboutRef} className="opacity-0 translate-y-8 transition-all duration-1000">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            About <span className="text-emerald-600 dark:text-emerald-400">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="w-full h-80 rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="https://www.springboard.com/blog/wp-content/uploads/2019/07/sb-blog-programming-700x286.png"
                  alt="CSE Student Coding"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm <span className="font-semibold text-emerald-600 dark:text-emerald-400">Komal Sewda</span>, 
                a passionate final-year Computer Science student focused on solving real-world problems 
                using AI, ML, and MERN Stack. I'm also a national volleyball player who brings 
                dedication, creativity, and leadership to every project I build.
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                My journey in technology is driven by curiosity and a desire to create meaningful 
                solutions that make a difference. From developing AI-powered health assistants to 
                building comprehensive ERP systems, I love tackling complex challenges with innovative approaches.
              </p>
              
              <div className="pt-6">
                <a 
                  href="https://images.unsplash.com/photo-1611926653458-09294f7b7498?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group px-8 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full font-medium hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 flex items-center gap-2 inline-flex"
                >
                  <Download size={20} />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;