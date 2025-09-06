import React from 'react';
import { motion } from 'framer-motion';

const Certifications: React.FC = () => {
  const certifications = [
    {
      id: 1,
      name: 'Network Security',
      issuer: 'National Telecommunication Institute (NTI)',
      year: '2024',
      description: 'Comprehensive training in network security fundamentals, protocols, and implementation.',
      icon: '🔒'
    },
    {
      id: 2,
      name: 'Security+',
      issuer: 'Netriders',
      year: '2024',
      description: 'CompTIA Security+ certification covering cybersecurity fundamentals and best practices.',
      icon: '🛡️'
    },
    {
      id: 3,
      name: 'CCNA',
      issuer: 'Cisco Networking Academy',
      year: '2023',
      description: 'Cisco Certified Network Associate - Self-study covering networking fundamentals and routing.',
      icon: '🌐'
    },
    {
      id: 4,
      name: 'Junior Cybersecurity Analyst',
      issuer: 'Cisco Networking Academy',
      year: '2023',
      description: 'Specialized training in cybersecurity analysis, threat detection, and incident response.',
      icon: '🔍'
    },
    {
      id: 5,
      name: 'Cybersecurity for Beginners',
      issuer: 'Mahara Tec',
      year: '2023',
      description: 'Introduction to cybersecurity concepts, tools, and methodologies for beginners.',
      icon: '📚'
    }
  ];

  return (
    <section id="certifications" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional certifications demonstrating my expertise in cybersecurity, networking, and information security.
          </p>
        </motion.div>

        {/* Certifications List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-3xl">{cert.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{cert.name}</h4>
                    <p className="text-sm text-primary-600 font-medium">{cert.issuer}</p>
                    <p className="text-sm text-gray-500">{cert.year}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
