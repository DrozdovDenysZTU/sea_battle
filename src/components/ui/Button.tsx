import type { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary'
}

/**
 * Button component that renders a styled button based on the provided variant and className. It uses Tailwind CSS classes for styling and supports primary and secondary variants. The component also accepts all standard button attributes through the ButtonHTMLAttributes type.
 * @param {any} variant
 * @param {any} className
 * @param {Props} props
 * @returns {any}
 */
export default function Button({
  variant = 'primary',
  className,
  ...props
}: Props) {
  return (
    <button
      className={clsx(
        'px-4 py-2 rounded font-medium transition',
        variant === 'primary' && 'bg-blue-600 text-white hover:bg-blue-700',
        variant === 'secondary' &&
          'bg-gray-200 text-gray-800 hover:bg-gray-300',
        className
      )}
      {...props}
    />
  )
}
