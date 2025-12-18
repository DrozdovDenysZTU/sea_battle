import PageLayout from '../components/layout/PageLayout'
import Card from '../components/ui/Card'
import Board from '../components/game/Board'
import Button from '../components/ui/Button'
import { useGame } from '../hooks/useGame'

export default function GamePage() {
  const { board, moves, isFinished, fire, restart } = useGame()

  return (
    <PageLayout>
      <Card>
        <h2 className="text-xl font-semibold text-center mb-4">Game</h2>

        <div className="flex justify-center mb-4">
          <Board board={board} onFire={fire} />
        </div>

        <p className="text-center mb-4">Moves: {moves}</p>

        {isFinished && (
          <Button variant="secondary" onClick={restart}>
            Restart
          </Button>
        )}
      </Card>
    </PageLayout>
  )
}
