import { GameState } from './state.ts';
import { type AllowedMove } from './types';

export class Game extends GameState{
	constructor() {
		super();
	}

	startGame(): void {
		while (this.playerScore <= 2 || this.computerScore <= 2) {
			if(this.playerScore === 3) {
				alert('Game over. You won! :)');
				console.log(`Player score: ${this.playerScore}\nComputer score: ${this.computerScore}`);
				break;
			}

			if(this.computerScore === 3) {
				alert('Game over. Sorry, you lost the game. :(');
				console.log(`Player score: ${this.playerScore}\nComputer score: ${this.computerScore}`);
				break;
			}

			this.playRound();
			console.log(`Player score: ${this.playerScore}\nComputer score: ${this.computerScore}`);
		}
	}

	playRound(): void {
		this.getPlayerMove();
		this.getComputerMove();
		this.determineWinner();
	}

	getPlayerMove(): void {
		const playerInput = prompt('Please enter your move: (rock, paper, scissors)') as AllowedMove;

		if (playerInput && ['rock', 'paper', 'scissors'].includes(playerInput.toLowerCase())) {
			this.playerMove = playerInput.toLowerCase() as AllowedMove;
		} else if (!playerInput) {
			this.playerMove = undefined;
			alert('Please enter rock, paper or scissors to play the game.');
		} else {
			this.playerMove = undefined;
			alert('Invalid move! Please enter rock, paper or scissors.');
		}
	}

	getComputerMove(): void {
		const choices: AllowedMove[] = ['rock', 'paper', 'scissors'];
		const randomIndex: number = Math.floor(Math.random() * choices.length);
		this.computerMove = choices[randomIndex];
	}
}
