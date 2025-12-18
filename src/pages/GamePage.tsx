import { useParams, useNavigate } from 'react-router-dom'
import PageLayout from '../components/layout/PageLayout'
import Card from '../components/ui/Card'
import Board from '../components/game/Board'
import GameOverModal from '../components/game/GameOverModal'
import { useGame } from '../hooks/useGame'
import { useGameStore } from '../store/gameStore'

export default function GamePage() {
  const { userId } = useParams<{ userId: string }>()
  const navigate = useNavigate()

  const { settings, addResult } = useGameStore()
  const game = useGame(settings)

  function handleFinish() {
    addResult({
      userId: userId!,
      moves: game.moves,
      date: new Date().toISOString()
    })
    navigate('/results')
  }

  return (
    <PageLayout>
      <Card>
        <h2 className="text-center mb-2">Player: {userId?.slice(0, 6)}</h2>

        <Board board={game.board} onFire={game.fire} />

        <p className="text-center mt-3">Moves: {game.moves}</p>

        {game.finished && (
          <GameOverModal
            moves={game.moves}
            onRestart={game.restart}
            onNext={handleFinish}
          />
        )}
      </Card>
    </PageLayout>
  )
}
