'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

interface UnderConstructionProps {
  isOpen: boolean
  onClose: () => void
  buttonName: string
}

const UnderConstruction = ({ isOpen, onClose, buttonName }: UnderConstructionProps) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose()
      }, 3000) // Auto-close after 3 seconds
      
      return () => clearTimeout(timer)
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="glass rounded-3xl p-8 max-w-md w-full mx-auto border border-white/20 shadow-2xl">
              {/* Construction Icon */}
              <motion.div
                animate={{ 
                  rotate: [0, -10, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-6xl mb-4 text-center"
              >
                🚧
              </motion.div>

              {/* Title */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-2xl font-bold text-white text-center mb-3"
              >
                Under Construction
              </motion.h3>

              {/* Message */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-white/80 text-center mb-6 leading-relaxed"
              >
                The <span className="text-orange-400 font-semibold">{buttonName}</span> feature is currently being crafted with care. 
                <br />
                <span className="text-yellow-300">Coming soon!</span>
              </motion.p>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-sm text-white/70 mb-2">
                  <span>Progress</span>
                  <span>5%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "5%" }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full"
                  />
                </div>
              </div>

              {/* Animated Features List */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mb-6"
              >
                <p className="text-sm text-white/60 text-center mb-3">What's coming:</p>
                <div className="space-y-2">
                  {['Enhanced User Experience', 'Premium Features', 'Mobile Optimization'].map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="flex items-center text-sm text-white/70"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.5
                        }}
                        className="w-2 h-2 bg-green-400 rounded-full mr-3"
                      />
                      {feature}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Close Button */}
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(255, 255, 255, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300"
              >
                Got it!
              </motion.button>

              {/* Auto-close indicator */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-xs text-white/50 text-center mt-3"
              >
                This will close automatically in a few seconds
              </motion.p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default UnderConstruction