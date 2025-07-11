import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const contactRef = useAnimateOnScroll('fade-up');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        'service_b3fjkd4',
        'template_kx0tlyf',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Komal Sewda'
        },
        'KkXNcDOxNn89mwqOX'
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'sewdaakomal78@gmail.com',
      link: 'mailto:sewdaakomal78@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 7878181647',
      link: 'tel:+917878181647'
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'komalsewda',
      link: 'https://github.com/komalsewda'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'komal-sewda-274a35256',
      link: 'https://linkedin.com/in/komal-sewda-274a35256'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={contactRef} className="opacity-0 translate-y-8 transition-all duration-1000">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Contact <span className="text-emerald-600 dark:text-emerald-400">Me</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Get In Touch
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                  I'm always open to discussing new opportunities, projects, or just having a conversation about technology and innovation.
                </p>
              </div>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors duration-300 group"
                    >
                      <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon size={24} className="text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {info.title}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-2xl font-medium hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
                
                {submitStatus === 'success' && (
                  <div className="text-green-600 dark:text-green-400 text-center font-medium">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="text-red-600 dark:text-red-400 text-center font-medium">
                    Failed to send message. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;