import {
  FaBullhorn,
  FaChartLine,
  FaClock,
  FaComments,
  FaHandshake,
  FaLightbulb,
  FaMicrophone,
  FaTableTennis,
  FaTasks,
  FaUsers,
  FaCompass,
  FaCoins,
} from 'react-icons/fa'

export const coreSkills = [
  {
    name: 'Financial Accounting',
    icon: FaChartLine,
    accent: 'peach',
    description:
      'Reading financial statements, building budgets and tracking costs so every event decision is backed by numbers.',
    highlights: ['Budgeting', 'Financial statements', 'Cost tracking'],
  },
  {
    name: 'Marketing',
    icon: FaBullhorn,
    accent: 'pink',
    description:
      'Promoting programmes and partners on campus and in the field, from brand ambassador work to event campaigns.',
    highlights: ['Brand promotion', 'Campaign planning', 'Audience research'],
  },
  {
    name: 'Event & Project Management',
    icon: FaTasks,
    accent: 'lavender',
    description:
      'Owning timelines, sponsors and volunteers as Person in Charge for fundraising, charity and sports programmes.',
    highlights: ['Fundraising', 'Sponsorship', 'Team coordination'],
  },
]

export const softSkills = [
  { name: 'Leadership', icon: FaUsers },
  { name: 'Teamwork', icon: FaHandshake },
  { name: 'Problem Solving', icon: FaLightbulb },
  { name: 'Communication', icon: FaComments },
  { name: 'Public Speaking', icon: FaMicrophone },
  { name: 'Time Management', icon: FaClock },
]

export const interests = [
  { name: 'Badminton', icon: FaTableTennis },
  { name: 'Personal Finance', icon: FaCoins },
  { name: 'Exploring New Things', icon: FaCompass },
]
