const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

/** Parses a "YYYY-MM" string into numeric year and month. */
function parseYearMonth(value) {
  const [year, month] = value.split('-').map(Number)
  return { year, month }
}

/** Current month as "YYYY-MM". */
export function currentYearMonth() {
  const now = new Date()
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`
}

/** "2025-07" -> "Jul 2025" */
export function formatMonth(value) {
  const { year, month } = parseYearMonth(value)
  return `${MONTHS[month - 1]} ${year}`
}

/** "2025-07", null -> "Jul 2025 – Present" */
export function formatPeriod(start, end) {
  return `${formatMonth(start)} – ${end ? formatMonth(end) : 'Present'}`
}

/** Inclusive number of months between two "YYYY-MM" values. */
export function monthsBetween(start, end = currentYearMonth()) {
  const a = parseYearMonth(start)
  const b = parseYearMonth(end)
  return Math.max(1, (b.year - a.year) * 12 + (b.month - a.month) + 1)
}

/** "2024-09", null -> "2 yrs 1 mo" (computed against today when end is null). */
export function formatDuration(start, end) {
  const total = monthsBetween(start, end ?? currentYearMonth())
  const years = Math.floor(total / 12)
  const months = total % 12
  const parts = []
  if (years) parts.push(`${years} ${years === 1 ? 'yr' : 'yrs'}`)
  if (months) parts.push(`${months} ${months === 1 ? 'mo' : 'mos'}`)
  return parts.join(' ')
}
