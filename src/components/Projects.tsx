import React from 'react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Cybersecurity Desktop Application with Integrated Scanning Tools',
      description: 'Developed a comprehensive desktop application to enhance system and network security. Features include file scanning (VirusTotal API, YARA), URL reputation checking, port scanning, and password strength analysis. GUI built with Python & Tkinter, integrated Nmap and Wireshark for advanced diagnostics.',
      image: '🛡️',
      technologies: ['Python', 'Tkinter', 'VirusTotal API', 'YARA', 'Nmap', 'Wireshark'],
      period: 'Feb 2025 – Jul 2025'
    },
    {
      id: 2,
      title: 'Plant Care System Based on IoT and Deep Learning',
      description: 'Monitors plant health using IoT sensors and a deep learning CNN model. Collects soil moisture and environmental data via ESP8266, sends to a web platform. Detects plant diseases and recommends actions for irrigation and early detection.',
      image: '🌱',
      technologies: ['TensorFlow', 'Python', 'Keras', 'ESP8266', 'Blynk', 'HTML/CSS/JS'],
      period: 'Jan 2025 – Jun 2025'
    },
    {
      id: 3,
      title: 'Autonomous Robot with Computer Vision',
      description: 'University project developing an autonomous robot with computer vision for object detection, path planning, and ML adaptation. Demonstrates technical skills in robotics, AI, and teamwork.',
      image: '🤖',
      technologies: ['Computer Vision', 'Machine Learning', 'Robotics', 'Python', 'OpenCV'],
      period: 'Nov 2023 – May 2024'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work, combining AI, cybersecurity, and web development to solve real-world problems.
          </p>
        </motion.div>

        {/* All Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-3xl">{project.image}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900">{project.title}</h4>
                      <div className="flex items-center mt-1">
                        <span className="text-sm text-gray-500">{project.period}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
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

export default Projects;
