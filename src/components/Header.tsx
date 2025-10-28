'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Mission', href: '#mission' },
    { name: 'Partner', href: '#partner' },
    { name: 'Contact', href: '#contact' }
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl border-b border-neutral-200/80 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-modern">
        <div className="flex items-center justify-between py-4 lg:py-6">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-4 cursor-pointer"
          >
            <motion.div
              className="w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center overflow-hidden"
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/logo.png"
                alt="Indian Sarbhath Company Logo"
                width={48}
                height={48}
                className="object-contain drop-shadow-lg"
                priority
              />
            </motion.div>
            <div className="hidden sm:block">
              <h1 className={`text-xl lg:text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-neutral-900' : 'text-white'
              }`}>
                Indian Sarbhath Co.
              </h1>
              <p className={`text-sm lg:text-base transition-colors duration-300 ${
                isScrolled ? 'text-neutral-600' : 'text-white/80'
              }`}>
                Refreshing Tradition
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative px-4 py-2 font-medium transition-all duration-300 rounded-lg hover:scale-105 ${
                  isScrolled 
                    ? 'text-neutral-700 hover:text-accent-600 hover:bg-accent-50' 
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.name}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-accent-500"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 font-semibold rounded-full transition-all duration-300 shadow-medium ${
                isScrolled
                  ? 'bg-gradient-to-r from-accent-400 to-accent-600 text-white hover:shadow-large'
                  : 'bg-white text-accent-600 hover:bg-white/90 hover:shadow-lg'
              }`}
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-3 rounded-xl transition-all duration-300 ${
              isScrolled 
                ? 'text-neutral-600 hover:bg-neutral-100' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? 'auto' : 0
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="lg:hidden overflow-hidden"
        >
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-large border border-neutral-200/50 mb-4 p-6">
            <nav className="space-y-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: isMobileMenuOpen ? 1 : 0,
                    x: isMobileMenuOpen ? 0 : -20
                  }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="block w-full text-left px-4 py-3 text-neutral-700 hover:text-accent-600 hover:bg-accent-50 rounded-xl transition-all duration-200 font-medium"
                >
                  {item.name}
                </motion.button>
              ))}
              <div className="pt-4 border-t border-neutral-200">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-accent-400 to-accent-600 text-white font-semibold rounded-xl shadow-medium hover:shadow-large transition-all duration-200"
                >
                  Get Started
                </motion.button>
              </div>
            </nav>
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
}

export default Header
 