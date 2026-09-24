import { FaEnvelope, FaLinkedin } from 'react-icons/fa'
import { profile } from '../../data/profile'
import { cn } from '../../lib/cn'

const links = [
  { label: 'Email', href: `mailto:${profile.email}`, icon: FaEnvelope },
  { label: 'LinkedIn', href: profile.linkedin, icon: FaLinkedin, external: true },
]

export default function SocialLinks({ className, itemClassName }) {
  return (
    <ul className={cn('flex items-center gap-3', className)}>
      {links.map(({ label, href, icon: Icon, external }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={label}
            title={label}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className={cn(
              'flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink-600 shadow-soft transition-all hover:-translate-y-0.5 hover:bg-pink-500 hover:text-white',
              itemClassName
            )}
          >
            <Icon aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  )
}
