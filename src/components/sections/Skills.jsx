import { motion } from 'framer-motion'
import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import IconTile from '../ui/IconTile'
import { coreSkills, interests, softSkills } from '../../data/skills'
import { accents } from '../../lib/accents'
import { cn } from '../../lib/cn'
import { fadeUp, stagger, viewportOnce } from '../../lib/motion'

function Pill({ icon: Icon, children, className }) {
  return (
    <motion.li
      variants={fadeUp}
      whileHover={{ y: -3 }}
      className={cn(
        'flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-ink-800 shadow-soft',
        className
      )}
    >
      <Icon aria-hidden="true" className="text-pink-500" />
      {children}
    </motion.li>
  )
}

export default function Skills() {
  return (
    <Section
      id="skills"
      blobs={[
        { pos: 'tr', accent: 'lavender' },
        { pos: 'bl', accent: 'mint' },
      ]}
    >
      <SectionHeading
        eyebrow="What I bring"
        title={
          <>
            Skills &amp; <span className="text-gradient">Strengths</span>
          </>
        }
        description="The areas I have practised most through coursework and organizational work."
      />

      {/* Core skills */}
      <motion.ul
        variants={stagger(0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid gap-6 md:grid-cols-3"
      >
        {coreSkills.map((skill) => (
          <motion.li
            key={skill.name}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="glass group relative overflow-hidden rounded-3xl p-7 shadow-card"
          >
            <div
              aria-hidden="true"
              className={cn(
                'absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-60 blur-2xl transition-opacity group-hover:opacity-90',
                accents[skill.accent].glow
              )}
            />
            <IconTile icon={skill.icon} accent={skill.accent} size="lg" className="relative" />
            <h3 className="relative mt-5 font-display text-xl font-bold text-ink-900">
              {skill.name}
            </h3>
            <p className="relative mt-2 text-sm leading-relaxed text-ink-600">{skill.description}</p>
            <ul className="relative mt-5 flex flex-wrap gap-2">
              {skill.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className={cn(
                    'rounded-full px-3 py-1 text-xs font-semibold',
                    accents[skill.accent].soft,
                    accents[skill.accent].text
                  )}
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </motion.li>
        ))}
      </motion.ul>

      {/* Soft skills & interests */}
      <div className="mt-8 grid gap-6 lg:grid-cols-[3fr_2fr]">
        <motion.div
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="glass-pink rounded-3xl p-7 shadow-soft"
        >
          <motion.h3 variants={fadeUp} className="font-display text-lg font-bold text-ink-900">
            How I work
          </motion.h3>
          <motion.p variants={fadeUp} className="mt-1 text-sm text-ink-500">
            Soft skills sharpened by leading teams and working with partners.
          </motion.p>
          <ul className="mt-5 flex flex-wrap gap-3">
            {softSkills.map(({ name, icon }) => (
              <Pill key={name} icon={icon}>
                {name}
              </Pill>
            ))}
          </ul>
        </motion.div>

        <motion.div
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="glass rounded-3xl p-7 shadow-soft"
        >
          <motion.h3 variants={fadeUp} className="font-display text-lg font-bold text-ink-900">
            Beyond the classroom
          </motion.h3>
          <motion.p variants={fadeUp} className="mt-1 text-sm text-ink-500">
            What keeps me curious and energised.
          </motion.p>
          <ul className="mt-5 flex flex-wrap gap-3">
            {interests.map(({ name, icon }) => (
              <Pill key={name} icon={icon}>
                {name}
              </Pill>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  )
}
