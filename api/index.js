import express from "express";
import CalcRoutes from "./routes/calcRoutes.js";

const app = express();

const calcRoutes = new CalcRoutes();
calcRoutes.callRoutes(app);

export default app;