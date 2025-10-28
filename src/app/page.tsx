'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ProductsSection from '@/components/ProductsSection'
import MissionSection from '@/components/MissionSection'
import WhyChooseSection from '@/components/WhyChooseSection'
import PartnerSection from '@/components/PartnerSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
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
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

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
            className="relative min-h-screen"
          >
            <CursorEffect mousePosition={mousePosition} />
            
            <div className="relative z-10">
              <Header />
              <HeroSection />
              <AboutSection />
              <ProductsSection />
              <MissionSection />
              <WhyChooseSection />
              <PartnerSection />
              <ContactSection />
              <Footer />
            </div>
          </motion.main>
        )}
      </AnimatePresence>
    </>
  )
}