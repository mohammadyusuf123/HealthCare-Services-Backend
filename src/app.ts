import express, { Application, Request, Response } from "express";
import { prisma } from "./lib/prisma";
import router from "./modules/routes";
import { globalErrorHandler } from "./middleware/globalErrorHandler";
import { notFound } from "./config/notFound";

const app: Application = express();

// Enable URL-encoded form data parsing
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON bodies
app.use(express.json());


//API Routes
app.use('/api', router)

// Global error handler
app.use(globalErrorHandler)
//not found
app.use(notFound)
// Basic route
app.get('/',(req: Request, res: Response) => {
  res.send('Hello, TypeScript + Express!');
});


export default app