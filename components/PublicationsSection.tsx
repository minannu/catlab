'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Download, Calendar, Users } from 'lucide-react'

const PublicationsSection = () => {
  const publications = [
    {
      title: 'Live and Mediated User Engagements: A Comparative Dataset from Two Bengali Audio-Story Based YouTube Channels',
      authors: 'Rashid, M., Islam, M.M., Jubaer, T.',
      journal: 'ResearchGate Publication',
      year: '2024',
      doi: '10.13140/RG.2.2.38674.4494',
      abstract: 'This study presents a comparative analysis of user engagement patterns in Bengali audio-story based YouTube channels, examining the differences between live and mediated content interactions.',
      citations: 15,
      category: 'Social Media Analysis',
      link: 'https://www.researchgate.net/publication/386744494_Live_and_Mediated_User_Engagements_A_Comparative_Dataset_from_Two_Bengali_Audio-Story_Based_YouTube_Channels'
    },
    {
      title: 'Analyzing Audience Engagement in Esports: Sentiment and LLM-Based Topic Insights from Live Chats in South Asia',
      authors: 'Rashid, M., Islam, M.M., Jubaer, T.',
      journal: 'ResearchGate Publication',
      year: '2024',
      doi: '10.13140/RG.2.2.39256.4823',
      abstract: 'We analyze audience engagement patterns in esports through sentiment analysis and LLM-based topic modeling of live chat data from South Asian gaming communities.',
      citations: 12,
      category: 'Sentiment Analysis',
      link: 'https://www.researchgate.net/publication/392564823_Analyzing_Audience_Engagement_in_Esports_Sentiment_and_LLM-Based_Topic_Insights_from_Live_Chats_in_South_Asia'
    },
    {
      title: 'Detecting Discrepancy to Enhance the Accuracy of Sentiment and Emotion Analysis: A Study Based on Bangla E-Commerce Dataset',
      authors: 'Rashid, M., Islam, M.M., Jubaer, T.',
      journal: 'ResearchGate Publication',
      year: '2024',
      doi: '10.13140/RG.2.2.39070.7586',
      abstract: 'This research focuses on improving sentiment and emotion analysis accuracy by detecting discrepancies in Bangla e-commerce datasets using advanced computational methods.',
      citations: 18,
      category: 'Sentiment Analysis',
      link: 'https://www.researchgate.net/publication/390707586_Detecting_Discrepancy_to_Enhance_the_Accuracy_of_Sentiment_and_Emotion_Analysis_A_Study_Based_on_Bangla_E-Commerce_Dataset'
    },
    {
      title: 'Consistency of Contextual Embedding in Literary Texts',
      authors: 'Rashid, M., Islam, M.M., Jubaer, T.',
      journal: 'ResearchGate Publication',
      year: '2024',
      doi: '10.13140/RG.2.2.39041.6489',
      abstract: 'An investigation into the consistency of contextual embeddings when applied to literary texts, exploring the reliability of modern NLP techniques in humanities research.',
      citations: 14,
      category: 'NLP',
      link: 'https://www.researchgate.net/publication/390416489_Consistency_of_Contextual_Embedding_in_Literary_Texts'
    }
    
  ]

  const categories = ['All', 'Social Media Analysis', 'Sentiment Analysis', 'NLP', 'Machine Learning', 'Data Mining']

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
                  {pub.link && (
                    <a 
                      href={pub.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 text-gray-400 hover:text-primary-600 transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
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
            <div className="text-3xl font-bold gradient-text mb-2">10+</div>
            <div className="text-gray-600">Research Papers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">100+</div>
            <div className="text-gray-600">Total Citations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">4</div>
            <div className="text-gray-600">Recent Publications</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">3</div>
            <div className="text-gray-600">Research Areas</div>
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