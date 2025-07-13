'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Users, ArrowRight, Award, Presentation, Globe } from 'lucide-react'

const NewsSection = () => {
  const newsItems = [
    {
      type: 'conference',
      title: 'CatLab Presents at ACL 2024',
      excerpt: 'Our team presented three papers at the Association for Computational Linguistics conference, showcasing our latest work in computational literature analysis.',
      date: 'July 15, 2024',
      location: 'Toronto, Canada',
      attendees: ['Sarah Chen', 'Marcus Rodriguez', 'Alex Kim'],
      image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=400&fit=crop',
      link: '#'
    },
    {
      type: 'award',
      title: 'Best Paper Award at Digital Humanities Conference',
      excerpt: 'Our research on "Computational Analysis of Literary Style Evolution" received the Best Paper Award at the annual Digital Humanities conference.',
      date: 'June 28, 2024',
      location: 'Virtual Conference',
      attendees: ['Emily Watson', 'Sarah Chen'],
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop',
      link: '#'
    },
    {
      type: 'collaboration',
      title: 'New Partnership with Stanford NLP Group',
      excerpt: 'We are excited to announce a new collaborative research project with Stanford\'s Natural Language Processing Group on multilingual sentiment analysis.',
      date: 'June 15, 2024',
      location: 'Stanford, CA',
      attendees: ['Sarah Chen', 'Marcus Rodriguez'],
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
      link: '#'
    },
    {
      type: 'research',
      title: 'Launch of New Text Analysis Platform',
      excerpt: 'CatLab has launched a new open-source platform for large-scale text analysis, making our tools available to researchers worldwide.',
      date: 'May 30, 2024',
      location: 'Online',
      attendees: ['David Thompson', 'Alex Kim'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      link: '#'
    },
    {
      type: 'workshop',
      title: 'Summer Workshop on Computational Humanities',
      excerpt: 'Join us for a two-week intensive workshop on computational methods in humanities research, open to graduate students and early-career researchers.',
      date: 'August 5-16, 2024',
      location: 'CatLab Headquarters',
      attendees: ['All Team Members'],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
      link: '#'
    },
    {
      type: 'publication',
      title: 'New Research Paper in Nature Digital Humanities',
      excerpt: 'Our latest research on cross-cultural text analysis has been published in Nature Digital Humanities, representing a major breakthrough in the field.',
      date: 'May 20, 2024',
      location: 'Nature Digital Humanities',
      attendees: ['Priya Patel', 'Sarah Chen', 'Emily Watson'],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
      link: '#'
    }
  ]

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'conference':
        return Presentation
      case 'award':
        return Award
      case 'collaboration':
        return Users
      case 'research':
        return Globe
      case 'workshop':
        return Users
      case 'publication':
        return Globe
      default:
        return Globe
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'conference':
        return 'from-blue-500 to-blue-600'
      case 'award':
        return 'from-yellow-500 to-yellow-600'
      case 'collaboration':
        return 'from-green-500 to-green-600'
      case 'research':
        return 'from-purple-500 to-purple-600'
      case 'workshop':
        return 'from-orange-500 to-orange-600'
      case 'publication':
        return 'from-red-500 to-red-600'
      default:
        return 'from-gray-500 to-gray-600'
    }
  }

  return (
    <section id="news" className="section-padding bg-gray-50">
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
            Latest <span className="gradient-text">News</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            Stay updated with our latest research activities, conference presentations, 
            collaborations, and achievements in computational humanities.
          </p>
        </motion.div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => {
            const IconComponent = getTypeIcon(item.type)
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group hover:scale-105 transition-transform duration-300 overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <div className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getTypeColor(item.type)}`}>
                      {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {item.excerpt}
                  </p>

                  {/* Meta Information */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <MapPin className="w-4 h-4" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Users className="w-4 h-4" />
                      <span>{Array.isArray(item.attendees) ? item.attendees.join(', ') : item.attendees}</span>
                    </div>
                  </div>

                  {/* Read More Link */}
                  <a
                    href={item.link}
                    className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium group/link"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Newsletter Signup */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
        >
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter to receive updates about our latest research, 
              publications, and upcoming events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default NewsSection 