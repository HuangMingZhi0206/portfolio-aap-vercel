import { motion } from 'framer-motion'
import { FaHeart, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Stats', href: '#stats' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="relative py-12 mt-12">
      {/* Gradient Line */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-pink rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Logo & Tagline */}
            <div className="text-center md:text-left">
              <motion.h3 
                className="font-display text-2xl font-bold text-gradient"
                whileHover={{ scale: 1.05 }}
              >
                Ang3la
              </motion.h3>
              <p className="text-gray-600 mt-2">
                Strategy Meets Creativity.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="text-gray-600 hover:text-pink-500 transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex justify-center md:justify-end gap-4">
              <motion.a
                href="mailto:angelprasetya6@gmail.com"
                className="w-10 h-10 rounded-full bg-white/60 flex items-center justify-center text-gray-700 hover:bg-pink-400 hover:text-white transition-all shadow-md"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <FaEnvelope size={18} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/angelaugustine-prasetya-a282a5318"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/60 flex items-center justify-center text-gray-700 hover:bg-pink-400 hover:text-white transition-all shadow-md"
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <FaLinkedin size={18} />
              </motion.a>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-pink-200/50 mt-8 pt-8 text-center">
            <p className="text-gray-600 flex items-center justify-center gap-1">
              © {currentYear} Made with <FaHeart className="text-pink-500" /> by Angel Augustine Prasetya
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
