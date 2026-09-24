import { motion } from 'framer-motion'
import {
  FaArrowRight,
  FaChevronDown,
  FaDownload,
  FaLayerGroup,
  FaUniversity,
  FaWallet,
} from 'react-icons/fa'
import Container from '../ui/Container'
import Backdrop from '../ui/Backdrop'
import Button from '../ui/Button'
import IconTile from '../ui/IconTile'
import SocialLinks from '../ui/SocialLinks'
import { profile } from '../../data/profile'
import { experienceSummary } from '../../data/experiences'
import { fadeUp, stagger } from '../../lib/motion'
import { cn } from '../../lib/cn'
import portrait from '../../assets/images/hero-portrait.webp'

function FloatingCard({ className, icon, accent, title, subtitle }) {
  return (
    <div
      className={cn(
        'glass absolute z-20 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-card',
        className
      )}
    >
      <IconTile icon={icon} accent={accent} size="sm" />
      <div className="leading-tight">
        <p className="text-sm font-semibold text-ink-900">{title}</p>
        <p className="text-xs text-ink-500">{subtitle}</p>
      </div>
    </div>
  )
}

export default function Hero() {
  const { roles, organizations } = experienceSummary

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-28 lg:pt-32"
    >
      <Backdrop
        blobs={[
          { pos: 'tl', accent: 'pink', size: 'lg' },
          { pos: 'br', accent: 'lavender', size: 'lg' },
          { pos: 'right', accent: 'peach' },
        ]}
      />

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Copy */}
          <motion.div
            variants={stagger(0.12, 0.2)}
            initial="hidden"
            animate="visible"
            className="order-2 text-center lg:order-1 lg:col-span-6 lg:text-left"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2.5 rounded-full border border-pink-200 bg-white/70 px-4 py-1.5 text-sm font-medium text-pink-700 shadow-soft backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-pink-500" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-pink-500" />
              </span>
              {profile.availability}
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl"
            >
              Hi, I&apos;m <span className="text-gradient">{profile.name}</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-lg font-medium text-ink-600 sm:text-xl"
            >
              {profile.role} at {profile.university}
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-500 sm:text-lg lg:mx-0"
            >
              {profile.summary}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start"
            >
              <Button href="#experience" icon={FaArrowRight} iconPosition="right">
                View Experience
              </Button>
              <Button href="#contact" variant="secondary">
                Get in Touch
              </Button>
              {profile.cvUrl && (
                <Button href={profile.cvUrl} variant="ghost" icon={FaDownload} download>
                  Download CV
                </Button>
              )}
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex items-center justify-center gap-3 lg:justify-start"
            >
              <span className="text-sm text-ink-400">Find me on</span>
              <SocialLinks />
            </motion.div>
          </motion.div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="order-1 lg:order-2 lg:col-span-6"
          >
            <div className="relative mx-auto aspect-[4/5] w-full max-w-xs sm:max-w-md lg:max-w-lg">
              {/* Organic blobs */}
              <div
                aria-hidden="true"
                className="absolute inset-x-3 bottom-3 top-16 animate-blob bg-gradient-to-br from-pink-300 via-lavender-300 to-peach-300 opacity-90"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-12 bottom-10 top-28 animate-blob bg-gradient-to-tr from-peach-200 via-pink-200 to-lavender-200 opacity-80 [animation-delay:-5s]"
              />
              <div
                aria-hidden="true"
                className="absolute -right-3 top-8 h-24 w-24 animate-spin-slow rounded-full border-2 border-dashed border-pink-300/80 sm:h-28 sm:w-28"
              />
              <div
                aria-hidden="true"
                className="absolute bottom-24 left-2 h-3 w-3 rounded-full bg-lavender-400"
              />
              <div
                aria-hidden="true"
                className="absolute right-10 top-1/2 h-2 w-2 rounded-full bg-mint-500"
              />

              <img
                src={portrait}
                alt={`${profile.name}, seated portrait`}
                width={900}
                height={1600}
                decoding="async"
                className="mask-fade-bottom absolute inset-0 z-10 h-full w-full object-contain object-bottom drop-shadow-[0_30px_40px_rgba(122,45,82,0.28)]"
              />

              <FloatingCard
                className="left-0 top-[54%] -translate-x-1 animate-float sm:top-[26%] sm:-translate-x-8"
                icon={FaWallet}
                accent="peach"
                title="blu by BCA Digital"
                subtitle="Brand Ambassador 2025"
              />
              <FloatingCard
                className="bottom-6 right-0 translate-x-2 animate-float-slow sm:translate-x-6"
                icon={FaLayerGroup}
                accent="lavender"
                title={`${roles} roles · ${organizations} organizations`}
                subtitle="Since 2024"
              />
              <FloatingCard
                className="-bottom-2 left-4 hidden animate-float [animation-delay:-2s] sm:flex"
                icon={FaUniversity}
                accent="pink"
                title={profile.university}
                subtitle={`Class of ${profile.batch}`}
              />
            </div>
          </motion.div>
        </div>
      </Container>

      <motion.a
        href="#highlights"
        aria-label="Scroll to highlights"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-xs font-medium text-ink-400 transition-colors hover:text-pink-600 lg:flex"
      >
        Scroll
        <FaChevronDown aria-hidden="true" className="animate-bounce" />
      </motion.a>
    </section>
  )
}
