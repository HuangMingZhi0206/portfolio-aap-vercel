import { motion } from 'framer-motion'
import {
  FaArrowRight,
  FaBookOpen,
  FaCalendarAlt,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaUniversity,
} from 'react-icons/fa'
import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import Badge from '../ui/Badge'
import IconTile from '../ui/IconTile'
import { profile } from '../../data/profile'
import { formatMonth } from '../../lib/dates'
import { fadeUp, stagger, viewportOnce } from '../../lib/motion'
import gardenPhoto from '../../assets/images/about-garden.webp'
import studioPhoto from '../../assets/images/about-studio.webp'

const facts = [
  { icon: FaUniversity, label: 'University', value: profile.university },
  { icon: FaBookOpen, label: 'Major', value: profile.major },
  { icon: FaMapMarkerAlt, label: 'Based in', value: profile.location },
  { icon: FaCalendarAlt, label: 'Started', value: formatMonth(profile.educationStart) },
]

const tags = ['blu by BCA Ambassador', 'PUMA BA', 'PUFA Business', 'PU Badminton Club']

export default function About() {
  return (
    <Section
      id="about"
      blobs={[
        { pos: 'tr', accent: 'pink' },
        { pos: 'bl', accent: 'lavender' },
      ]}
    >
      <SectionHeading
        eyebrow="Get to know me"
        title={
          <>
            About <span className="text-gradient">Me</span>
          </>
        }
      />

      <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        {/* Photo composition */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-sm px-6 sm:max-w-md"
        >
          <div
            aria-hidden="true"
            className="absolute inset-x-3 inset-y-0 rotate-3 rounded-[2rem] bg-gradient-to-br from-pink-200 via-peach-200 to-lavender-200"
          />
          <div className="relative rounded-[1.75rem] bg-white p-3 shadow-card">
            <img
              src={gardenPhoto}
              alt={`${profile.name} sitting on the grass in front of hydrangeas`}
              width={960}
              height={1200}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full rounded-[1.25rem] object-cover"
            />
          </div>

          <motion.figure
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-8 -right-1 w-32 rotate-6 rounded-2xl bg-white p-2 pb-3 shadow-card sm:-right-6 sm:w-40"
          >
            <img
              src={studioPhoto}
              alt={`${profile.name} in a studio portrait`}
              width={640}
              height={800}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full rounded-xl object-cover"
            />
            <figcaption className="mt-2 text-center text-xs font-medium text-ink-500">
              Class of {profile.batch}
            </figcaption>
          </motion.figure>

          <div className="glass absolute -left-2 top-10 rounded-2xl px-4 py-3 shadow-card sm:-left-8">
            <p className="font-display text-2xl font-extrabold text-gradient">{profile.batch}</p>
            <p className="text-xs text-ink-500">Batch · {profile.university}</p>
          </div>

          <div
            aria-hidden="true"
            className="absolute -top-6 right-4 grid grid-cols-4 gap-2 opacity-70"
          >
            {Array.from({ length: 8 }).map((_, index) => (
              <span key={index} className="h-1.5 w-1.5 rounded-full bg-pink-400" />
            ))}
          </div>
        </motion.div>

        {/* Copy */}
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="space-y-8"
        >
          <motion.div variants={fadeUp} className="space-y-4">
            <h3 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">
              A business student who learns by doing.
            </h3>
            {profile.about.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="leading-relaxed text-ink-600">
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.dl variants={fadeUp} className="grid gap-3 sm:grid-cols-2">
            {facts.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-start gap-3 rounded-2xl border border-pink-100 bg-white/80 p-4 shadow-soft"
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-pink-100 text-pink-600">
                  <Icon aria-hidden="true" />
                </span>
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wide text-ink-400">
                    {label}
                  </dt>
                  <dd className="mt-0.5 font-semibold text-ink-900">{value}</dd>
                </div>
              </div>
            ))}
          </motion.dl>

          <motion.div
            variants={fadeUp}
            className="glass-pink flex items-center gap-4 rounded-2xl p-5 shadow-soft"
          >
            <IconTile icon={FaGraduationCap} accent="pink" />
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-pink-700">Education</p>
              <p className="font-semibold text-ink-900">
                {profile.degree}, {profile.major}
              </p>
              <p className="text-sm text-ink-500">
                {profile.university} · {formatMonth(profile.educationStart)} – Present
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge key={tag} accent={['pink', 'lavender', 'peach', 'mint'][index % 4]} dot>
                {tag}
              </Badge>
            ))}
          </motion.div>

          <motion.div variants={fadeUp}>
            <Button href="#contact" icon={FaArrowRight} iconPosition="right">
              Let&apos;s connect
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  )
}
