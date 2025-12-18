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
  const [settings] = useLocalStorage<GameSettings>('game-settings', DEFAULT)

  const game = useGame(settings)

  return (
    <PageLayout>
      <Card>
        <Board board={game.board} onFire={game.fire} />
        <p className="text-center mt-3">Moves: {game.moves}</p>

        {game.finished && (
          <GameOverModal
            moves={game.moves}
            onRestart={game.restart}
            onNext={game.restart}
          />
        )}
      </Card>
    </PageLayout>
  )
}
