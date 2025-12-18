import { create } from 'zustand'
import type { GameSettings } from '../types/settings'

export interface GameResult {
  userId: string
  moves: number
  date: string
  hits?: number
}

interface GameStore {
  settings: GameSettings
  results: GameResult[]
  playerName: string
  setSettings: (s: GameSettings) => void
  addResult: (r: GameResult) => void
  setPlayerName: (name: string) => void
}

const DEFAULT_SETTINGS: GameSettings = {
  difficulty: 'easy',
  boardSize: 5,
  maxMoves: 8,
  ships: 3
}

export const useGameStore = create<GameStore>((set) => ({
  settings: localStorage.getItem('game-settings')
    ? JSON.parse(localStorage.getItem('game-settings')!)
    : DEFAULT_SETTINGS,
  results: [],
  playerName: localStorage.getItem('playerName') || '',
  setSettings: (settings) => {
    localStorage.setItem('game-settings', JSON.stringify(settings))
    set({ settings })
  },
  addResult: (result) =>
    set((state) => ({ results: [...state.results, result] })),
  setPlayerName: (name) => {
    localStorage.setItem('playerName', name)
    set({ playerName: name })
  }
}))
