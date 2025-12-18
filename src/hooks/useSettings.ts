import { useForm } from 'react-hook-form'
import type { GameSettings } from '../types/settings'
import { useLocalStorage } from './useLocalStorage'

const DEFAULT_SETTINGS: GameSettings = {
  difficulty: 'easy',
  boardSize: 5,
  maxMoves: 8
}

export function useSettings() {
  const [savedSettings, saveSettings] = useLocalStorage<GameSettings>(
    'game-settings',
    DEFAULT_SETTINGS
  )

  const form = useForm<GameSettings>({
    defaultValues: savedSettings
  })

  const onSubmit = (data: GameSettings) => {
    saveSettings(data)
  }

  return {
    form,
    onSubmit
  }
}
