import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const timelineItems = [
    {
      year: '2022 - Present',
      title: 'AI & Cybersecurity Student',
      description: 'Third-year student at Faculty of Artificial Intelligence, Delta University, specializing in Cybersecurity and network security.',
      icon: '🎓'
    },
    {
      year: '2024 - 2025',
      title: 'Network Security Intern',
      description: 'Internship at National Telecommunication Institute, monitoring network traffic and implementing security protocols.',
      icon: '🔒'
    },
    {
      year: '2023 - 2024',
      title: 'Cybersecurity Certifications',
      description: 'Completed CCNA, Security+, Network Security, and Junior Cybersecurity Analyst certifications.',
      icon: '🏆'
    }
  ];

  const interests = [
    { name: 'Network Security', icon: '🔒' },
    { name: 'Firewall Management', icon: '🛡️' },
    { name: 'Python Scripting', icon: '🐍' },
    { name: 'IoT Security', icon: '📱' },
    { name: 'Problem Solving', icon: '🧩' },
    { name: 'System Monitoring', icon: '📊' }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Who I Am
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I am a third-year student at the Faculty of Artificial Intelligence, Delta University, specializing in Cybersecurity. I have strong skills in network security, monitoring, and problem solving, with a passion for enhancing system and network security through hands-on projects, internships, and research.
              </p>
              <p>
                I have studied CCNA, MCSA, Security+, and Network Security fundamentals, and I'm currently based in Damietta, Egypt. My experience includes internships at the National Telecommunication Institute and Commercial International Bank, where I gained practical experience in network security and IT operations.
              </p>
              <p>
                I am passionate about developing comprehensive security solutions and have worked on projects ranging from cybersecurity desktop applications with integrated scanning tools to IoT-based plant care systems using deep learning. My goal is to contribute to the cybersecurity field through innovative solutions and continuous learning.
              </p>
            </div>

            {/* Interests */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                My Interests
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors"
                  >
                    <span className="text-2xl">{interest.icon}</span>
                    <span className="text-sm font-medium text-gray-700">{interest.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Timeline Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Education & Experience
            </h3>
            <div className="space-y-8">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative pl-8"
                >
                  {/* Timeline line */}
                  {index < timelineItems.length - 1 && (
                    <div className="absolute left-4 top-8 w-0.5 h-16 bg-primary-200"></div>
                  )}
                  
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {index + 1}
                  </div>
                  
                  {/* Content */}
                  <div className="bg-gray-50 p-6 rounded-lg hover:bg-primary-50 transition-colors">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-3">{item.icon}</span>
                      <span className="text-sm font-medium text-primary-600">{item.year}</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
