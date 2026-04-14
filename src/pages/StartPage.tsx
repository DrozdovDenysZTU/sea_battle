import PageLayout from '../components/layout/PageLayout'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import { useNavigate } from 'react-router-dom'
import { useGameStore } from '../store/gameStore'

/**
 * StartPage component that serves as the landing page for the Sea Battle game. It allows the user to enter their name and navigate to the game, settings, or results pages. It uses the game store to manage the player's name and navigation state.
 * @returns {any}
 */
export default function StartPage() {
  const { playerName, setPlayerName } = useGameStore()
  const navigate = useNavigate()

  function handleStart() {
    const userId = crypto.randomUUID()
    navigate(`/game/${userId}`)
  }

  return (
    <PageLayout>
      <Card>
        <h1 className="text-2xl font-bold text-center mb-4">Sea Battle</h1>

        <input
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          placeholder="Your name"
          className="border p-2 w-full mb-4"
        />

        <div className="flex flex-col gap-3">
          <Button onClick={handleStart}>Start Game</Button>
          <Button variant="secondary" onClick={() => navigate('/settings')}>
            Settings
          </Button>
          <Button variant="secondary" onClick={() => navigate('/results')}>
            Results
          </Button>
        </div>
      </Card>
    </PageLayout>
  )
}
