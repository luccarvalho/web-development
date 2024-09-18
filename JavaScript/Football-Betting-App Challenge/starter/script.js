'use strict';

// Challenge #1

/*
We're building a football betting app!

Suppose we get data from a web service about a certain game. In this challenge we're gonna work with that data.
Your tasks:

1. Create one player array for each team (variables 'players1' and
'players2')

2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players

3. Create an array 'allPlayers' containing all players of both teams (22
players)

4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'

5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')

6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)

7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.

Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Challenge #2

/*
Let's continue with our football betting app! Keep using the 'game' variable from
before.

Your tasks:

1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")

2. Use a loop to calculate the average odd and log it to the console.

3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names 😉

4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
 {
   Gnarby: 1,
   Hummels: 1,
   Lewandowski: 2
 }
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Code Challenge #1

// 1. Desestruturando o array original e divindo os valores nas variáveis players1 e players2
const [players1, players2] = game.players;

// 2. Desestruturando o array players1 e colocando o primeiro valor na variável gk
// 2.1. Colocando o restante dos valores na variável fieldPlayers, usando a sintaxe Rest
const [gk, ...fieldPlayers] = players1;

// 3. Criando um array com todos os jogadores de ambas as equipes, utilizando Spread Operator
const allPlayers = [...players1, ...players2];

// 4. Criando um novo array com todos os jogadores do players1 e adicionando mais 3 jogadores
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

// 5. Criando 3 variáveis com base no objeto odds dentro do objeto game
// 5.1. Usando Destructuring Objects e trocando o nome da varável x por draw
const {
  odds: { team1, x: draw, team2 },
} = game;

// 6. Criando uma função que recebe como parâmetro um valor arbitrário, usando Rest Parameters
// 6.1. Rest Parameters basicamente agrega todos os argumentos recebidos em um array
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored.`);
};

// 6.2. Usando Spread Operator como argumento da chamada da função
printGoals(...game.scored);

// 7. Mostrando a equipe com a cotação mais baixa e com maior probabilidade de vencer
// 7.1. Fazendo isso sem utilizar instrução 'if' ou operador ternário (utilizando um operador lógico)
team1 < team2 && console.log('Team 1 is more likely to win.');
team1 > team2 && console.log('Team 2 is more likely to win.');

// Code Challenge #2

// 8. Fazendo um loop no array game.scored, imprimindo no console o nome de cada um dos jogadores junto com o n° do gol
// 8.1. Utilizando .entries() para acessar os índices do array
for (const [i, el] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${el}`);

// 9. Calculando a média de game.odds, pegando somente os valores com Object.values() que gera um array
let average = 0;
const odds = Object.values(game.odds);

for (const odd of odds) average += odd;

average /= odds.length;

console.log(average);
