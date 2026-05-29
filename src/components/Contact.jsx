import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'
import { HandshakeIllustration, IdeaIllustration } from './BusinessIllustrations'

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope size={24} />,
      label: "Email",
      value: "angelprasetya6@gmail.com",
      href: "mailto:angelprasetya6@gmail.com",
      color: "from-pink-300 to-pink-400",
    },
    {
      icon: <FaLinkedin size={24} />,
      label: "LinkedIn",
      value: "Angel Augustine Prasetya",
      href: "https://www.linkedin.com/in/angelaugustine-prasetya-a282a5318",
      color: "from-lavender-300 to-lavender-400",
    },
    {
      icon: <FaMapMarkerAlt size={24} />,
      label: "Location",
      value: "Kota Bekasi, Jawa Barat, Indonesia",
      href: null,
      color: "from-peach-300 to-peach-400",
    },
  ]

  return (
    <section id="contact" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-lavender-200/30 rounded-full blur-3xl" />

      {/* Business Illustrations */}
      <div className="absolute top-20 right-12 opacity-40 hidden lg:block">
        <HandshakeIllustration size={90} />
      </div>
      <div className="absolute bottom-24 left-8 opacity-40 hidden lg:block">
        <IdeaIllustration size={75} />
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
          <p className="text-pink-500 font-medium tracking-wider uppercase mb-2">Get In Touch</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            Contact <span className="text-gradient">Me</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Feel free to reach out if you want to collaborate, have a question, 
            or just want to connect!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, x: 10 }}
                className="glass rounded-3xl p-6 flex items-center gap-4 border border-white/50 hover:shadow-xl transition-all"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${info.color} flex items-center justify-center text-white shadow-lg flex-shrink-0`}>
                  {info.icon}
                </div>
                <div className="flex-grow">
                  <p className="text-gray-500 text-sm font-medium">{info.label}</p>
                  {info.href ? (
                    <a 
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-gray-800 font-semibold hover:text-pink-500 transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-800 font-semibold">{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* CTA */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-pink rounded-3xl p-8 text-center"
            >
              <div className="text-5xl mb-4">💌</div>
              <h3 className="font-display text-xl font-bold text-gray-800 mb-2">
                Let's Work Together!
              </h3>
              <p className="text-gray-600 mb-4">
                I'm always open to discussing new projects, creative ideas, or opportunities.
              </p>
              <motion.a
                href="mailto:angelprasetya6@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-full font-semibold shadow-lg shadow-pink-300/40"
              >
                <FaPaperPlane />
                Send Email
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <form className="glass rounded-3xl p-8 space-y-6 border border-white/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-white/60 border border-pink-100 focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-200 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl bg-white/60 border border-pink-100 focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-200 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-white/60 border border-pink-100 focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-200 transition-all"
                  placeholder="How can I help you?"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white/60 border border-pink-100 focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-200 transition-all resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-xl font-semibold shadow-lg shadow-pink-300/40 flex items-center justify-center gap-2"
              >
                <FaPaperPlane />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
