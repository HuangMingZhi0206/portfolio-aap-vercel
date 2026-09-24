import { cn } from '../../lib/cn'
import Backdrop from './Backdrop'
import Container from './Container'

/**
 * Standard page section: consistent vertical rhythm, scroll offset for the
 * fixed navbar, optional decorative backdrop blobs and a centred container.
 */
export default function Section({ id, className, containerClassName, blobs, children }) {
  return (
    <section
      id={id}
      className={cn('relative scroll-mt-20 overflow-hidden py-20 lg:py-28', className)}
    >
      {blobs && <Backdrop blobs={blobs} />}
      <Container className={cn('relative z-10', containerClassName)}>{children}</Container>
    </section>
  )
}
