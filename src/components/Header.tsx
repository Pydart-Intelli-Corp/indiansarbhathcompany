'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import UnderConstruction from './UnderConstruction'

const Header = () => {
  const [showModal, setShowModal] = useState(false)
  const [activeButton, setActiveButton] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName)
    setShowModal(true)
    setIsMobileMenuOpen(false) // Close mobile menu when button is clicked
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed top-0 w-full z-50 p-3 sm:p-4 md:p-6"
    >
      <nav className="md:glass md:rounded-2xl px-4 sm:px-6 md:px-8 py-3 sm:py-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo - Hidden on Mobile */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="hidden md:flex items-center space-x-3"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <div>
              <h1 className="text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl">indiansarbhathcompany.com</h1>
              <p className="text-white/70 text-xs hidden sm:block">Premium Refreshing Drinks</p>
            </div>
          </motion.div>

          {/* Mobile - Empty div to push hamburger to right */}
          <div className="md:hidden"></div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.button
              whileHover={{ scale: 1.1, color: "#ffd700" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleButtonClick("Home")}
              className="text-white/90 hover:text-white transition-colors font-medium cursor-pointer"
            >
              Home
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, color: "#ffd700" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleButtonClick("About")}
              className="text-white/90 hover:text-white transition-colors font-medium cursor-pointer"
            >
              About
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, color: "#ffd700" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleButtonClick("Products")}
              className="text-white/90 hover:text-white transition-colors font-medium cursor-pointer"
            >
              Products
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, color: "#ffd700" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleButtonClick("Contact")}
              className="text-white/90 hover:text-white transition-colors font-medium cursor-pointer"
            >
              Contact
            </motion.button>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 15px 40px rgba(255,255,255,0.3)",
                backgroundImage: "linear-gradient(45deg, #ff6b35, #f7931e)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleButtonClick("Order Now")}
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg cursor-pointer"
            >
              Order Now
            </motion.button>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMobileMenu}
              className="text-white p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="w-6 h-0.5 bg-white block transition-all origin-center"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="w-6 h-0.5 bg-white block mt-1 transition-all"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className="w-6 h-0.5 bg-white block mt-1 transition-all origin-center"
                />
              </div>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer - Slides in from right */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Mobile Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ 
                type: 'spring', 
                stiffness: 300, 
                damping: 30 
              }}
              className="fixed top-0 right-0 h-full w-80 max-w-[80vw] z-50 md:hidden"
            >
              <div className="h-full bg-gradient-to-b from-gray-900/95 to-black/95 backdrop-blur-xl border-l border-white/10 shadow-2xl">
                {/* Drawer Header */}
                <div className="p-6 border-b border-white/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">S</span>
                      </div>
                      <div>
                        <h2 className="text-white font-bold text-base">Menu</h2>
                        <p className="text-white/60 text-xs">indiansarbhathcompany.com</p>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-white/70 hover:text-white p-2"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </motion.button>
                  </div>
                </div>

                {/* Navigation Items */}
                <div className="p-6">
                  <nav className="space-y-4">
                    {['Home', 'About', 'Products', 'Contact'].map((item, index) => (
                      <motion.button
                        key={item}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                        whileHover={{ 
                          x: 10, 
                          color: "#ffd700",
                          transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleButtonClick(item)}
                        className="block w-full text-left text-white/90 hover:text-white text-base font-medium py-3 px-4 rounded-lg hover:bg-white/10 transition-all"
                      >
                        {item}
                      </motion.button>
                    ))}
                  </nav>

                  {/* Mobile CTA Button */}
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: "0 15px 40px rgba(255,123,53,0.4)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleButtonClick("Order Now")}
                    className="w-full mt-8 bg-gradient-to-r from-orange-500 to-red-600 text-white py-4 rounded-xl font-semibold shadow-lg"
                  >
                    Order Now
                  </motion.button>

                  {/* Decorative Elements */}
                  <div className="mt-8 pt-8 border-t border-white/10">
                    <p className="text-white/50 text-sm text-center">
                      Premium Refreshing Drinks
                    </p>
                    <div className="flex justify-center mt-4 space-x-2">
                      <div className="w-2 h-2 bg-orange-400/60 rounded-full animate-pulse" />
                      <div className="w-2 h-2 bg-red-400/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                      <div className="w-2 h-2 bg-yellow-400/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Under Construction Modal */}
      <UnderConstruction
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        buttonName={activeButton}
      />
    </motion.header>
  )
}

export default Header