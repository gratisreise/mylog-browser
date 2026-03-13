import React from "react"
import { cn } from "../../lib/utils"

export interface AuthLayoutProps {
  children: React.ReactNode
  title: string
  subtitle?: string
  className?: string
}

export function AuthLayout({
  children,
  title,
  subtitle,
  className,
}: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40 p-4">
      <div
        className={cn(
          "w-full max-w-md space-y-6 rounded-2xl border bg-background p-8 shadow-lg",
          className
        )}
      >
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
          {subtitle && (
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          )}
        </div>
        {children}
      </div>
    </div>
  )
}
