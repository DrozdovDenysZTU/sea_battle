import { useState } from 'react'

export function useStartPage() {
  const [playerName, setPlayerName] = useState('')

  function startGame() {
    console.log('Start game for:', playerName || 'Guest')
  }

  return {
    playerName,
    setPlayerName,
    startGame
  }
}
