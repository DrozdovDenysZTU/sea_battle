export type Difficulty = 'easy' | 'medium' | 'hard'

export interface GameSettings {
  difficulty: Difficulty
  boardSize: number
  maxMoves: number
  ships: number
}
