'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import UnderConstruction from './UnderConstruction'

const HeroSection = () => {
  const [showModal, setShowModal] = useState(false)
  const [activeButton, setActiveButton] = useState('')

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName)
    setShowModal(true)
  }
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-24 sm:pt-32">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
        >
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 cursor-pointer"
            whileHover={{ 
              scale: 1.05,
              textShadow: "0px 0px 30px rgba(255,255,255,0.8)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="inline-block">
              {"indiansarbhathcompany.com".split('').map((letter, index) => (
                <motion.span
                  key={index}
                  className="inline-block relative"
                  whileHover={{ 
                    scale: 1.2,
                    y: -10,
                  }}
                  transition={{
                    type: "spring", 
                    stiffness: 300, 
                    damping: 15
                  }}
                  style={{
                    transformOrigin: "center bottom"
                  }}
                >
                  <span 
                    className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent"
                    style={{
                      backgroundSize: "200% 100%",
                      animation: `gradient-shift 3s ease-in-out infinite ${index * 0.1}s`,
                    }}
                  >
                    {letter}
                  </span>
                </motion.span>
              ))}
            </span>
          </motion.h1>
          
          <motion.h2 
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 font-light cursor-pointer"
            whileHover={{ 
              scale: 1.08,
              color: "#ffd700",
              textShadow: "0px 0px 20px rgba(255,215,0,0.8)",
            }}
            animate={{
              textShadow: [
                "0px 0px 10px rgba(255,255,255,0.3)",
                "0px 0px 20px rgba(255,255,255,0.6)",
                "0px 0px 10px rgba(255,255,255,0.3)",
              ]
            }}
            transition={{
              textShadow: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              },
              hover: { type: "spring", stiffness: 300 }
            }}
          >
            Premium Refreshing Drinks
          </motion.h2>
        </motion.div>

        {/* Enhanced Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mb-12"
        >
          <motion.p
            className="text-xs sm:text-sm md:text-base lg:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed cursor-pointer"
            whileHover={{ 
              scale: 1.02,
              color: "#ffffff",
              textShadow: "0px 0px 15px rgba(255,255,255,0.5)",
            }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <motion.span
              className="inline-block"
              whileHover={{ 
                color: "#ff6b35",
                scale: 1.1,
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Discover the authentic taste
            </motion.span>
            {" "}of traditional Indian beverages, reimagined for the modern palate.{" "}
            <motion.span
              className="inline-block"
              whileHover={{ 
                color: "#ffd700",
                scale: 1.1,
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Experience pure refreshment
            </motion.span>
            {" "}with every sip of our carefully crafted sarbath blends.
          </motion.p>

          {/* Animated tagline */}
          <motion.p
            className="text-xs sm:text-xs md:text-sm lg:text-base text-orange-300/90 mt-4 font-medium italic"
            animate={{
              opacity: [0.7, 1, 0.7],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{
              color: "#ffd700",
              scale: 1.1,
              textShadow: "0px 0px 20px rgba(255,215,0,0.8)",
            }}
          >
            "Where tradition meets innovation in every drop"
          </motion.p>
        </motion.div>

        {/* Enhanced Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            whileHover={{ 
              scale: 1.1, 
              boxShadow: "0 25px 60px rgba(255, 107, 53, 0.4), 0 0 40px rgba(255, 255, 255, 0.3)",
              backgroundImage: "linear-gradient(45deg, #ff6b35, #f7931e, #ff6b35)",
              textShadow: "0px 0px 10px rgba(255,255,255,0.8)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleButtonClick("Explore Our Drinks")}
            animate={{
              backgroundSize: ["100% 100%", "120% 120%", "100% 100%"],
            }}
            transition={{
              backgroundSize: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              },
              hover: { type: "spring", stiffness: 300, damping: 15 }
            }}
            className="relative bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full font-bold text-xs sm:text-sm md:text-base shadow-xl overflow-hidden group cursor-pointer"
          >
            <span className="relative z-10">Explore Our Drinks</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-100"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          <motion.button
            whileHover={{ 
              scale: 1.1,
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              borderColor: "#ffd700",
              color: "#ffd700",
              boxShadow: "0 25px 60px rgba(255, 215, 0, 0.3), inset 0 0 30px rgba(255, 255, 255, 0.1)",
              textShadow: "0px 0px 15px rgba(255,215,0,0.8)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleButtonClick("Our Story")}
            animate={{
              borderColor: ["rgba(255,255,255,0.3)", "rgba(255,215,0,0.6)", "rgba(255,255,255,0.3)"],
            }}
            transition={{
              borderColor: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              },
              hover: { type: "spring", stiffness: 300, damping: 15 }
            }}
            className="relative glass text-white border-2 border-white/30 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full font-bold text-xs sm:text-sm md:text-base overflow-hidden group cursor-pointer"
          >
            <span className="relative z-10">Our Story</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full"
              transition={{ duration: 0.6 }}
            />
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/70 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Under Construction Modal */}
      <UnderConstruction
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        buttonName={activeButton}
      />
    </section>
  )
}

export default HeroSection