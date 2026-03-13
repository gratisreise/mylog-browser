import React from "react"
import { cn } from "../../lib/utils"

export interface AppLayoutProps {
  children: React.ReactNode
  className?: string
  title?: string
  headerContent?: React.ReactNode
  fullWidth?: boolean
}

export function AppLayout({
  children,
  className,
  title,
  headerContent,
  fullWidth = false,
}: AppLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--bg-level-0)] text-[var(--text-primary)]">
      <header className="sticky top-0 z-50 w-full border-b border-[var(--border-default)] bg-[var(--bg-level-0)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--bg-level-0)]/60">
        <div className={cn("mx-auto flex h-14 items-center px-4", !fullWidth && "max-w-3xl")}>
          <div className="flex flex-1 items-center justify-between">
            {title ? (
              <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
            ) : (
              <div className="font-bold text-[var(--primary)] text-xl">MyLog</div>
            )}
            {headerContent && <div>{headerContent}</div>}
          </div>
        </div>
      </header>

      <main
        className={cn("mx-auto w-full flex-1", fullWidth ? "" : "max-w-3xl px-4 py-6", className)}
      >
        {children}
      </main>

      {/* Simple bottom navigation placeholder for mobile-first journaling apps */}
      <footer className="border-t border-[var(--border-default)] bg-[var(--bg-level-0)] px-4 py-3 sm:hidden mt-auto">
        <nav className="flex justify-around text-[var(--text-secondary)]">
          <a href="/" className="text-sm font-medium hover:text-[var(--primary)] transition-colors">Home</a>
          <a href="/write" className="text-sm font-medium hover:text-[var(--primary)] transition-colors">Write</a>
          <a href="/profile" className="text-sm font-medium hover:text-[var(--primary)] transition-colors">Profile</a>
        </nav>
      </footer>
    </div>
  )
}
