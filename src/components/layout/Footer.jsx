import { FaHeart } from 'react-icons/fa'
import Container from '../ui/Container'
import SocialLinks from '../ui/SocialLinks'
import { navItems } from '../../data/navigation'
import { profile } from '../../data/profile'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative pb-8 pt-4">
      <Container>
        <div className="glass-pink rounded-[2rem] px-6 py-10 shadow-soft sm:px-10">
          <div className="grid gap-8 md:grid-cols-3 md:items-center">
            <div className="text-center md:text-left">
              <a href="#home" className="font-display text-2xl font-extrabold text-gradient">
                {profile.brand}
              </a>
              <p className="mt-2 text-sm text-ink-600">{profile.tagline}</p>
            </div>

            <nav aria-label="Footer">
              <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      className="text-ink-600 transition-colors hover:text-pink-600"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <SocialLinks className="justify-center md:justify-end" />
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-pink-200/60 pt-6 text-sm text-ink-500 sm:flex-row">
            <p className="flex items-center gap-1.5">
              © {year} {profile.name}. Made with
              <FaHeart aria-label="love" className="text-pink-500" />
            </p>
            <p>Built with React, Tailwind CSS &amp; Framer Motion</p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
