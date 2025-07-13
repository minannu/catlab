'use client'

import { motion } from 'framer-motion'
import { BookOpen, MessageSquare, TrendingUp, Brain, Database, Globe } from 'lucide-react'

const ResearchAreas = () => {
  const researchAreas = [
    {
      icon: BookOpen,
      title: 'Computational Literature Analysis',
      description: 'Advanced text mining and natural language processing techniques applied to literary works, enabling large-scale analysis of themes, styles, and narrative structures.',
      features: ['Text Mining', 'NLP', 'Stylometric Analysis', 'Topic Modeling'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: MessageSquare,
      title: 'Social Media Sentiment Analysis',
      description: 'Real-time analysis of public sentiment across social media platforms, understanding how digital communication shapes public opinion and discourse.',
      features: ['Sentiment Analysis', 'Real-time Processing', 'Opinion Mining', 'Trend Analysis'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Brain,
      title: 'Digital Humanities Research',
      description: 'Bridging traditional humanities with computational methods to explore cultural phenomena, historical texts, and human expression in the digital age.',
      features: ['Cultural Analytics', 'Historical Analysis', 'Human-Computer Interaction', 'Digital Archives'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: TrendingUp,
      title: 'Text Analytics & Visualization',
      description: 'Creating intuitive visualizations and interactive tools to explore complex textual data and reveal patterns in human communication.',
      features: ['Data Visualization', 'Interactive Tools', 'Pattern Recognition', 'Storytelling'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Database,
      title: 'Large-Scale Text Processing',
      description: 'Developing scalable algorithms and systems for processing massive text corpora, enabling research on previously inaccessible data scales.',
      features: ['Big Data Processing', 'Distributed Computing', 'Corpus Analysis', 'Scalable Algorithms'],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Globe,
      title: 'Cross-Cultural Text Analysis',
      description: 'Comparative analysis of texts across different cultures, languages, and time periods to understand universal patterns in human expression.',
      features: ['Multilingual Analysis', 'Cross-Cultural Studies', 'Comparative Literature', 'Cultural Patterns'],
      color: 'from-indigo-500 to-indigo-600'
    }
  ]

  return (
    <section id="research" className="section-padding bg-gray-50">
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
            Our <span className="gradient-text">Research Areas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            We explore the intersection of computational methods and human expression, 
            advancing our understanding of literature, communication, and digital culture.
          </p>
        </motion.div>

        {/* Research Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group hover:scale-105 transition-transform duration-300"
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${area.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <area.icon className="w-6 h-6 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
                {area.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {area.description}
              </p>

              {/* Features */}
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800 mb-3">Key Focus Areas:</h4>
                <div className="flex flex-wrap gap-2">
                  {area.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Interested in collaborating or learning more about our research?
          </p>
          <button className="btn-primary">
            Get in Touch
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default ResearchAreas 