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

  const { playerName, settings, addResult } = useGameStore()
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
        <h2 className="text-center mb-2">
          Player: {playerName ? playerName : userId?.slice(0, 6)}
        </h2>

        <Board
          board={game.board}
          onFire={game.fire}
          size={settings.boardSize}
        />

        <p className="text-center mt-3">Moves: {game.moves}</p>

        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <button
            type="button"
            className="w-full py-2 text-base rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-800 shadow"
            onClick={() => navigate('/')}
          >
            Back to Start Page
          </button>
          <button
            type="button"
            className="w-full py-2 text-base rounded-lg bg-blue-200 hover:bg-blue-300 text-blue-800 shadow"
            onClick={game.restart}
          >
            Restart
          </button>
        </div>

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
