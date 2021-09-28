import { Router } from "express";

const baseRoutes = Router();

baseRoutes.get("/", (req, res) => {
  return res.json({ message: "rentalx app" });
});

export { baseRoutes };
