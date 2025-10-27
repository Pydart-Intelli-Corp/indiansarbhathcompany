'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface CursorEffectProps {
  mousePosition: { x: number; y: number }
}

const CursorEffect = ({ mousePosition }: CursorEffectProps) => {
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([])

  useEffect(() => {
    const newTrail = {
      x: mousePosition.x,
      y: mousePosition.y,
      id: Date.now()
    }

    setTrail(prevTrail => {
      const updatedTrail = [newTrail, ...prevTrail.slice(0, 10)]
      return updatedTrail
    })
  }, [mousePosition])

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        className="fixed w-4 h-4 bg-white/60 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />

      {/* Cursor Trail */}
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          className="fixed pointer-events-none z-40"
          initial={{
            x: point.x - 2,
            y: point.y - 2,
            opacity: 0.8,
            scale: 1,
          }}
          animate={{
            opacity: 0,
            scale: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          style={{
            width: Math.max(2, 8 - index),
            height: Math.max(2, 8 - index),
            background: `linear-gradient(45deg, 
              rgba(255, 165, 0, ${0.7 - index * 0.07}), 
              rgba(255, 69, 0, ${0.7 - index * 0.07})
            )`,
            borderRadius: '50%',
          }}
        />
      ))}

      {/* Glow Effect */}
      <motion.div
        className="fixed w-20 h-20 pointer-events-none z-30"
        animate={{
          x: mousePosition.x - 40,
          y: mousePosition.y - 40,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
        }}
        style={{
          background: 'radial-gradient(circle, rgba(255, 165, 0, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />

      {/* Interactive Sparkles */}
      <motion.div
        className="fixed pointer-events-none z-35"
        animate={{
          x: mousePosition.x - 15,
          y: mousePosition.y - 15,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
      >
        <motion.div
          className="w-1 h-1 bg-white rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.5, 1],
          }}
          transition={{
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            scale: { duration: 1, repeat: Infinity, ease: "easeInOut" },
          }}
        />
      </motion.div>
    </>
  )
}

export default CursorEffect