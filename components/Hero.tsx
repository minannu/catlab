'use client'

import { motion } from 'framer-motion'
import { ArrowDown, BookOpen, TrendingUp, Users } from 'lucide-react'

const Hero = () => {
  const scrollToResearch = () => {
    const element = document.querySelector('#research')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container-max section-padding pt-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="gradient-text">CatLab</span>
            <br />
            <span className="text-gray-900">Research Laboratory</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 text-balance"
          >
            Advancing computational literature analysis and social media sentiment research
          </motion.p>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-500 mb-12 max-w-3xl mx-auto text-balance"
          >
            We combine cutting-edge computational methods with deep literary analysis to understand 
            how digital platforms shape our understanding of text, sentiment, and human communication.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <button 
              onClick={scrollToResearch}
              className="btn-primary flex items-center justify-center space-x-2"
            >
              <BookOpen className="w-5 h-5" />
              <span>Explore Research</span>
            </button>
            <button className="btn-secondary flex items-center justify-center space-x-2">
              <Users className="w-5 h-5" />
              <span>Join Our Team</span>
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">15+</div>
              <div className="text-gray-600">Research Papers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">8</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">5+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <button 
          onClick={scrollToResearch}
          className="flex flex-col items-center text-gray-400 hover:text-primary-600 transition-colors duration-200"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <ArrowDown className="w-6 h-6 animate-bounce" />
        </button>
      </motion.div>
    </section>
  )
}

export default Hero 