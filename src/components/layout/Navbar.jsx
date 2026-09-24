import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import Container from '../ui/Container'
import Button from '../ui/Button'
import { navItems, sectionIds } from '../../data/navigation'
import { profile } from '../../data/profile'
import { useScrolled } from '../../hooks/useScrolled'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll'
import { cn } from '../../lib/cn'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled(24)
  const active = useActiveSection(sectionIds)
  const { scrollYProgress } = useScroll()

  useLockBodyScroll(open)

  // Close the drawer with Escape or when the viewport grows past the mobile breakpoint.
  useEffect(() => {
    if (!open) return undefined
    const onKey = (event) => event.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth >= 768 && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  const solid = scrolled || open

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300',
        solid ? 'bg-white/80 shadow-soft backdrop-blur-lg' : 'bg-transparent'
      )}
    >
      {/* Reading progress */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX: scrollYProgress }}
        className="absolute inset-x-0 top-0 h-0.5 origin-left bg-gradient-to-r from-pink-400 via-pink-500 to-lavender-500"
      />

      <Container>
        <nav aria-label="Primary" className="flex h-16 items-center justify-between lg:h-20">
          <a
            href="#home"
            className="font-display text-xl font-extrabold tracking-tight text-gradient lg:text-2xl"
          >
            {profile.brand}
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const isActive = active === item.id
              return (
                <li key={item.id} className="relative">
                  <a
                    href={item.href}
                    aria-current={isActive ? 'true' : undefined}
                    className={cn(
                      'relative z-10 block rounded-full px-4 py-2 text-sm font-medium transition-colors',
                      isActive ? 'text-pink-700' : 'text-ink-600 hover:text-pink-600'
                    )}
                  >
                    {item.label}
                  </a>
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      className="absolute inset-0 rounded-full bg-pink-100"
                    />
                  )}
                </li>
              )
            })}
          </ul>

          <div className="hidden md:block">
            <Button href="#contact" size="sm">
              Let&apos;s talk
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink-700 transition-colors hover:bg-pink-100 hover:text-pink-700 md:hidden"
          >
            {open ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden border-t border-pink-100 md:hidden"
          >
            <Container className="py-4">
              <ul className="space-y-1">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * index }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={active === item.id ? 'true' : undefined}
                      className={cn(
                        'block rounded-2xl px-4 py-3 font-medium transition-colors',
                        active === item.id
                          ? 'bg-pink-100 text-pink-700'
                          : 'text-ink-700 hover:bg-pink-50 hover:text-pink-700'
                      )}
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <Button href="#contact" className="mt-4 w-full" onClick={() => setOpen(false)}>
                Let&apos;s talk
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
