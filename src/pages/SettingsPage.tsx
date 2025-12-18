import PageLayout from '../components/layout/PageLayout'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import { useForm } from 'react-hook-form'
import { useGameStore } from '../store/gameStore'
import type { GameSettings } from '../types/settings'

export default function SettingsPage() {
  const { settings, setSettings } = useGameStore()

  const { register, handleSubmit } = useForm<GameSettings>({
    defaultValues: settings
  })

  return (
    <PageLayout>
      <Card>
        <h2 className="text-xl font-semibold text-center mb-4">
          Game Settings
        </h2>

        <form onSubmit={handleSubmit(setSettings)} className="space-y-4">
          <select {...register('difficulty')} className="border p-2 w-full">
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>

          <input
            type="number"
            {...register('boardSize')}
            className="border p-2 w-full"
          />

          <input
            type="number"
            {...register('maxMoves')}
            className="border p-2 w-full"
          />

          <Button type="submit">Save</Button>
        </form>
      </Card>
    </PageLayout>
  )
}
