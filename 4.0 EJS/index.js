import express from "express";
const app = express();
const port = 3000;

// Utilizando uma função JavaScript e sem usar EJS:

// app.get("/", (req, res) => {
//   const now = new Date();
//   const day = now.getDay();

//   let weekday = "";

//   function nowDate() {
//     if (day === 6 || day === 0) {
//       weekday = "Hey, it's the weekend, it's time to have fun!";
//     } else {
//       weekday = "Hey, it's a weekday, it's time to work hard!";
//     }
//     return weekday;
//   }

//   res.send(`<h1>${nowDate()}</h1>`);
// });

// Utilizando só um if e passando os dados para o arquivo EJS:
app.get("/", (req, res) => {
  const now = new Date();
  const day = now.getDay();

  let type = "a weekday";
  let adv = "it's time to work hard!";

  if (day === 6 || day === 0) {
    type = "the weekend";
    adv = "it's time to have fun!";
  }

  res.render("index.ejs", {
    dayType: type,
    advice: adv,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
