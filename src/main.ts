import './style.css'
import { Game } from './game';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    Rock Paper Scissors game by Wojciech Antos
  </div>
`

const game = new Game();
game.startGame();
