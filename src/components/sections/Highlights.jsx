import { useEffect, useRef, useState } from 'react'
import { animate, motion, useInView, useReducedMotion } from 'framer-motion'
import { FaGraduationCap, FaLayerGroup, FaSitemap, FaUserTie } from 'react-icons/fa'
import Section from '../ui/Section'
import IconTile from '../ui/IconTile'
import { profile } from '../../data/profile'
import { experienceSummary } from '../../data/experiences'
import { fadeUp, stagger, viewportOnce } from '../../lib/motion'

function CountUp({ value, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const reduceMotion = useReducedMotion()
  const [display, setDisplay] = useState(reduceMotion ? value : 0)

  useEffect(() => {
    if (!inView) return undefined
    if (reduceMotion) {
      setDisplay(value)
      return undefined
    }
    const controls = animate(0, value, {
      duration: 1.4,
      ease: 'easeOut',
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    })
    return () => controls.stop()
  }, [inView, value, reduceMotion])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}

export default function Highlights() {
  const { roles, organizations, leadRoles } = experienceSummary

  const stats = [
    {
      icon: FaGraduationCap,
      accent: 'peach',
      value: <>Class of {profile.batch}</>,
      label: profile.university,
      description: profile.major,
    },
    {
      icon: FaLayerGroup,
      accent: 'lavender',
      value: <CountUp value={roles} />,
      label: 'Roles held',
      description: 'Across campus organizations and brand partnerships',
    },
    {
      icon: FaUserTie,
      accent: 'pink',
      value: <CountUp value={leadRoles} />,
      label: 'Lead roles',
      description: 'Person in Charge and facilitator positions',
    },
    {
      icon: FaSitemap,
      accent: 'mint',
      value: <CountUp value={organizations} />,
      label: 'Organizations',
      description: 'From student associations to a digital bank',
    },
  ]

  return (
    <Section id="highlights" className="py-16 lg:py-20">
      <motion.ul
        variants={stagger(0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {stats.map((stat) => (
          <motion.li
            key={stat.label}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="glass relative overflow-hidden rounded-3xl p-6 shadow-card"
          >
            <IconTile icon={stat.icon} accent={stat.accent} />
            <p className="mt-5 font-display text-3xl font-extrabold tracking-tight text-ink-900">
              {stat.value}
            </p>
            <p className="mt-1 font-semibold text-ink-800">{stat.label}</p>
            <p className="mt-1 text-sm leading-relaxed text-ink-500">{stat.description}</p>
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  )
}
