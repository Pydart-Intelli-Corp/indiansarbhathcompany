'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const ProductsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const products = [
    {
      id: 1,
      name: "Classic Sarbhath",
      description: "The original traditional flavor that defined Indian summers. A rich, cooling blend of herbs, sugar syrup, and natural ingredients — crafted for an instant chill.",
      features: ["Traditional Recipe", "Rich Herbal Blend", "Cooling Effect", "Natural Sweetness"],
      color: "from-amber-400 to-yellow-500",
      icon: "🏺"
    },
    {
      id: 2,
      name: "Zero Sugar Sarbhath",
      subtitle: "(Diabetic Friendly)",
      description: "All the taste, none of the guilt. Our zero-sugar version uses natural sweeteners for a healthy refreshment that everyone can enjoy.",
      features: ["Natural Sweeteners", "Diabetic Friendly", "Zero Calories", "Full Flavor"],
      color: "from-green-400 to-emerald-500",
      icon: "🌿"
    },
    {
      id: 3,
      name: "Special Blends",
      subtitle: "(Seasonal Launches)",
      description: "Exciting new twists on the traditional recipe — infused with flavors like rose, nannari, lemon, and basil seeds.",
      features: ["Rose Infused", "Nannari Blend", "Lemon Twist", "Basil Seeds"],
      color: "from-rose-400 to-pink-500",
      icon: "🌺"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  return (
    <section id="products" ref={ref} className="section-modern bg-gradient-to-br from-neutral-50 to-accent-50/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/3 -right-20 w-80 h-80 bg-accent-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 container-modern">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <div className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-accent-100 via-neutral-100 to-accent-100 border-2 border-accent-300/40 mb-6 shadow-lg">
              <span className="text-accent-700 font-bold text-sm tracking-widest uppercase">Our Products</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8">
              <span className="bg-gradient-to-r from-neutral-900 via-accent-600 to-neutral-900 bg-clip-text text-transparent drop-shadow-sm">
                Authentic Flavors
              </span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              From traditional recipes to modern innovations, each product captures 
              the essence of India's beloved summer refreshment.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
              }}
              className="card-modern group relative overflow-hidden flex flex-col"
            >
              {/* Card Background Gradient */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Product Icon */}
                <motion.div
                  className="text-6xl mb-6 inline-block"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, 0]
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {product.icon}
                </motion.div>

                {/* Product Title */}
                <h3 className="heading-modern-sm text-neutral-800 mb-2 group-hover:text-accent-600 transition-colors">
                  {product.name}
                </h3>
                
                {/* Subtitle with fixed height to maintain alignment */}
                <div className="h-6 mb-4">
                  {product.subtitle && (
                    <p className="text-sm text-accent-600 font-medium italic">
                      {product.subtitle}
                    </p>
                  )}
                </div>

                {/* Description */}
                <p className="text-neutral-600 leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6 flex-grow">
                  {product.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.1 + featureIndex * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-accent-500 rounded-full flex-shrink-0" />
                      <span className="text-sm text-neutral-700 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Learn More Button - stays at bottom */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 mt-auto"
                >
                  Learn More
                </motion.button>
              </div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br from-amber-200/30 to-yellow-300/30 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.5 }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-gradient-to-br from-orange-200/30 to-amber-300/30 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.5, delay: 0.1 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ProductsSection