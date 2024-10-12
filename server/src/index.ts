import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_URL as string, {
  dbName: "InnoStay",
});

const PORT = process.env.PORT || 8000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/api/test", async (req: Request, res: Response) => {
  res.json({ message: "Hey from test endpoint" }).status(200);
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
