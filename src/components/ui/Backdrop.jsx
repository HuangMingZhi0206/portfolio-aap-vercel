import { cn } from '../../lib/cn'
import { accents } from '../../lib/accents'

const positions = {
  tl: 'left-0 top-0 -translate-x-1/3 -translate-y-1/3',
  tr: 'right-0 top-0 translate-x-1/3 -translate-y-1/3',
  bl: 'bottom-0 left-0 -translate-x-1/3 translate-y-1/3',
  br: 'bottom-0 right-0 translate-x-1/3 translate-y-1/3',
  center: 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
  left: 'left-0 top-1/2 -translate-x-1/2 -translate-y-1/2',
  right: 'right-0 top-1/2 translate-x-1/2 -translate-y-1/2',
}

const sizes = {
  sm: 'h-64 w-64',
  md: 'h-80 w-80 lg:h-96 lg:w-96',
  lg: 'h-96 w-96 lg:h-[32rem] lg:w-[32rem]',
}

/**
 * Soft blurred colour blobs used behind sections.
 * @param {{ pos: keyof positions, accent: keyof accents, size?: keyof sizes }[]} blobs
 */
export default function Backdrop({ blobs }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {blobs.map(({ pos, accent, size = 'md' }, index) => (
        <div
          key={`${pos}-${accent}-${index}`}
          className={cn(
            'absolute rounded-full blur-3xl',
            positions[pos],
            sizes[size],
            accents[accent].glow
          )}
        />
      ))}
    </div>
  )
}
