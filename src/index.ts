import express, { Express, Request, Response } from "express";
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => res.send("Hello Typescript!"));

app.listen(port, () =>
  console.log(`Typescript app listening on port ${port}!`)
);
