'use client'

import { motion } from 'framer-motion'
import { BookOpen, TrendingUp, Brain, Globe, Database, BarChart3 } from 'lucide-react'

const ResearchAreas = () => {
  const researchAreas = [
    {
      title: 'Machine Learning & AI',
      description: 'Advanced machine learning algorithms and artificial intelligence techniques for pattern recognition, classification, and predictive modeling in text and data analysis.',
      icon: Brain,
      color: 'primary',
      features: ['Pattern Recognition', 'Predictive Modeling', 'Deep Learning', 'Neural Networks']
    },
    {
      title: 'Data  Mining & Analytics',
      description: 'Comprehensive data mining techniques for extracting meaningful patterns and insights from large-scale datasets including literature and social media.',
      icon: Database,
      color: 'secondary',
      features: ['Pattern Extraction', 'Clustering Analysis', 'Association Rules', 'Anomaly Detection']
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP techniques for understanding human language patterns, including sentiment analysis, emotion detection, and contextual embedding analysis for Bangla and literary texts.',
      icon: BookOpen,
      color: 'accent',
      features: ['Sentiment Analysis', 'Emotion Detection', 'Contextual Embeddings', 'Bangla NLP']
    },
    {
      title: 'Social Media Analysis',
      description: 'Real-time analysis of digital discourse, including user engagement analysis, live chat sentiment analysis, and audience behavior in platforms like YouTube and gaming communities.',
      icon: TrendingUp,
      color: 'primary',
      features: ['User Engagement Analysis', 'Live Chat Sentiment', 'Audience Behavior', 'Platform Analytics']
    },
    {
      title: 'Algorithm Design & Optimization',
      description: 'Development of efficient algorithms and optimization techniques for complex computational problems in data analysis and processing.',
      icon: BarChart3,
      color: 'secondary',
      features: ['Algorithm Design', 'Performance Optimization', 'Complexity Analysis', 'Scalable Solutions']
    },
    {
      title: 'Computational Intelligence',
      description: 'Exploring computational intelligence methods including fuzzy logic, genetic algorithms, and swarm intelligence for solving complex problems.',
      icon: Globe,
      color: 'accent',
      features: ['Fuzzy Logic', 'Genetic Algorithms', 'Swarm Intelligence', 'Evolutionary Computing']
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
            Our research spans multiple domains at the intersection of computer science, 
            machine learning, and data mining for literature and social media analysis.
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
              <h4 className="font-semibold mb-2">YouTube Engagement Analysis</h4>
              <p className="text-sm opacity-80">
                Analyzing user engagement patterns in Bengali audio-story based YouTube channels.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h4 className="font-semibold mb-2">Esports Sentiment Analysis</h4>
              <p className="text-sm opacity-80">
                LLM-based topic insights from live chats in South Asian gaming communities.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h4 className="font-semibold mb-2">Bangla E-Commerce Analysis</h4>
              <p className="text-sm opacity-80">
                Enhancing sentiment and emotion analysis accuracy for Bangla datasets.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ResearchAreas 