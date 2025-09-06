import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Cybersecurity Core',
      skills: [
        { name: 'Network Security', level: 85, icon: '🔒' },
        { name: 'Firewall Management', level: 80, icon: '🛡️' },
        { name: 'System Monitoring', level: 85, icon: '📊' },
        { name: 'Access Control', level: 80, icon: '🔐' },
        { name: 'Security Protocols', level: 75, icon: '📋' },
        { name: 'Threat Analysis', level: 80, icon: '🔍' }
      ]
    },
    {
      title: 'Programming & Scripting',
      skills: [
        { name: 'Python', level: 80, icon: '🐍' },
        { name: 'HTML/CSS/JS', level: 75, icon: '🌐' },
        { name: 'Linux', level: 75, icon: '🐧' }
      ]
    },
    {
      title: 'Security Tools & Technologies',
      skills: [
        { name: 'Nmap', level: 85, icon: '🗺️' },
        { name: 'Wireshark', level: 80, icon: '🔍' },
        { name: 'VirusTotal API', level: 75, icon: '🦠' },
        { name: 'TensorFlow', level: 80, icon: '🧠' }
      ]
    }
  ];

  const tools = [
    { name: 'VS Code', icon: '💻' },
    { name: 'Kali Linux', icon: '🔪' },
    { name: 'Wireshark', icon: '🔍' },
    { name: 'Nmap', icon: '🗺️' },
    { name: 'FortiGate', icon: '🛡️' },
    { name: 'Blynk IoT', icon: '📱' },
    { name: 'TensorFlow', icon: '🧠' },
    { name: 'Jupyter', icon: '📓' }
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and the tools I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{skill.icon}</span>
                      <h4 className="text-lg font-semibold text-gray-900">{skill.name}</h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Tools & Technologies
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-center"
              >
                <div className="text-3xl mb-2">{tool.icon}</div>
                <p className="text-sm font-medium text-gray-700">{tool.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
