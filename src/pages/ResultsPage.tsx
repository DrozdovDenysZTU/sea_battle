import PageLayout from '../components/layout/PageLayout'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import { useNavigate } from 'react-router-dom'
import { useResults } from '../hooks/useResults'

export default function ResultsPage() {
  const { results } = useResults()
  const navigate = useNavigate()

  return (
    <PageLayout>
      <Card>
        <h2 className="text-xl font-semibold text-center mb-4">Results</h2>

        <ul className="space-y-2 mb-4">
          {results.map((r, i) => (
            <li key={i} className="flex justify-between">
              <span>{r.name}</span>
              <span>{r.moves}</span>
            </li>
          ))}
        </ul>

        <Button onClick={() => navigate('/')}>Back to Start</Button>
      </Card>
    </PageLayout>
  )
}
