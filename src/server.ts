import express from "express";

const app = express();
const port = process.env.PORT || 3000; // Port where the application will run.

app.get("/", (req, res) => {
  return res.json({ message: "rentalx app" });
});

app.listen(port, () => {
  console.log(`Server succesfully running at http://localhost:${port}`);
});
