import { motion } from 'framer-motion'
import { FaGraduationCap, FaProjectDiagram, FaStar, FaTrophy } from 'react-icons/fa'
import { TargetIllustration, CoinsIllustration, DashboardIllustration } from './BusinessIllustrations'

const stats = [
  {
    id: 1,
    icon: FaGraduationCap,
    value: '2024',
    label: 'Batch President University',
    description: 'Business Administration & Management',
    color: 'peach',
    gradient: 'from-peach-300 to-peach-400',
    bgGradient: 'from-peach-100 to-peach-200',
  },
  {
    id: 2,
    icon: FaProjectDiagram,
    value: '8+',
    label: 'Organizations & Projects',
    description: 'Active involvement in various roles',
    color: 'lavender',
    gradient: 'from-lavender-300 to-lavender-400',
    bgGradient: 'from-lavender-100 to-lavender-200',
  },
  {
    id: 3,
    icon: FaStar,
    value: '3',
    label: 'Top Skills',
    description: 'Financial Accounting, Marketing, Badminton',
    color: 'mint',
    gradient: 'from-mint-300 to-mint-400',
    bgGradient: 'from-mint-100 to-mint-200',
  },
  {
    id: 4,
    icon: FaTrophy,
    value: '4+',
    label: 'Leadership Roles',
    description: 'Person In Charge & Facilitator positions',
    color: 'pink',
    gradient: 'from-pink-300 to-pink-400',
    bgGradient: 'from-pink-100 to-pink-200',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

export default function Stats() {
  return (
    <section id="stats" className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-b from-white/50 to-pink-50/50">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-peach-200/40 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-lavender-200/40 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-mint-200/30 rounded-full blur-3xl" />

      {/* Business Illustrations */}
      <div className="absolute top-16 left-8 opacity-40 hidden lg:block">
        <TargetIllustration size={85} />
      </div>
      <div className="absolute bottom-24 right-8 opacity-40 hidden lg:block">
        <DashboardIllustration size={100} />
      </div>
      <div className="absolute top-1/3 right-16 opacity-30 hidden xl:block">
        <CoinsIllustration size={70} />
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
          <p className="text-pink-500 font-medium tracking-wider uppercase mb-2">My Achievements</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            Stats & <span className="text-gradient">Highlights</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A quick overview of my academic journey and organizational involvement
          </p>
        </motion.div>

        {/* Bento Grid Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgGradient} rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity`} />
              
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/50 h-full">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                  <stat.icon className="text-white" size={24} />
                </div>

                {/* Value */}
                <h3 className="font-display text-4xl font-bold text-gray-800 mb-2">
                  {stat.value}
                </h3>

                {/* Label */}
                <p className="font-semibold text-gray-700 mb-2">{stat.label}</p>

                {/* Description */}
                <p className="text-sm text-gray-500">{stat.description}</p>

                {/* Decorative corner */}
                <div className={`absolute top-4 right-4 w-3 h-3 rounded-full bg-gradient-to-br ${stat.gradient} opacity-60`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12"
        >
          <div className="glass-pink rounded-3xl p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-display text-2xl font-bold text-gray-800 mb-2">
                  Ready to Collaborate?
                </h3>
                <p className="text-gray-600">
                  I'm always open to new opportunities and challenges
                </p>
              </div>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-pink-400 to-pink-500 text-white font-semibold rounded-full shadow-lg shadow-pink-300/40 whitespace-nowrap"
              >
                Get in Touch
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
