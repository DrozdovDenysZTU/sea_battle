import type { PropsWithChildren } from 'react'

/**
 * Card component that serves as a styled container for content. It uses Tailwind CSS classes to provide a white background, rounded corners, shadow, and padding. The component accepts children as props and renders them inside the card.
 * @param {PropsWithChildren} children
 * @returns {any}
 */
export default function Card({ children }: PropsWithChildren) {
  return (
    <div className="bg-white rounded shadow p-6 w-full max-w-md">
      {children}
    </div>
  )
}
