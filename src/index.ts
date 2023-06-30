import { Request, Response } from "express";
import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

import { authorRouter } from "./author/author.router";
import { bookRouter } from "./book/book.router";

dotenv.config();

if (!process.env.PORT) {
  process.exit();
}

const PORT = parseInt(process.env.PORT as string, 10);
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/authors", authorRouter);
app.use("/api/books", bookRouter);

app.listen(PORT, () => {
  console.log(`running server at ${PORT}`);
});
