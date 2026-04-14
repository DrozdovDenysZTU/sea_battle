import PageLayout from '../components/layout/PageLayout'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import { useNavigate } from 'react-router-dom'
import { useGameStore } from '../store/gameStore'

/**
 * ResultsPage component that displays the results of the games played. It retrieves the results from the game store and renders them in a list. It also provides a button to navigate back to the start page.
 * @returns {any}
 */
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
            <li
              key={i}
              className={`flex justify-between text-sm items-center ${
                r.win ? 'text-green-700' : 'text-red-700'
              }`}
            >
              <span className="font-mono basis-1/3">
                {r.userName ? r.userName : r.userId.slice(0, 6)}
              </span>
              <span className="basis-1/3 flex justify-center">
                {r.moves} moves
              </span>
              <span className="ml-2 font-semibold basis-1/3 flex justify-end">
                {r.hits} hits
              </span>
            </li>
          ))}
        </ul>

        <Button onClick={() => navigate('/')}>Back to Start</Button>
      </Card>
    </PageLayout>
  )
}
