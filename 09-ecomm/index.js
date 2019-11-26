const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(`
    <div>
      <form method="POST">
        <input placeholder="email" />
        <input placeholder="password" />
        <input placeholder="password confirmation" />
        <button>Sign Up</button>
      </form>
    </div>
  `);
});

app.post("/", (req, res) => {
  res.send("account created");
});

app.listen(3000, () => {
  console.log("listening");
});
