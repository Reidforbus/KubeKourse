import express, {type Express, type Request, type Response } from "express";

const port = process.env.PORT ? process.env.PORT : 3001;
const app: Express = express();

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello from TODO app");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
