import { create } from 'zustand'
import type { GameSettings } from '../types/settings'

export interface GameResult {
  userId: string
  moves: number
  date: string
}

interface GameStore {
  settings: GameSettings
  results: GameResult[]
  setSettings: (s: GameSettings) => void
  addResult: (r: GameResult) => void
}

const DEFAULT_SETTINGS: GameSettings = {
  difficulty: 'easy',
  boardSize: 5,
  maxMoves: 8
}

export const useGameStore = create<GameStore>((set) => ({
  settings: DEFAULT_SETTINGS,
  results: [],
  setSettings: (settings) => {
    localStorage.setItem('game-settings', JSON.stringify(settings))
    set({ settings })
  },
  addResult: (result) =>
    set((state) => ({ results: [...state.results, result] }))
}))
