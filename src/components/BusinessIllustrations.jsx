import { motion } from 'framer-motion'

// Chart/Graph Illustration
export const ChartIllustration = ({ className = '', size = 100 }) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    animate={{ y: [-3, 3, -3] }}
    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
  >
    {/* Background */}
    <rect x="10" y="10" width="80" height="80" rx="8" fill="#FDF2F8" stroke="#F9A8D4" strokeWidth="2" />
    {/* Bars */}
    <rect x="20" y="55" width="12" height="25" rx="2" fill="#F472B6" />
    <rect x="38" y="40" width="12" height="40" rx="2" fill="#A78BFA" />
    <rect x="56" y="30" width="12" height="50" rx="2" fill="#F9A8D4" />
    <rect x="74" y="20" width="12" height="60" rx="2" fill="#C4B5FD" />
    {/* Trend line */}
    <path d="M25 52 L43 38 L61 28 L80 18" stroke="#EC4899" strokeWidth="3" strokeLinecap="round" fill="none" />
    {/* Dots on trend line */}
    <circle cx="25" cy="52" r="4" fill="#EC4899" />
    <circle cx="43" cy="38" r="4" fill="#EC4899" />
    <circle cx="61" cy="28" r="4" fill="#EC4899" />
    <circle cx="80" cy="18" r="4" fill="#EC4899" />
  </motion.svg>
)

// Pie Chart Illustration
export const PieChartIllustration = ({ className = '', size = 80 }) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    animate={{ rotate: [0, 5, -5, 0] }}
    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
  >
    <circle cx="50" cy="50" r="40" fill="#FDF2F8" stroke="#F9A8D4" strokeWidth="2" />
    <path d="M50 50 L50 10 A40 40 0 0 1 85 65 Z" fill="#F472B6" />
    <path d="M50 50 L85 65 A40 40 0 0 1 35 85 Z" fill="#A78BFA" />
    <path d="M50 50 L35 85 A40 40 0 0 1 15 35 Z" fill="#FBBF24" />
    <path d="M50 50 L15 35 A40 40 0 0 1 50 10 Z" fill="#34D399" />
    <circle cx="50" cy="50" r="15" fill="white" />
  </motion.svg>
)

// Document/Report Illustration
export const DocumentIllustration = ({ className = '', size = 80 }) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    animate={{ y: [-2, 2, -2], rotate: [-2, 2, -2] }}
    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
  >
    {/* Paper shadow */}
    <rect x="25" y="15" width="55" height="75" rx="4" fill="#E9D5FF" />
    {/* Main paper */}
    <rect x="20" y="10" width="55" height="75" rx="4" fill="white" stroke="#F9A8D4" strokeWidth="2" />
    {/* Lines */}
    <rect x="28" y="22" width="35" height="4" rx="2" fill="#F9A8D4" />
    <rect x="28" y="32" width="40" height="3" rx="1.5" fill="#E5E7EB" />
    <rect x="28" y="40" width="38" height="3" rx="1.5" fill="#E5E7EB" />
    <rect x="28" y="48" width="30" height="3" rx="1.5" fill="#E5E7EB" />
    {/* Chart in document */}
    <rect x="28" y="58" width="12" height="18" rx="2" fill="#F472B6" />
    <rect x="43" y="65" width="12" height="11" rx="2" fill="#A78BFA" />
    <rect x="58" y="60" width="12" height="16" rx="2" fill="#FBBF24" />
    {/* Checkmark */}
    <circle cx="65" cy="20" r="10" fill="#34D399" />
    <path d="M60 20 L64 24 L72 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </motion.svg>
)

// Briefcase Illustration
export const BriefcaseIllustration = ({ className = '', size = 80 }) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    animate={{ scale: [1, 1.05, 1], rotate: [-3, 3, -3] }}
    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
  >
    {/* Handle */}
    <path d="M35 30 L35 22 Q35 15 42 15 L58 15 Q65 15 65 22 L65 30" stroke="#F472B6" strokeWidth="4" fill="none" strokeLinecap="round" />
    {/* Bag body */}
    <rect x="15" y="30" width="70" height="50" rx="8" fill="url(#briefcaseGradient)" />
    {/* Lock */}
    <rect x="43" y="48" width="14" height="14" rx="2" fill="white" />
    <circle cx="50" cy="55" r="3" fill="#F472B6" />
    <defs>
      <linearGradient id="briefcaseGradient" x1="15" y1="30" x2="85" y2="80" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F9A8D4" />
        <stop offset="1" stopColor="#F472B6" />
      </linearGradient>
    </defs>
  </motion.svg>
)

