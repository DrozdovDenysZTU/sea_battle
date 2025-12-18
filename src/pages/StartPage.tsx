import PageLayout from '../components/layout/PageLayout'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import { useStartPage } from '../hooks/useStartPage'

export default function StartPage() {
  const { playerName, setPlayerName, startGame } = useStartPage()

  return (
    <PageLayout>
      <Card>
        <h1 className="text-2xl font-bold mb-4 text-center">Sea Battle</h1>

        <input
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          placeholder="Your name"
          className="border p-2 w-full mb-4"
        />

        <Button onClick={startGame}>Start Game</Button>
      </Card>
    </PageLayout>
  )
}
