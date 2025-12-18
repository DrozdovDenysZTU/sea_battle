import type { PropsWithChildren } from 'react'

export default function PageLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">
      {children}
    </div>
  )
}
