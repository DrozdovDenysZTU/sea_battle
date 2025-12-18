import type { PropsWithChildren } from 'react'

export default function Card({ children }: PropsWithChildren) {
  return (
    <div className="bg-white rounded shadow p-6 w-full max-w-md">
      {children}
    </div>
  )
}
