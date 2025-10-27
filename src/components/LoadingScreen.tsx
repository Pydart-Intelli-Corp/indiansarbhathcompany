'use client'

import { motion } from 'framer-motion'

const LoadingScreen = () => {
  const dotVariants = {
    initial: { y: 0 },
    animate: { y: -20 },
  }

  const dotTransition = {
    duration: 0.6,
    repeat: Infinity,
    repeatType: "reverse" as const,
    ease: "easeInOut"
  }

  return (
    <div className="fixed inset-0 bg-white z-[100] flex items-center justify-center">
      {/* Loading Dots */}
      <div className="flex space-x-2">
        <motion.div
          variants={dotVariants}
          initial="initial"
          animate="animate"
          transition={{ ...dotTransition, delay: 0 }}
          className="w-4 h-4 bg-orange-500 rounded-full"
        />
        <motion.div
          variants={dotVariants}
          initial="initial"
          animate="animate"
          transition={{ ...dotTransition, delay: 0.2 }}
          className="w-4 h-4 bg-red-500 rounded-full"
        />
        <motion.div
          variants={dotVariants}
          initial="initial"
          animate="animate"
          transition={{ ...dotTransition, delay: 0.4 }}
          className="w-4 h-4 bg-orange-600 rounded-full"
        />
      </div>
    </div>
  )
}

export default LoadingScreen