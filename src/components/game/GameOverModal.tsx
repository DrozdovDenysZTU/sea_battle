import { createPortal } from 'react-dom'
import Button from '../ui/Button'

interface Props {
  moves: number
  onRestart: () => void
  onNext: () => void
  win: boolean
}
/**
 * GameOverModal component that displays a modal when the game is over, showing the number of moves taken and providing options to restart the game or see the results. It uses createPortal to render the modal outside of the normal component hierarchy, allowing it to overlay the entire screen.
 * @param {Props} props
 * @returns {any}
 */
export default function GameOverModal({
  moves,
  onRestart,
  onNext,
  win
}: Props) {
  return createPortal(
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded space-y-4 w-64">
        {win ? (
          <h3 className="text-lg font-semibold text-center">You Win!</h3>
        ) : (
          <h3 className="text-lg font-semibold text-center">Game Over</h3>
        )}

        <p className="text-center">Moves: {moves}</p>

        <div className="flex gap-2 justify-center">
          <Button onClick={onRestart} variant="secondary">
            Restart
          </Button>
          <Button onClick={onNext} className="text-nowrap">
            See Results
          </Button>
        </div>
      </div>
    </div>,
    document.body
  )
}
