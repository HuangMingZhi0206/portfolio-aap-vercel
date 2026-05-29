import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCalendarAlt, FaMapMarkerAlt, FaChevronRight } from 'react-icons/fa'
import { BriefcaseIllustration, DocumentIllustration, ChartIllustration } from './BusinessIllustrations'

const Experience = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [hoveredId, setHoveredId] = useState(null)

  const experiences = [
    {
      id: 1,
      organization: "Blu BCA Digital",
      role: "Blu Ambassador President University",
      period: "Juli 2025",
      duration: "1 bulan",
      location: "Booth Blu BCAdigital Grand Indonesia",
      description: "Booth Blu BCAdigital sebagai ambassador untuk mempromosikan layanan digital banking.",
      category: "ambassador",
      color: "pink",
    },
    {
      id: 2,
      organization: "PUMA BA",
      role: "Fasilitator of B-Adventure",
      period: "Juli 2025 - Present",
      duration: "7 bulan",
      location: "President University",
      description: "Memfasilitasi kegiatan B-Adventure untuk mahasiswa Business Administration.",
      category: "facilitator",
      color: "lavender",
    },
    {
      id: 3,
      organization: "PUMA BA",
      role: "Person In Charge of Fundraising Business Administration Festival 2025",
      period: "Mei 2025 - Present",
      duration: "9 bulan",
      location: "President University",
      description: "Bertanggung jawab atas strategi dan pelaksanaan fundraising untuk BA Festival 2025.",
      category: "pic",
      color: "peach",
    },
    {
      id: 4,
      organization: "PUMA BA",
      role: "Member of Sponsorship Business Administration Company Visit 2025",
      period: "April 2025 - Juni 2025",
      duration: "3 bulan",
      location: "PT. Angkasa Pura Indonesia",
      description: "Anggota tim sponsorship untuk kegiatan company visit ke PT. Angkasa Pura Indonesia.",
      category: "member",
      color: "mint",
    },
    {
      id: 5,
      organization: "PUMA BA",
      role: "Member of Fundraising Career Preparation Seminar & Workshop",
      period: "Maret 2025 - April 2025",
      duration: "2 bulan",
      location: "President University",
      description: "Berpartisipasi dalam tim fundraising untuk seminar dan workshop persiapan karir.",
      category: "member",
      color: "pink",
    },
    {
      id: 6,
      organization: "PUMA BA",
      role: "Person In Charge of Business Administration Charity 2025",
      period: "Februari 2025 - Maret 2025",
      duration: "2 bulan",
      location: "President University",
      description: "Memimpin pelaksanaan kegiatan charity untuk Business Administration.",
      category: "pic",
      color: "lavender",
    },
    {
      id: 7,
      organization: "PUFA Business",
      role: "Person In Charge of Badminton Division Business Cup 2025",
      period: "Januari 2025 - April 2025",
      duration: "4 bulan",
      location: "President University",
      description: "Mengelola divisi badminton dalam kompetisi Business Cup 2025.",
      category: "pic",
      color: "peach",
    },
    {
      id: 8,
      organization: "President University Robotics and Technology Club",
      role: "Member Academic of FutureTech Workshop PURTC 2025",
      period: "Maret 2025 - Juli 2025",
      duration: "5 bulan",
      location: "President University",
      description: "Anggota akademik dalam workshop teknologi masa depan.",
      category: "member",
      color: "mint",
    },
    {
      id: 9,
      organization: "President University Badminton Club",
      role: "Member of President University Badminton Club",
      period: "September 2024 - Present",
      duration: "1 tahun 5 bulan",
      location: "President University",
      description: "Anggota aktif klub badminton universitas.",
      category: "member",
      color: "pink",
    },
  ]

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'pic', label: 'Leadership' },
    { id: 'facilitator', label: 'Facilitator' },
    { id: 'ambassador', label: 'Ambassador' },
    { id: 'member', label: 'Member' },
  ]

  const colorClasses = {
    pink: {
      bg: 'bg-pink-100',
      border: 'border-pink-200',
      text: 'text-pink-600',
      gradient: 'from-pink-400 to-pink-500',
    },
    lavender: {
      bg: 'bg-lavender-100',
      border: 'border-lavender-200',
      text: 'text-lavender-500',
      gradient: 'from-lavender-400 to-lavender-500',
    },
    peach: {
      bg: 'bg-peach-100',
      border: 'border-peach-200',
      text: 'text-peach-500',
      gradient: 'from-peach-400 to-peach-500',
    },
    mint: {
      bg: 'bg-mint-100',
      border: 'border-mint-200',
      text: 'text-mint-500',
      gradient: 'from-mint-400 to-mint-500',
    },
  }

  const filteredExperiences = activeCategory === 'all' 
    ? experiences 
    : experiences.filter(exp => exp.category === activeCategory)

  return (
    <section id="experience" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-lavender-200/30 rounded-full blur-3xl" />

      {/* Business Illustrations */}
      <div className="absolute top-16 right-8 opacity-40 hidden lg:block">
        <BriefcaseIllustration size={85} />
      </div>
      <div className="absolute bottom-20 left-8 opacity-40 hidden lg:block">
        <DocumentIllustration size={80} />
      </div>
      <div className="absolute top-1/2 left-16 opacity-30 hidden xl:block">
        <ChartIllustration size={70} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-pink-500 font-medium tracking-wider uppercase mb-2">My Journey</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            Experience & <span className="text-gradient">Activities</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Interactive case studies showcasing my organizational involvement and leadership roles
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 rounded-full font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-pink-400 to-pink-500 text-white shadow-lg shadow-pink-300/40'
                  : 'bg-white text-gray-600 hover:bg-pink-50 shadow-md'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Experience Cards Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredExperiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredId(exp.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative"
              >
                {/* Glassmorphism card */}
                <div className={`relative glass rounded-3xl p-6 border ${colorClasses[exp.color].border} hover:shadow-2xl transition-all duration-500 h-full ${
                  hoveredId === exp.id ? 'transform -translate-y-2' : ''
                }`}>
                  {/* Top accent line */}
                  <div className={`absolute top-0 left-6 right-6 h-1 bg-gradient-to-r ${colorClasses[exp.color].gradient} rounded-full`} />

                  {/* Category badge */}
                  <div className={`inline-flex items-center gap-1 px-3 py-1 ${colorClasses[exp.color].bg} ${colorClasses[exp.color].text} rounded-full text-xs font-medium mb-4`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    {exp.category.toUpperCase()}
                  </div>

                  {/* Organization */}
                  <h3 className="font-display font-bold text-lg text-gray-800 mb-2 line-clamp-2">
                    {exp.organization}
                  </h3>

                  {/* Role */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {exp.role}
                  </p>

                  {/* Meta info */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <FaCalendarAlt size={12} className="text-pink-400" />
                      <span>{exp.period}</span>
                      <span className="text-pink-300">•</span>
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <FaMapMarkerAlt size={12} className="text-pink-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Description - shows on hover */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: hoveredId === exp.id ? 'auto' : 0,
                      opacity: hoveredId === exp.id ? 1 : 0
                    }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm text-gray-600 pb-4">
                      {exp.description}
                    </p>
                  </motion.div>

                  {/* Read more indicator */}
                  <div className="flex items-center gap-1 text-sm font-medium text-pink-500 group-hover:gap-2 transition-all">
                    <span>Details</span>
                    <FaChevronRight size={10} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
