function rollTheDice() {
  let images = [
    "./img/dice1.png",
    "./img/dice2.png",
    "./img/dice3.png",
    "./img/dice4.png",
    "./img/dice5.png",
    "./img/dice6.png",
  ];

  let player1 = Math.floor(Math.random() * images.length);
  let player2 = Math.floor(Math.random() * images.length);

  if (player1 > player2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
  } else if (player1 < player2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }

  document.querySelectorAll(
    "#img_player"
  )[0].innerHTML = `<img src=${images[player1]}>`;
  document.querySelectorAll(
    "#img_player"
  )[1].innerHTML = `<img src=${images[player2]}>`;
}

rollTheDice();
