'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const PartnerSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const partnershipTypes = [
    {
      icon: "🤝",
      title: "Distributor Partnership",
      description: "Join our network of regional distributors and bring authentic Sarbhath to your local market.",
      benefits: ["Exclusive territory rights", "Marketing support", "Training provided"]
    },
    {
      icon: "🏪",
      title: "Retail Collaboration",
      description: "Stock our premium Sarbhath products in your retail stores and offer customers authentic taste.",
      benefits: ["Attractive margins", "Display materials", "Customer support"]
    },
    {
      icon: "🎪",
      title: "Festival & Event Partner",
      description: "Feature our traditional drinks at festivals, events, and cultural celebrations across India.",
      benefits: ["Event sponsorship", "Bulk pricing", "Custom branding"]
    }
  ]

  return (
    <section id="partner" ref={ref} className="section-padding bg-gradient-to-br from-amber-50 to-orange-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d4af37' fill-opacity='0.4'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20v-40c11.046 0 20 8.954 20 20z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-brown-100 via-accent-100 to-brown-100 border-2 border-brown-300/40 text-brown-700 font-bold text-sm tracking-widest mb-6 shadow-lg uppercase">
            Join the Movement
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8">
            <span className="bg-gradient-to-r from-gray-900 via-brown-700 to-gray-900 bg-clip-text text-transparent drop-shadow-sm">
              Partner with
            </span>{' '}
            <span className="bg-gradient-to-r from-brown-600 via-accent-600 to-brown-600 bg-clip-text text-transparent drop-shadow-sm">
              Us
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
            We're more than a drink — we're a revival of Indian culture.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Become a distributor, partner, or retail collaborator, and help us bring Sarbhath 
            back to every home, shop, and festival in India.
          </p>
        </motion.div>

        {/* Partnership Types */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {partnershipTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
              whileHover={{ 
                scale: 1.03,
                y: -10,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
              }}
              className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-amber-200/50 hover:border-amber-400/50 transition-all duration-500 relative overflow-hidden"
            >
              {/* Background gradient on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-amber-200/10 to-yellow-300/10 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              
              <div className="relative z-10">
                <motion.div
                  className="text-6xl mb-6 inline-block"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, -10, 10, 0]
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {type.icon}
                </motion.div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-brown-600 transition-colors">
                  {type.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {type.description}
                </p>
                
                <div className="space-y-3">
                  {type.benefits.map((benefit, benefitIndex) => (
                    <motion.div
                      key={benefitIndex}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.8 + index * 0.2 + benefitIndex * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-brown-500 rounded-full" />
                      <span className="text-sm text-gray-700 font-medium">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <div className="inline-block p-12 bg-white/70 backdrop-blur-sm rounded-3xl border border-amber-300/50 relative overflow-hidden">
            {/* Decorative elements */}
            <motion.div
              className="absolute -top-6 -left-6 w-24 h-24 bg-amber-300/20 rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -bottom-6 -right-6 w-20 h-20 bg-yellow-400/20 rounded-full"
              animate={{ 
                scale: [1.2, 1, 1.2],
                opacity: [0.6, 0.3, 0.6]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                👉 Partner with Indian Sarbhath Company
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center space-x-3 p-4 bg-brown-600 hover:bg-brown-700 text-white rounded-xl font-bold text-lg shadow-lg transition-colors"
                >
                  <span>📞</span>
                  <a href="tel:8590069690" className="hover:underline">
                    8590069690
                  </a>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center space-x-3 p-4 border-2 border-brown-600 text-brown-700 rounded-xl font-bold text-lg hover:bg-brown-600 hover:text-white transition-all duration-300"
                >
                  <span>📧</span>
                  <a href="mailto:info@indiansarbhathcompany.com" className="hover:underline">
                    Email Us
                  </a>
                </motion.div>
              </div>
              
              <p className="text-gray-600 mb-6">
                Ready to be part of India's beverage revolution? Contact us today to explore partnership opportunities.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-accent-600 hover:bg-accent-700 text-white font-bold rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Start Your Partnership Journey
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PartnerSection