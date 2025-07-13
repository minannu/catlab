'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Award, Users, ExternalLink } from 'lucide-react'

const NewsSection = () => {
  const newsItems = [
    {
      title: 'Cat Lab Receives $2M Grant for Digital Humanities Research',
      date: 'March 15, 2024',
      category: 'Funding',
      excerpt: 'The National Science Foundation has awarded our lab a major grant to advance computational methods in digital humanities research.',
      image: '/api/placeholder/400/250',
      featured: true
    },
    {
      title: 'Dr. Sarah Chen Presents Keynote at Digital Humanities Conference',
      date: 'February 28, 2024',
      category: 'Conference',
      excerpt: 'Our PI delivered a keynote address on "The Future of Computational Literary Analysis" at the annual DH conference.',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      title: 'New Paper Published in Top-tier Journal',
      date: 'February 15, 2024',
      category: 'Publication',
      excerpt: 'Our research on sentiment analysis in Victorian literature has been published in Digital Humanities Quarterly.',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      title: 'Lab Welcomes Two New PhD Students',
      date: 'January 30, 2024',
      category: 'Team',
      excerpt: 'We\'re excited to welcome Alex Thompson and Priya Patel to our research team as new PhD students.',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      title: 'Collaboration with International Research Consortium',
      date: 'January 15, 2024',
      category: 'Collaboration',
      excerpt: 'Cat Lab joins a global consortium of researchers working on large-scale cultural data analysis.',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      title: 'Open Source Tool Release: TextMiner Pro',
      date: 'December 20, 2023',
      category: 'Software',
      excerpt: 'We\'ve released our latest open-source tool for computational text analysis, available to the research community.',
      image: '/api/placeholder/400/250',
      featured: false
    }
  ]

  const upcomingEvents = [
    {
      title: 'Digital Humanities Summer Workshop',
      date: 'June 15-20, 2024',
      location: 'University Campus',
      description: 'A week-long workshop on computational methods in humanities research.'
    },
    {
      title: 'Annual Lab Symposium',
      date: 'May 10, 2024',
      location: 'Conference Center',
      description: 'Presenting our latest research findings and future directions.'
    },
    {
      title: 'Guest Lecture Series',
      date: 'April 25, 2024',
      location: 'Lecture Hall A',
      description: 'Dr. Emily Watson presents on "Advances in NLP for Literary Analysis".'
    }
  ]

  return (
    <section id="news" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Lab <span className="gradient-text">News</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with our latest research developments, team news, and upcoming events.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured News */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-6">
              {newsItems.slice(0, 4).map((item, index) => (
              <motion.div
                  key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                  className={`bg-gray-50 rounded-xl overflow-hidden card-hover ${
                    item.featured ? 'md:col-span-2' : ''
                  }`}
                >
                  <div className="h-48 bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      {item.title.split(' ').slice(0, 2).join(' ')}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium text-primary-600 bg-primary-100 px-2 py-1 rounded-full">
                        {item.category}
                      </span>
                      <span className="text-sm text-gray-500">{item.date}</span>
                </div>
                    <h3 className="text-lg font-bold mb-3 text-gray-800">
                    {item.title}
                  </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {item.excerpt}
                  </p>
                    <button className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center space-x-1">
                      <span>Read More</span>
                      <ExternalLink size={14} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
                    </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Upcoming Events */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold mb-6 text-gray-800">Upcoming Events</h3>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="border-l-4 border-primary-500 pl-4">
                    <h4 className="font-semibold text-gray-800 mb-2">{event.title}</h4>
                    <div className="flex items-center space-x-2 text-sm text-gray-600 mb-1">
                      <Calendar size={14} />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                      <MapPin size={14} />
                      <span>{event.location}</span>
                    </div>
                    <p className="text-sm text-gray-600">{event.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold mb-6 text-gray-800">Recent Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">$2M Grant Awarded</div>
                    <div className="text-sm text-gray-600">NSF Digital Humanities</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-secondary-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">2 New Team Members</div>
                    <div className="text-sm text-gray-600">PhD Students Joined</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center">
                    <ExternalLink className="w-5 h-5 text-accent-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Open Source Release</div>
                    <div className="text-sm text-gray-600">TextMiner Pro Tool</div>
                  </div>
                </div>
                </div>
              </motion.div>
          </div>
        </div>

        {/* View All News CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <button className="btn-secondary">
            View All News & Events
              </button>
        </motion.div>
      </div>
    </section>
  )
}

export default NewsSection 