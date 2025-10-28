'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const WhyChooseSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const reasons = [
    {
      icon: "🇮🇳",
      title: "Rooted in Indian tradition",
      description: "Authentic recipes passed down through generations"
    },
    {
      icon: "🌿",
      title: "Made from real herbs and natural extracts",
      description: "Pure ingredients sourced directly from Indian farms"
    },
    {
      icon: "🌞",
      title: "Perfect summer hydration",
      description: "Specially formulated to beat the Indian heat"
    },
    {
      icon: "🏥",
      title: "Hygienically packed and ready to serve",
      description: "Modern packaging standards meet traditional taste"
    },
    {
      icon: "🏆",
      title: "Crafted for modern retail & export quality standards",
      description: "International quality with authentic Indian taste"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-yellow-50 to-amber-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-40 h-40 rounded-full bg-gradient-to-br from-amber-300/20 to-yellow-400/20"
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-orange-300/20 to-amber-400/20"
          animate={{ 
            scale: [1.3, 1, 1.3],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 18,
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
            Why Choose Us
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8">
            <span className="bg-gradient-to-r from-gray-900 via-brown-700 to-gray-900 bg-clip-text text-transparent drop-shadow-sm">
              The Indian Sarbhath
            </span>
            <br />
            <span className="bg-gradient-to-r from-accent-600 via-brown-500 to-accent-600 bg-clip-text text-transparent drop-shadow-sm">
              Difference
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're more than just a beverage company. We're guardians of tradition, 
            innovators of taste, and champions of authentic Indian refreshment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Reasons list */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  x: 10,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)"
                }}
                className="group flex items-start space-x-6 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-amber-200/50 hover:border-amber-400/50 transition-all duration-300"
              >
                <motion.div
                  className="flex-shrink-0 w-16 h-16 bg-brown-600 rounded-full flex items-center justify-center text-2xl shadow-lg text-white"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, 0]
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {reason.icon}
                </motion.div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-accent-600 transition-colors">
                    ✅ {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right side - Visual element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            <div className="relative">
              {/* Main card */}
              <motion.div
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-amber-300/50 shadow-2xl relative overflow-hidden"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {/* Decorative background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-amber-200/20 to-yellow-300/20"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <div className="relative z-10 text-center">
                  <motion.div
                    className="text-8xl mb-6 inline-block"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    🥤
                  </motion.div>
                  
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">
                    Premium Quality
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Every bottle represents our commitment to excellence, 
                    tradition, and the authentic taste of India.
                  </p>
                  
                  <motion.div
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-accent-600 hover:bg-accent-700 text-white rounded-full font-medium transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span>🏅</span>
                    <span>Award-Winning Taste</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-amber-400/30 rounded-full"
                animate={{ 
                  y: [0, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-yellow-400/30 rounded-full"
                animate={{ 
                  y: [0, 10, 0],
                  scale: [1.1, 1, 1.1]
                }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseSection