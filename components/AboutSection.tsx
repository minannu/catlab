'use client'

import { motion } from 'framer-motion'
import { Target, Users, Award, Globe } from 'lucide-react'

const AboutSection = () => {
  const stats = [
    { number: '10+', label: 'Research Papers', icon: Award },
    { number: '3', label: 'Team Members', icon: Users },
    { number: '5+', label: 'Years Experience', icon: Target },
    { number: '3+', label: 'Countries Reached', icon: Globe },
  ]

  const values = [
    {
      title: 'Innovation',
      description: 'Pushing the boundaries of computational analysis and machine learning in research',
      color: 'primary'
    },
    {
      title: 'Collaboration',
      description: 'Working with researchers, institutions, and communities worldwide',
      color: 'secondary'
    },
    {
      title: 'Impact',
      description: 'Creating meaningful insights that advance our understanding of data and algorithms',
      color: 'accent'
    }
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            About <span className="gradient-text">Cat Lab</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a multidisciplinary research laboratory dedicated to advancing sentiment analysis, 
            social media research, and natural language processing for analyzing user engagement and audience behavior.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              Our Mission
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At Cat Lab, we believe that the intersection of sentiment analysis and social media research 
              holds the key to understanding user engagement patterns and audience behavior. 
              Our research spans from YouTube engagement analysis to esports sentiment analysis, 
              providing insights into the patterns and structures that shape digital communication.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We develop cutting-edge sentiment analysis and NLP tools that enable researchers, 
              educators, and policymakers to better understand user engagement and audience behavior 
              in social media platforms and digital communities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8"
          >
            <h4 className="text-xl font-semibold mb-6 text-gray-800">Our Approach</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-500 rounded-full flex-shrink-0 mt-1"></div>
                <p className="text-gray-700">Combining computer science research with computational methods</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-secondary-500 rounded-full flex-shrink-0 mt-1"></div>
                <p className="text-gray-700">Developing machine learning algorithms for data analysis</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-accent-500 rounded-full flex-shrink-0 mt-1"></div>
                <p className="text-gray-700">Fostering interdisciplinary collaboration and knowledge sharing</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                <p className="text-gray-700">Ensuring ethical and responsible use of data and AI technologies</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-3">
                <div className={`w-12 h-12 bg-${stat.icon === Award ? 'primary' : stat.icon === Users ? 'secondary' : stat.icon === Target ? 'accent' : 'primary'}-100 rounded-lg flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 text-${stat.icon === Award ? 'primary' : stat.icon === Users ? 'secondary' : stat.icon === Target ? 'accent' : 'primary'}-600`} />
                </div>
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-12 text-gray-800">Our Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gray-50 card-hover">
                <div className={`w-16 h-16 bg-${value.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <div className={`w-8 h-8 bg-${value.color}-500 rounded-lg`}></div>
                </div>
                <h4 className="text-xl font-semibold mb-3 text-gray-800">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection 