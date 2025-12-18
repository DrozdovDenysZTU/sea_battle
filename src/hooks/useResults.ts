import { useState } from 'react'

interface Result {
  name: string
  moves: number
}

export function useResults() {
  const [results] = useState<Result[]>([
    { name: 'Player 1', moves: 5 },
    { name: 'Player 2', moves: 7 }
  ])

  return { results }
}
