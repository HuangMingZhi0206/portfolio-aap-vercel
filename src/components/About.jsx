import { motion } from 'framer-motion'
import { FaQuoteLeft } from 'react-icons/fa'
import { HandshakeIllustration, GrowthIllustration, IdeaIllustration } from './BusinessIllustrations'

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-lavender-200/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      {/* Business Illustrations */}
      <div className="absolute top-20 right-8 opacity-40 hidden lg:block">
        <IdeaIllustration size={80} />
      </div>
      <div className="absolute bottom-20 left-8 opacity-40 hidden lg:block">
        <GrowthIllustration size={90} />
      </div>
      <div className="absolute top-1/2 right-1/4 opacity-30 hidden xl:block">
        <HandshakeIllustration size={70} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-pink-500 font-medium tracking-wider uppercase mb-2">Get to know me</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            About <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Image with decorative elements */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md">
              {/* Background shape */}
              <div className="absolute -inset-4 bg-gradient-to-br from-pink-200 to-peach-200 rounded-3xl transform rotate-3" />
              
              {/* Image container with 3D effect */}
              <motion.div 
                className="relative bg-white rounded-3xl p-4 shadow-xl"
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div 
                  className="aspect-[4/5] rounded-2xl overflow-hidden"
                  style={{
                    boxShadow: 'inset 0 -20px 40px rgba(0,0,0,0.1)'
                  }}
                >
                  <img 
                    src="/IMG-20251006-WA0114.jpg" 
                    alt="Angel Augustine Prasetya"
                    className="w-full h-full object-cover object-top"
                    style={{
                      filter: 'brightness(1.02) contrast(1.02)'
                    }}
                  />
                  {/* Shine overlay */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-2xl"
                    style={{ mixBlendMode: 'overlay' }}
                  />
                </div>
              </motion.div>

              {/* Floating card */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl"
              >
                <p className="text-3xl font-bold text-gradient">2024</p>
                <p className="text-sm text-gray-500">Batch</p>
              </motion.div>

              {/* Decorative dots */}
              <div className="absolute -top-8 -left-8 grid grid-cols-3 gap-2">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-pink-300 rounded-full" />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Quote */}
            <div className="glass-pink rounded-2xl p-6">
              <FaQuoteLeft className="text-pink-400 mb-3" size={24} />
              <p className="text-gray-700 italic leading-relaxed">
                I have experience in marketing and enjoy exploring new things.
                I'm passionate about learning, open to challenges, and currently
                interested in the financial field. I'm eager to grow both personally and
                professionally through hands-on experiences.
              </p>
            </div>

            {/* Info cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4 shadow-lg border border-pink-100">
                <p className="text-sm text-gray-500 mb-1">University</p>
                <p className="font-semibold text-gray-800">President University</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg border border-pink-100">
                <p className="text-sm text-gray-500 mb-1">Major</p>
                <p className="font-semibold text-gray-800">Business Administration</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg border border-pink-100">
                <p className="text-sm text-gray-500 mb-1">Location</p>
                <p className="font-semibold text-gray-800">Kota Bekasi, Jawa Barat</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg border border-pink-100">
                <p className="text-sm text-gray-500 mb-1">Status</p>
                <p className="font-semibold text-gray-800">Undergraduate Student</p>
              </div>
            </div>

            {/* Highlights */}
            <div className="flex flex-wrap gap-3">
              {['Blu BCA Ambassador', 'PUMA BA Member', 'Badminton Club'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-gradient-to-r from-pink-100 to-peach-100 text-pink-700 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-400 to-pink-500 text-white font-semibold rounded-full shadow-lg shadow-pink-300/40"
            >
              Let's Connect
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
