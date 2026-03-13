import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Replace with your logo: put logo.png in src/assets/ and import it here
// import logoUrl from '@/assets/logo.png'
const LOGO_URL: string | null = null

export function Navbar() {
  return (
    <div className="w-full">
      <nav className="flex items-center justify-between py-5 px-8">
        {/* Left — Logo */}
        <div className="flex items-center">
          {LOGO_URL ? (
            <img
              src={LOGO_URL}
              alt="SEO Swiss Knife"
              className="h-8 w-auto object-contain"
            />
          ) : (
            <span className="text-foreground font-semibold text-base tracking-tight">
              SEO Swiss Knife
            </span>
          )}
        </div>

        {/* Center — Nav items */}
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-1 text-foreground/90 text-base bg-transparent border-none cursor-pointer hover:text-foreground transition-colors">
            Features <ChevronDown className="w-4 h-4 opacity-60" />
          </button>
          <button className="text-foreground/90 text-base bg-transparent border-none cursor-pointer hover:text-foreground transition-colors">
            Solutions
          </button>
          <button className="text-foreground/90 text-base bg-transparent border-none cursor-pointer hover:text-foreground transition-colors">
            Plans
          </button>
          <button className="flex items-center gap-1 text-foreground/90 text-base bg-transparent border-none cursor-pointer hover:text-foreground transition-colors">
            Learning <ChevronDown className="w-4 h-4 opacity-60" />
          </button>
        </div>

        {/* Right — Sign Up */}
        <Button variant="heroSecondary" size="sm" className="rounded-full px-4 py-2">
          Sign Up
        </Button>
      </nav>

      {/* Full-width gradient divider */}
      <div className="mt-[3px] w-full h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
    </div>
  )
}
