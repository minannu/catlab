'use client'

import { motion } from 'framer-motion'
import { Linkedin, Twitter, Globe, Mail } from 'lucide-react'

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Principal Investigator',
      expertise: 'Computational Linguistics, Digital Humanities',
      bio: 'Leading research in computational analysis of literary texts and digital humanities methodologies.',
      image: '/api/placeholder/300/300',
      social: {
        linkedin: '#',
        twitter: '#',
        website: '#',
        email: 'sarah.chen@catlab.edu'
      }
    },
    {
      name: 'Dr. Marcus Rodriguez',
      role: 'Senior Research Scientist',
      expertise: 'Social Media Analysis, Network Science',
      bio: 'Specializing in real-time social media analysis and network dynamics in digital communities.',
      image: '/api/placeholder/300/300',
      social: {
        linkedin: '#',
        twitter: '#',
        website: '#',
        email: 'marcus.rodriguez@catlab.edu'
      }
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Research Scientist',
      expertise: 'Natural Language Processing, Machine Learning',
      bio: 'Developing advanced NLP models for text analysis and language understanding.',
      image: '/api/placeholder/300/300',
      social: {
        linkedin: '#',
        twitter: '#',
        website: '#',
        email: 'emily.watson@catlab.edu'
      }
    },
    {
      name: 'Dr. James Kim',
      role: 'Postdoctoral Researcher',
      expertise: 'Big Data Analytics, Cultural Analytics',
      bio: 'Working on large-scale cultural data analysis and pattern recognition in digital archives.',
      image: '/api/placeholder/300/300',
      social: {
        linkedin: '#',
        twitter: '#',
        website: '#',
        email: 'james.kim@catlab.edu'
      }
    },
    {
      name: 'Alex Thompson',
      role: 'PhD Student',
      expertise: 'Literature Analysis, Sentiment Analysis',
      bio: 'Researching computational methods for analyzing emotional patterns in literary works.',
      image: '/api/placeholder/300/300',
      social: {
        linkedin: '#',
        twitter: '#',
        website: '#',
        email: 'alex.thompson@catlab.edu'
      }
    },
    {
      name: 'Priya Patel',
      role: 'PhD Student',
      expertise: 'Social Network Analysis, Digital Discourse',
      bio: 'Investigating the evolution of online communities and digital communication patterns.',
      image: '/api/placeholder/300/300',
      social: {
        linkedin: '#',
        twitter: '#',
        website: '#',
        email: 'priya.patel@catlab.edu'
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
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center text-white text-3xl font-bold">
                {member.name.split(' ').map(n => n[0]).join('')}
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