import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaCheck, FaCopy, FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'
import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import IconTile from '../ui/IconTile'
import { profile } from '../../data/profile'
import { cn } from '../../lib/cn'
import { fadeUp, stagger, viewportOnce } from '../../lib/motion'

const channels = [
  {
    icon: FaEnvelope,
    accent: 'pink',
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: FaLinkedin,
    accent: 'lavender',
    label: 'LinkedIn',
    value: 'angelaugustine-prasetya',
    href: profile.linkedin,
  },
  {
    icon: FaMapMarkerAlt,
    accent: 'peach',
    label: 'Location',
    value: profile.location,
  },
]

const fieldClass =
  'w-full rounded-xl border border-pink-100 bg-white/80 px-4 py-3 text-ink-900 placeholder:text-ink-300 transition-colors focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-200'

function Field({ id, label, as = 'input', ...rest }) {
  const Tag = as
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink-800">
        {label}
      </label>
      <Tag id={id} name={id} className={cn(fieldClass, as === 'textarea' && 'resize-none')} {...rest} />
    </div>
  )
}

function CopyEmailButton() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard unavailable (e.g. insecure context); the mailto link still works.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? 'Email copied' : 'Copy email address'}
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-ink-500 shadow-soft transition-colors hover:text-pink-600"
    >
      {copied ? <FaCheck aria-hidden="true" className="text-mint-600" /> : <FaCopy aria-hidden="true" />}
    </button>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle')

  const update = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
    if (status !== 'idle') setStatus('idle')
  }

  /**
   * There is no backend, so the form composes a mailto: link.
   * The visitor's email client opens with the message pre-filled.
   */
  const handleSubmit = (event) => {
    event.preventDefault()
    const subject = encodeURIComponent(form.subject || `Hello from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setStatus('sent')
  }

  return (
    <Section
      id="contact"
      blobs={[
        { pos: 'tl', accent: 'pink' },
        { pos: 'br', accent: 'lavender' },
      ]}
    >
      <SectionHeading
        eyebrow="Get in touch"
        title={
          <>
            Let&apos;s <span className="text-gradient">Connect</span>
          </>
        }
        description="Whether it is an internship, a collaboration or just a question, my inbox is open."
      />

      <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
        {/* Channels */}
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="space-y-4 lg:col-span-2"
        >
          {channels.map(({ icon, accent, label, value, href }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              className="glass flex items-center gap-4 rounded-3xl p-5 shadow-card"
            >
              <IconTile icon={icon} accent={accent} />
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium uppercase tracking-wide text-ink-400">{label}</p>
                {href ? (
                  <a
                    href={href}
                    {...(href.startsWith('http')
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    className="block truncate font-semibold text-ink-900 transition-colors hover:text-pink-600"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="font-semibold text-ink-900">{value}</p>
                )}
              </div>
              {label === 'Email' && <CopyEmailButton />}
            </motion.div>
          ))}

          <motion.div
            variants={fadeUp}
            className="glass-pink rounded-3xl p-6 shadow-soft"
          >
            <p className="font-display text-lg font-bold text-ink-900">Prefer a direct message?</p>
            <p className="mt-1 text-sm text-ink-600">
              I usually reply within a day or two on LinkedIn.
            </p>
            <Button
              href={profile.linkedin}
              variant="secondary"
              size="sm"
              icon={FaLinkedin}
              className="mt-4"
            >
              Message on LinkedIn
            </Button>
          </motion.div>
        </motion.div>

        {/* Form */}
        <motion.form
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          onSubmit={handleSubmit}
          className="glass space-y-5 rounded-3xl p-6 shadow-card sm:p-8 lg:col-span-3"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              id="name"
              label="Your name"
              type="text"
              autoComplete="name"
              placeholder="Jane Doe"
              required
              value={form.name}
              onChange={update}
            />
            <Field
              id="email"
              label="Your email"
              type="email"
              autoComplete="email"
              placeholder="jane@example.com"
              required
              value={form.email}
              onChange={update}
            />
          </div>
          <Field
            id="subject"
            label="Subject"
            type="text"
            placeholder="Internship opportunity, collaboration, ..."
            value={form.subject}
            onChange={update}
          />
          <Field
            id="message"
            label="Message"
            as="textarea"
            rows={5}
            placeholder="Tell me a little about what you have in mind."
            required
            value={form.message}
            onChange={update}
          />

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-ink-400" aria-live="polite">
              {status === 'sent'
                ? 'Your email app should now be open with the message ready to send.'
                : 'Submitting opens your email app with the message pre-filled.'}
            </p>
            <Button type="submit" icon={FaPaperPlane} className="sm:w-auto">
              Send message
            </Button>
          </div>
        </motion.form>
      </div>
    </Section>
  )
}
