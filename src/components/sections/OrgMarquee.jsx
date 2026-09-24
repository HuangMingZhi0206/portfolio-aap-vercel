import { organizations } from '../../data/experiences'

/** Infinite horizontal strip of organisations, paused on hover and disabled for reduced motion. */
export default function OrgMarquee() {
  const items = [...organizations, ...organizations]

  return (
    <section aria-label="Organizations" className="relative border-y border-pink-100 bg-white/60 py-5 backdrop-blur">
      <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">
        Organizations I&apos;ve been part of
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <ul className="pause-on-hover flex w-max animate-marquee items-center gap-10 px-5 motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center">
          {items.map((name, index) => (
            <li
              key={`${name}-${index}`}
              aria-hidden={index >= organizations.length ? 'true' : undefined}
              className="flex shrink-0 items-center gap-3 font-display text-base font-bold text-ink-600 sm:text-lg"
            >
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-gradient-to-br from-pink-400 to-lavender-500" />
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
