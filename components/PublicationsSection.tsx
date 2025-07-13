'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Download, Calendar, Users } from 'lucide-react'

const PublicationsSection = () => {
  const publications = [
    {
      title: 'Computational Analysis of Sentiment Evolution in Victorian Literature',
      authors: 'Chen, S., Rodriguez, M., Watson, E.',
      journal: 'Digital Humanities Quarterly',
      year: '2024',
      doi: '10.1234/dhq.2024.001',
      abstract: 'This study presents a novel computational approach to analyzing sentiment patterns across Victorian literary works, revealing previously unrecognized emotional trajectories in 19th-century fiction.',
      citations: 45,
      category: 'Literature Analysis'
    },
    {
      title: 'Real-time Social Media Sentiment Analysis During Global Events',
      authors: 'Rodriguez, M., Kim, J., Thompson, A.',
      journal: 'Computational Social Science',
      year: '2024',
      doi: '10.1234/css.2024.002',
      abstract: 'We develop a real-time sentiment analysis framework for tracking public opinion shifts during major global events, demonstrating the dynamic nature of collective emotional responses.',
      citations: 32,
      category: 'Social Media Analysis'
    },
    {
      title: 'Neural Network Approaches to Literary Genre Classification',
      authors: 'Watson, E., Chen, S., Patel, P.',
      journal: 'Computational Linguistics',
      year: '2023',
      doi: '10.1234/cl.2023.003',
      abstract: 'A deep learning model for automatic genre classification of literary texts, achieving state-of-the-art performance on a diverse corpus of classical and contemporary literature.',
      citations: 67,
      category: 'NLP'
    },
    {
      title: 'Digital Mapping of Cultural Themes Across Historical Periods',
      authors: 'Kim, J., Chen, S., Rodriguez, M.',
      journal: 'Cultural Analytics',
      year: '2023',
      doi: '10.1234/ca.2023.004',
      abstract: 'An interactive digital mapping system for visualizing cultural themes and motifs across different historical periods and geographical regions.',
      citations: 28,
      category: 'Digital Humanities'
    },
    {
      title: 'Community Detection in Social Media Networks',
      authors: 'Patel, P., Watson, E., Thompson, A.',
      journal: 'Social Network Analysis and Mining',
      year: '2023',
      doi: '10.1234/snam.2023.005',
      abstract: 'Advanced algorithms for detecting and analyzing community structures in large-scale social media networks, with applications to digital discourse analysis.',
      citations: 41,
      category: 'Network Analysis'
    },
    {
      title: 'Machine Learning for Historical Text Mining',
      authors: 'Thompson, A., Kim, J., Chen, S.',
      journal: 'Journal of Digital Humanities',
      year: '2023',
      doi: '10.1234/jdh.2023.006',
      abstract: 'A comprehensive framework for applying machine learning techniques to historical text analysis, enabling new insights into cultural and linguistic evolution.',
      citations: 53,
      category: 'Digital Humanities'
    }
  ]

  const categories = ['All', 'Literature Analysis', 'Social Media Analysis', 'NLP', 'Digital Humanities', 'Network Analysis']

  return (
    <section id="publications" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Recent <span className="gradient-text">Publications</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our latest research contributions to the fields of computational linguistics, 
            digital humanities, and social media analysis.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg card-hover"
            >
              <div className="mb-4">
                <span className="inline-block bg-primary-100 text-primary-800 text-xs font-medium px-3 py-1 rounded-full">
                  {pub.category}
                </span>
              </div>
              
              <h3 className="text-lg font-bold mb-3 text-gray-800 leading-tight">
                {pub.title}
              </h3>
              
              <p className="text-sm text-gray-600 mb-3">
                <strong>Authors:</strong> {pub.authors}
              </p>
              
              <p className="text-sm text-gray-600 mb-3">
                <strong>Journal:</strong> {pub.journal}
              </p>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{pub.year}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users size={14} />
                    <span>{pub.citations} citations</span>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                {pub.abstract}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">
                  DOI: {pub.doi}
                </span>
                <div className="flex space-x-2">
                  <button className="p-2 text-gray-400 hover:text-primary-600 transition-colors duration-200">
                    <ExternalLink size={16} />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-primary-600 transition-colors duration-200">
                    <Download size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Publication Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">50+</div>
            <div className="text-gray-600">Peer-reviewed Papers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">1,200+</div>
            <div className="text-gray-600">Total Citations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">15+</div>
            <div className="text-gray-600">Journal Publications</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">25+</div>
            <div className="text-gray-600">Conference Papers</div>
          </div>
        </motion.div>

        {/* View All Publications CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <button className="btn-primary">
            View All Publications
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default PublicationsSection 