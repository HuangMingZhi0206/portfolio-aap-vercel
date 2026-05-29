import { motion } from 'framer-motion'
import { 
  FaChartLine, 
  FaBullhorn, 
  FaUsers, 
  FaHandshake, 
  FaLightbulb, 
  FaTableTennis,
  FaMoneyBillWave,
  FaProjectDiagram,
  FaComments
} from 'react-icons/fa'
import { CalculatorIllustration, PieChartIllustration, TargetIllustration } from './BusinessIllustrations'

const Skills = () => {
  const topSkills = [
    {
      name: "Financial Accounting",
      icon: <FaMoneyBillWave size={32} />,
      level: 85,
      color: "from-peach-300 to-peach-400",
      bgColor: "bg-peach-100",
      description: "Financial analysis, budgeting, and accounting principles"
    },
    {
      name: "Marketing",
      icon: <FaBullhorn size={32} />,
      level: 90,
      color: "from-pink-300 to-pink-400",
      bgColor: "bg-pink-100",
      description: "Strategic marketing, digital marketing, and brand management"
    },
    {
      name: "Badminton",
      icon: <FaTableTennis size={32} />,
      level: 80,
      color: "from-mint-300 to-mint-400",
      bgColor: "bg-mint-100",
      description: "Active player and sports enthusiast"
    },
  ]

  const otherSkills = [
    { name: "Leadership", icon: <FaUsers size={24} />, color: "bg-lavender-200" },
    { name: "Teamwork", icon: <FaHandshake size={24} />, color: "bg-peach-200" },
    { name: "Problem Solving", icon: <FaLightbulb size={24} />, color: "bg-mint-200" },
    { name: "Communication", icon: <FaComments size={24} />, color: "bg-pink-200" },
    { name: "Project Management", icon: <FaProjectDiagram size={24} />, color: "bg-lavender-200" },
    { name: "Business Analysis", icon: <FaChartLine size={24} />, color: "bg-peach-200" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <section id="skills" className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-b from-pink-50/50 to-white/50">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-lavender-200/40 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-mint-200/40 rounded-full blur-3xl" />

      {/* Business Illustrations */}
      <div className="absolute top-20 left-8 opacity-40 hidden lg:block">
        <CalculatorIllustration size={75} />
      </div>
      <div className="absolute bottom-20 right-8 opacity-40 hidden lg:block">
        <PieChartIllustration size={80} />
      </div>
      <div className="absolute top-1/2 right-1/4 opacity-30 hidden xl:block">
        <TargetIllustration size={65} />
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
          <p className="text-pink-500 font-medium tracking-wider uppercase mb-2">What I Can Do</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
        </motion.div>

        {/* Top Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {topSkills.map((skill, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass rounded-3xl p-6 border border-white/50 hover:shadow-2xl transition-all"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-white mb-4 shadow-lg`}>
                {skill.icon}
              </div>

              {/* Skill Name */}
              <h3 className="font-display font-bold text-xl text-gray-800 mb-2">
                {skill.name}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4">
                {skill.description}
              </p>

              {/* Progress Bar */}
              <div className="relative pt-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-pink-500">
                    Proficiency
                  </span>
                  <span className="text-xs font-semibold text-gray-600">
                    {skill.level}%
                  </span>
                </div>
                <div className="overflow-hidden h-2 rounded-full bg-gray-200">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-pink rounded-3xl p-8"
        >
          <h3 className="font-display text-xl font-bold text-gray-800 mb-6 text-center">
            Other Skills
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {otherSkills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, rotate: 3 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-5 py-3 rounded-full ${skill.color} cursor-pointer transition-all duration-300 hover:shadow-lg`}
              >
                <span className="text-gray-700">{skill.icon}</span>
                <span className="font-medium text-gray-800">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
