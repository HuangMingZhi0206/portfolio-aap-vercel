import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaBuilding, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'
import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import Badge from '../ui/Badge'
import { experiences, experienceTypes } from '../../data/experiences'
import { formatDuration, formatPeriod } from '../../lib/dates'
import { accents } from '../../lib/accents'
import { cn } from '../../lib/cn'
import { fadeUp, viewportOnce } from '../../lib/motion'

const filters = [
  { id: 'all', label: 'All', count: experiences.length },
  ...Object.entries(experienceTypes).map(([id, { label }]) => ({
    id,
    label,
    count: experiences.filter((item) => item.type === id).length,
  })),
]

function ExperienceCard({ item }) {
  const type = experienceTypes[item.type]
  const accent = accents[type.accent]
  const ongoing = item.end === null

  return (
    <article className="glass relative rounded-3xl p-5 shadow-card transition-transform duration-300 hover:-translate-y-1 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <Badge accent={type.accent} dot>
            {type.label}
          </Badge>
          {ongoing && <Badge accent="mint">Ongoing</Badge>}
        </div>
        <p className="flex items-center gap-2 text-sm text-ink-500">
          <FaCalendarAlt aria-hidden="true" className={cn('text-xs', accent.text)} />
          <span>{formatPeriod(item.start, item.end)}</span>
          <span aria-hidden="true" className="text-ink-300">
            ·
          </span>
          <span>{formatDuration(item.start, item.end)}</span>
        </p>
      </div>

      <h3 className="mt-3 font-display text-base font-bold leading-snug text-ink-900 sm:text-lg">
        {item.role}
      </h3>
      <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
        <p className="flex items-center gap-1.5 font-medium text-ink-700">
          <FaBuilding aria-hidden="true" className={cn('text-xs', accent.text)} />
          {item.organization}
        </p>
        <p className="flex items-center gap-1.5 text-ink-500">
          <FaMapMarkerAlt aria-hidden="true" className={cn('text-xs', accent.text)} />
          {item.location}
        </p>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-ink-600">{item.description}</p>
    </article>
  )
}

export default function Experience() {
  const [activeFilter, setActiveFilter] = useState('all')

  const visible =
    activeFilter === 'all' ? experiences : experiences.filter((item) => item.type === activeFilter)

  return (
    <Section
      id="experience"
      blobs={[
        { pos: 'left', accent: 'peach' },
        { pos: 'br', accent: 'pink' },
      ]}
    >
      <SectionHeading
        eyebrow="My journey"
        title={
          <>
            Experience &amp; <span className="text-gradient">Activities</span>
          </>
        }
        description="Organizational roles, leadership positions and brand partnerships since starting university."
      />

      {/* Filters */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        role="tablist"
        aria-label="Filter experiences by type"
        className="mb-12 flex flex-wrap justify-center gap-2"
      >
        {filters.map((filter) => {
          const selected = activeFilter === filter.id
          return (
            <button
              key={filter.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActiveFilter(filter.id)}
              className={cn(
                'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all',
                selected
                  ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-glow'
                  : 'bg-white text-ink-600 shadow-soft hover:bg-pink-50 hover:text-pink-700'
              )}
            >
              {filter.label}
              <span
                className={cn(
                  'rounded-full px-1.5 py-0.5 text-[11px] leading-none',
                  selected ? 'bg-white/25 text-white' : 'bg-pink-100 text-pink-700'
                )}
              >
                {filter.count}
              </span>
            </button>
          )
        })}
      </motion.div>

      {/* Timeline */}
      <div className="relative mx-auto max-w-3xl">
        <div
          aria-hidden="true"
          className="absolute bottom-4 left-[11px] top-4 w-px bg-gradient-to-b from-pink-300 via-lavender-300 to-transparent sm:left-[15px]"
        />
        <motion.ol layout className="space-y-5">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((item) => {
              const accent = accents[experienceTypes[item.type].accent]
              return (
                <motion.li
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 16, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="relative pl-10 sm:pl-14"
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      'absolute left-0 top-6 flex h-6 w-6 items-center justify-center rounded-full bg-white ring-4 sm:h-8 sm:w-8',
                      accent.ring
                    )}
                  >
                    <span className={cn('h-2 w-2 rounded-full sm:h-2.5 sm:w-2.5', accent.dot)} />
                  </span>
                  <ExperienceCard item={item} />
                </motion.li>
              )
            })}
          </AnimatePresence>
        </motion.ol>
      </div>
    </Section>
  )
}
