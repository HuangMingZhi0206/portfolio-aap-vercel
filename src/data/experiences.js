/**
 * Experience entries. Dates use "YYYY-MM"; `end: null` means ongoing.
 * Period labels and durations are derived at render time (see lib/dates.js),
 * so they never go stale.
 */
export const experienceTypes = {
  leadership: { label: 'Leadership', accent: 'pink' },
  facilitator: { label: 'Facilitator', accent: 'lavender' },
  ambassador: { label: 'Ambassador', accent: 'peach' },
  member: { label: 'Member', accent: 'mint' },
}

const entries = [
  {
    id: 'blu-ambassador',
    organization: 'blu by BCA Digital',
    role: 'Brand Ambassador, President University',
    type: 'ambassador',
    start: '2025-07',
    end: '2025-07',
    location: 'blu by BCA Digital booth, Grand Indonesia',
    description:
      'Represented blu by BCA Digital at its Grand Indonesia booth, introducing visitors to digital banking features and helping them get started with the app.',
  },
  {
    id: 'puma-ba-facilitator',
    organization: 'PUMA BA',
    role: 'Facilitator, B-Adventure',
    type: 'facilitator',
    start: '2025-07',
    end: null,
    location: 'President University',
    description:
      'Guiding a group of new Business Administration students through the B-Adventure orientation programme and helping them settle into campus life.',
  },
  {
    id: 'puma-ba-fest-fundraising',
    organization: 'PUMA BA',
    role: 'Person in Charge of Fundraising, Business Administration Festival 2025',
    type: 'leadership',
    start: '2025-05',
    end: null,
    location: 'President University',
    description:
      'Leading fundraising strategy and execution for BA Festival 2025, coordinating the team and building revenue streams that support the event.',
  },
  {
    id: 'puma-ba-company-visit',
    organization: 'PUMA BA',
    role: 'Sponsorship Team Member, Business Administration Company Visit 2025',
    type: 'member',
    start: '2025-04',
    end: '2025-06',
    location: 'PT Angkasa Pura Indonesia',
    description:
      'Part of the sponsorship team that approached and secured partners for the company visit to PT Angkasa Pura Indonesia.',
  },
  {
    id: 'puma-ba-career-seminar',
    organization: 'PUMA BA',
    role: 'Fundraising Team Member, Career Preparation Seminar & Workshop',
    type: 'member',
    start: '2025-03',
    end: '2025-04',
    location: 'President University',
    description:
      'Helped raise funds for a seminar and workshop series that prepared students for internships and their first career steps.',
  },
  {
    id: 'purtc-futuretech',
    organization: 'President University Robotics & Technology Club',
    role: 'Academic Team Member, FutureTech Workshop PURTC 2025',
    type: 'member',
    start: '2025-03',
    end: '2025-07',
    location: 'President University',
    description:
      'Supported the academic side of the FutureTech Workshop, helping shape session content on emerging technology for students.',
  },
  {
    id: 'puma-ba-charity',
    organization: 'PUMA BA',
    role: 'Person in Charge, Business Administration Charity 2025',
    type: 'leadership',
    start: '2025-02',
    end: '2025-03',
    location: 'President University',
    description:
      'Led the planning and delivery of the Business Administration charity programme, from donation drives to the day of the event.',
  },
  {
    id: 'pufa-business-cup',
    organization: 'PUFA Business',
    role: 'Person in Charge of Badminton Division, Business Cup 2025',
    type: 'leadership',
    start: '2025-01',
    end: '2025-04',
    location: 'President University',
    description:
      'Managed the badminton division of Business Cup 2025, covering match schedules, participants and on-site coordination.',
  },
  {
    id: 'pu-badminton-club',
    organization: 'President University Badminton Club',
    role: 'Member',
    type: 'member',
    start: '2024-09',
    end: null,
    location: 'President University',
    description:
      'Active member of the university badminton club, training regularly and joining internal competitions.',
  },
]

/** Sorted newest first, ongoing roles ahead of finished ones that started the same month. */
export const experiences = [...entries].sort((a, b) => {
  if (a.start !== b.start) return b.start.localeCompare(a.start)
  if (!a.end !== !b.end) return a.end ? 1 : -1
  return 0
})

export const organizations = [...new Set(experiences.map((item) => item.organization))]

/** Aggregates used by the Highlights section and hero cards. */
export const experienceSummary = {
  roles: experiences.length,
  organizations: organizations.length,
  leadRoles: experiences.filter((item) => ['leadership', 'facilitator'].includes(item.type)).length,
  ongoing: experiences.filter((item) => item.end === null).length,
}
