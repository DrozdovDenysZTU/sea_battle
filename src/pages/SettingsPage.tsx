import PageLayout from '../components/layout/PageLayout'
import Card from '../components/ui/Card'
import { useGameStore } from '../store/gameStore'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const DIFFICULTY_PRESETS: Record<
  'easy' | 'medium' | 'hard',
  { boardSize: number; ships: number; maxMoves: number }
> = {
  easy: { boardSize: 5, ships: 3, maxMoves: 10 },
  medium: { boardSize: 7, ships: 5, maxMoves: 15 },
  hard: { boardSize: 10, ships: 8, maxMoves: 20 }
}

export default function SettingsPage() {
  const { settings, setSettings } = useGameStore()
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>(
    settings.difficulty
  )
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDifficulty(e.target.value as 'easy' | 'medium' | 'hard')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSettings({
      difficulty,
      ...DIFFICULTY_PRESETS[difficulty]
    })
    navigate('/')
  }

  const preset = DIFFICULTY_PRESETS[difficulty]

  return (
    <PageLayout>
      <Card>
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-700 drop-shadow">
          Game Settings
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Difficulty
            </label>
            <select
              value={difficulty}
              onChange={handleChange}
              className="border-2 border-blue-300 rounded-lg p-2 w-full focus-ring-2 focus-ring-blue-400 focus-outline-none transition"
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm-grid-cols-3 gap-4 text-center bg-blue-50 rounded-lg p-4 shadow-inner">
            <div>
              <span className="block text-sm text-gray-500">Board Size</span>
              <span className="text-lg font-bold text-blue-800">
                {preset.boardSize} x {preset.boardSize}
              </span>
            </div>
            <div>
              <span className="block text-sm text-gray-500">Ships</span>
              <span className="text-lg font-bold text-blue-800">
                {preset.ships}
              </span>
            </div>
            <div>
              <span className="block text-sm text-gray-500">Max Moves</span>
              <span className="text-lg font-bold text-blue-800">
                {preset.maxMoves}
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 text-lg rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
          >
            Save
          </button>
        </form>
      </Card>
    </PageLayout>
  )
}
