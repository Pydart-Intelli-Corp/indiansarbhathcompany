'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Mission', href: '#mission' },
      { label: 'Products', href: '#products' },
      { label: 'Why Choose Us', href: '#why-choose' }
    ],
    support: [
      { label: 'Contact Us', href: '#contact' },
      { label: 'Partner With Us', href: '#partner' },
      { label: 'FAQs', href: '#faq' },
      { label: 'Support', href: '#support' }
    ],
    legal: [
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Service', href: '#terms' },
      { label: 'Cookie Policy', href: '#cookies' },
      { label: 'Refund Policy', href: '#refund' }
    ]
  }

  const socialLinks = [
    { name: 'Facebook', icon: '📘', url: '#', color: 'hover:bg-blue-600' },
    { name: 'Instagram', icon: '📷', url: '#', color: 'hover:bg-pink-600' },
    { name: 'Twitter', icon: '🐦', url: '#', color: 'hover:bg-sky-500' },
    { name: 'LinkedIn', icon: '💼', url: '#', color: 'hover:bg-blue-700' },
    { name: 'YouTube', icon: '▶️', url: '#', color: 'hover:bg-red-600' }
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-gray-700">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center space-x-3 group">
                <div className="relative w-12 h-12 rounded-full bg-brown-600 p-2 group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src="/logo.png"
                    alt="Indian Sarbhath Company"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Indian Sarbhath</h3>
                  <p className="text-xs text-gray-400">Company</p>
                </div>
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6">
              Reviving India's traditional refreshment culture with authentic Sarbhath. 
              Created by three friends passionate about bringing back the taste of heritage.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 bg-gray-800 ${social.color} rounded-full flex items-center justify-center text-sm shadow-lg transition-all duration-300`}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <h4 className="text-lg font-bold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-accent-400 transition-colors duration-200 inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-accent-400 transition-all duration-200 mr-0 group-hover:mr-2"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h4 className="text-lg font-bold text-white mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-accent-400 transition-colors duration-200 inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-accent-400 transition-all duration-200 mr-0 group-hover:mr-2"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <h4 className="text-lg font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-accent-400 transition-colors duration-200 inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-accent-400 transition-all duration-200 mr-0 group-hover:mr-2"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <h4 className="text-lg font-bold text-white mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:8590069690"
                  className="text-gray-400 hover:text-accent-400 transition-colors duration-200 flex items-center space-x-2"
                >
                  <span>📞</span>
                  <span className="text-sm">8590069690</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@indiansarbhathcompany.com"
                  className="text-gray-400 hover:text-accent-400 transition-colors duration-200 flex items-center space-x-2"
                >
                  <span>📧</span>
                  <span className="text-sm break-all">info@indiansarbhath<wbr/>company.com</span>
                </a>
              </li>
              <li className="flex items-start space-x-2 text-gray-400">
                <span className="flex-shrink-0">📍</span>
                <span className="text-sm">
                  Saradha Complex, Tholur, Parappur, Kerala, 680552
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} Indian Sarbhath Company. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <span className="hidden sm:inline">Made with ❤️ in India</span>
            <span className="px-3 py-1 bg-brown-600/20 border border-brown-500/30 rounded-full text-brown-300 text-xs font-medium">
              Reviving Tradition
            </span>
          </div>
        </motion.div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-600 via-brown-600 to-accent-600"></div>
    </footer>
  )
}

export default Footer
