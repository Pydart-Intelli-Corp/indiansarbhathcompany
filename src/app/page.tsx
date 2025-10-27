'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from '@/components/Header'
import VideoBackground from '@/components/VideoBackground'
import HeroSection from '@/components/HeroSection'
import CursorEffect from '@/components/CursorEffect'
import LoadingScreen from '@/components/LoadingScreen'

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  useEffect(() => {
    // Simulate loading time (you can adjust this or tie it to actual content loading)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // 2 seconds loading time

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loading"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LoadingScreen />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main App Content */}
      <AnimatePresence>
        {!isLoading && (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative min-h-screen overflow-hidden"
          >
            <VideoBackground />
            <CursorEffect mousePosition={mousePosition} />
            
            <div className="relative z-10">
              <Header />
              <HeroSection />
            </div>
          </motion.main>
        )}
      </AnimatePresence>
    </>
  )
}