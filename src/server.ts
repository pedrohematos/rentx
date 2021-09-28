import express from "express";

import { router } from "./routes";

const app = express();
const port = process.env.PORT || 3000; // Port where the application will run.

app.use(express.json());

app.use(router);

app.listen(port, () => {
  console.log(`Server succesfully running at http://localhost:${port}`);
});
