import { useState } from 'react'

export type CellState = 'empty' | 'hit' | 'miss'

export function useGame(boardSize = 5) {
  const [board, setBoard] = useState<CellState[]>(
    Array(boardSize * boardSize).fill('empty')
  )
  const [moves, setMoves] = useState(0)
  const [isFinished, setIsFinished] = useState(false)

  function fire(index: number) {
    if (isFinished) return

    setBoard((prev) => {
      const copy = [...prev]
      copy[index] = Math.random() > 0.5 ? 'hit' : 'miss'
      return copy
    })

    setMoves((m) => m + 1)

    if (moves >= boardSize) {
      setIsFinished(true)
    }
  }

  function restart() {
    setBoard(Array(boardSize * boardSize).fill('empty'))
    setMoves(0)
    setIsFinished(false)
  }

  return {
    board,
    moves,
    isFinished,
    fire,
    restart
  }
}
