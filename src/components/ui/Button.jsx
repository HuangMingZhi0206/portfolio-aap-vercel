import { motion } from 'framer-motion'
import { cn } from '../../lib/cn'

const variants = {
  primary:
    'bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-glow hover:from-pink-600 hover:to-pink-700',
  secondary:
    'border border-pink-200 bg-white/80 text-ink-800 shadow-soft backdrop-blur hover:border-pink-400 hover:text-pink-700',
  ghost: 'text-ink-700 hover:bg-pink-100 hover:text-pink-700',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm sm:text-base',
  lg: 'px-8 py-4 text-base',
}

/**
 * Renders an anchor when `href` is provided, otherwise a button.
 * External links automatically get target="_blank" + rel.
 */
export default function Button({
  href,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  className,
  children,
  ...rest
}) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200',
    variants[variant],
    sizes[size],
    className
  )

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon aria-hidden="true" className="text-[0.9em]" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon aria-hidden="true" className="text-[0.9em]" />}
    </>
  )

  const interaction = { whileHover: { scale: 1.03 }, whileTap: { scale: 0.97 } }

  if (href) {
    const external = /^https?:\/\//.test(href)
    return (
      <motion.a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...interaction}
        {...rest}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button type="button" className={classes} {...interaction} {...rest}>
      {content}
    </motion.button>
  )
}
