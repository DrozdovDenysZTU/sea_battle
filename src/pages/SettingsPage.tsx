import PageLayout from '../components/layout/PageLayout'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import { useSettings } from '../hooks/useSettings'

export default function SettingsPage() {
  const { form, onSubmit } = useSettings()
  const { register, handleSubmit } = form

  return (
    <PageLayout>
      <Card>
        <h2 className="text-xl font-semibold mb-4 text-center">
          Game Settings
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <label className="block font-medium">Difficulty</label>
          <select {...register('difficulty')} className="border p-2 w-full">
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>

          <label className="block font-medium">Board Size</label>
          <input
            type="number"
            {...register('boardSize', { min: 3, max: 8 })}
            placeholder="Board size"
            className="border p-2 w-full"
          />

          <label className="block font-medium">Max Moves</label>
          <input
            type="number"
            {...register('maxMoves')}
            placeholder="Max moves"
            className="border p-2 w-full"
          />

          <Button type="submit">Save Settings</Button>
        </form>
      </Card>
    </PageLayout>
  )
}
