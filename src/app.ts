import express, { Application, Request, Response } from "express";
import { prisma } from "./lib/prisma";

const app: Application = express();
const port = 5000; // The port your express server will be running on.

// Enable URL-encoded form data parsing
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route
app.get('/', async(req: Request, res: Response) => {
     const user = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@prisma.io',
      posts: {
        create: {
          title: 'Hello World',
          content: 'This is my first post!',
          published: true,
        },
      },
    },
    include: {
      posts: true,
    },
  })
  console.log('Created user:', user)
  res.send('Hello, TypeScript + Express!');
});


export default app