import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import { Cpu, Code, Brain } from 'lucide-react';

const experiences = [
  {
    icon: Cpu,
    company: 'Yatharth Educational Services Pvt Ltd',
    position: 'Python Developer Intern',
    dates: 'May 2023 - Aug 2023',
    description:
      'At Yatharth, I created an intelligent chatbot system that automated user interactions using Python. This project involved the implementation of NLP techniques to ensure responses were not only context-aware but also adaptive to varied user intents. I focused on performance optimization and designed a scalable architecture that improved overall engagement and responsiveness for the end-users.',
    tech: ['Python', 'NLP', 'Chatbot'],
  },
  {
    icon: Code,
    company: 'Zettron Network',
    position: 'MERN Stack Development Intern',
    dates: 'Jan 2023 - Apr 2023',
    description:
      'During my MERN Stack internship, I was immersed in full-stack development. I contributed to real-time dashboards and internal tools using MongoDB, Express.js, React.js, and Node.js. My role also included integrating secure and scalable REST APIs and working closely with senior developers in agile sprints to ship impactful features and refine user experiences.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
  },
  {
    icon: Brain,
    company: 'LinuxWorld Informatics Pvt Ltd',
    position: 'AI & ML + Full-Stack Intern',
    dates: 'Jun 2022 - Dec 2022',
    description:
      'At LinuxWorld, I bridged AI with full-stack development. I trained Machine Learning and Deep Learning models on real-world datasets using Python. I also engineered AI-enabled web applications with React.js, Flask, and Streamlit, deploying models through custom APIs and enhancing them with MongoDB-driven data pipelines. This experience sharpened my skills in model deployment, full-stack development, and building intelligent applications.',
    tech: ['AI', 'ML', 'React.js', 'Flask', 'Streamlit', 'MongoDB'],
  },
];

const techFloatingIcons = [
  { Icon: Cpu, className: 'animate-float absolute -top-8 left-1/4 w-10 h-10 text-emerald-500 dark:text-emerald-400' },
  { Icon: Code, className: 'animate-float-delayed absolute -top-8 right-1/4 w-10 h-10 text-teal-500 dark:text-teal-400' },
  { Icon: Brain, className: 'animate-float absolute -bottom-8 left-1/2 w-10 h-10 text-cyan-500 dark:text-cyan-400' },
];

const Experience = () => {
  const expRef = useAnimateOnScroll('fade-up');

  return (
    <section id="experience" className="py-20 px-6 bg-gray-50 dark:bg-[#0b1120] relative overflow-visible">
      <div className="max-w-6xl mx-auto relative">
        {/* Floating Tech Icons */}
        <div className="pointer-events-none select-none">
          {techFloatingIcons.map(({ Icon, className }, i) => (
            <Icon key={i} className={className} />
          ))}
        </div>
        {/* Animated Heading */}
        <h2
          ref={expRef}
          className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-16 relative z-10 animate-zoom-in"
        >
          <span className="inline-block transition-transform duration-700 will-change-transform hover:scale-105 text-emerald-600 dark:text-emerald-400">
            Experience
          </span>
        </h2>
        {/* Timeline */}
        <div className="relative flex flex-col md:flex-row md:space-x-8">
          {/* Vertical Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-emerald-400/30 to-emerald-600/60 rounded-full animate-gradient" style={{ transform: 'translateX(-50%)' }} />
          <div className="flex-1 flex flex-col gap-12 md:gap-20">
            {experiences.map((exp, idx) => {
              const Icon = exp.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 p-8 md:p-10 transition-all duration-500 hover:shadow-2xl hover:scale-[1.03] cursor-pointer will-change-transform experience-card"
                  style={{
                    boxShadow: '0 4px 24px 0 rgba(46,204,113,0.07)',
                    transition: 'transform 0.3s cubic-bezier(.25,.8,.25,1), box-shadow 0.3s',
                  }}
                  tabIndex={0}
                  onMouseMove={e => {
                    const card = e.currentTarget;
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    card.style.transform = `perspective(800px) rotateY(${(x - rect.width / 2) / 20}deg) rotateX(${-(y - rect.height / 2) / 20}deg) scale(1.03)`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = '';
                  }}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-[-2.25rem] top-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-400 dark:from-emerald-600 dark:to-teal-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10" />
                  {/* Card Content */}
                  <div className="flex items-center gap-6 mb-4">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-900/20 flex items-center justify-center shadow-md">
                      <Icon size={32} className="text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-teal-600 dark:text-teal-400 mb-1 group-hover:text-emerald-500 transition-colors duration-300 animate-slide-up">
                        {exp.position}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 font-medium animate-fade-in">
                        {exp.company}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm animate-fade-in">
                        {exp.dates}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 animate-slide-up">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {exp.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 rounded-full text-xs font-medium animate-zoom-in"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <span className="inline-block text-gray-600 dark:text-gray-300 text-base md:text-lg bg-emerald-50 dark:bg-emerald-900/20 px-6 py-3 rounded-2xl shadow-sm animate-fade-in">
            Reach out to learn more about these projects or collaboration opportunities.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Experience; 