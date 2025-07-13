'use client'

import { motion } from 'framer-motion'
import { Target, Lightbulb, Users, Award } from 'lucide-react'

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'Pushing the boundaries of computational methods in humanities research'
    },
    {
      icon: Lightbulb,
      title: 'Interdisciplinary',
      description: 'Bridging computer science, linguistics, and cultural studies'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working with researchers, institutions, and communities worldwide'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Maintaining the highest standards in research and methodology'
    }
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">CatLab</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              CatLab is a cutting-edge research laboratory dedicated to advancing our understanding 
              of human communication through computational methods. We focus on the intersection 
              of literature, social media, and artificial intelligence.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our mission is to develop innovative tools and methodologies that help researchers, 
              policymakers, and the public better understand how digital platforms shape our 
              collective discourse and cultural expression.
            </p>

            {/* Key Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                </div>
                <p className="text-gray-700">Advanced NLP and machine learning techniques</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                </div>
                <p className="text-gray-700">Large-scale text corpus analysis capabilities</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                </div>
                <p className="text-gray-700">Real-time social media sentiment tracking</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                </div>
                <p className="text-gray-700">Interactive data visualization tools</p>
              </div>
            </div>

            <button className="btn-primary">
              Learn More About Our Work
            </button>
          </motion.div>

          {/* Right Column - Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors duration-200">
                  <value.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">50+</div>
            <div className="text-gray-600">Research Projects</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">100+</div>
            <div className="text-gray-600">Publications</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">25+</div>
            <div className="text-gray-600">Collaborators</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">10M+</div>
            <div className="text-gray-600">Texts Analyzed</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection 