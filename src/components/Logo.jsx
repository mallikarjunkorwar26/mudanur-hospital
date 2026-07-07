// Reusable wordmark logo.
// Uses the provided Mudanur Logo.png asset.
import MudanurLogo from '../images/Mudanur Logo.png'

export default function Logo({ tone = 'dark', compact = false }) {
  return (
    <a href="#home" className="flex items-center gap-3 group no-underline" aria-label="Mudanur Hospital — Home">
      <img
        src={MudanurLogo}
        alt="Mudanur Hospital logo"
        className="h-16 w-auto object-contain"
      />
    </a>
  )
}
