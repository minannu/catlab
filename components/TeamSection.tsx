'use client'

import { motion } from 'framer-motion'
import { Linkedin, Twitter, Globe, Mail } from 'lucide-react'

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Principal Investigator',
      expertise: 'Computational Linguistics, NLP',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      bio: 'Leading research in computational literature analysis with over 10 years of experience in NLP and digital humanities.',
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
      expertise: 'Social Media Analytics, Sentiment Analysis',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: 'Specializes in real-time sentiment analysis and social media data processing for public opinion research.',
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
      expertise: 'Digital Humanities, Text Mining',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      bio: 'Focuses on applying computational methods to historical texts and cultural heritage preservation.',
      social: {
        linkedin: '#',
        twitter: '#',
        website: '#',
        email: 'emily.watson@catlab.edu'
      }
    },
    {
      name: 'Alex Kim',
      role: 'PhD Student',
      expertise: 'Machine Learning, Data Visualization',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      bio: 'Developing interactive visualization tools for large-scale text analysis and pattern recognition.',
      social: {
        linkedin: '#',
        twitter: '#',
        website: '#',
        email: 'alex.kim@catlab.edu'
      }
    },
    {
      name: 'Priya Patel',
      role: 'Research Assistant',
      expertise: 'Corpus Linguistics, Statistical Analysis',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face',
      bio: 'Working on multilingual text analysis and cross-cultural communication patterns.',
      social: {
        linkedin: '#',
        twitter: '#',
        website: '#',
        email: 'priya.patel@catlab.edu'
      }
    },
    {
      name: 'David Thompson',
      role: 'Software Engineer',
      expertise: 'Full-Stack Development, API Design',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
      bio: 'Building scalable infrastructure and tools for processing and analyzing large text datasets.',
      social: {
        linkedin: '#',
        twitter: '#',
        website: '#',
        email: 'david.thompson@catlab.edu'
      }
    }
  ]

  return (
    <section id="team" className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            Our interdisciplinary team brings together expertise in computer science, 
            linguistics, digital humanities, and data science to advance computational research.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group hover:scale-105 transition-transform duration-300"
            >
              {/* Profile Image */}
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Member Info */}
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{member.name}</h3>
                <p className="text-primary-600 font-semibold mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.expertise}</p>
                
                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex justify-center space-x-3">
                  <a
                    href={member.social.linkedin}
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary-100 transition-colors duration-200"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4 text-gray-600" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary-100 transition-colors duration-200"
                    title="Twitter"
                  >
                    <Twitter className="w-4 h-4 text-gray-600" />
                  </a>
                  <a
                    href={member.social.website}
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary-100 transition-colors duration-200"
                    title="Website"
                  >
                    <Globe className="w-4 h-4 text-gray-600" />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary-100 transition-colors duration-200"
                    title="Email"
                  >
                    <Mail className="w-4 h-4 text-gray-600" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Our Team CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold mb-4">Join Our Research Team</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're always looking for talented researchers, students, and collaborators 
              who are passionate about computational humanities and text analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">View Open Positions</button>
              <button className="btn-secondary">Contact Us</button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TeamSection 