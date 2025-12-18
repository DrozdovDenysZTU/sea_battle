import type { CellState } from '../../hooks/useGame'

interface Props {
  board: CellState[]
  onFire: (index: number) => void
}

export default function Board({ board, onFire }: Props) {
  return (
    <div className="grid grid-cols-5 gap-1">
      {board.map((cell, i) => (
        <div
          key={i}
          onClick={() => onFire(i)}
          className={`w-10 h-10 cursor-pointer
            ${cell === 'empty' && 'bg-blue-300'}
            ${cell === 'hit' && 'bg-red-500'}
            ${cell === 'miss' && 'bg-gray-400'}
          `}
        />
      ))}
    </div>
  )
}
