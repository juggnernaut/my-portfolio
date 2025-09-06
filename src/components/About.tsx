import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {

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

        <div className="max-w-4xl mx-auto">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Who I Am
            </h3>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
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
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-lg p-8"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Education
            </h3>
            <div className="text-center">
              <div className="mb-4">
                <h4 className="text-xl font-semibold text-primary-600 mb-2">
                  Faculty of Artificial Intelligence, Cybersecurity Department
                </h4>
                <p className="text-lg text-gray-700 mb-2">
                  Delta University | 2023 – 2027
                </p>
                <p className="text-lg font-medium text-gray-800">
                  GPA: 3.7 (Third Year Student)
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
