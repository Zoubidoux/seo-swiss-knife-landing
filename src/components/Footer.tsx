export function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6 bg-background">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <span
          className="font-semibold bg-clip-text text-transparent"
          style={{ backgroundImage: 'linear-gradient(90deg, #39d3ff, #a78bfa)' }}
        >
          SEO Swiss Knife
        </span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
          <a href="#" className="hover:text-foreground transition-colors">Chrome Store</a>
        </div>
        <span>© {new Date().getFullYear()} SEO Swiss Knife</span>
      </div>
    </footer>
  )
}
