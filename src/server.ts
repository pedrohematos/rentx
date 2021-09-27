import express from "express";

import { categoriesRoutes } from "./routes/categories.routes";
import { specificationsRoutes } from "./routes/specifications.routes";

const app = express();
const port = process.env.PORT || 3000; // Port where the application will run.

app.use(express.json());

app.use("/categories", categoriesRoutes);
app.use("/specifications", specificationsRoutes);

app.get("/", (req, res) => {
  return res.json({ message: "rentalx app" });
});

app.listen(port, () => {
  console.log(`Server succesfully running at http://localhost:${port}`);
});
