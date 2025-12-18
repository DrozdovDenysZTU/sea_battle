import PageLayout from '../components/layout/PageLayout'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import { useNavigate } from 'react-router-dom'
import { useGameStore } from '../store/gameStore'

export default function ResultsPage() {
  const navigate = useNavigate()
  const results = useGameStore((s) => s.results)

  return (
    <PageLayout>
      <Card>
        <h2 className="text-xl font-semibold text-center mb-4">
          Results Table
        </h2>

        {results.length === 0 && (
          <p className="text-center text-gray-500">No games played yet</p>
        )}

        <ul className="space-y-2 mb-4">
          {results.map((r, i) => (
            <li key={i} className="flex justify-between text-sm items-center">
              <span className="font-mono">{r.userId.slice(0, 6)}</span>
              <span>{r.moves} moves</span>
              {typeof r.hits === 'number' && (
                <span className="ml-2 text-green-700 font-semibold">
                  {r.hits} hits
                </span>
              )}
            </li>
          ))}
        </ul>

        <Button onClick={() => navigate('/')}>Back to Start</Button>
      </Card>
    </PageLayout>
  )
}
