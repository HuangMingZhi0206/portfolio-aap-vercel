import { motion } from 'framer-motion'
import { FaUniversity, FaBookOpen, FaCalendarAlt } from 'react-icons/fa'

const Education = () => {
  return (
    <section id="education" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-pastel-blush font-medium">Academic Background</span>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-800 mt-2">
            Education
          </h2>
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="glass-strong rounded-3xl p-8 md:p-12 relative overflow-hidden"
          >
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-pastel-rose/30 to-pastel-lavender/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-pastel-peach/30 to-pastel-mint/30 rounded-full blur-2xl" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              {/* University Logo Placeholder */}
              <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-pastel-rose to-pastel-blush flex items-center justify-center shadow-xl flex-shrink-0">
                <FaUniversity className="text-white text-5xl" />
              </div>

              {/* Content */}
              <div className="text-center md:text-left flex-grow">
                <h3 className="font-playfair text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                  President University
                </h3>
                
                <div className="flex items-center justify-center md:justify-start gap-2 text-pastel-blush font-semibold mb-4">
                  <FaBookOpen />
                  <span>Business Administration and Management, General</span>
                </div>

                <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600">
                  <FaCalendarAlt className="text-pastel-rose" />
                  <span>Started: Agustus 2024</span>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-6">
                  <span className="px-4 py-2 rounded-full bg-pastel-peach/50 text-gray-700 text-sm font-medium">
                    Batch 2024
                  </span>
                  <span className="px-4 py-2 rounded-full bg-pastel-lavender/50 text-gray-700 text-sm font-medium">
                    Undergraduate
                  </span>
                  <span className="px-4 py-2 rounded-full bg-pastel-mint/50 text-gray-700 text-sm font-medium">
                    Active Student
                  </span>
                </div>
              </div>
            </div>

            {/* Additional Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 relative z-10">
              <motion.div 
                whileHover={{ y: -5 }}
                className="glass rounded-xl p-4 text-center"
              >
                <div className="text-3xl mb-2">📚</div>
                <p className="font-semibold text-gray-800">Focus Area</p>
                <p className="text-gray-600 text-sm">Business Administration</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="glass rounded-xl p-4 text-center"
              >
                <div className="text-3xl mb-2">💼</div>
                <p className="font-semibold text-gray-800">Interest</p>
                <p className="text-gray-600 text-sm">Marketing & Finance</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="glass rounded-xl p-4 text-center"
              >
                <div className="text-3xl mb-2">🎯</div>
                <p className="font-semibold text-gray-800">Goal</p>
                <p className="text-gray-600 text-sm">Professional Growth</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
