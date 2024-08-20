'use strict';

// Selecionando elementos
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Condições iniciais
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

// Função para alternar entre os jogadores
const switchPlayer = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Função para rolar os dados
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1° Gerando um número aleatório entre 1 e 6
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    // 2° Mostrando o número do dado
    diceEl.classList.remove('hidden');
    diceEl.src = `img/dice-${dice}.png`;

    // 3° Conferindo se o número gerado é igual a 1
    if (dice !== 1) {
      // Soma esse número a pontuação atual
      currentScore += dice;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Alterna entre o primeiro e segundo jogador
      switchPlayer();
    }
  }
});
