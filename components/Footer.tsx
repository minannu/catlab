'use client'

import { Linkedin, Twitter, Globe, Mail, MapPin, Phone } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    research: [
      { name: 'Literature Analysis', href: '#research' },
      { name: 'Social Media Analysis', href: '#research' },
      { name: 'Digital Humanities', href: '#research' },
      { name: 'NLP & Machine Learning', href: '#research' }
    ],
    team: [
      { name: 'Our Team', href: '#team' },
      { name: 'Join Us', href: '#contact' },
      { name: 'Collaborations', href: '#contact' },
      { name: 'Alumni', href: '#' }
    ],
    resources: [
      { name: 'Publications', href: '#publications' },
      { name: 'Software Tools', href: '#' },
      { name: 'Datasets', href: '#' },
      { name: 'Documentation', href: '#' }
    ],
    contact: [
      { name: 'Contact Us', href: '#contact' },
      { name: 'Location', href: '#contact' },
      { name: 'News & Events', href: '#news' },
      { name: 'FAQ', href: '#' }
    ]
  }

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Globe, href: '#', label: 'Website' },
    { icon: Mail, href: 'mailto:info@catlab.edu', label: 'Email' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Lab Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <span className="text-2xl font-bold">Cat Lab</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Advancing the understanding of human communication through computational analysis 
                of literature and social media. We bridge the gap between traditional humanities 
                research and modern computational methods.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin size={16} />
                  <span>Research Building, Room 301, University Campus</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone size={16} />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail size={16} />
                  <span>info@catlab.edu</span>
                </div>
              </div>
            </div>

            {/* Research Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Research Areas</h3>
              <ul className="space-y-3">
                {footerLinks.research.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Team Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Team</h3>
              <ul className="space-y-3">
                {footerLinks.team.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <span className="text-gray-400">
                © {currentYear} Cat Lab. All rights reserved.
              </span>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Terms of Service
                </a>
              </div>
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 