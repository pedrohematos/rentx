import { Router } from "express";

import { createSpecifcationController } from "../modules/cars/useCases/createSpecification";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (req, res) => {
  return createSpecifcationController.handle(req, res);
});

export { specificationsRoutes };
