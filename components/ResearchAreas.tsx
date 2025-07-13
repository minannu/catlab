'use client'

import { motion } from 'framer-motion'
import { BookOpen, TrendingUp, Brain, Globe, Database, BarChart3 } from 'lucide-react'

const ResearchAreas = () => {
  const researchAreas = [
    {
      title: 'Literature Text Analysis',
      description: 'Computational analysis of literary works, including sentiment analysis, theme extraction, and stylistic pattern recognition across different genres and time periods.',
      icon: BookOpen,
      color: 'primary',
      features: ['Sentiment Analysis', 'Theme Extraction', 'Stylistic Analysis', 'Genre Classification']
    },
    {
      title: 'Social Media Analysis',
      description: 'Real-time analysis of digital discourse, including trend prediction, influence mapping, and community detection in social networks.',
      icon: TrendingUp,
      color: 'secondary',
      features: ['Trend Prediction', 'Influence Mapping', 'Community Detection', 'Viral Content Analysis']
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP techniques for understanding human language patterns, including machine learning models for text classification and generation.',
      icon: Brain,
      color: 'accent',
      features: ['Text Classification', 'Language Generation', 'Named Entity Recognition', 'Semantic Analysis']
    },
    {
      title: 'Digital Humanities',
      description: 'Bridging traditional humanities research with computational methods to explore cultural artifacts and historical texts.',
      icon: Globe,
      color: 'primary',
      features: ['Cultural Analytics', 'Historical Text Mining', 'Digital Archives', 'Cultural Pattern Recognition']
    },
    {
      title: 'Big Data Analytics',
      description: 'Processing and analyzing large-scale textual datasets to uncover patterns and insights in human communication.',
      icon: Database,
      color: 'secondary',
      features: ['Large-scale Processing', 'Pattern Recognition', 'Data Visualization', 'Predictive Modeling']
    },
    {
      title: 'Computational Linguistics',
      description: 'Developing algorithms and models to understand linguistic structures and language evolution across different contexts.',
      icon: BarChart3,
      color: 'accent',
      features: ['Linguistic Modeling', 'Language Evolution', 'Syntax Analysis', 'Morphological Analysis']
    }
  ]

  return (
    <section id="research" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Research <span className="gradient-text">Areas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our research spans multiple domains at the intersection of computational linguistics, 
            digital humanities, and social media analysis.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg card-hover"
            >
              <div className={`w-16 h-16 bg-${area.color}-100 rounded-xl flex items-center justify-center mb-6`}>
                <area.icon className={`w-8 h-8 text-${area.color}-600`} />
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                {area.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {area.description}
              </p>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800 mb-3">Key Focus Areas:</h4>
                <ul className="space-y-2">
                  {area.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 bg-${area.color}-500 rounded-full`}></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Current Projects Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Current Research Projects</h3>
            <p className="text-lg opacity-90">
              We're currently working on several groundbreaking projects that push the boundaries 
              of computational analysis in humanities research.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h4 className="font-semibold mb-2">Digital Literary Mapping</h4>
              <p className="text-sm opacity-80">
                Creating interactive maps of literary themes and motifs across time and geography.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h4 className="font-semibold mb-2">Social Media Sentiment Evolution</h4>
              <p className="text-sm opacity-80">
                Tracking how public sentiment changes in response to major events and news cycles.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h4 className="font-semibold mb-2">AI-Powered Text Analysis</h4>
              <p className="text-sm opacity-80">
                Developing next-generation AI models for understanding context and nuance in text.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ResearchAreas 