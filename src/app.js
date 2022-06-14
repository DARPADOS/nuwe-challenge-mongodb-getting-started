import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import userRouter from './routers/userRouter.js';
import { errorHandler } from './middleware/errorHandlers.js';

// config
if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

mongoose.connect(process.env.MONGODB_URL);
const port = process.env.PORT || 3000;
const app = express();

// Middlewares
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method + req.url);
  next();
});

// Routers
app.use('/users', userRouter);

// Middlewares Error Handlers
app.use(errorHandler);

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
