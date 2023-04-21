import express from "express";
import { categoriesRoutes } from "./routes/cartegories.routes";

const app = express();

app.use(express.json())

app.use("/categories",categoriesRoutes);

app.listen(8000, () => console.log("Rodando"));