// Calculator Illustration
export const CalculatorIllustration = ({ className = '', size = 70 }) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    animate={{ y: [-4, 4, -4] }}
    transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
  >
    {/* Body */}
    <rect x="20" y="10" width="60" height="80" rx="8" fill="url(#calcGradient)" />
    {/* Screen */}
    <rect x="28" y="18" width="44" height="18" rx="4" fill="#1F2937" />
    <text x="65" y="32" fill="#34D399" fontSize="12" fontFamily="monospace" textAnchor="end">1,234</text>
    {/* Buttons */}
    <rect x="28" y="42" width="12" height="10" rx="2" fill="white" opacity="0.9" />
    <rect x="44" y="42" width="12" height="10" rx="2" fill="white" opacity="0.9" />
    <rect x="60" y="42" width="12" height="10" rx="2" fill="#FBBF24" />
    <rect x="28" y="56" width="12" height="10" rx="2" fill="white" opacity="0.9" />
    <rect x="44" y="56" width="12" height="10" rx="2" fill="white" opacity="0.9" />
    <rect x="60" y="56" width="12" height="10" rx="2" fill="#FBBF24" />
    <rect x="28" y="70" width="12" height="10" rx="2" fill="white" opacity="0.9" />
    <rect x="44" y="70" width="12" height="10" rx="2" fill="white" opacity="0.9" />
    <rect x="60" y="70" width="12" height="10" rx="2" fill="#34D399" />
    <defs>
      <linearGradient id="calcGradient" x1="20" y1="10" x2="80" y2="90" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A78BFA" />
        <stop offset="1" stopColor="#8B5CF6" />
      </linearGradient>
    </defs>
  </motion.svg>
)

// Target/Goal Illustration
export const TargetIllustration = ({ className = '', size = 80 }) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    animate={{ scale: [1, 1.08, 1] }}
    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
  >
    <circle cx="50" cy="50" r="40" fill="#FDF2F8" stroke="#F9A8D4" strokeWidth="3" />
    <circle cx="50" cy="50" r="30" fill="white" stroke="#F472B6" strokeWidth="3" />
    <circle cx="50" cy="50" r="20" fill="#FDF2F8" stroke="#F9A8D4" strokeWidth="3" />
    <circle cx="50" cy="50" r="10" fill="#F472B6" />
    {/* Arrow */}
    <path d="M80 20 L55 45" stroke="#EC4899" strokeWidth="4" strokeLinecap="round" />
    <polygon points="80,20 70,22 78,30" fill="#EC4899" />
  </motion.svg>
)

// Coins/Money Illustration
export const CoinsIllustration = ({ className = '', size = 70 }) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    animate={{ y: [-3, 3, -3], rotate: [-5, 5, -5] }}
    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
  >
    {/* Stack of coins */}
    <ellipse cx="40" cy="75" rx="25" ry="8" fill="#FBBF24" />
    <rect x="15" y="65" width="50" height="10" fill="#FBBF24" />
    <ellipse cx="40" cy="65" rx="25" ry="8" fill="#FCD34D" />
    
    <ellipse cx="40" cy="55" rx="25" ry="8" fill="#FBBF24" />
    <rect x="15" y="45" width="50" height="10" fill="#FBBF24" />
    <ellipse cx="40" cy="45" rx="25" ry="8" fill="#FCD34D" />
    
    {/* Top coin */}
    <ellipse cx="60" cy="35" rx="22" ry="7" fill="#F472B6" />
    <rect x="38" y="25" width="44" height="10" fill="#F472B6" />
    <ellipse cx="60" cy="25" rx="22" ry="7" fill="#F9A8D4" />
    <text x="60" y="29" fill="#BE185D" fontSize="10" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">$</text>
  </motion.svg>
)

// Lightbulb/Idea Illustration
export const IdeaIllustration = ({ className = '', size = 70 }) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
  >
    {/* Glow */}
    <circle cx="50" cy="40" r="35" fill="#FEF3C7" opacity="0.5" />
    {/* Bulb */}
    <path d="M50 10 C30 10 20 28 20 42 C20 55 30 60 35 70 L65 70 C70 60 80 55 80 42 C80 28 70 10 50 10Z" fill="url(#bulbGradient)" />
    {/* Base */}
    <rect x="35" y="70" width="30" height="8" fill="#9CA3AF" />
    <rect x="38" y="78" width="24" height="4" fill="#6B7280" />
    <rect x="40" y="82" width="20" height="4" fill="#4B5563" rx="2" />
    {/* Light lines */}
    <path d="M50 0 L50 5" stroke="#FBBF24" strokeWidth="3" strokeLinecap="round" />
    <path d="M75 15 L80 10" stroke="#FBBF24" strokeWidth="3" strokeLinecap="round" />
    <path d="M25 15 L20 10" stroke="#FBBF24" strokeWidth="3" strokeLinecap="round" />
    <path d="M90 40 L95 40" stroke="#FBBF24" strokeWidth="3" strokeLinecap="round" />
    <path d="M5 40 L10 40" stroke="#FBBF24" strokeWidth="3" strokeLinecap="round" />
    <defs>
      <linearGradient id="bulbGradient" x1="20" y1="10" x2="80" y2="70" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FEF3C7" />
        <stop offset="1" stopColor="#FBBF24" />
      </linearGradient>
    </defs>
  </motion.svg>
)

