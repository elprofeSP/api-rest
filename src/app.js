import express from "express";
import cors from "cors";
import "dotenv/config";
import { productsDB } from "./models/products.js";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/v1/products", (req, res) => {
  res.json(productsDB);
});

app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

const port = process.env.PORT ?? 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
