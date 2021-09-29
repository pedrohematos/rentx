import express from "express";
import swaggerUi from "swagger-ui-express";

import { router } from "./routes";
import swaggerFile from "./swagger.json";

const app = express();
const port = process.env.PORT || 3000; // Port where the application will run.

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`🔥 Server succesfully running at http://localhost:${port}`);
});
