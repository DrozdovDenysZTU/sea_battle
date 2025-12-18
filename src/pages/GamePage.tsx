import PageLayout from '../components/layout/PageLayout'
import Card from '../components/ui/Card'
import BoardPlaceholder from '../components/game/BoardPlaceholder'

export default function GamePage() {
  return (
    <PageLayout>
      <Card>
        <h2 className="text-xl font-semibold mb-4 text-center">Game Board</h2>

        <div className="flex justify-center">
          <BoardPlaceholder />
        </div>

        <p className="text-center text-gray-500 mt-4">
          Game logic will be here
        </p>
      </Card>
    </PageLayout>
  )
}
