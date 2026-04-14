import type { CellState } from '../../hooks/useGame'

interface Props {
  board: CellState[]
  onFire: (index: number) => void
  size?: number
}

/**
 * Board component that renders the game board based on the provided board state and size. It displays each cell as a clickable div that triggers the onFire function when clicked, allowing the player to make a move. The component uses Tailwind CSS classes for styling and visually distinguishes between empty, hit, and miss cells.
 * @param {Props} props
 * @returns {any}
 */
export default function Board({ board, onFire, size = 5 }: Props) {
  return (
    <div
      className="grid gap-1 justify-center"
      style={{ gridTemplateColumns: `repeat(${size}, 2.5rem)` }}
    >
      {board.map((cell, i) => (
        <div
          key={i}
          onClick={() => cell === 'empty' && onFire(i)}
          className={`w-10 h-10 cursor-pointer flex items-center justify-center
            ${cell === 'empty' && 'bg-blue-300'}
            ${cell === 'hit' && 'bg-red-500'}
            ${cell === 'miss' && 'bg-gray-400'}
            ${cell !== 'empty' && 'pointer-events-none opacity-60'}
          `}
        />
      ))}
    </div>
  )
}
