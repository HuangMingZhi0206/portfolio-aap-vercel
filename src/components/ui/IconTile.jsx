import { cn } from '../../lib/cn'
import { accents } from '../../lib/accents'

const sizes = {
  sm: 'h-10 w-10 rounded-xl text-base',
  md: 'h-12 w-12 rounded-2xl text-lg',
  lg: 'h-14 w-14 rounded-2xl text-xl',
}

/** Gradient square with a centred icon, used on cards across the site. */
export default function IconTile({ icon: Icon, accent = 'pink', size = 'md', className }) {
  return (
    <div
      className={cn(
        'flex shrink-0 items-center justify-center bg-gradient-to-br text-white shadow-soft',
        accents[accent].gradient,
        sizes[size],
        className
      )}
    >
      <Icon aria-hidden="true" />
    </div>
  )
}