// Handshake/Partnership Illustration  
export const HandshakeIllustration = ({ className = '', size = 90 }) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    animate={{ x: [-2, 2, -2] }}
    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
  >
    {/* Background circle */}
    <circle cx="50" cy="50" r="45" fill="#FDF2F8" />
    {/* Left hand */}
    <path d="M15 50 Q15 40 25 40 L45 40 Q50 40 50 45 L50 55 Q50 60 45 60 L25 60 Q15 60 15 50Z" fill="#FECACA" stroke="#F472B6" strokeWidth="2" />
    {/* Right hand */}
    <path d="M85 50 Q85 40 75 40 L55 40 Q50 40 50 45 L50 55 Q50 60 55 60 L75 60 Q85 60 85 50Z" fill="#FECACA" stroke="#A78BFA" strokeWidth="2" />
    {/* Clasp */}
    <ellipse cx="50" cy="50" rx="8" ry="12" fill="#FDF2F8" stroke="#F9A8D4" strokeWidth="2" />
    {/* Sparkles */}
    <circle cx="30" cy="30" r="3" fill="#FBBF24" />
    <circle cx="70" cy="30" r="3" fill="#FBBF24" />
    <circle cx="50" cy="20" r="2" fill="#F472B6" />
  </motion.svg>
)

// Growth Arrow Illustration
export const GrowthIllustration = ({ className = '', size = 80 }) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    animate={{ y: [-5, 0, -5] }}
    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
  >
    {/* Plant pot */}
    <path d="M30 85 L40 60 L60 60 L70 85 Z" fill="#F472B6" />
    <ellipse cx="50" cy="60" rx="12" ry="4" fill="#F9A8D4" />
    {/* Stem */}
    <path d="M50 60 Q50 45 45 35 Q50 40 55 35 Q50 45 50 60" fill="#34D399" />
    {/* Leaves */}
    <ellipse cx="40" cy="40" rx="8" ry="12" fill="#34D399" transform="rotate(-30 40 40)" />
    <ellipse cx="60" cy="35" rx="8" ry="12" fill="#34D399" transform="rotate(30 60 35)" />
    {/* Coin flower */}
    <circle cx="50" cy="22" r="12" fill="#FBBF24" stroke="#F59E0B" strokeWidth="2" />
    <text x="50" y="27" fill="#92400E" fontSize="12" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">$</text>
    {/* Arrow up */}
    <path d="M75 45 L75 15 L65 25 M75 15 L85 25" stroke="#F472B6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </motion.svg>
)

// Analytics Dashboard Illustration
export const DashboardIllustration = ({ className = '', size = 100 }) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 120 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    animate={{ scale: [1, 1.02, 1] }}
    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
  >
    {/* Monitor */}
    <rect x="10" y="5" width="100" height="70" rx="6" fill="#1F2937" />
    <rect x="15" y="10" width="90" height="55" rx="3" fill="#111827" />
    {/* Stand */}
    <rect x="50" y="75" width="20" height="10" fill="#4B5563" />
    <rect x="40" y="85" width="40" height="5" rx="2" fill="#6B7280" />
    
    {/* Dashboard content */}
    {/* Line chart */}
    <rect x="20" y="15" width="40" height="25" rx="2" fill="#374151" />
    <path d="M25 35 L32 28 L38 32 L45 22 L55 25" stroke="#F472B6" strokeWidth="2" fill="none" strokeLinecap="round" />
    
    {/* Bar chart */}
    <rect x="65" y="15" width="35" height="25" rx="2" fill="#374151" />
    <rect x="70" y="30" width="6" height="8" fill="#A78BFA" />
    <rect x="78" y="25" width="6" height="13" fill="#F472B6" />
    <rect x="86" y="20" width="6" height="18" fill="#34D399" />
    
    {/* Metrics */}
    <rect x="20" y="45" width="25" height="15" rx="2" fill="#374151" />
    <text x="32" y="55" fill="#34D399" fontSize="8" fontFamily="sans-serif" textAnchor="middle">+24%</text>
    
    <rect x="50" y="45" width="25" height="15" rx="2" fill="#374151" />
    <text x="62" y="55" fill="#F472B6" fontSize="8" fontFamily="sans-serif" textAnchor="middle">1.2K</text>
    
    <rect x="80" y="45" width="20" height="15" rx="2" fill="#374151" />
    <circle cx="90" cy="52" r="5" fill="none" stroke="#FBBF24" strokeWidth="2" />
  </motion.svg>
)

export default {
  ChartIllustration,
  PieChartIllustration,
  DocumentIllustration,
  BriefcaseIllustration,
  CalculatorIllustration,
  TargetIllustration,
  CoinsIllustration,
  IdeaIllustration,
  HandshakeIllustration,
  GrowthIllustration,
  DashboardIllustration,
}
