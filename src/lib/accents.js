/**
 * Static Tailwind class bundles per accent colour.
 * Keeping the full class names here (instead of building them dynamically)
 * lets Tailwind's content scanner pick them up.
 */
export const accents = {
  pink: {
    gradient: 'from-pink-400 to-pink-600',
    soft: 'bg-pink-100',
    text: 'text-pink-700',
    badge: 'bg-pink-100 text-pink-700 ring-pink-200',
    ring: 'ring-pink-300',
    glow: 'bg-pink-200/60',
    dot: 'bg-pink-500',
  },
  lavender: {
    gradient: 'from-lavender-400 to-lavender-600',
    soft: 'bg-lavender-100',
    text: 'text-lavender-600',
    badge: 'bg-lavender-100 text-lavender-600 ring-lavender-200',
    ring: 'ring-lavender-300',
    glow: 'bg-lavender-200/60',
    dot: 'bg-lavender-500',
  },
  peach: {
    gradient: 'from-peach-400 to-peach-600',
    soft: 'bg-peach-100',
    text: 'text-peach-600',
    badge: 'bg-peach-100 text-peach-600 ring-peach-200',
    ring: 'ring-peach-300',
    glow: 'bg-peach-200/60',
    dot: 'bg-peach-500',
  },
  mint: {
    gradient: 'from-mint-400 to-mint-600',
    soft: 'bg-mint-100',
    text: 'text-mint-600',
    badge: 'bg-mint-100 text-mint-600 ring-mint-200',
    ring: 'ring-mint-300',
    glow: 'bg-mint-200/60',
    dot: 'bg-mint-500',
  },
}

export const accentNames = Object.keys(accents)
