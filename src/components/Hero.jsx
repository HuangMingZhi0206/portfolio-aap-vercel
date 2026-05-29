import { Suspense } from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaEnvelope, FaDownload, FaChartLine, FaSearch, FaProjectDiagram } from 'react-icons/fa'
import Scene3D from './Scene3D'
import { ChartIllustration, DocumentIllustration, CalculatorIllustration, BriefcaseIllustration, PieChartIllustration, TargetIllustration } from './BusinessIllustrations'

export default function Hero() {
  const skills = [
    { icon: FaChartLine, label: 'Financial Analysis', color: 'from-pink-400 to-pink-500' },
    { icon: FaSearch, label: 'Market Research', color: 'from-lavender-400 to-lavender-500' },
    { icon: FaProjectDiagram, label: 'Project Management', color: 'from-peach-400 to-peach-500' },
  ]

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pb-32"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-cream-50 to-lavender-100" />
      
      {/* Decorative blob shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-200/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-lavender-200/50 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-peach-200/40 rounded-full blur-3xl" />

      {/* Business Illustrations - Floating decorations */}
      <div className="absolute top-24 left-8 lg:left-16 opacity-60 hidden md:block">
        <ChartIllustration size={90} />
      </div>
      <div className="absolute bottom-40 left-4 lg:left-24 opacity-50 hidden lg:block">
        <CalculatorIllustration size={70} />
      </div>
      <div className="absolute top-32 right-8 opacity-50 hidden xl:block">
        <DocumentIllustration size={75} />
      </div>
      <div className="absolute bottom-48 right-16 opacity-40 hidden lg:block">
        <PieChartIllustration size={65} />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-4 items-center">
          
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="order-2 lg:order-1 text-center lg:text-left z-20"
          >
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-gray-600 text-lg md:text-xl mb-4"
            >
              Hi, I'm{' '}
              <span className="text-gradient font-bold text-2xl md:text-3xl">[Angel Augustine Prasetya]</span>
            </motion.p>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight mb-6"
            >
              Business Administration
              <br />
              <span className="text-gradient">Student</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-gray-500 text-base md:text-lg max-w-lg mb-8 mx-auto lg:mx-0"
            >
              I have experience in marketing and enjoy exploring new things. 
              I'm passionate about learning, open to challenges, and currently 
              interested in the financial field.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
            >
              <motion.a
                href="#experience"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(244, 138, 163, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-pink-400 to-pink-500 text-white font-semibold rounded-full shadow-lg shadow-pink-300/40"
              >
                See Portfolio
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-full shadow-lg border border-pink-200 flex items-center gap-2 hover:border-pink-400 transition-colors"
              >
                <FaDownload className="text-pink-500" size={14} />
                Download CV
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-4 pb-4"
            >
              <span className="text-sm text-gray-400">Follow me:</span>
              <a
                href="mailto:angelprasetya6@gmail.com"
                className="p-2.5 bg-white rounded-full shadow-md hover:shadow-lg hover:bg-pink-50 transition-all group"
              >
                <FaEnvelope className="text-gray-500 group-hover:text-pink-500 transition-colors" size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/angelaugustine-prasetya-a282a5318"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white rounded-full shadow-md hover:shadow-lg hover:bg-pink-50 transition-all group"
              >
                <FaLinkedin className="text-gray-500 group-hover:text-pink-500 transition-colors" size={16} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image with 3D Blobs */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="order-1 lg:order-2 relative flex items-center justify-center"
          >
            {/* Main blob background */}
            <div className="relative w-full max-w-lg aspect-square">
              {/* Large background blob */}
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 bg-gradient-to-br from-pink-300 via-lavender-300 to-pink-400 rounded-[60%_40%_30%_70%/60%_30%_70%_40%]"
                style={{
                  filter: 'blur(0px)',
                }}
              />
              
              {/* Secondary blob overlay */}
              <motion.div
                animate={{ 
                  scale: [1, 1.03, 1],
                  rotate: [0, -3, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute inset-4 bg-gradient-to-tr from-lavender-200 via-pink-200 to-peach-200 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] opacity-80"
              />

              {/* Profile Image Container */}
              <motion.div
                className="absolute inset-0 flex items-start justify-center -top-16"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="/Adobe Express - file.png" 
                  alt="Angel Augustine Prasetya"
                  className="relative z-10 w-[94%] h-auto object-cover object-top"
                  style={{
                    filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.2))',
                    maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                  }}
                />
              </motion.div>

              {/* Floating 3D Spheres */}
              <motion.div
                animate={{ 
                  y: [-15, 15, -15],
                  x: [-5, 5, -5],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 right-10 w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full shadow-2xl shadow-pink-400/50"
                style={{
                  background: 'radial-gradient(circle at 30% 30%, #f8b4c2, #f48aa3, #ec6085)',
                }}
              />
              
              <motion.div
                animate={{ 
                  y: [10, -10, 10],
                  x: [5, -5, 5],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/4 -left-6 w-12 h-12 bg-gradient-to-br from-lavender-400 to-lavender-500 rounded-full shadow-xl shadow-lavender-400/50"
                style={{
                  background: 'radial-gradient(circle at 30% 30%, #ddd0ff, #c4b0f4, #a890e0)',
                }}
              />

              <motion.div
                animate={{ 
                  y: [-10, 10, -10],
                  rotate: [0, 180, 360],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-1/4 -right-4 w-20 h-20 bg-gradient-to-br from-peach-300 to-peach-400 rounded-full shadow-xl shadow-peach-400/50"
                style={{
                  background: 'radial-gradient(circle at 30% 30%, #ffd4bf, #ffb899, #ff9a70)',
                }}
              />

              <motion.div
                animate={{ 
                  y: [8, -8, 8],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-10 left-10 w-8 h-8 bg-gradient-to-br from-mint-400 to-mint-500 rounded-full shadow-lg shadow-mint-400/50"
                style={{
                  background: 'radial-gradient(circle at 30% 30%, #b5f2e0, #85e5c9, #56d4ae)',
                }}
              />

              <motion.div
                animate={{ 
                  x: [-8, 8, -8],
                }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/3 right-0 w-6 h-6 bg-gradient-to-br from-pink-300 to-pink-400 rounded-full shadow-lg"
              />

              {/* Small decorative dots */}
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-20 left-20 w-3 h-3 bg-lavender-400 rounded-full"
              />
              <motion.div
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute bottom-32 right-20 w-2 h-2 bg-pink-400 rounded-full"
              />

              {/* Curved decorative line */}
              <svg className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-8 text-pink-400" viewBox="0 0 100 20">
                <motion.path
                  d="M0 10 Q25 0 50 10 T100 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1 }}
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-pink-100 py-6 z-30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-4 md:gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                className="flex flex-col items-center text-center group"
              >
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${skill.color} bg-opacity-10 flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform`}
                  style={{
                    background: `linear-gradient(135deg, rgba(248, 180, 194, 0.2), rgba(244, 138, 163, 0.1))`,
                  }}
                >
                  <skill.icon className="text-pink-500" size={24} />
                </div>
                <p className="text-sm md:text-base font-medium text-gray-700">{skill.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* 3D Scene Background - subtle */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <Suspense fallback={null}>
          <Scene3D />
        </Suspense>
      </div>
    </section>
  )
}
