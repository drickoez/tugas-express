import express from "express";

const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome to the homepage!");
});

app.get("/data", (req, res) => {
  const data = {
    name: "Dimas",
    age: 23,
    job: "Web Developer",
  };

  res.json(data);
});

app.get("/form", (req, res) => {
  res.send(`
      <form action="/submit" method="POST">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name"><br>
  
        <label for="email">Email:</label>
        <input type="email" id="email" name="email"><br>
  
        <input type="submit" value="Submit">
      </form>
    `);
});

app.post("/submit", (req, res) => {
  res.send(`Thank you for submitting the form, ${req.body.name}!`);
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
