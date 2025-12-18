import { useState } from 'react'
import type { GameSettings } from '../types/settings'

export type CellState = 'empty' | 'hit' | 'miss'

export function useGame(settings: GameSettings) {
  const size = settings.boardSize

  const [board, setBoard] = useState<CellState[]>(
    Array(size * size).fill('empty')
  )
  const [moves, setMoves] = useState(0)
  const [finished, setFinished] = useState(false)

  function fire(index: number) {
    if (finished) return

    setBoard((prev) => {
      const copy = [...prev]
      copy[index] = Math.random() > 0.5 ? 'hit' : 'miss'
      return copy
    })

    setMoves((m) => {
      const next = m + 1
      if (next >= settings.maxMoves) {
        setFinished(true)
      }
      return next
    })
  }

  function restart() {
    setBoard(Array(size * size).fill('empty'))
    setMoves(0)
    setFinished(false)
  }

  return {
    board,
    moves,
    finished,
    fire,
    restart
  }
}
