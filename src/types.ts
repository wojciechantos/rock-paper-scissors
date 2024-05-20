export type Score = 0 | 1 | 2 | 3;
export type AllowedMove = 'rock' | 'paper' | 'scissors' | undefined;

export interface GameStateInterface {
	playerScore: Score;
	computerScore: Score;
	playerMove: AllowedMove;
	computerMove: AllowedMove;
}
