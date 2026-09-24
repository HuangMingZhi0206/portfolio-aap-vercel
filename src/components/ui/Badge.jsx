import { cn } from '../../lib/cn'
import { accents } from '../../lib/accents'

export default function Badge({ accent = 'pink', dot = false, className, children }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset',
        accents[accent].badge,
        className
      )}
    >
      {dot && <span className={cn('h-1.5 w-1.5 rounded-full', accents[accent].dot)} />}
      {children}
    </span>
  )
}
