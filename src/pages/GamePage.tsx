import { useParams, useNavigate } from 'react-router-dom'
import PageLayout from '../components/layout/PageLayout'
import Card from '../components/ui/Card'
import Board from '../components/game/Board'
import GameOverModal from '../components/game/GameOverModal'
import { useGame } from '../hooks/useGame'
import { useLocalStorage } from '../hooks/useLocalStorage'
import type { GameSettings } from '../types/settings'

const DEFAULT: GameSettings = {
  difficulty: 'easy',
  boardSize: 5,
  maxMoves: 8
}

export default function GamePage() {
  const { userId } = useParams<{ userId: string }>()
  const navigate = useNavigate()

  const [settings] = useLocalStorage<GameSettings>('game-settings', DEFAULT)

  const game = useGame(settings)

  return (
    <PageLayout>
      <Card>
        <h2 className="text-center font-semibold mb-2">
          Player ID: {userId?.slice(0, 6)}
        </h2>

        <Board board={game.board} onFire={game.fire} />

        <p className="text-center mt-3">Moves: {game.moves}</p>

        {game.finished && (
          <GameOverModal
            moves={game.moves}
            onRestart={game.restart}
            onNext={() => navigate('/results')}
          />
        )}
      </Card>
    </PageLayout>
  )
}
