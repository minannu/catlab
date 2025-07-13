'use client'

import { BookOpen, Linkedin, Twitter, Github, Mail, MapPin, Phone } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    research: [
      { name: 'Computational Literature', href: '#' },
      { name: 'Sentiment Analysis', href: '#' },
      { name: 'Digital Humanities', href: '#' },
      { name: 'Text Mining', href: '#' },
      { name: 'Data Visualization', href: '#' }
    ],
    team: [
      { name: 'Principal Investigator', href: '#' },
      { name: 'Research Scientists', href: '#' },
      { name: 'PhD Students', href: '#' },
      { name: 'Research Assistants', href: '#' },
      { name: 'Join Our Team', href: '#' }
    ],
    resources: [
      { name: 'Publications', href: '#' },
      { name: 'Datasets', href: '#' },
      { name: 'Tools & Software', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'Research Blog', href: '#' }
    ],
    connect: [
      { name: 'Contact Us', href: '#contact' },
      { name: 'Collaborations', href: '#' },
      { name: 'Visiting Scholars', href: '#' },
      { name: 'Newsletter', href: '#' },
      { name: 'Events', href: '#' }
    ]
  }

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'GitHub', href: '#', icon: Github },
    { name: 'Email', href: 'mailto:info@catlab.edu', icon: Mail }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Logo and Description */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">CatLab</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                CatLab is a cutting-edge research laboratory dedicated to advancing computational 
                methods in literature analysis, social media sentiment research, and digital humanities.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4" />
                  <span>123 Research Drive, University Campus</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4" />
                  <span>info@catlab.edu</span>
                </div>
              </div>
            </div>

            {/* Research Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Research Areas</h3>
              <ul className="space-y-3">
                {footerLinks.research.map((link) => (
                  <li key={link.name}>
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
                {footerLinks.team.map((link) => (
                  <li key={link.name}>
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
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
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
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} CatLab Research Laboratory. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
                  title={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center gap-6 mt-6 pt-6 border-t border-gray-800">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Accessibility
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 