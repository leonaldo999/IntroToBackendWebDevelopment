import express from "express";

const app = express(); // crea una app express

app.use(express.json());

// Importación de rutas
import userRouter from './routes/user.route.js';
// import postRouter from './routes/post.route.js';

// Declaración de rutas
app.use("/api/v1/users", userRouter);
// app.use("/api/v1/posts", postRouter);

// Ruta de ejemplo: http://localhost:4000/api/v1/users/register

export default app;