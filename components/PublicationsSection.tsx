'use client'

import { motion } from 'framer-motion'
import { FileText, ExternalLink, Calendar, Users, Filter } from 'lucide-react'
import { useState } from 'react'

const PublicationsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const publications = [
    {
      title: 'Computational Analysis of Literary Style Evolution in 19th Century Novels',
      authors: ['Sarah Chen', 'Marcus Rodriguez', 'Emily Watson'],
      journal: 'Digital Humanities Quarterly',
      year: 2024,
      doi: '10.1234/dhq.2024.001',
      abstract: 'This study applies advanced NLP techniques to analyze stylistic changes in 19th century literature, revealing patterns in narrative evolution and authorial voice.',
      category: 'computational-literature',
      citations: 45,
      pdf: '#'
    },
    {
      title: 'Real-time Sentiment Analysis of Social Media Discourse During Political Events',
      authors: ['Marcus Rodriguez', 'Alex Kim', 'Priya Patel'],
      journal: 'Computational Social Science',
      year: 2024,
      doi: '10.1234/css.2024.002',
      abstract: 'A novel approach to real-time sentiment tracking across multiple social media platforms, providing insights into public opinion dynamics.',
      category: 'sentiment-analysis',
      citations: 32,
      pdf: '#'
    },
    {
      title: 'Multilingual Text Mining for Cross-Cultural Communication Patterns',
      authors: ['Priya Patel', 'Sarah Chen', 'David Thompson'],
      journal: 'Language Resources and Evaluation',
      year: 2023,
      doi: '10.1234/lre.2023.003',
      abstract: 'Development of multilingual corpus analysis tools for understanding communication patterns across different cultural contexts.',
      category: 'text-mining',
      citations: 28,
      pdf: '#'
    },
    {
      title: 'Interactive Visualization of Large-Scale Text Corpora',
      authors: ['Alex Kim', 'Emily Watson', 'David Thompson'],
      journal: 'IEEE Transactions on Visualization and Computer Graphics',
      year: 2023,
      doi: '10.1234/tvcg.2023.004',
      abstract: 'A new framework for creating interactive visualizations of large text datasets, enabling researchers to explore patterns intuitively.',
      category: 'visualization',
      citations: 19,
      pdf: '#'
    },
    {
      title: 'Digital Humanities Approaches to Historical Text Preservation',
      authors: ['Emily Watson', 'Sarah Chen'],
      journal: 'Journal of Cultural Analytics',
      year: 2023,
      doi: '10.1234/jca.2023.005',
      abstract: 'Computational methods for preserving and analyzing historical texts, with applications to cultural heritage preservation.',
      category: 'digital-humanities',
      citations: 23,
      pdf: '#'
    },
    {
      title: 'Scalable Architecture for Processing Massive Text Datasets',
      authors: ['David Thompson', 'Marcus Rodriguez', 'Alex Kim'],
      journal: 'Big Data Analytics',
      year: 2023,
      doi: '10.1234/bda.2023.006',
      abstract: 'Design and implementation of a distributed computing framework for processing and analyzing large-scale text corpora.',
      category: 'infrastructure',
      citations: 15,
      pdf: '#'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Publications' },
    { id: 'computational-literature', name: 'Computational Literature' },
    { id: 'sentiment-analysis', name: 'Sentiment Analysis' },
    { id: 'text-mining', name: 'Text Mining' },
    { id: 'visualization', name: 'Visualization' },
    { id: 'digital-humanities', name: 'Digital Humanities' },
    { id: 'infrastructure', name: 'Infrastructure' }
  ]

  const filteredPublications = activeFilter === 'all' 
    ? publications 
    : publications.filter(pub => pub.category === activeFilter)

  return (
    <section id="publications" className="section-padding bg-white">
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
            Our <span className="gradient-text">Publications</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            Recent research contributions advancing the field of computational humanities 
            and text analysis across various domains.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeFilter === category.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Publications Grid */}
        <div className="space-y-6">
          {filteredPublications.map((publication, index) => (
            <motion.div
              key={publication.doi}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Publication Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-8 h-8 text-primary-600" />
                  </div>
                </div>

                {/* Publication Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 hover:text-primary-600 transition-colors duration-200">
                    {publication.title}
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{publication.authors.join(', ')}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{publication.year}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="font-medium">{publication.journal}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {publication.abstract}
                  </p>

                  <div className="flex flex-wrap items-center gap-4">
                    <span className="text-sm text-gray-500">
                      DOI: {publication.doi}
                    </span>
                    <span className="text-sm text-gray-500">
                      Citations: {publication.citations}
                    </span>
                    <div className="flex gap-2">
                      <a
                        href={publication.pdf}
                        className="btn-secondary text-sm py-2 px-4 flex items-center gap-2"
                      >
                        <FileText className="w-4 h-4" />
                        PDF
                      </a>
                      <a
                        href={`https://doi.org/${publication.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-sm py-2 px-4 flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Paper
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Publications CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            View our complete publication list and research outputs
          </p>
          <button className="btn-primary">
            View All Publications
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default PublicationsSection 