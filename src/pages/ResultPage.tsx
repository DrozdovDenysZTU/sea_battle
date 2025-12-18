import PageLayout from '../components/layout/PageLayout'
import Card from '../components/ui/Card'
import { useResults } from '../hooks/useResults'

export default function ResultsPage() {
  const { results } = useResults()

  return (
    <PageLayout>
      <Card>
        <h2 className="text-xl font-semibold mb-4 text-center">Results</h2>

        <ul className="space-y-2">
          {results.map((r, i) => (
            <li key={i} className="flex justify-between">
              <span>{r.name}</span>
              <span>{r.moves} moves</span>
            </li>
          ))}
        </ul>
      </Card>
    </PageLayout>
  )
}
