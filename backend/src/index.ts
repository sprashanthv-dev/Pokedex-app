import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Welcome to Pokedex backend server :)" });
});

app.listen(PORT, () => {
  console.log(`Spreading Poke knowledge since 2024 at port: ${PORT}`);
});
