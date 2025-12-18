import { createBrowserRouter } from 'react-router-dom'
import StartPage from './pages/StartPage'
import GamePage from './pages/GamePage'
import ResultsPage from './pages/ResultsPage'
import SettingsPage from './pages/SettingsPage'

export const router = createBrowserRouter([
  { path: '/', element: <StartPage /> },
  { path: '/settings', element: <SettingsPage /> },
  { path: '/game/:userId', element: <GamePage /> },
  { path: '/results', element: <ResultsPage /> }
])
