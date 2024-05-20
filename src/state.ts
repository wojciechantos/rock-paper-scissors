import { AllowedMove, GameStateInterface, Score } from './types';

export class GameState implements GameStateInterface {
	playerScore: Score;
	computerScore: Score;
	playerMove: AllowedMove;
	computerMove: AllowedMove;

	constructor() {
		this.playerMove = undefined;
		this.computerMove = undefined;
		this.playerScore = 0 as Score;
		this.computerScore = 0 as Score;
	}

	playerPointUp(): string {
		this.playerScore += 1;
		return 'You';
	}

	computerPointUp(): string {
		this.computerScore += 1;
		return 'Computer';
	}

	determineWinner(): void {
		let roundWinner: string;

		if (this.playerMove === this.computerMove) {
			alert('This round is a draw!');
			return;
		}

		const setRoundWinner = (computerMove: AllowedMove): void => {
			roundWinner = this.computerMove === computerMove ? this.playerPointUp() : this.computerPointUp();
			alert(`${roundWinner} won this round!`);
		}

		switch (this.playerMove) {
			case 'rock':
				setRoundWinner('scissors');
				break;
			case 'paper':
				setRoundWinner('rock');
				break;
			case 'scissors':
				setRoundWinner('paper');
				break;
		}
	}
}
