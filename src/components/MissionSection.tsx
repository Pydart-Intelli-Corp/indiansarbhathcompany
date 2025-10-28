'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const MissionSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="mission" ref={ref} className="section-modern bg-gradient-to-br from-accent-50 to-brown-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-10 w-32 h-32 bg-amber-300/20 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-24 h-24 bg-yellow-400/20 rounded-full"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-amber-200/10 to-yellow-300/10 rounded-full"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="badge-modern mb-8">
            Our Mission
          </div>
          
          <motion.h2 
            className="heading-modern-lg text-neutral-800 mb-8 leading-tight"
            whileHover={{ scale: 1.02 }}
          >
            Reviving India's
            <br />
            <span className="text-accent-600">Lost Traditional Drinks</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <p className="text-modern-lg text-neutral-700 leading-relaxed font-light">
            To revive India's lost traditional drinks and introduce them to a new generation — 
            blending <strong className="font-bold text-brown-700">heritage</strong>, 
            <strong className="font-bold text-brown-700"> health</strong>, and 
            <strong className="font-bold text-brown-700"> happiness</strong> in every bottle.
          </p>
        </motion.div>

        {/* Mission Values */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {[
            {
              icon: "🏛️",
              title: "Heritage",
              description: "Preserving centuries-old recipes and traditional brewing methods"
            },
            {
              icon: "💚",
              title: "Health",
              description: "Natural ingredients and Ayurvedic principles for wellness"
            },
            {
              icon: "😊",
              title: "Happiness",
              description: "Creating joyful moments with every refreshing sip"
            }
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
              }}
              className="group bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-amber-200/50 hover:border-amber-400/50 transition-all duration-300"
            >
              <motion.div
                className="text-5xl mb-6 inline-block"
                whileHover={{ 
                  scale: 1.2,
                  rotate: [0, -10, 10, 0]
                }}
                transition={{ duration: 0.5 }}
              >
                {value.icon}
              </motion.div>
              <h3 className="text-2xl font-bold text-amber-900 mb-4 group-hover:text-amber-700 transition-colors">
                {value.title}
              </h3>
              <p className="text-amber-700/80 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="relative"
        >
          <motion.div
            className="inline-block p-12 bg-white/60 backdrop-blur-sm rounded-3xl border border-amber-300/50 relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
          >
            {/* Decorative quote marks */}
            <div className="absolute -top-2 -left-2 text-6xl text-amber-400/30 font-serif">"</div>
            <div className="absolute -bottom-8 -right-2 text-6xl text-amber-400/30 font-serif">"</div>
            
            <blockquote className="text-2xl md:text-3xl font-light text-amber-800 italic leading-relaxed relative z-10">
              Creating a bridge between India's rich beverage heritage 
              and the modern world's thirst for authentic, healthy refreshment.
            </blockquote>
            
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-amber-200/10 to-yellow-300/10 opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default MissionSection