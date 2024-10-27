import express, { Application } from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import productRoutes from './routes/productRoutes';

dotenv.config();

// connectDB()

const app: Application = express();

app.use(express.json());

app.use('/api', productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});