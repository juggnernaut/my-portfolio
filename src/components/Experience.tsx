import React from 'react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  const experiences = [
    {
      id: 1,
      title: 'Technical Trainee – Digital Egypt Pioneers Initiative (DEPI)',
      company: 'Ministry of Communications & IT',
      location: 'Egypt',
      period: 'Jun 2025 – Dec 2025',
      type: 'Training Program',
      description: 'Comprehensive training in CCNA, FortiGate Managed Services, VPN setup, and network security management as part of the Digital Egypt Pioneers Initiative.',
      responsibilities: [
        'Training in CCNA networking fundamentals',
        'FortiGate firewall management and configuration',
        'VPN setup and security protocols',
        'Network security management best practices'
      ],
      technologies: ['CCNA', 'FortiGate', 'VPN', 'Network Security'],
      icon: '🏛️'
    },
    {
      id: 2,
      title: 'Network Security Intern',
      company: 'National Telecommunication Institute (NTI)',
      location: 'Egypt',
      period: 'Nov 2024 – Feb 2025',
      type: 'Internship',
      description: 'Gained hands-on experience in network security monitoring, threat analysis, and security protocol implementation.',
      responsibilities: [
        'Monitored and analyzed network traffic for potential threats',
        'Implemented firewall rules and access control policies',
        'Assisted in developing comprehensive security protocols',
        'Participated in security incident response procedures'
      ],
      technologies: ['Network Monitoring', 'Firewall Management', 'Threat Analysis', 'Security Protocols'],
      icon: '🔒'
    }
  ];

  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hands-on experience in cybersecurity, network security, and IT operations through internships and training programs.
          </p>
        </motion.div>

        {/* Experiences */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex items-start mb-4 lg:mb-0">
                    <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-3xl">{experience.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-1">
                        {experience.title}
                      </h4>
                      <p className="text-lg text-primary-600 font-medium mb-1">
                        {experience.company}
                      </p>
                      <p className="text-gray-600 mb-2">
                        {experience.location} • {experience.period}
                      </p>
                      <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full">
                        {experience.type}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {experience.description}
                </p>

                <div className="grid lg:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Key Responsibilities:</h5>
                    <ul className="space-y-2">
                      {experience.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="flex items-start">
                          <span className="text-primary-600 mr-2 mt-1">•</span>
                          <span className="text-gray-600 text-sm">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Technologies & Skills:</h5>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
