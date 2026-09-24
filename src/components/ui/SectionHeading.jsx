import { motion } from 'framer-motion'
import { cn } from '../../lib/cn'
import { fadeUp, stagger, viewportOnce } from '../../lib/motion'

/**
 * Eyebrow + title + optional description, animated in on scroll.
 * `title` can contain <span className="text-gradient"> for the highlighted word.
 */
export default function SectionHeading({ eyebrow, title, description, align = 'center', className }) {
  const centred = align === 'center'
  return (
    <motion.div
      variants={stagger(0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn('mb-12 lg:mb-16', centred && 'mx-auto max-w-2xl text-center', className)}
    >
      {eyebrow && (
        <motion.p
          variants={fadeUp}
          className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-pink-600"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        variants={fadeUp}
        className="font-display text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl lg:text-5xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p variants={fadeUp} className="mt-4 text-base leading-relaxed text-ink-500 sm:text-lg">
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}
