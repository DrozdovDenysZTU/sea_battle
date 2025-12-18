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
  const [win, setWin] = useState(false)

  function fire(index: number) {
    if (finished) return

    const isHit = Math.random() > 0.5

    const newBoard = [...board]
    if (newBoard[index] === 'empty') {
      newBoard[index] = isHit ? 'hit' : 'miss'
    }

    const hits = newBoard.filter((cell) => cell === 'hit').length
    const nextMoves = moves + 1

    setBoard(newBoard)
    setMoves(nextMoves)

    if (hits >= settings.ships) {
      setWin(true)
      setFinished(true)
    } else if (nextMoves >= settings.maxMoves) {
      setWin(false)
      setFinished(true)
    }
  }

  function restart() {
    setBoard(Array(size * size).fill('empty'))
    setMoves(0)
    setFinished(false)
    setWin(false)
  }

  return {
    board,
    moves,
    finished,
    win,
    fire,
    restart,
    setFinished
  }
}
