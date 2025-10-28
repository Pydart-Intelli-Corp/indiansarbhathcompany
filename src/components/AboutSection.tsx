'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const AboutSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const promises = [
    {
      icon: "🌿",
      title: "100% Natural Ingredients",
      description: "Pure, authentic ingredients sourced from nature"
    },
    {
      icon: "🕉️",
      title: "Traditional Ayurvedic Essence",
      description: "Ancient wisdom meets modern preparation"
    },
    {
      icon: "🚫",
      title: "No Artificial Colors or Preservatives",
      description: "Clean, healthy refreshment without compromise"
    },
    {
      icon: "🤚",
      title: "Authentic Handcrafted Taste",
      description: "Every bottle crafted with care and tradition"
    }
  ]

  return (
    <section id="about" ref={ref} className="section-padding bg-gradient-to-br from-amber-50 to-orange-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gradient-to-br from-amber-200/30 to-yellow-300/30"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-gradient-to-br from-orange-200/30 to-amber-300/30"
          animate={{ 
            scale: [1.1, 1, 1.1],
            rotate: [360, 270, 180, 90, 0]
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
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-8 flex flex-col items-center">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="mb-4"
            >
              <Image
                src="/logo.png"
                alt="Indian Sarbhath Company Logo"
                width={60}
                height={60}
                className="object-contain opacity-80"
              />
            </motion.div>
            <span className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-accent-100 via-brown-100 to-accent-100 border-2 border-brown-300/40 text-brown-700 font-bold text-sm tracking-widest mb-6 shadow-lg">
              ABOUT US
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
              <span className="bg-gradient-to-r from-brown-900 via-accent-700 to-brown-900 bg-clip-text text-transparent drop-shadow-sm">
                Our Story
              </span>
            </h2>
          </motion.div>

          <motion.div variants={itemVariants} className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg md:text-xl text-neutral-800 leading-relaxed">
              <strong className="text-brown-800">Sarbhath</strong> — once the pride of Indian summer streets — is not just a drink; it's an emotion.
            </p>
            <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
              At Indian Sarbhath Company, we've taken this nostalgic flavor and bottled it for today's generation. 
              Our journey began with a simple goal: to bring back India's most beloved refreshment in a clean, 
              natural, and convenient form — <em className="text-brown-700 font-semibold">without losing its soul</em>.
            </p>
          </motion.div>
        </motion.div>

        {/* Our Promise Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">
              Our Promise
            </h3>
            <p className="text-lg text-amber-700/80 max-w-3xl mx-auto">
              We blend the wisdom of Ayurveda with the freshness of local ingredients to create 
              a truly Indian beverage — pure, cooling, and full of character.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {promises.map((promise, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
                }}
                className="group relative bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-amber-200/50 hover:border-amber-400/50 transition-all duration-300"
              >
                <div className="text-center">
                  <motion.div
                    className="text-4xl mb-4 inline-block"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: [0, -10, 10, 0]
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {promise.icon}
                  </motion.div>
                  <h4 className="text-lg font-bold text-amber-900 mb-3 group-hover:text-amber-700 transition-colors">
                    {promise.title}
                  </h4>
                  <p className="text-sm text-amber-700/70 leading-relaxed">
                    {promise.description}
                  </p>
                </div>

                {/* Hover effect overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-amber-200/20 to-yellow-200/20 rounded-2xl opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Decorative Quote */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.blockquote
            className="text-2xl md:text-3xl font-light text-amber-800 italic max-w-4xl mx-auto relative"
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-6xl text-amber-400 absolute -top-4 -left-4 opacity-50">"</span>
            Reviving tradition, one authentic sip at a time
            <span className="text-6xl text-amber-400 absolute -bottom-8 -right-4 opacity-50">"</span>
          </motion.blockquote>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection