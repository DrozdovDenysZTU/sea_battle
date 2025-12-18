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

  const hits = game.board.filter((cell) => cell === 'hit').length
  const totalHits = settings.ships

  function handleFinish() {
    addResult({
      userId: userId!,
      moves: game.moves,
      date: new Date().toISOString(),
      hits,
      win: game.win,
      userName: playerName
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

        <div className="flex justify-center gap-6 my-2">
          <span className="text-gray-700 font-semibold">
            Hits: {hits}/{totalHits}
          </span>
          <span className="text-gray-700 font-semibold">
            Moves: {game.moves}/{settings.maxMoves}
          </span>
        </div>

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
            win={game.win}
            moves={game.moves}
            onRestart={game.restart}
            onNext={handleFinish}
          />
        )}
      </Card>
    </PageLayout>
  )
}
