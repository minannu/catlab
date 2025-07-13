'use client'

import { motion } from 'framer-motion'
import { Linkedin, Twitter, Globe, Mail } from 'lucide-react'
import Image from 'next/image'

const TeamSection = () => {
  const teamMembers = [
    {
      name: ' Mohammad Harun Or Rashid',
      role: 'Lab Head & Principal Investigator',
      expertise: 'Computer Science, Machine Learning, Data Mining',
      bio: 'Leading research in computer science with focus on machine learning, data mining, and computational intelligence. Extensive experience in developing algorithms for pattern recognition and predictive modeling.',
      image: '/images/team/harun.jpg', // Placeholder for testing
      // image: '/images/team/mohammad-rashid.jpg', // Uncomment when you have the actual image
      fallbackInitials: 'MR',
      social: {
        linkedin: 'https://www.researchgate.net/profile/Mohammad-Rashid-30',
        twitter: '#',
        website: 'https://www.researchgate.net/profile/Mohammad-Rashid-30',
        email: 'mohammad.rashid@catlab.edu'
      }
    },
    {
      name: 'Md. Minhazul Islam',
      role: 'Research Scientist',
      expertise: 'Computer Science, Software Engineering, Algorithm Design',
      bio: 'Specializing in software engineering and algorithm design with expertise in developing efficient computational solutions for complex problems.',
      image: '/images/team/minhazul.jpg', // Placeholder for testing
      // image: '/images/team/minhazul-islam.jpg', // Uncomment when you have the actual image
      fallbackInitials: 'MI',
      social: {
        linkedin: 'https://www.researchgate.net/profile/Md-Minhazul-Islam-5',
        twitter: '#',
        website: 'https://www.researchgate.net/profile/Md-Minhazul-Islam-5',
        email: 'minhazul.islam@catlab.edu'
      }
    },
    {
      name: 'Tanbeer Jubaer',
      role: 'Research Associate',
      expertise: 'Computer Science, Data Analysis, Research Methodology',
      bio: 'Focused on data analysis and research methodology, contributing to the development of computational tools for literature and social media analysis.',
      image: '/images/team/oitik.jpg', // Placeholder for testing
      // image: '/images/team/tanbeer-jubaer.jpg', // Uncomment when you have the actual image
      fallbackInitials: 'TJ',
      social: {
        linkedin: 'https://www.researchgate.net/profile/Tanbeer-Jubaer',
        twitter: '#',
        website: 'https://www.researchgate.net/profile/Tanbeer-Jubaer',
        email: 'tanbeer.jubaer@catlab.edu'
      }
    }
  ]

  return (
    <section id="team" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our interdisciplinary team of researchers, scientists, and students 
            working together to advance the field of computational humanities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 text-center card-hover"
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center text-white text-3xl font-bold relative">
                {/* Option 1: Local image */}
                <Image
                  src={member.image}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to initials if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<span class="text-white text-3xl font-bold">${member.fallbackInitials}</span>`;
                    }
                  }}
                />
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                {member.name}
              </h3>
              
              <p className="text-primary-600 font-semibold mb-3">
                {member.role}
              </p>
              
              <p className="text-sm text-gray-600 mb-4">
                <strong>Expertise:</strong> {member.expertise}
              </p>
              
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                {member.bio}
              </p>
              
              <div className="flex justify-center space-x-3">
                <a href={member.social.linkedin} className="text-gray-400 hover:text-primary-600 transition-colors duration-200">
                  <Linkedin size={20} />
                </a>
                <a href={member.social.twitter} className="text-gray-400 hover:text-primary-600 transition-colors duration-200">
                  <Twitter size={20} />
                </a>
                <a href={member.social.website} className="text-gray-400 hover:text-primary-600 transition-colors duration-200">
                  <Globe size={20} />
                </a>
                <a href={`mailto:${member.social.email}`} className="text-gray-400 hover:text-primary-600 transition-colors duration-200">
                  <Mail size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Our Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Join Our Research Team
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're always looking for talented researchers, students, and collaborators 
              who are passionate about computational humanities and digital research.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                View Open Positions
              </button>
              <button className="btn-secondary">
                Contact Us
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TeamSection 