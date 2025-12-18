import PageLayout from '../components/layout/PageLayout'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'

export default function StartPage() {
  return (
    <PageLayout>
      <Card>
        <h1 className="text-2xl font-bold mb-4 text-center">Sea Battle</h1>

        <div className="flex flex-col gap-3">
          <Button>Start Game</Button>
          <Button variant="secondary">Results</Button>
        </div>
      </Card>
    </PageLayout>
  )
}
