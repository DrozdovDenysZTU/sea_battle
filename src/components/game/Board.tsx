import type { CellState } from '../../hooks/useGame'

interface Props {
  board: CellState[]
  onFire: (index: number) => void
  size?: number
}

export default function Board({ board, onFire, size = 5 }: Props) {
  return (
    <div
      className="grid gap-1 justify-center"
      style={{ gridTemplateColumns: `repeat(${size}, 2.5rem)` }}
    >
      {board.map((cell, i) => (
        <div
          key={i}
          onClick={() => onFire(i)}
          className={`w-10 h-10 cursor-pointer flex items-center justify-center
            ${cell === 'empty' && 'bg-blue-300'}
            ${cell === 'hit' && 'bg-red-500'}
            ${cell === 'miss' && 'bg-gray-400'}
          `}
        />
      ))}
    </div>
  )
}
