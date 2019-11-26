const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
    <div>
      <form method="POST">
        <input placeholder="email" name="email" />
        <input placeholder="password" name="password" />
        <input placeholder="password confirmation" name="password confirmation" />
        <button>Sign Up</button>
      </form>
    </div>
  `);
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("account created");
});

app.listen(3000, () => {
  console.log("listening");
});
