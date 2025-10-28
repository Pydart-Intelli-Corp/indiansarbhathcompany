'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const ContactSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const contactInfo = [
    {
      icon: "📍",
      label: "Head Office",
      value: "Room No.5, Saradha complex, 85F, Kaiparambu - Parappur Rd, Tholur, Parappur, Kerala, 680552",
      type: "address"
    },
    {
      icon: "📞",
      label: "Phone",
      value: "8590069690",
      type: "phone"
    },
    {
      icon: "📧",
      label: "Email",
      value: "info@indiansarbhathcompany.com",
      type: "email"
    },
    {
      icon: "🌐",
      label: "Website",
      value: "www.indiansarbhath.com",
      type: "website"
    }
  ]

  const socialLinks = [
    { name: "Facebook", icon: "📘", url: "#" },
    { name: "Instagram", icon: "📷", url: "#" },
    { name: "YouTube", icon: "📺", url: "#" },
    { name: "LinkedIn", icon: "💼", url: "#" }
  ]

  return (
    <section id="contact" ref={ref} className="section-padding bg-gradient-to-br from-amber-100 to-orange-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 right-10 w-64 h-64 rounded-full bg-gradient-to-br from-amber-200/20 to-yellow-300/20"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-gradient-to-br from-orange-200/20 to-amber-300/20"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-brown-100 via-accent-100 to-brown-100 border-2 border-brown-300/40 text-brown-700 font-bold text-sm tracking-widest mb-6 shadow-lg uppercase">
            Contact Us
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-brown-700 to-gray-900 bg-clip-text text-transparent drop-shadow-sm">
              Indian
            </span>{' '}
            <span className="bg-gradient-to-r from-brown-600 via-accent-600 to-brown-600 bg-clip-text text-transparent drop-shadow-sm">
              Sarbhath
            </span>{' '}
            <span className="bg-gradient-to-r from-gray-900 via-brown-700 to-gray-900 bg-clip-text text-transparent drop-shadow-sm">
              Company
            </span>
          </h2>
          <p className="text-2xl text-gray-700 font-light mb-8">
            Refreshing India, One Bottle at a Time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-8">Get In Touch</h3>
            
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  x: 10,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)"
                }}
                className="group flex items-start space-x-4 p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-brown-200/50 hover:border-brown-400/50 transition-all duration-300"
              >
                <motion.div
                  className="flex-shrink-0 w-12 h-12 bg-brown-600 rounded-full flex items-center justify-center text-xl shadow-lg"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, 0]
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {info.icon}
                </motion.div>
                
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-brown-600 transition-colors">
                    {info.label}
                  </h4>
                  {info.type === 'phone' ? (
                    <a 
                      href={`tel:${info.value}`}
                      className="text-gray-600 hover:text-brown-600 hover:underline transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : info.type === 'email' ? (
                    <a 
                      href={`mailto:${info.value}`}
                      className="text-gray-600 hover:text-brown-600 hover:underline transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : info.type === 'website' ? (
                    <a 
                      href={`https://${info.value}`}
                      className="text-gray-600 hover:text-brown-600 hover:underline transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-600 leading-relaxed">
                      {info.value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form / CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-amber-300/50 shadow-2xl relative overflow-hidden">
              {/* Background decoration */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-amber-200/10 to-yellow-300/10"
                animate={{ 
                  scale: [1, 1.02, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                  Ready to Connect?
                </h3>
                
                <p className="text-gray-600 text-center mb-8 leading-relaxed">
                  Whether you're interested in partnership opportunities, product information, 
                  or just want to learn more about our traditional Sarbhath, we'd love to hear from you.
                </p>
                
                <div className="space-y-6">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-4 bg-brown-600 hover:bg-brown-700 text-white font-bold rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    📞 Call Us Now: 8590069690
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-4 border-2 border-brown-600 text-brown-700 font-bold rounded-xl text-lg hover:bg-brown-600 hover:text-white transition-all duration-300"
                  >
                    📧 Send Email
                  </motion.button>
                </div>
                
                <div className="mt-8 pt-6 border-t border-brown-200">
                  <h4 className="text-lg font-bold text-gray-800 mb-4 text-center">
                    Follow us on:
                  </h4>
                  <div className="flex justify-center space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ 
                          scale: 1.1,
                          y: -2
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="w-12 h-12 bg-brown-600 hover:bg-brown-700 text-white rounded-full flex items-center justify-center text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection