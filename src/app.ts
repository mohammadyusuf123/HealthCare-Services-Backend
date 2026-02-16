import express, { Application, Request, Response } from "express";
import { prisma } from "./lib/prisma";
import router from "./modules/routes";

const app: Application = express();

// Enable URL-encoded form data parsing
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON bodies
app.use(express.json());


//API Routes
app.use('/api', router)

// Basic route
app.get('/',(req: Request, res: Response) => {
  res.send('Hello, TypeScript + Express!');
});


export default app